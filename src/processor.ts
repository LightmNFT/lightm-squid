import { Store, TypeormDatabase } from "@subsquid/typeorm-store";
import {
  BatchHandlerContext,
  BatchProcessorItem,
  EvmBatchProcessor,
  EvmBlock,
  LogItem,
} from "@subsquid/evm-processor";
import { lookupArchive } from "@subsquid/archive-registry";

import * as lightmUniversalFactory from "./abi/LightmUniversalFactory";
import * as lightmCollection from "./abi/LightmCollection";
import * as lightmCatalogImplementer from "./abi/LightmCatalogImplementer";
import {
  Catalog,
  Collection,
  NestTransfer,
  Owner,
  Part,
  Token,
  Transfer,
} from "./model";
import { constants } from "ethers";
import { getAddress } from "ethers/lib/utils";

const isDev = process.env.NODE_ENV === "development";

const FACTORY_ADDRESS = "0x1A2E0E5db589f44bDA45a7E8e38054a65b0eb946";
const FACTORY_ADDRESS_LOCAL = "0x314be53209C813CAFC066EF4d9a5CE6fec5Bd7b4";

const START_BLOCK = 3_650_000;
const START_BLOCK_LOCAL = 0;

const factoryContractAddress = (
  !isDev ? FACTORY_ADDRESS : FACTORY_ADDRESS_LOCAL
).toLowerCase();

const { LightmCollectionCreated, LightmCatalogDeployed } =
  lightmUniversalFactory.events;
const { Transfer: TokenTransfer, NestTransfer: TokenNestTransfer } =
  lightmCollection.events;
const catalogEvents = Object.values(lightmCatalogImplementer.events).map(
  (event) => event.topic
);

type Item = BatchProcessorItem<typeof processor>;
type Ctx = BatchHandlerContext<Store, Item>;

const processor = new EvmBatchProcessor()
  .setDataSource({
    // uncomment and set RPC_ENDPOONT to enable contract state queries.
    // Both https and wss endpoints are supported.
    chain: !isDev
      ? process.env.RPC_ENDPOINT
      : process.env.RPC_ENDPOINT_LOCAL,

    // Change the Archive endpoints for run the squid
    // against the other EVM networks
    // For a full list of supported networks and config options
    // see https://docs.subsquid.io/develop-a-squid/evm-processor/configuration/

    archive: !isDev ? lookupArchive("moonbase") : "http://localhost:8080",
  })
  .setBlockRange({ from: !isDev ? START_BLOCK : START_BLOCK_LOCAL })
  .addLog(factoryContractAddress, {
    filter: [[LightmCollectionCreated.topic, LightmCatalogDeployed.topic]],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
      transaction: {
        hash: true,
      },
    },
  })
  .addLog("*", {
    filter: [
      [
        TokenTransfer.topic,
        TokenNestTransfer.topic,
        ...Object.values(lightmCatalogImplementer.events).map(
          (event) => event.topic
        ),
      ],
    ],
    data: {
      evmLog: {
        topics: true,
        data: true,
      },
    },
  });

processor.run(new TypeormDatabase(), async (ctx) => {
  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.kind === "evmLog") {
        const eventTopic = item.evmLog.topics[0];

        if (item.address === factoryContractAddress) {
          if (eventTopic === LightmCollectionCreated.topic) {
            await handleCollectionCreated(ctx, block.header, item);
          } else if (eventTopic === LightmCatalogDeployed.topic) {
            await handleCatalogDeployed(ctx, block.header, item);
          }
        } else {
          if (eventTopic === TokenTransfer.topic) {
            const targetCollection = await ctx.store.get(
              Collection,
              getAddress(item.address)
            );

            if (targetCollection) {
              await handleTransfer(ctx, block.header, item, targetCollection);
            }
          } else if (eventTopic === TokenNestTransfer.topic) {
            const targetCollection = await ctx.store.get(
              Collection,
              getAddress(item.address)
            );

            if (targetCollection) {
              await handleNestTransfer(
                ctx,
                block.header,
                item,
                targetCollection
              );
            }
          } else if (catalogEvents.includes(eventTopic)) {
            switch (eventTopic) {
              case lightmCatalogImplementer.events.AddedEquippables.topic: {
                await handleAddedEquippables(ctx, item);
                break;
              }
              case lightmCatalogImplementer.events.AddedPart.topic: {
                await handleAddedPart(ctx, block.header, item);
                break;
              }
              case lightmCatalogImplementer.events.LightmCatalogMetadataURISet
                .topic: {
                await handleCatalogMetadataURISet(ctx, item);
                break;
              }
              case lightmCatalogImplementer.events.LightmCatalogTypeSet.topic: {
                await handleCatalogTypeSet(ctx, item);
                break;
              }
              case lightmCatalogImplementer.events.OwnershipTransferred.topic: {
                await handleOwnershipTransferred(ctx, item);
                break;
              }
              case lightmCatalogImplementer.events.SetEquippableToAll.topic: {
                await handleSetEquippableToAll(ctx, item);
                break;
              }
              case lightmCatalogImplementer.events.SetEquippables.topic: {
                await handleSetEquippables(ctx, item);
                break;
              }
              default:
            }
          }
        }
      }
    }
  }
});

