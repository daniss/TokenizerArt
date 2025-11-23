// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Import OpenZeppelin for ERC-721 functionality which is the standard for NFTs
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// Import ERC721URIStorage for handling token URIs, which store metadata about the NFTs, we use ipfs://
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// Import Ownable for access control to restricts functions to contract owner
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * TokenizeArt42
 * BEP-721 compliant NFT contract for TokenizeArt project
 * This contract creates unique NFTs with metadata including the number 42
 */
contract TokenizeArt42 is ERC721, ERC721URIStorage, Ownable {
    // We need a counter to keep track of token IDs, starting from 0
    uint256 private _tokenIdCounter;

    constructor() ERC721("TokenizeArt42", "TA42") Ownable(msg.sender) {}

    function mintNFT(address to, string memory uri) public onlyOwner returns (uint256) {
        _tokenIdCounter++;
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        return tokenId;
    }

    // Overrides required by Solidity
    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}