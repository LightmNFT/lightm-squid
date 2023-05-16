export const ABI_JSON = [
    {
        "type": "event",
        "anonymous": false,
        "name": "DiamondCut",
        "inputs": [
            {
                "type": "tuple[]",
                "name": "_diamondCut",
                "indexed": false,
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
            },
            {
                "type": "address",
                "name": "_init",
                "indexed": false
            },
            {
                "type": "bytes",
                "name": "_calldata",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "diamondCut",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple[]",
                "name": "_diamondCut",
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
            },
            {
                "type": "address",
                "name": "_init"
            },
            {
                "type": "bytes",
                "name": "_calldata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "facetAddress",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "_functionSelector"
            }
        ],
        "outputs": [
            {
                "type": "address",
                "name": "facetAddress_"
            }
        ]
    },
    {
        "type": "function",
        "name": "facetAddresses",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address[]",
                "name": "facetAddresses_"
            }
        ]
    },
    {
        "type": "function",
        "name": "facetFunctionSelectors",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "_facet"
            }
        ],
        "outputs": [
            {
                "type": "bytes4[]",
                "name": "facetFunctionSelectors_"
            }
        ]
    },
    {
        "type": "function",
        "name": "facets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "facets_",
                "components": [
                    {
                        "type": "address",
                        "name": "facetAddress"
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
        "name": "supportsInterface",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes4",
                "name": "_interfaceId"
            }
        ],
        "outputs": [
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "error",
        "name": "ERC721AddressZeroIsNotAValidOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721ApprovalToCurrentOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721ApproveCallerIsNotOwnerNorApprovedForAll",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721ApproveToCaller",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721NotApprovedOrOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721TransferFromIncorrectOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721TransferToTheZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmNotInActiveAssets",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmSlotEquipmentNotExist",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKChildIndexOutOfRange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKDuplicateAdd",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKInvalidChildReclaim",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKMaxPendingChildrenReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKMaxRecursiveBurnsReached",
        "inputs": [
            {
                "type": "address",
                "name": "childContract"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ]
    },
    {
        "type": "error",
        "name": "RMRKNestableTooDeep",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNestableTransferToDescendant",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNestableTransferToSelf",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNotApprovedOrDirectOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKParentChildMismatch",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKPendingChildIndexOutOfRange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKUnexpectedNumberOfChildren",
        "inputs": []
    },
    {
        "type": "function",
        "name": "acceptChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "childContractAddress"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "acceptChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256"
            },
            {
                "type": "address",
                "name": "childContractAddress"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "parentTokenId"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approve",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "balanceOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "burn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "burn",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "maxRecursiveBurns"
            }
        ],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "childOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "parentTokenId"
            },
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "address",
                        "name": "contractAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "childrenOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "parentTokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "address",
                        "name": "contractAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "directOwnerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            },
            {
                "type": "uint256"
            },
            {
                "type": "bool"
            }
        ]
    },
    {
        "type": "function",
        "name": "getApproved",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "hasChild",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "childContract"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "found"
            },
            {
                "type": "bool",
                "name": "isPending"
            },
            {
                "type": "uint256",
                "name": "index"
            }
        ]
    },
    {
        "type": "function",
        "name": "isApprovedForAll",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
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
        "name": "name",
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
        "name": "nestTransfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "destinationId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "nestTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "destinationId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "ownerOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingChildOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "parentTokenId"
            },
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "address",
                        "name": "contractAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "pendingChildrenOf",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "parentTokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "address",
                        "name": "contractAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "reclaimChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "childAddress"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rejectAllChildren",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "maxRejections"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "safeTransferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAll",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "symbol",
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
        "name": "transfer",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "destinationId"
            },
            {
                "type": "address",
                "name": "childContractAddress"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            },
            {
                "type": "bool",
                "name": "isPending"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferChild",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "destinationId"
            },
            {
                "type": "uint256"
            },
            {
                "type": "address",
                "name": "childContractAddress"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            },
            {
                "type": "bool",
                "name": "isPending"
            },
            {
                "type": "bytes",
                "name": "data"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "transferFrom",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "from"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "error",
        "name": "RMRKApprovalForAssetsToCurrentOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKApproveForAssetsCallerIsNotOwnerNorApprovedForAll",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKApproveForAssetsToCaller",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKBadPriorityListLength",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNotApprovedForAssetsOrOwner",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKTokenDoesNotHaveAsset",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKUnexpectedNumberOfAssets",
        "inputs": []
    },
    {
        "type": "function",
        "name": "acceptAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "acceptAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "approveForAssets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getActiveAssetPriorities",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getActiveAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getApprovedForAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "address"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAssetMetadata",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAssetMetadata",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAssetReplacements",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "uint64"
            }
        ]
    },
    {
        "type": "function",
        "name": "getFullAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint64",
                        "name": "id"
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
        "name": "getFullPendingAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint64",
                        "name": "id"
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
        "name": "getPendingAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "isApprovedForAllForAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "owner"
            },
            {
                "type": "address",
                "name": "operator"
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
        "name": "rejectAllAssets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "maxRejections"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rejectAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "rejectAsset",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setApprovalForAllForAssets",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "operator"
            },
            {
                "type": "bool",
                "name": "approved"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setPriority",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64[]",
                "name": "priorities"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "tokenURI",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            }
        ]
    },
    {
        "type": "error",
        "name": "LightmCurrentCatalogInstanceAlreadyEquippedThisChild",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmIndexOverLength",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmSlotIsOccupied",
        "inputs": []
    },
    {
        "type": "function",
        "name": "addSlotEquipments",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId"
            },
            {
                "type": "tuple[]",
                "name": "slotEquipments",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "bool",
                "name": "doMoreCheck"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getActiveCatalogRelatedAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": [
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllCatalogRelatedAssetIds",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint64[]",
                "name": "allCatalogRelatedAssetIds"
            }
        ]
    },
    {
        "type": "function",
        "name": "getAllSlotEquipments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "slotEquipments",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getCatalogRelatedAsset",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "catalogRelatedAsset",
                "components": [
                    {
                        "type": "uint64",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "catalogAddress"
                    },
                    {
                        "type": "uint64",
                        "name": "targetSlotId"
                    },
                    {
                        "type": "address",
                        "name": "targetCatalogAddress"
                    },
                    {
                        "type": "uint64[]",
                        "name": "partIds"
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
        "name": "getCatalogRelatedAssets",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint64[]",
                "name": "catalogRelatedAssetIds"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint64",
                        "name": "id"
                    },
                    {
                        "type": "address",
                        "name": "catalogAddress"
                    },
                    {
                        "type": "uint64",
                        "name": "targetSlotId"
                    },
                    {
                        "type": "address",
                        "name": "targetCatalogAddress"
                    },
                    {
                        "type": "uint64[]",
                        "name": "partIds"
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
        "name": "getSlotEquipment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "childContract"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            },
            {
                "type": "uint64",
                "name": "childCatalogRelatedAssetId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "slotEquipment",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlotEquipment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId"
            },
            {
                "type": "uint64",
                "name": "slotId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "slotEquipment",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlotEquipmentByIndex",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "index"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "slotEquipment",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlotEquipments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "getSlotEquipments",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "childContract"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            }
        ],
        "outputs": [
            {
                "type": "tuple[]",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "removeSlotEquipments",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "childContract"
            },
            {
                "type": "uint256",
                "name": "childTokenId"
            },
            {
                "type": "uint64[]",
                "name": "childCatalogRelatedAssetIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "removeSlotEquipments",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId"
            },
            {
                "type": "uint64[]",
                "name": "slotIds"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChildAssetEquipped",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "slotPartId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "childAddress",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "childAssetId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChildAssetUnequipped",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "slotPartId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childId",
                "indexed": false
            },
            {
                "type": "address",
                "name": "childAddress",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "childAssetId",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ValidParentEquippableGroupIdSet",
        "inputs": [
            {
                "type": "uint64",
                "name": "equippableGroupId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "slotPartId",
                "indexed": true
            },
            {
                "type": "address",
                "name": "parentAddress",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "_canTokenBeEquippedWithAssetIntoSlot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "parent"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            },
            {
                "type": "uint64",
                "name": "slotId"
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
        "name": "_getAssetAndEquippableData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            },
            {
                "type": "uint64"
            },
            {
                "type": "address"
            },
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "_getEquipment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "targetCatalogAddress"
            },
            {
                "type": "uint64",
                "name": "slotPartId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint64",
                        "name": "assetId"
                    },
                    {
                        "type": "uint64",
                        "name": "childAssetId"
                    },
                    {
                        "type": "uint256",
                        "name": "childId"
                    },
                    {
                        "type": "address",
                        "name": "childEquippableAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "canTokenBeEquippedWithAssetIntoSlot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "parent"
            },
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            },
            {
                "type": "uint64",
                "name": "slotId"
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
        "name": "equip",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "tuple",
                "name": "data",
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint256",
                        "name": "childIndex"
                    },
                    {
                        "type": "uint64",
                        "name": "assetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotPartId"
                    },
                    {
                        "type": "uint64",
                        "name": "childAssetId"
                    }
                ]
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getAssetAndEquippableData",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            }
        ],
        "outputs": [
            {
                "type": "string"
            },
            {
                "type": "uint64"
            },
            {
                "type": "address"
            },
            {
                "type": "uint64[]"
            }
        ]
    },
    {
        "type": "function",
        "name": "getEquipment",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "targetCatalogAddress"
            },
            {
                "type": "uint64",
                "name": "slotPartId"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "components": [
                    {
                        "type": "uint64",
                        "name": "assetId"
                    },
                    {
                        "type": "uint64",
                        "name": "childAssetId"
                    },
                    {
                        "type": "uint256",
                        "name": "childId"
                    },
                    {
                        "type": "address",
                        "name": "childEquippableAddress"
                    }
                ]
            }
        ]
    },
    {
        "type": "function",
        "name": "isChildEquipped",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "childAddress"
            },
            {
                "type": "uint256",
                "name": "childId"
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
        "name": "unequip",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            },
            {
                "type": "uint64",
                "name": "slotPartId"
            }
        ],
        "outputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RMRKCollectionMetdataSet",
        "inputs": [
            {
                "type": "string",
                "name": "metadataURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "function",
        "name": "collectionMetadata",
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
        "type": "error",
        "name": "ERC721InvalidTokenId",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmImplNotOwnerOrAssetContributor",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMustRemoveSlotEquipmentFirst",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKAssetAlreadyExists",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKAssetNotFoundInStorage",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKIdZeroForbidden",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKIndexOutOfRange",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKMaxPendingAssetsReached",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNoAssetMatchingId",
        "inputs": []
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AllChildrenRejected",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Approval",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAll",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAllForAssets",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "operator",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "approved",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ApprovalForAssets",
        "inputs": [
            {
                "type": "address",
                "name": "owner",
                "indexed": true
            },
            {
                "type": "address",
                "name": "approved",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetAccepted",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "replacedId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetAddedToTokens",
        "inputs": [
            {
                "type": "uint256[]",
                "name": "tokenIds",
                "indexed": false
            },
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "replacesId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetPrioritySet",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetRejected",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "AssetSet",
        "inputs": [
            {
                "type": "uint64",
                "name": "assetId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "CatalogRelatedAssetAdd",
        "inputs": [
            {
                "type": "uint64",
                "name": "id",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChildAccepted",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childIndex",
                "indexed": false
            },
            {
                "type": "address",
                "name": "childAddress",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChildProposed",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childIndex",
                "indexed": false
            },
            {
                "type": "address",
                "name": "childAddress",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "ChildTransferred",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childIndex",
                "indexed": false
            },
            {
                "type": "address",
                "name": "childAddress",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "childId",
                "indexed": true
            },
            {
                "type": "bool",
                "name": "fromPending",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "LightmMultiAssetFallbackURISet",
        "inputs": [
            {
                "type": "string",
                "name": "fallbackURI",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "NestTransfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "fromTokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "toTokenId",
                "indexed": false
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleAdminChanged",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "previousAdminRole",
                "indexed": true
            },
            {
                "type": "bytes32",
                "name": "newAdminRole",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleGranted",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "RoleRevoked",
        "inputs": [
            {
                "type": "bytes32",
                "name": "role",
                "indexed": true
            },
            {
                "type": "address",
                "name": "account",
                "indexed": true
            },
            {
                "type": "address",
                "name": "sender",
                "indexed": true
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "SlotEquipmentsAdd",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId",
                "indexed": true
            },
            {
                "type": "tuple[]",
                "name": "slotEquipments",
                "indexed": false,
                "components": [
                    {
                        "type": "uint256",
                        "name": "tokenId"
                    },
                    {
                        "type": "uint64",
                        "name": "catalogRelatedAssetId"
                    },
                    {
                        "type": "uint64",
                        "name": "slotId"
                    },
                    {
                        "type": "uint64",
                        "name": "childCatalogRelatedAssetId"
                    },
                    {
                        "type": "tuple",
                        "name": "child",
                        "components": [
                            {
                                "type": "uint256",
                                "name": "tokenId"
                            },
                            {
                                "type": "address",
                                "name": "contractAddress"
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
        "name": "SlotEquipmentsRemove",
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            },
            {
                "type": "uint64",
                "name": "catalogRelatedAssetId",
                "indexed": true
            },
            {
                "type": "uint64[]",
                "name": "indexes",
                "indexed": false
            }
        ]
    },
    {
        "type": "event",
        "anonymous": false,
        "name": "Transfer",
        "inputs": [
            {
                "type": "address",
                "name": "from",
                "indexed": true
            },
            {
                "type": "address",
                "name": "to",
                "indexed": true
            },
            {
                "type": "uint256",
                "name": "tokenId",
                "indexed": true
            }
        ]
    },
    {
        "type": "function",
        "name": "ASSET_CONTRIBUTOR_ROLE",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "addAssetEntry",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "id"
            },
            {
                "type": "string",
                "name": "metadataURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addAssetToToken",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint64",
                "name": "assetId"
            },
            {
                "type": "uint64",
                "name": "toBeReplacedId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "addCatalogRelatedAssetEntry",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint64",
                "name": "id"
            },
            {
                "type": "tuple",
                "name": "catalogRelatedAssetData",
                "components": [
                    {
                        "type": "address",
                        "name": "catalogAddress"
                    },
                    {
                        "type": "uint64",
                        "name": "targetSlotId"
                    },
                    {
                        "type": "address",
                        "name": "targetCatalogAddress"
                    },
                    {
                        "type": "uint64[]",
                        "name": "partIds"
                    }
                ]
            },
            {
                "type": "string",
                "name": "metadataURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "getCollectionOwner",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "owner"
            }
        ]
    },
    {
        "type": "function",
        "name": "getRoleAdmin",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            }
        ],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "grantRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "hasRole",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
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
        "name": "multicall",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes[]",
                "name": "data"
            }
        ],
        "outputs": [
            {
                "type": "bytes[]",
                "name": "results"
            }
        ]
    },
    {
        "type": "function",
        "name": "renounceRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "revokeRole",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "role"
            },
            {
                "type": "address",
                "name": "account"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "royaltyInfo",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "uint256",
                "name": "salePrice"
            }
        ],
        "outputs": [
            {
                "type": "address"
            },
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "setCollectionMetadata",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "newMetadata"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setCollectionOwner",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "address",
                "name": "target"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setFallbackURI",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "string",
                "name": "fallbackURI"
            }
        ],
        "outputs": []
    },
    {
        "type": "error",
        "name": "ERC721MintToTheZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721TokenAlreadyMinted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ERC721TransferToNonReceiverImplementer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleIncorrectMerkleProof",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleInsufficientValue",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleNoPublicStageSet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleNoWhitelistStageSet",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleOverMaxSupply",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleOverMintLimit",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModulePublicMintNotAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleWhitelistMintNotAllowed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "LightmMintModuleWrongMintStyle",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKIsNotContract",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKIsNotNestableImplementer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKMintToNonRMRKImplementer",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RMRKNestableTransferToNonRMRKNestableImplementer",
        "inputs": []
    },
    {
        "type": "function",
        "name": "getMintConfig",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "tuple",
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
                        "type": "uint256",
                        "name": "maxSupply"
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
    },
    {
        "type": "function",
        "name": "getMintPermissions",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bool",
                "name": "allowPublicMint"
            },
            {
                "type": "bool",
                "name": "allowWhitelistMint"
            }
        ]
    },
    {
        "type": "function",
        "name": "getWhitelistMerkleProofRoot",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "bytes32"
            }
        ]
    },
    {
        "type": "function",
        "name": "maxSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [],
        "outputs": []
    },
    {
        "type": "function",
        "name": "mint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setMintPermission",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "uint8",
                "name": "mintStage"
            },
            {
                "type": "bool",
                "name": "allow"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "setWhitelistMerkleProofRoot",
        "constant": false,
        "payable": false,
        "inputs": [
            {
                "type": "bytes32",
                "name": "root"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "totalSupply",
        "constant": true,
        "stateMutability": "view",
        "payable": false,
        "inputs": [],
        "outputs": [
            {
                "type": "uint256"
            }
        ]
    },
    {
        "type": "function",
        "name": "whitelistMint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "bytes32[]",
                "name": "proof"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "whitelistMint",
        "constant": false,
        "stateMutability": "payable",
        "payable": true,
        "inputs": [
            {
                "type": "uint256",
                "name": "tokenId"
            },
            {
                "type": "address",
                "name": "to"
            },
            {
                "type": "bytes32[]",
                "name": "proof"
            }
        ],
        "outputs": []
    },
    {
        "type": "function",
        "name": "withdraw",
        "constant": false,
        "payable": false,
        "inputs": [],
        "outputs": []
    }
]
