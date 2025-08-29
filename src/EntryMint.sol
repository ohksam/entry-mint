// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// custom errros
error OutOfSupply();
error AlreadyMinted();

// emit minting to allow frontend to dynamically update
event Minted(address indexed minter, uint256 tokenId);

contract EntryMint is ERC721, Ownable {
    uint256 public totalSupply;
    // ** set to 2 for testing, set to 100/1k/10k for prod **
    uint256 public constant MAX_SUPPLY = 2;
    mapping(address minter => uint256 mintedCount) public minted;

    constructor() ERC721("EntryMint", "EMINT") Ownable(msg.sender) {}

    function mint() external {
        if (totalSupply >= MAX_SUPPLY) revert OutOfSupply();
        if (minted[msg.sender] >= 1) revert AlreadyMinted();

        uint256 tokenId = ++totalSupply; // increments totalSupply and sets tokenId
        minted[msg.sender]++;
        _safeMint(msg.sender, tokenId);
        emit Minted(msg.sender, tokenId);
    }
}