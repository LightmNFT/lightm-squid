export const ABI_JSON = [
    {
        "type": "constructor",
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "params",
                "components": [
                    {
                        "type": "address",
                        "name": "validatorLibAddress"
                    },
                    {
                        "type": "address",
                        "name": "maRenderUtilsAddress"
                    },
                    {
                        "type": "address",
                        "name": "equippableRenderUtilsAddress"
                    },
                    {
                        "type": "address",
                        "name": "diamondCutFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "diamondLoupeFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "nestableFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "multiAssetFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "equippableFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "collectionMetadataFacetAddress"
                    },
                    {
                        "type": "address",
                        "name": "initContractAddress"
                    },
                    {
                        "type": "address",
                        "name": "implContractAddress"
                    },
                    {
                        "type": "address",
                        "name": "mintModuleAddress"
                    },
                    {
                        "type": "tuple[]",
                        "name": "cuts",
                        "components": [
                            {
                                "type": "address",
                                "name": "facetAddress"
                            },
                            {
                                "type": "uint8",
                                "name": "action"
                            },
                            {
                                "type": "bytes4[]",
                                "name": "functionSelectors"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LightmCatalogDeployed",
        "inputs": [
            {
                "type": "address",
                "name": "catalogAddress",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LightmCollectionCreated",
        "inputs": [
            {
                "type": "address",
                "name": "collectionAddress",
                "indexed": true
            },
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "collectionMetadataAddress",
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
        "name": "cuts",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "address",
                        "name": "facetAddress"
                    },
                    {
                        "type": "uint8",
                        "name": "action"
                    },
                    {
                        "type": "bytes4[]",
                        "name": "functionSelectors"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "deployCatalog",
        "constant": false,
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
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "deployCollection",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "initStruct",
                "components": [
                    {
                        "type": "string",
                        "name": "name"
                    },
                    {
                        "type": "string",
                        "name": "symbol"
                    },
                    {
                        "type": "string",
                        "name": "fallbackURI"
                    },
                    {
                        "type": "string",
                        "name": "collectionMetadataURI"
                    },
                    {
                        "type": "tuple",
                        "name": "mintConfig",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "whitelistMintPrice"
                            },
                            {
                                "type": "uint256",
                                "name": "publicMintPrice"
                            },
                            {
                                "type": "uint64",
                                "name": "whitelistMintLimit"
                            },
                            {
                                "type": "uint64",
                                "name": "publicMintLimit"
                            },
                            {
                                "type": "uint8",
                                "name": "mintStyle"
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
        "name": "equippableFacetAddress",
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
        "name": "equippableRenderUtilsAddress",
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
        "name": "implContractAddress",
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
        "name": "initContractAddress",
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
        "name": "maRenderUtilsAddress",
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
        "name": "mintModuleAddress",
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
        "name": "multiAssetFacetAddress",
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
        "name": "nestableFacetAddress",
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
        "name": "validatorLibAddress",
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
        "name": "version",
        "constant": true,
        "stateMutability": "pure",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "string"
            }
        ]
    }
]
