# Deployment

This folder contains deployment documentation.

## Script
The deployment script is located at `../code/deploy.js`.

## What is Deployment?
Deployment is the process of uploading and activating the smart contract on the BNB Smart Chain Testnet

## How to Deploy
1. Navigate to the code directory: `cd ../code`
2. Ensure `.env` is configured with `PRIVATE_KEY`.
3. Run the deployment command:
   ```bash
   npm run deploy:testnet
   ```
4. **Important:** Copy the deployed Contract Address from the terminal output. You will need it for minting.
