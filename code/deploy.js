const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const TokenizeArt42 = await ethers.getContractFactory("TokenizeArt42");
  const contract = await TokenizeArt42.deploy();
  await contract.waitForDeployment();

  console.log("Contract address:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});