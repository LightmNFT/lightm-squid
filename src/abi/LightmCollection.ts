import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LightmCollection.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    DiamondCut: new LogEvent<([_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string] & {_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string})>(
        abi, '0x8faa70878671ccd212d20771b795c50af8fd3ff6cf27f4bde57e5d4de0aeb673'
    ),
    RMRKCollectionMetdataSet: new LogEvent<([metadataURI: string] & {metadataURI: string})>(
        abi, '0xe24e0da67950a0fc5259943c772616d26c33dcfc2fbbf029a88eaa1f6dcb2943'
    ),
    AllChildrenRejected: new LogEvent<([tokenId: ethers.BigNumber] & {tokenId: ethers.BigNumber})>(
        abi, '0x8ac4a0d65950c3e40448afb2260e2e0ec36ea15644d9b39e37e85472e5f94451'
    ),
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    ApprovalForAllForAssets: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x0cff4fcf777050010027190b8061fd8bfd1de16d81b1f94e9752df1427a26235'
    ),
    ApprovalForAssets: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0xb90cc0d925ac3511ab6af2d7ca73ffcf7ec4bd871fff36b958ecf440079c463e'
    ),
    AssetAccepted: new LogEvent<([tokenId: ethers.BigNumber, assetId: ethers.BigNumber, replacedId: ethers.BigNumber] & {tokenId: ethers.BigNumber, assetId: ethers.BigNumber, replacedId: ethers.BigNumber})>(
        abi, '0x3f2709a99f6c06b4e57bbb38eb0134332f96f51a3da314f41a515adbb28b17cc'
    ),
    AssetAddedToToken: new LogEvent<([tokenId: ethers.BigNumber, assetId: ethers.BigNumber, replacedId: ethers.BigNumber] & {tokenId: ethers.BigNumber, assetId: ethers.BigNumber, replacedId: ethers.BigNumber})>(
        abi, '0xdd2a8327ccddc29216d9020f54bd7319cd5aec5d9cc4c1cb183695ef004e52e2'
    ),
    AssetPrioritySet: new LogEvent<([tokenId: ethers.BigNumber] & {tokenId: ethers.BigNumber})>(
        abi, '0xf0bfd70b0068f973d58178846ca67112671ec45e060838f7de5662036bcf8017'
    ),
    AssetRejected: new LogEvent<([tokenId: ethers.BigNumber, assetId: ethers.BigNumber] & {tokenId: ethers.BigNumber, assetId: ethers.BigNumber})>(
        abi, '0x1010837a46db9510cad56c9b63e97183557a136e9d4ddbec309ce52c99afb124'
    ),
    AssetSet: new LogEvent<([assetId: ethers.BigNumber] & {assetId: ethers.BigNumber})>(
        abi, '0x3cd061096eaf881067d936308fbd8b81d060c45ab2ec910c02b953162befc109'
    ),
    CatalogRelatedAssetAdd: new LogEvent<([id: ethers.BigNumber] & {id: ethers.BigNumber})>(
        abi, '0x53881d43cd4c436bcf17515997ec22b20101ee3f7ed955640f96e9c397a45283'
    ),
    ChildAccepted: new LogEvent<([tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber] & {tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber})>(
        abi, '0x29486b9e2ae569b440933a9b1b421467306fa21f3dcad439c262910a634963a9'
    ),
    ChildProposed: new LogEvent<([tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber] & {tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber})>(
        abi, '0xe65085e689b77b126ba0bac3b079aa8288f19f4d5445af11c76003f8ab3075dd'
    ),
    ChildTransferred: new LogEvent<([tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber, fromPending: boolean] & {tokenId: ethers.BigNumber, childIndex: ethers.BigNumber, childAddress: string, childId: ethers.BigNumber, fromPending: boolean})>(
        abi, '0x2bedee38cdb22411c14554191243c0e117c0088ddae3459876acd46a0fd53815'
    ),
    LightmMultiAssetFallbackURISet: new LogEvent<([fallbackURI: string] & {fallbackURI: string})>(
        abi, '0x0e901add6f84572cb7fb5b3eed06b93d96e096d1aaadb2f8a4707a039f8533f6'
    ),
    NestTransfer: new LogEvent<([from: string, to: string, fromTokenId: ethers.BigNumber, toTokenId: ethers.BigNumber, tokenId: ethers.BigNumber] & {from: string, to: string, fromTokenId: ethers.BigNumber, toTokenId: ethers.BigNumber, tokenId: ethers.BigNumber})>(
        abi, '0x04444026cefd1b05506559cab59d1b865ae3ba4ed2fe5c894f04e522776c552d'
    ),
    RoleAdminChanged: new LogEvent<([role: string, previousAdminRole: string, newAdminRole: string] & {role: string, previousAdminRole: string, newAdminRole: string})>(
        abi, '0xbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff'
    ),
    RoleGranted: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0x2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d'
    ),
    RoleRevoked: new LogEvent<([role: string, account: string, sender: string] & {role: string, account: string, sender: string})>(
        abi, '0xf6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b'
    ),
    SlotEquipmentsAdd: new LogEvent<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotEquipments: Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotEquipments: Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>})>(
        abi, '0x15eb22d54c9b4f471d2c739ce37782190882506081ac19202d87c2f00321bcce'
    ),
    SlotEquipmentsRemove: new LogEvent<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, indexes: Array<ethers.BigNumber>] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, indexes: Array<ethers.BigNumber>})>(
        abi, '0x78f52ca5624897f60435bdd5163f0528e58bed72902fd88366f2fdde68c5b801'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    diamondCut: new Func<[_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string], {_diamondCut: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, _init: string, _calldata: string}, []>(
        abi, '0x1f931c1c'
    ),
    facetAddress: new Func<[_functionSelector: string], {_functionSelector: string}, string>(
        abi, '0xcdffacc6'
    ),
    facetAddresses: new Func<[], {}, Array<string>>(
        abi, '0x52ef6b2c'
    ),
    facetFunctionSelectors: new Func<[_facet: string], {_facet: string}, Array<string>>(
        abi, '0xadfca15e'
    ),
    facets: new Func<[], {}, Array<([facetAddress: string, functionSelectors: Array<string>] & {facetAddress: string, functionSelectors: Array<string>})>>(
        abi, '0x7a0ed627'
    ),
    supportsInterface: new Func<[_interfaceId: string], {_interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    'acceptChild(uint256,address,uint256)': new Func<[tokenId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber], {tokenId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber}, []>(
        abi, '0x030bc660'
    ),
    'acceptChild(uint256,uint256,address,uint256)': new Func<[tokenId: ethers.BigNumber, _: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber], {tokenId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber}, []>(
        abi, '0xe97ceaa8'
    ),
    addChild: new Func<[parentTokenId: ethers.BigNumber, childTokenId: ethers.BigNumber, data: string], {parentTokenId: ethers.BigNumber, childTokenId: ethers.BigNumber, data: string}, []>(
        abi, '0x635490cc'
    ),
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    'burn(uint256)': new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x42966c68'
    ),
    'burn(uint256,uint256)': new Func<[tokenId: ethers.BigNumber, maxRecursiveBurns: ethers.BigNumber], {tokenId: ethers.BigNumber, maxRecursiveBurns: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xb390c0ab'
    ),
    childOf: new Func<[parentTokenId: ethers.BigNumber, index: ethers.BigNumber], {parentTokenId: ethers.BigNumber, index: ethers.BigNumber}, ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>(
        abi, '0x2f32f937'
    ),
    childrenOf: new Func<[parentTokenId: ethers.BigNumber], {parentTokenId: ethers.BigNumber}, Array<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>>(
        abi, '0x6f19951c'
    ),
    directOwnerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, [_: string, _: ethers.BigNumber, _: boolean]>(
        abi, '0xfb25fb7a'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    hasChild: new Func<[tokenId: ethers.BigNumber, childContract: string, childTokenId: ethers.BigNumber], {tokenId: ethers.BigNumber, childContract: string, childTokenId: ethers.BigNumber}, ([found: boolean, isPending: boolean, index: ethers.BigNumber] & {found: boolean, isPending: boolean, index: ethers.BigNumber})>(
        abi, '0x4d167174'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    nestTransfer: new Func<[to: string, tokenId: ethers.BigNumber, destinationId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber, destinationId: ethers.BigNumber}, []>(
        abi, '0x1becc6e3'
    ),
    nestTransferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber, destinationId: ethers.BigNumber, data: string], {from: string, to: string, tokenId: ethers.BigNumber, destinationId: ethers.BigNumber, data: string}, []>(
        abi, '0x064c0a3a'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    pendingChildOf: new Func<[parentTokenId: ethers.BigNumber, index: ethers.BigNumber], {parentTokenId: ethers.BigNumber, index: ethers.BigNumber}, ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>(
        abi, '0xa898e364'
    ),
    pendingChildrenOf: new Func<[parentTokenId: ethers.BigNumber], {parentTokenId: ethers.BigNumber}, Array<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>>(
        abi, '0x44ec9344'
    ),
    reclaimChild: new Func<[tokenId: ethers.BigNumber, childAddress: string, childTokenId: ethers.BigNumber], {tokenId: ethers.BigNumber, childAddress: string, childTokenId: ethers.BigNumber}, []>(
        abi, '0x2fb59acf'
    ),
    rejectAllChildren: new Func<[tokenId: ethers.BigNumber, maxRejections: ethers.BigNumber], {tokenId: ethers.BigNumber, maxRejections: ethers.BigNumber}, []>(
        abi, '0x97961336'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, data: string], {from: string, to: string, tokenId: ethers.BigNumber, data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    transfer: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0xa9059cbb'
    ),
    'transferChild(uint256,address,uint256,address,uint256,bool,bytes)': new Func<[tokenId: ethers.BigNumber, to: string, destinationId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber, isPending: boolean, data: string], {tokenId: ethers.BigNumber, to: string, destinationId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber, isPending: boolean, data: string}, []>(
        abi, '0x1b8f134d'
    ),
    'transferChild(uint256,address,uint256,uint256,address,uint256,bool,bytes)': new Func<[tokenId: ethers.BigNumber, to: string, destinationId: ethers.BigNumber, _: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber, isPending: boolean, data: string], {tokenId: ethers.BigNumber, to: string, destinationId: ethers.BigNumber, childContractAddress: string, childTokenId: ethers.BigNumber, isPending: boolean, data: string}, []>(
        abi, '0xdefa80c3'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    'acceptAsset(uint256,uint64)': new Func<[tokenId: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, []>(
        abi, '0x3c609191'
    ),
    'acceptAsset(uint256,uint256,uint64)': new Func<[tokenId: ethers.BigNumber, _: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, []>(
        abi, '0xfc3517c8'
    ),
    approveForAssets: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x5ea72f36'
    ),
    getActiveAssetPriorities: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<number>>(
        abi, '0x5e94354a'
    ),
    getActiveAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0x7280281e'
    ),
    getApprovedForAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xe467a48f'
    ),
    'getAssetMetadata(uint256,uint64)': new Func<[tokenId: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, string>(
        abi, '0x5e2e3292'
    ),
    'getAssetMetadata(uint64)': new Func<[assetId: ethers.BigNumber], {assetId: ethers.BigNumber}, string>(
        abi, '0xcb511c30'
    ),
    getAssetReplacements: new Func<[tokenId: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0xdf6f556b'
    ),
    getFullAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<([id: ethers.BigNumber, metadataURI: string] & {id: ethers.BigNumber, metadataURI: string})>>(
        abi, '0x88f9bfe9'
    ),
    getFullPendingAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<([id: ethers.BigNumber, metadataURI: string] & {id: ethers.BigNumber, metadataURI: string})>>(
        abi, '0x6ab8e9fa'
    ),
    getPendingAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0x51532e5a'
    ),
    isApprovedForAllForAssets: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0x22e6d160'
    ),
    rejectAllAssets: new Func<[tokenId: ethers.BigNumber, maxRejections: ethers.BigNumber], {tokenId: ethers.BigNumber, maxRejections: ethers.BigNumber}, []>(
        abi, '0xe7de4de4'
    ),
    'rejectAsset(uint256,uint64)': new Func<[tokenId: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, []>(
        abi, '0x2091a36f'
    ),
    'rejectAsset(uint256,uint256,uint64)': new Func<[tokenId: ethers.BigNumber, _: ethers.BigNumber, assetId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber}, []>(
        abi, '0x22f6da9c'
    ),
    setApprovalForAllForAssets: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0x8507dc28'
    ),
    setPriority: new Func<[tokenId: ethers.BigNumber, priorities: Array<number>], {tokenId: ethers.BigNumber, priorities: Array<number>}, []>(
        abi, '0x096835be'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    addSlotEquipments: new Func<[tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotEquipments: Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>, doMoreCheck: boolean], {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotEquipments: Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>, doMoreCheck: boolean}, []>(
        abi, '0x0e69294f'
    ),
    getActiveCatalogRelatedAssets: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, Array<ethers.BigNumber>>(
        abi, '0xd309f476'
    ),
    getAllCatalogRelatedAssetIds: new Func<[], {}, Array<ethers.BigNumber>>(
        abi, '0x1d3faf70'
    ),
    getAllSlotEquipments: new Func<[], {}, Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>>(
        abi, '0x4f70805b'
    ),
    getCatalogRelatedAsset: new Func<[catalogRelatedAssetId: ethers.BigNumber], {catalogRelatedAssetId: ethers.BigNumber}, ([id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string] & {id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string})>(
        abi, '0x64de89b9'
    ),
    getCatalogRelatedAssets: new Func<[catalogRelatedAssetIds: Array<ethers.BigNumber>], {catalogRelatedAssetIds: Array<ethers.BigNumber>}, Array<([id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string] & {id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string})>>(
        abi, '0xb435ed6c'
    ),
    'getSlotEquipment(address,uint256,uint64)': new Func<[childContract: string, childTokenId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber], {childContract: string, childTokenId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber}, ([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>(
        abi, '0x7c54c2bd'
    ),
    'getSlotEquipment(uint256,uint64,uint64)': new Func<[tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber], {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber}, ([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>(
        abi, '0xade4f879'
    ),
    getSlotEquipmentByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>(
        abi, '0xc75eadbb'
    ),
    'getSlotEquipments(uint256,uint64)': new Func<[tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber], {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber}, Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>>(
        abi, '0xbcdd9c15'
    ),
    'getSlotEquipments(address,uint256)': new Func<[childContract: string, childTokenId: ethers.BigNumber], {childContract: string, childTokenId: ethers.BigNumber}, Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>>(
        abi, '0xced5b8a7'
    ),
    'removeSlotEquipments(address,uint256,uint64[])': new Func<[childContract: string, childTokenId: ethers.BigNumber, childCatalogRelatedAssetIds: Array<ethers.BigNumber>], {childContract: string, childTokenId: ethers.BigNumber, childCatalogRelatedAssetIds: Array<ethers.BigNumber>}, []>(
        abi, '0xbdf1d856'
    ),
    'removeSlotEquipments(uint256,uint64,uint64[])': new Func<[tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotIds: Array<ethers.BigNumber>], {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotIds: Array<ethers.BigNumber>}, []>(
        abi, '0xc7926e95'
    ),
    collectionMetadata: new Func<[], {}, string>(
        abi, '0x89ed2edf'
    ),
    ASSET_CONTRIBUTOR_ROLE: new Func<[], {}, string>(
        abi, '0x16995cfd'
    ),
    addAssetEntry: new Func<[id: ethers.BigNumber, metadataURI: string], {id: ethers.BigNumber, metadataURI: string}, []>(
        abi, '0xdb7a48f7'
    ),
    addAssetToToken: new Func<[tokenId: ethers.BigNumber, assetId: ethers.BigNumber, toBeReplacedId: ethers.BigNumber], {tokenId: ethers.BigNumber, assetId: ethers.BigNumber, toBeReplacedId: ethers.BigNumber}, []>(
        abi, '0x1c7bb461'
    ),
    addCatalogRelatedAssetEntry: new Func<[id: ethers.BigNumber, catalogRelatedAssetData: ([catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>] & {catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>}), metadataURI: string], {id: ethers.BigNumber, catalogRelatedAssetData: ([catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>] & {catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>}), metadataURI: string}, []>(
        abi, '0xd7f1e23b'
    ),
    getCollectionOwner: new Func<[], {}, string>(
        abi, '0x1b5d098d'
    ),
    getRoleAdmin: new Func<[role: string], {role: string}, string>(
        abi, '0x248a9ca3'
    ),
    grantRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x2f2ff15d'
    ),
    hasRole: new Func<[role: string, account: string], {role: string, account: string}, boolean>(
        abi, '0x91d14854'
    ),
    multicall: new Func<[data: Array<string>], {data: Array<string>}, Array<string>>(
        abi, '0xac9650d8'
    ),
    renounceRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0x36568abe'
    ),
    revokeRole: new Func<[role: string, account: string], {role: string, account: string}, []>(
        abi, '0xd547741f'
    ),
    setCollectionMetadata: new Func<[newMetadata: string], {newMetadata: string}, []>(
        abi, '0x19660839'
    ),
    setFallbackURI: new Func<[fallbackURI: string], {fallbackURI: string}, []>(
        abi, '0x18249af7'
    ),
    getMintConfig: new Func<[], {}, ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})>(
        abi, '0x9338bb5d'
    ),
    getMintPermissions: new Func<[], {}, ([allowPublicMint: boolean, allowWhitelistMint: boolean] & {allowPublicMint: boolean, allowWhitelistMint: boolean})>(
        abi, '0x9851ad0e'
    ),
    getWhitelistMerkleProofRoot: new Func<[], {}, string>(
        abi, '0x6d9a7f07'
    ),
    'mint()': new Func<[], {}, []>(
        abi, '0x1249c58b'
    ),
    'mint(uint256)': new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, []>(
        abi, '0xa0712d68'
    ),
    setMintPermission: new Func<[mintStage: number, allow: boolean], {mintStage: number, allow: boolean}, []>(
        abi, '0x618b504f'
    ),
    setWhitelistMerkleProofRoot: new Func<[root: string], {root: string}, []>(
        abi, '0xe9f5e2f0'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    'whitelistMint(address,bytes32[])': new Func<[to: string, proof: Array<string>], {to: string, proof: Array<string>}, []>(
        abi, '0xa6b6e433'
    ),
    'whitelistMint(uint256,address,bytes32[])': new Func<[tokenId: ethers.BigNumber, to: string, proof: Array<string>], {tokenId: ethers.BigNumber, to: string, proof: Array<string>}, []>(
        abi, '0xc6c8910a'
    ),
    withdraw: new Func<[], {}, []>(
        abi, '0x3ccfd60b'
    ),
}

export class Contract extends ContractBase {

    facetAddress(_functionSelector: string): Promise<string> {
        return this.eth_call(functions.facetAddress, [_functionSelector])
    }

    facetAddresses(): Promise<Array<string>> {
        return this.eth_call(functions.facetAddresses, [])
    }

    facetFunctionSelectors(_facet: string): Promise<Array<string>> {
        return this.eth_call(functions.facetFunctionSelectors, [_facet])
    }

    facets(): Promise<Array<([facetAddress: string, functionSelectors: Array<string>] & {facetAddress: string, functionSelectors: Array<string>})>> {
        return this.eth_call(functions.facets, [])
    }

    supportsInterface(_interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [_interfaceId])
    }

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    childOf(parentTokenId: ethers.BigNumber, index: ethers.BigNumber): Promise<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})> {
        return this.eth_call(functions.childOf, [parentTokenId, index])
    }

    childrenOf(parentTokenId: ethers.BigNumber): Promise<Array<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>> {
        return this.eth_call(functions.childrenOf, [parentTokenId])
    }

    directOwnerOf(tokenId: ethers.BigNumber): Promise<[_: string, _: ethers.BigNumber, _: boolean]> {
        return this.eth_call(functions.directOwnerOf, [tokenId])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    hasChild(tokenId: ethers.BigNumber, childContract: string, childTokenId: ethers.BigNumber): Promise<([found: boolean, isPending: boolean, index: ethers.BigNumber] & {found: boolean, isPending: boolean, index: ethers.BigNumber})> {
        return this.eth_call(functions.hasChild, [tokenId, childContract, childTokenId])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    pendingChildOf(parentTokenId: ethers.BigNumber, index: ethers.BigNumber): Promise<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})> {
        return this.eth_call(functions.pendingChildOf, [parentTokenId, index])
    }

    pendingChildrenOf(parentTokenId: ethers.BigNumber): Promise<Array<([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})>> {
        return this.eth_call(functions.pendingChildrenOf, [parentTokenId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    getActiveAssetPriorities(tokenId: ethers.BigNumber): Promise<Array<number>> {
        return this.eth_call(functions.getActiveAssetPriorities, [tokenId])
    }

    getActiveAssets(tokenId: ethers.BigNumber): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getActiveAssets, [tokenId])
    }

    getApprovedForAssets(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApprovedForAssets, [tokenId])
    }

    'getAssetMetadata(uint256,uint64)'(tokenId: ethers.BigNumber, assetId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions['getAssetMetadata(uint256,uint64)'], [tokenId, assetId])
    }

    'getAssetMetadata(uint64)'(assetId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions['getAssetMetadata(uint64)'], [assetId])
    }

    getAssetReplacements(tokenId: ethers.BigNumber, assetId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getAssetReplacements, [tokenId, assetId])
    }

    getFullAssets(tokenId: ethers.BigNumber): Promise<Array<([id: ethers.BigNumber, metadataURI: string] & {id: ethers.BigNumber, metadataURI: string})>> {
        return this.eth_call(functions.getFullAssets, [tokenId])
    }

    getFullPendingAssets(tokenId: ethers.BigNumber): Promise<Array<([id: ethers.BigNumber, metadataURI: string] & {id: ethers.BigNumber, metadataURI: string})>> {
        return this.eth_call(functions.getFullPendingAssets, [tokenId])
    }

    getPendingAssets(tokenId: ethers.BigNumber): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getPendingAssets, [tokenId])
    }

    isApprovedForAllForAssets(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAllForAssets, [owner, operator])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    getActiveCatalogRelatedAssets(tokenId: ethers.BigNumber): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getActiveCatalogRelatedAssets, [tokenId])
    }

    getAllCatalogRelatedAssetIds(): Promise<Array<ethers.BigNumber>> {
        return this.eth_call(functions.getAllCatalogRelatedAssetIds, [])
    }

    getAllSlotEquipments(): Promise<Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>> {
        return this.eth_call(functions.getAllSlotEquipments, [])
    }

    getCatalogRelatedAsset(catalogRelatedAssetId: ethers.BigNumber): Promise<([id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string] & {id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string})> {
        return this.eth_call(functions.getCatalogRelatedAsset, [catalogRelatedAssetId])
    }

    getCatalogRelatedAssets(catalogRelatedAssetIds: Array<ethers.BigNumber>): Promise<Array<([id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string] & {id: ethers.BigNumber, catalogAddress: string, targetSlotId: ethers.BigNumber, targetCatalogAddress: string, partIds: Array<ethers.BigNumber>, metadataURI: string})>> {
        return this.eth_call(functions.getCatalogRelatedAssets, [catalogRelatedAssetIds])
    }

    'getSlotEquipment(address,uint256,uint64)'(childContract: string, childTokenId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber): Promise<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})> {
        return this.eth_call(functions['getSlotEquipment(address,uint256,uint64)'], [childContract, childTokenId, childCatalogRelatedAssetId])
    }

    'getSlotEquipment(uint256,uint64,uint64)'(tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber): Promise<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})> {
        return this.eth_call(functions['getSlotEquipment(uint256,uint64,uint64)'], [tokenId, catalogRelatedAssetId, slotId])
    }

    getSlotEquipmentByIndex(index: ethers.BigNumber): Promise<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})> {
        return this.eth_call(functions.getSlotEquipmentByIndex, [index])
    }

    'getSlotEquipments(uint256,uint64)'(tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber): Promise<Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>> {
        return this.eth_call(functions['getSlotEquipments(uint256,uint64)'], [tokenId, catalogRelatedAssetId])
    }

    'getSlotEquipments(address,uint256)'(childContract: string, childTokenId: ethers.BigNumber): Promise<Array<([tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})] & {tokenId: ethers.BigNumber, catalogRelatedAssetId: ethers.BigNumber, slotId: ethers.BigNumber, childCatalogRelatedAssetId: ethers.BigNumber, child: ([tokenId: ethers.BigNumber, contractAddress: string] & {tokenId: ethers.BigNumber, contractAddress: string})})>> {
        return this.eth_call(functions['getSlotEquipments(address,uint256)'], [childContract, childTokenId])
    }

    collectionMetadata(): Promise<string> {
        return this.eth_call(functions.collectionMetadata, [])
    }

    ASSET_CONTRIBUTOR_ROLE(): Promise<string> {
        return this.eth_call(functions.ASSET_CONTRIBUTOR_ROLE, [])
    }

    getCollectionOwner(): Promise<string> {
        return this.eth_call(functions.getCollectionOwner, [])
    }

    getRoleAdmin(role: string): Promise<string> {
        return this.eth_call(functions.getRoleAdmin, [role])
    }

    hasRole(role: string, account: string): Promise<boolean> {
        return this.eth_call(functions.hasRole, [role, account])
    }

    getMintConfig(): Promise<([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})> {
        return this.eth_call(functions.getMintConfig, [])
    }

    getMintPermissions(): Promise<([allowPublicMint: boolean, allowWhitelistMint: boolean] & {allowPublicMint: boolean, allowWhitelistMint: boolean})> {
        return this.eth_call(functions.getMintPermissions, [])
    }

    getWhitelistMerkleProofRoot(): Promise<string> {
        return this.eth_call(functions.getWhitelistMerkleProofRoot, [])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }
}
