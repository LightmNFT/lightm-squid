import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LightmUniversalFactory.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    LightmCatalogDeployed: new LogEvent<([catalogAddress: string, owner: string] & {catalogAddress: string, owner: string})>(
        abi, '0xa103409688dcd19e63e729810671d719b922fed7b065851a974e0e7797b0391b'
    ),
    LightmCollectionCreated: new LogEvent<([collectionAddress: string, owner: string] & {collectionAddress: string, owner: string})>(
        abi, '0x8c7cf41550332d6435d1cf344cd12fadfcd22eed7dd46ac73177131dfd058dde'
    ),
}

export const functions = {
    collectionMetadataAddress: new Func<[], {}, string>(
        abi, '0x89e18dc6'
    ),
    cuts: new Func<[], {}, Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>>(
        abi, '0xf47ca352'
    ),
    deployCatalog: new Func<[metadataURI: string, type_: string], {metadataURI: string, type_: string}, []>(
        abi, '0xa3911df1'
    ),
    deployCollection: new Func<[initStruct: ([name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})] & {name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})})], {initStruct: ([name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})] & {name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})})}, []>(
        abi, '0xf66fa4d4'
    ),
    equippableFacetAddress: new Func<[], {}, string>(
        abi, '0xdb9f510c'
    ),
    equippableRenderUtilsAddress: new Func<[], {}, string>(
        abi, '0x70238640'
    ),
    implContractAddress: new Func<[], {}, string>(
        abi, '0x1c034aa5'
    ),
    initContractAddress: new Func<[], {}, string>(
        abi, '0x7c6ecec9'
    ),
    maRenderUtilsAddress: new Func<[], {}, string>(
        abi, '0xb734bef8'
    ),
    mintModuleAddress: new Func<[], {}, string>(
        abi, '0x3999de98'
    ),
    multiAssetFacetAddress: new Func<[], {}, string>(
        abi, '0x135b0dbb'
    ),
    nestableFacetAddress: new Func<[], {}, string>(
        abi, '0x04f2d1e1'
    ),
    validatorLibAddress: new Func<[], {}, string>(
        abi, '0xbaaed0c9'
    ),
    version: new Func<[], {}, string>(
        abi, '0x54fd4d50'
    ),
}

export class Contract extends ContractBase {

    collectionMetadataAddress(): Promise<string> {
        return this.eth_call(functions.collectionMetadataAddress, [])
    }

    cuts(): Promise<Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>> {
        return this.eth_call(functions.cuts, [])
    }

    equippableFacetAddress(): Promise<string> {
        return this.eth_call(functions.equippableFacetAddress, [])
    }

    equippableRenderUtilsAddress(): Promise<string> {
        return this.eth_call(functions.equippableRenderUtilsAddress, [])
    }

    implContractAddress(): Promise<string> {
        return this.eth_call(functions.implContractAddress, [])
    }

    initContractAddress(): Promise<string> {
        return this.eth_call(functions.initContractAddress, [])
    }

    maRenderUtilsAddress(): Promise<string> {
        return this.eth_call(functions.maRenderUtilsAddress, [])
    }

    mintModuleAddress(): Promise<string> {
        return this.eth_call(functions.mintModuleAddress, [])
    }

    multiAssetFacetAddress(): Promise<string> {
        return this.eth_call(functions.multiAssetFacetAddress, [])
    }

    nestableFacetAddress(): Promise<string> {
        return this.eth_call(functions.nestableFacetAddress, [])
    }

    validatorLibAddress(): Promise<string> {
        return this.eth_call(functions.validatorLibAddress, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
