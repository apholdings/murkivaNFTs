// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import './ERC721Connector.sol';

contract Murkiva is ERC721Connector {

    // matriz para guardar nuestros nfts
    string[] public MurkivaNFTS;

    mapping(string => bool) _murkivaNFTExists;

    function mint(string memory _murkiva) public {

        require(!_murkivaNFTExists[_murkiva], 'Error - token already exists');

        MurkivaNFTS.push(_murkiva);
        uint _id = MurkivaNFTS.length -1;

        _mint(msg.sender, _id);

        _murkivaNFTExists[_murkiva] = true;
    }

    constructor() ERC721Connector('Murkiva','MRKV') {}

}