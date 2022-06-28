//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Collection is ERC721URIStorage, Ownable {
    constructor() ERC721("myCollection", "MYC") {}

    uint256 tokenId = 0;

    function mint(string memory _tokenURI) public onlyOwner {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, _tokenURI);
        tokenId++;
    }
}