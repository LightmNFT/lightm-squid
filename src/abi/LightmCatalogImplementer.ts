import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './LightmCatalogImplementer.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    AddedEquippables: new LogEvent<([partId: ethers.BigNumber, equippableAddresses: Array<string>] & {partId: ethers.BigNumber, equippableAddresses: Array<string>})>(
        abi, '0x379edf7304a765a58c7eba1fef9bc8675355bf31e276de44d60da39bb04c76ba'
    ),
    AddedPart: new LogEvent<([partId: ethers.BigNumber, itemType: number, zIndex: number, equippableAddresses: Array<string>, metadataURI: string] & {partId: ethers.BigNumber, itemType: number, zIndex: number, equippableAddresses: Array<string>, metadataURI: string})>(
        abi, '0xc4715b52aed3b9dfb2fbdc63e39e234892ec1dd3811d2c671646dbfd3d32d92e'
    ),
    LightmCatalogMetadataURISet: new LogEvent<([metadataURI: string] & {metadataURI: string})>(
        abi, '0xcc5631eeaf22fdf17345dfef3516e0d735a45a6f08f87e0928accde505ded9fb'
    ),
    LightmCatalogTypeSet: new LogEvent<([type_: string] & {type_: string})>(
        abi, '0xdb131a82f612b578d5b2083e082c243bc1459e635be4e1ddb9194d97e60eb007'
    ),
    OwnershipTransferred: new LogEvent<([previousOwner: string, newOwner: string] & {previousOwner: string, newOwner: string})>(
        abi, '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0'
    ),
    SetEquippableToAll: new LogEvent<([partId: ethers.BigNumber] & {partId: ethers.BigNumber})>(
        abi, '0x540b0b22993accb6c2b7b0f4a5bd1b7e6419708ef2a68c39f09f01c848ba4fbc'
    ),
    SetEquippables: new LogEvent<([partId: ethers.BigNumber, equippableAddresses: Array<string>] & {partId: ethers.BigNumber, equippableAddresses: Array<string>})>(
        abi, '0x507a75726ac34d3eb68ebf61f034616ee2030c6193bd4a9efb7e131de6c6adcc'
    ),
}

export const functions = {
    addContributor: new Func<[contributor: string], {contributor: string}, []>(
        abi, '0xb579184f'
    ),
    addEquippableAddresses: new Func<[partId: ethers.BigNumber, equippableAddresses: Array<string>], {partId: ethers.BigNumber, equippableAddresses: Array<string>}, []>(
        abi, '0xf005548c'
    ),
    addPart: new Func<[intakeStruct: ([partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})] & {partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})})], {intakeStruct: ([partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})] & {partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})})}, []>(
        abi, '0x27a96484'
    ),
    addPartList: new Func<[intakeStructs: Array<([partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})] & {partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})})>], {intakeStructs: Array<([partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})] & {partId: ethers.BigNumber, part: ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})})>}, []>(
        abi, '0x867cc5c4'
    ),
    checkIsEquippable: new Func<[partId: ethers.BigNumber, targetAddress: string], {partId: ethers.BigNumber, targetAddress: string}, boolean>(
        abi, '0xdcb79d56'
    ),
    checkIsEquippableToAll: new Func<[partId: ethers.BigNumber], {partId: ethers.BigNumber}, boolean>(
        abi, '0xdc477d2f'
    ),
    getLock: new Func<[], {}, boolean>(
        abi, '0x7e5852d9'
    ),
    getMetadataURI: new Func<[], {}, string>(
        abi, '0x86a92af7'
    ),
    getPart: new Func<[partId: ethers.BigNumber], {partId: ethers.BigNumber}, ([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})>(
        abi, '0xd297ac43'
    ),
    getParts: new Func<[partIds: Array<ethers.BigNumber>], {partIds: Array<ethers.BigNumber>}, Array<([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})>>(
        abi, '0x9806c6ec'
    ),
    getType: new Func<[], {}, string>(
        abi, '0x15dae03e'
    ),
    isContributor: new Func<[contributor: string], {contributor: string}, boolean>(
        abi, '0x1d0d35f5'
    ),
    owner: new Func<[], {}, string>(
        abi, '0x8da5cb5b'
    ),
    renounceOwnership: new Func<[], {}, []>(
        abi, '0x715018a6'
    ),
    resetEquippableAddresses: new Func<[partId: ethers.BigNumber], {partId: ethers.BigNumber}, []>(
        abi, '0x7084819a'
    ),
    revokeContributor: new Func<[contributor: string], {contributor: string}, []>(
        abi, '0xde90e14d'
    ),
    setEquippableAddresses: new Func<[partId: ethers.BigNumber, equippableAddresses: Array<string>], {partId: ethers.BigNumber, equippableAddresses: Array<string>}, []>(
        abi, '0xb9cd2959'
    ),
    setEquippableToAll: new Func<[partId: ethers.BigNumber], {partId: ethers.BigNumber}, []>(
        abi, '0x6c508e66'
    ),
    setLock: new Func<[], {}, []>(
        abi, '0x7aba6f37'
    ),
    setMetadataURI: new Func<[metadataURI: string], {metadataURI: string}, []>(
        abi, '0x750521f5'
    ),
    setType: new Func<[type_: string], {type_: string}, []>(
        abi, '0x96282ba3'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    transferOwnership: new Func<[newOwner: string], {newOwner: string}, []>(
        abi, '0xf2fde38b'
    ),
}

export class Contract extends ContractBase {

    checkIsEquippable(partId: ethers.BigNumber, targetAddress: string): Promise<boolean> {
        return this.eth_call(functions.checkIsEquippable, [partId, targetAddress])
    }

    checkIsEquippableToAll(partId: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.checkIsEquippableToAll, [partId])
    }

    getLock(): Promise<boolean> {
        return this.eth_call(functions.getLock, [])
    }

    getMetadataURI(): Promise<string> {
        return this.eth_call(functions.getMetadataURI, [])
    }

    getPart(partId: ethers.BigNumber): Promise<([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})> {
        return this.eth_call(functions.getPart, [partId])
    }

    getParts(partIds: Array<ethers.BigNumber>): Promise<Array<([itemType: number, z: number, equippable: Array<string>, metadataURI: string] & {itemType: number, z: number, equippable: Array<string>, metadataURI: string})>> {
        return this.eth_call(functions.getParts, [partIds])
    }

    getType(): Promise<string> {
        return this.eth_call(functions.getType, [])
    }

    isContributor(contributor: string): Promise<boolean> {
        return this.eth_call(functions.isContributor, [contributor])
    }

    owner(): Promise<string> {
        return this.eth_call(functions.owner, [])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }
}
