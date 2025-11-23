# TokenizeArt42

## Overview
TokenizeArt42 is a BEP-721 NFT project on BNB Smart Chain Testnet, featuring the number "42".

## Choices & Justifications

### Blockchain: BSC Testnet
- **Why?** Required by the subject.
- **Benefit:** Low gas fees and fast transaction times compared to Ethereum, making it ideal for testing.

### Standard: BEP-721
- **Why?** The industry standard for Non-Fungible Tokens (NFTs) on EVM chains.
- **Benefit:** Ensures compatibility with wallets (MetaMask) and marketplaces (OpenSea).

### Storage: IPFS
- **Why?** Decentralized storage for off-chain data.
- **Benefit:** Storing images on-chain is too expensive. IPFS provides a permanent, decentralized way to host the artwork and metadata, ensuring the NFT doesn't "break" if a central server goes down.

### IPFS Service: Pinata
- **Why?** Free and easy-to-use IPFS pinning service.
- **Benefit:** Simplifies the process of uploading and pinning files to IPFS, ensuring

### Tools: Hardhat
- **Why?** Modern development environment for Ethereum software.
- **Benefit:** Provides easy testing, deployment, and debugging tools.

## Usage

### 1. Setup
```bash
cd code
npm install
cp .env.example .env # Add Private Key
```

### 2. Deploy
```bash
npm run deploy:testnet
```

### 3. Mint
Update `mint.js` with your contract address and IPFS CID.
```bash
npm run mint
```

## Contract Info
- **Address**: `0x7E530AA1C17d18A46E35071574b33e53bb9cca63`
- **Network**: BSC Testnet
