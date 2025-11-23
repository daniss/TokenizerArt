const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TokenizeArt42", function () {
  let tokenizeArt42;
  let owner;
  let addr1;

  beforeEach(async function () {
    [owner, addr1] = await ethers.getSigners();
    
    const TokenizeArt42 = await ethers.getContractFactory("TokenizeArt42");
    tokenizeArt42 = await TokenizeArt42.deploy();
    await tokenizeArt42.waitForDeployment();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await tokenizeArt42.owner()).to.equal(owner.address);
    });

    it("Should set the correct name and symbol", async function () {
      expect(await tokenizeArt42.name()).to.equal("TokenizeArt42");
      expect(await tokenizeArt42.symbol()).to.equal("TA42");
    });
  });

  describe("Minting", function () {
    const testTokenURI = "ipfs://QmTest123";

    it("Should mint NFT successfully", async function () {
      await tokenizeArt42.mintNFT(addr1.address, testTokenURI);
      
      expect(await tokenizeArt42.ownerOf(1)).to.equal(addr1.address);
      expect(await tokenizeArt42.tokenURI(1)).to.equal(testTokenURI);
    });

    it("Should only allow owner to mint", async function () {
      await expect(
        tokenizeArt42.connect(addr1).mintNFT(addr1.address, testTokenURI)
      ).to.be.revertedWithCustomError(tokenizeArt42, "OwnableUnauthorizedAccount");
    });
  });
});