// Collection creation
async function handleCollectionCreated(
  ctx: Ctx,
  header: EvmBlock,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = LightmCollectionCreated.decode(item.evmLog);

  const owner =
    (await ctx.store.get(Owner, data.owner)) ||
    new Owner({
      id: data.owner,
      collectionBalance: 0n,
      catalogBalance: 0n,
      balance: 0n,
    });

  owner.collectionBalance += 1n;

  const collectionContract = new lightmCollection.Contract(
    ctx,
    header,
    data.collectionAddress
  );

  const name = await collectionContract.name();
  const symbol = await collectionContract.symbol();

  const collection = new Collection({
    id: data.collectionAddress,
    name,
    symbol,
    owner,
    metadataURI: "",
    totalSupply: 0n,
    createAtBlock: BigInt(header.height),
    transactionHash: item.transaction.hash,
  });

  await ctx.store.save(owner);
  await ctx.store.save(collection);
}

// Catalog creation
async function handleCatalogDeployed(
  ctx: Ctx,
  header: EvmBlock,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = LightmCatalogDeployed.decode(item.evmLog);

  const catalog = (await ctx.store.get(Catalog, data.catalogAddress))!;

  catalog.createAtBlock = BigInt(header.height);
  catalog.transactionHash = item.transaction.hash;

  await ctx.store.save(catalog);
}

// Token creation and update
async function handleTransfer(
  ctx: Ctx,
  header: EvmBlock,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>,
  collection: Collection
) {
  const data = TokenTransfer.decode(item.evmLog);
  const collectionAddress = getAddress(item.address);

  const tokenId = `${collectionAddress}:${data.tokenId}`;
  const transferId = `${item.transaction.hash}:${item.evmLog.transactionIndex}`;

  const token =
    (await ctx.store.get(Token, tokenId)) ||
    new Token({
      id: tokenId,
      tokenId: data.tokenId.toBigInt(),
      collection,
      createAtBlock: BigInt(header.height),
      transactionHash: item.transaction.hash,
    });

  // previous owner must exist except token is mint from Zero address
  const previousOwner =
    data.to !== constants.AddressZero
      ? await ctx.store.get(Owner, data.from)
      : undefined;

  if (previousOwner) {
    previousOwner.balance -= 1n;

    await ctx.store.save(previousOwner);
  }

  // maybe new owner never exist before, so we should create owner if it didn't exist
  const newOwner =
    data.to !== constants.AddressZero
      ? (await ctx.store.get(Owner, data.to)) ||
        new Owner({
          id: data.to,
          collectionBalance: 0n,
          catalogBalance: 0n,
          balance: 0n,
        })
      : undefined;

  if (newOwner) {
    newOwner.balance += 1n;

    await ctx.store.save(newOwner);
  }

  token.owner = newOwner;

  await ctx.store.save(token);

  const transfer = new Transfer({
    id: transferId,
    token,
    from: previousOwner,
    to: newOwner,
    block: BigInt(header.height),
    timestamp: BigInt(header.timestamp),
    transactionHash: item.transaction.hash,
  });

  await ctx.store.save(transfer);
}

async function handleNestTransfer(
  ctx: Ctx,
  header: EvmBlock,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>,
  collection: Collection
) {
  const data = TokenNestTransfer.decode(item.evmLog);
  const collectionAddress = getAddress(item.address);

  const tokenId = `${collectionAddress}:${data.tokenId}`;
  const transferId = `${item.transaction.hash}:${item.evmLog.transactionIndex}`;

  const token =
    (await ctx.store.get(Token, tokenId)) ||
    new Token({
      id: tokenId,
      tokenId: data.tokenId.toBigInt(),
      collection,
      createAtBlock: BigInt(header.height),
      transactionHash: item.transaction.hash,
    });

  // previous owner must exist except token is mint from Zero address
  const previousOwner =
    data.to !== constants.AddressZero
      ? await ctx.store.get(Owner, data.from)
      : undefined;

  // maybe new owner never exist before, so we should create owner if it didn't exist
  const newOwner =
    data.to !== constants.AddressZero
      ? (await ctx.store.get(Owner, data.to)) ||
        new Owner({
          id: data.to,
          collectionBalance: 0n,
          catalogBalance: 0n,
          balance: 0n,
        })
      : undefined;

  if (newOwner) {
    await ctx.store.save(newOwner);
  }

  const fromToken =
    !data.fromTokenId.eq(0) && previousOwner
      ? await ctx.store.get(Token, `${data.from}:${data.fromTokenId}`)
      : undefined;

  const toToken =
    !data.toTokenId.eq(0) && newOwner
      ? await ctx.store.get(Token, `${data.to}:${data.toTokenId}`)
      : undefined;

  await ctx.store.save(token);

  const nestTransfer = new NestTransfer({
    id: transferId,
    token,
    from: previousOwner,
    to: newOwner,
    fromToken,
    toToken,
    block: BigInt(header.height),
    timestamp: BigInt(header.timestamp),
    transactionHash: item.transaction.hash,
  });

  await ctx.store.save(nestTransfer);
}

