import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LightmUniversalFactory.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    LightmCollectionCreated: new LogEvent<([collectionAddress: string, owner: string, salt: string, isCustomized: boolean, customInitStruct: ([cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string] & {cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string})] & {collectionAddress: string, owner: string, salt: string, isCustomized: boolean, customInitStruct: ([cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string] & {cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string})})>(
        abi, '0x92a7379325e8d1d83dbc10dae684c03e96058aa3ba102254fd9edcc513caa903'
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
    deployCollection: new Func<[salt: string, initStruct: ([name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, royaltyNumerator: ethers.BigNumber, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})] & {name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, royaltyNumerator: ethers.BigNumber, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})}), customInitStruct: ([cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string] & {cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string})], {salt: string, initStruct: ([name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, royaltyNumerator: ethers.BigNumber, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})] & {name: string, symbol: string, fallbackURI: string, collectionMetadataURI: string, royaltyNumerator: ethers.BigNumber, mintConfig: ([whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number] & {whitelistMintPrice: ethers.BigNumber, publicMintPrice: ethers.BigNumber, maxSupply: ethers.BigNumber, whitelistMintLimit: ethers.BigNumber, publicMintLimit: ethers.BigNumber, mintStyle: number})}), customInitStruct: ([cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string] & {cuts: Array<([facetAddress: string, action: number, functionSelectors: Array<string>] & {facetAddress: string, action: number, functionSelectors: Array<string>})>, initAddress: string, initCallData: string})}, []>(
        abi, '0xfa182087'
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
    rmrkEquippableFacetAddress: new Func<[], {}, string>(
        abi, '0x59162718'
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

    rmrkEquippableFacetAddress(): Promise<string> {
        return this.eth_call(functions.rmrkEquippableFacetAddress, [])
    }

    validatorLibAddress(): Promise<string> {
        return this.eth_call(functions.validatorLibAddress, [])
    }

    version(): Promise<string> {
        return this.eth_call(functions.version, [])
    }
}
