# Minting

This folder contains minting documentation.

## Scripts & Assets
- **Script:** `../code/mint.js`
- **Metadata Template:** `metadata-template.json`

## What is Minting?
Minting is the process of creating a new NFT on the blockchain by associating metadata and ownership
It come after deployment of the smart contract. Before minting, ensure you have the contract address from deployment.

## How to Mint
1. Open `../code/mint.js` and update the `CONTRACT_ADDRESS` with your deployed address.
2. Navigate to the code directory: `cd ../code`
3. Run the mint command:
   ```bash
   npm run mint
   ```

## IPFS Metadata
The metadata for the NFT is stored on IPFS at:
- **URI**: `ipfs://bafkreifdmjbihln4id5kr7ujcd2t4g2iibnpgg4fr5voishcprqciv7yza`
- **Gateway Link**: https://ipfs.io/ipfs/bafkreifdmjbihln4id5kr7ujcd2t4g2iibnpgg4fr5voishcprqciv7yza

