export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "metadataURI"
            },
            {
                "type": "string",
                "name": "type_"
            }
        ]
    },
    {
        "type": "error",
        "name": "RMRKBadConfig",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKIdZeroForbidden",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKLocked",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNewContributorIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNewOwnerIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNotOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNotOwnerOrContributor",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKPartAlreadyExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKPartDoesNotExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKPartIsNotSlot",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKZeroLengthIdsPassed",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedEquippables",
        "inputs": [
            {
                "type": "uint64",
                "name": "partId",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "equippableAddresses",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AddedPart",
        "inputs": [
            {
                "type": "uint64",
                "name": "partId",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "itemType",
                "indexed": true
            },
            {
                "type": "uint8",
                "name": "zIndex",
                "indexed": false
            },
            {
                "type": "address[]",
                "name": "equippableAddresses",
                "indexed": false
            },
            {
                "type": "string",
                "name": "metadataURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LightmCatalogMetadataURISet",
        "inputs": [
            {
                "type": "string",
                "name": "metadataURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LightmCatalogTypeSet",
        "inputs": [
            {
                "type": "string",
                "name": "type_",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "type": "address",
                "name": "previousOwner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "newOwner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetEquippableToAll",
        "inputs": [
            {
                "type": "uint64",
                "name": "partId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SetEquippables",
        "inputs": [
            {
                "type": "uint64",
                "name": "partId",
                "indexed": true
            },
            {
                "type": "address[]",
                "name": "equippableAddresses",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "addContributor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "contributor"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addEquippableAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            },
            {
                "type": "address[]",
                "name": "equippableAddresses"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addPart",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "intakeStruct",
                "components": [
                    {
                        "type": "uint64",
                        "name": "partId"
                    },
                    {
                        "type": "tuple",
                        "name": "part",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "itemType"
                            },
                            {
                                "type": "uint8",
                                "name": "z"
                            },
                            {
                                "type": "address[]",
                                "name": "equippable"
                            },
                            {
                                "type": "string",
                                "name": "metadataURI"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addPartList",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "intakeStructs",
                "components": [
                    {
                        "type": "uint64",
                        "name": "partId"
                    },
                    {
                        "type": "tuple",
                        "name": "part",
                        "components": [
                            {
                                "type": "uint8",
                                "name": "itemType"
                            },
                            {
                                "type": "uint8",
                                "name": "z"
                            },
                            {
                                "type": "address[]",
                                "name": "equippable"
                            },
                            {
                                "type": "string",
                                "name": "metadataURI"
                            }
                        ]
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "checkIsEquippable",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            },
            {
                "type": "address",
                "name": "targetAddress"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "checkIsEquippableToAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "getLock",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "getMetadataURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "getPart",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint8",
                        "name": "itemType"
                    },
                    {
                        "type": "uint8",
                        "name": "z"
                    },
                    {
                        "type": "address[]",
                        "name": "equippable"
                    },
                    {
                        "type": "string",
                        "name": "metadataURI"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getParts",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64[]",
                "name": "partIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint8",
                        "name": "itemType"
                    },
                    {
                        "type": "uint8",
                        "name": "z"
                    },
                    {
                        "type": "address[]",
                        "name": "equippable"
                    },
                    {
                        "type": "string",
                        "name": "metadataURI"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getType",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "isContributor",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "contributor"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "owner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "resetEquippableAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeContributor",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "contributor"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEquippableAddresses",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            },
            {
                "type": "address[]",
                "name": "equippableAddresses"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setEquippableToAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "partId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setLock",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMetadataURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "metadataURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setType",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "type_"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "newOwner"
            }
        ],
        "outputs": []
    }
]
