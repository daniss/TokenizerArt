const { ethers } = require("hardhat");

async function main() {
  const CONTRACT_ADDRESS = "0x7E530AA1C17d18A46E35071574b33e53bb9cca63";
  const RECIPIENT = "0x438F79Ad6b19DE77b8D4b3158D040B61CF48315A";
  const METADATA_URI = "ipfs://bafkreifdmjbihln4id5kr7ujcd2t4g2iibnpgg4fr5voishcprqciv7yza"; 

  const [signer] = await ethers.getSigners();
  const contract = await ethers.getContractAt("TokenizeArt42", CONTRACT_ADDRESS, signer);

  console.log("Minting NFT...");
  const tx = await contract.mintNFT(RECIPIENT, METADATA_URI);
  await tx.wait();

  console.log(`Minted! Tx: https://testnet.bscscan.com/tx/${tx.hash}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});