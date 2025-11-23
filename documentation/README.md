# Documentation

This folder contains project assets and guides.

## Files
- **tokenizerart42_nft.png**: The original artwork file for the NFT.
- **technical_documentation.md**: Technical details about the smart contract.

## Standard Functions (Inherited from ERC721)
By using the OpenZeppelin standard, our contract automatically includes these essential functions:
- `ownerOf(tokenId)`: Returns the owner of a specific NFT.
- `transferFrom(from, to, tokenId)`: Transfers ownership of an NFT.
- `approve(to, tokenId)`: Approves another address to transfer the NFT.
- `balanceOf(owner)`: Returns the number of NFTs owned by an address.
- `tokenURI(tokenId)`: Returns the metadata URI (link to IPFS).


