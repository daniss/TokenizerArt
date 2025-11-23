## Architecture Overview

The project follows the standard NFT architecture:
1. **Blockchain (BSC Testnet)**: Stores ownership records and the link to metadata.
2. **IPFS (InterPlanetary File System)**: Stores the actual image and metadata JSON.
3. **Smart Contract (BEP-721)**: Manages the logic of minting and transferring tokens.

## Why IPFS?
We use IPFS instead of storing images directly on the blockchain for three main reasons:
1.  **Cost**: Storing large files (like images) on-chain is prohibitively expensive due to gas fees.
2.  **Efficiency**: Blockchains are optimized for transaction data, not file storage.
3.  **Decentralization**: IPFS ensures the data is distributed and resistant to server failures, unlike a centralized server

## Smart Contract Details
- **Standard**: BEP-721 (Binance Smart Chain version of ERC-721).
- **Library**: OpenZeppelin (Industry standard for security).
- **Features**:
    - `Ownable`: Only the contract owner can mint new NFTs.
    - `ERC721URIStorage`: Allows associating a unique metadata URI with each token.

## Metadata Structure
The metadata is a JSON file stored on IPFS that follows the ERC-721 standard:
```json
{
  "name": "TokenizeArt42 #1",
  "description": "...",
  "image": "ipfs://...",
  "attributes": [...]
}
```
This JSON links the token ID on the blockchain to the visual asset on IPFS.