// Part creation and Catalog update
async function handleOwnershipTransferred(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.OwnershipTransferred.decode(
    item.evmLog
  );
  const catalogAddress = getAddress(item.address);
  const catalog = await ctx.store.get(Catalog, catalogAddress);

  // There're same event signature between Catalog and Diamond,
  // so we should judge if emitter address is a Catalog address,
  // the catalog MUST exist, because it will be record when `LightmCatalogDeployed` event emitted
  if (catalog) {
    let previousOwner = await ctx.store.get(Owner, data.previousOwner);
    let newOwner = await ctx.store.get(Owner, data.newOwner);

    if (!previousOwner) {
      previousOwner = new Owner({
        id: data.previousOwner,
        collectionBalance: 0n,
        catalogBalance: 0n,
        balance: 0n,
      });
    }

    if (previousOwner.catalogBalance > 0n) {
      previousOwner.catalogBalance -= 1n;
    }

    if (!newOwner) {
      newOwner = new Owner({
        id: data.newOwner,
        collectionBalance: 0n,
        catalogBalance: 0n,
        balance: 0n,
      });
    }

    newOwner.catalogBalance += 1n;

    catalog.owner = newOwner;

    await ctx.store.save([previousOwner, newOwner]);
    await ctx.store.save(catalog);
  }
}

async function handleCatalogMetadataURISet(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data =
    lightmCatalogImplementer.events.LightmCatalogMetadataURISet.decode(
      item.evmLog
    );
  const zeroOwner =
    (await ctx.store.get(Owner, constants.AddressZero)) ||
    new Owner({
      id: constants.AddressZero,
      collectionBalance: 0n,
      catalogBalance: 0n,
      balance: 0n,
    });
  const catalogAddress = getAddress(item.address);
  const catalog =
    (await ctx.store.get(Catalog, catalogAddress)) ||
    new Catalog({
      id: catalogAddress,
      owner: zeroOwner,
      metadataURI: "",
      type: "",
      createAtBlock: 0n,
      transactionHash: "",
    });

  catalog.metadataURI = data.metadataURI;

  await ctx.store.save(zeroOwner);
  await ctx.store.save(catalog);
}

async function handleCatalogTypeSet(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.LightmCatalogTypeSet.decode(
    item.evmLog
  );
  const zeroOwner =
    (await ctx.store.get(Owner, constants.AddressZero)) ||
    new Owner({
      id: constants.AddressZero,
      collectionBalance: 0n,
      catalogBalance: 0n,
      balance: 0n,
    });
  const catalogAddress = getAddress(item.address);
  const catalog =
    (await ctx.store.get(Catalog, catalogAddress)) ||
    new Catalog({
      id: catalogAddress,
      owner: zeroOwner,
      metadataURI: "",
      type: "",
      createAtBlock: 0n,
      transactionHash: "",
    });

  catalog.type = data.type_;

  await ctx.store.save(zeroOwner);
  await ctx.store.save(catalog);
}

async function handleAddedPart(
  ctx: Ctx,
  header: EvmBlock,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.AddedPart.decode(item.evmLog);
  const catalogAddress = getAddress(item.address);
  const catalog = await ctx.store.get(Catalog, catalogAddress);

  const partGlobalId = `${catalogAddress}:${data.partId}`;

  const part = new Part({
    id: partGlobalId,
    catalog,
    partId: data.partId.toBigInt(),
    itemType: data.itemType,
    zIndex: data.zIndex,
    metadataURI: data.metadataURI,
    equippableAddresses: data.equippableAddresses,
    equippableToAll: false,
    createAtBlock: BigInt(header.height),
    transactionHash: item.transaction.hash,
  });

  await ctx.store.save(part);
}

async function handleAddedEquippables(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.AddedEquippables.decode(
    item.evmLog
  );
  const catalogAddress = getAddress(item.address);
  const partGlobalId = `${catalogAddress}:${data.partId}`;
  const part = (await ctx.store.get(Part, partGlobalId))!;

  part.equippableAddresses = part.equippableAddresses.concat(
    data.equippableAddresses
  );
  part.equippableToAll = false;

  await ctx.store.save(part);
}

async function handleSetEquippables(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.SetEquippables.decode(
    item.evmLog
  );
  const catalogAddress = getAddress(item.address);
  const partGlobalId = `${catalogAddress}:${data.partId}`;
  const part = (await ctx.store.get(Part, partGlobalId))!;

  part.equippableAddresses = data.equippableAddresses;
  part.equippableToAll = false;

  await ctx.store.save(part);
}

async function handleSetEquippableToAll(
  ctx: Ctx,
  item: LogItem<{
    evmLog: { topics: true; data: true };
    transaction: { hash: true };
  }>
) {
  const data = lightmCatalogImplementer.events.SetEquippableToAll.decode(
    item.evmLog
  );
  const catalogAddress = getAddress(item.address);
  const partGlobalId = `${catalogAddress}:${data.partId}`;
  const part = (await ctx.store.get(Part, partGlobalId))!;

  part.equippableToAll = true;

  await ctx.store.save(part);
}
