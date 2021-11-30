// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import './ERC721.sol';
import './interfaces/IERC721Enumerable.sol';

contract ERC721Enumerable is IERC721Enumerable,ERC721 {

    uint256[] private _allTokens;

    // Mapa para identificar la posicion del tokenId en matriz
    mapping(uint256 => uint256) private _allTokensIndex;

    // Mapa del duano a lista de todos los tokenId que el es dueno
    mapping(address => uint256[]) private _ownedTokens;

    // Mapa de tokenId a indice de la lista de tokens del propietario
    mapping(uint256 => uint256) private _ownedTokensIndex;


    constructor() {
        _registerInterface(bytes4(keccak256('totalSupply(bytes4)')^
        keccak256('tokenByIndex(bytes4)')^keccak256('tokenOfOwnerByIndex(bytes4)')));
    }

    // function tokenByIndex(uint256 _index) external view returns (uint256);

    // function tokenOfOwnerByIndex(address _owner, uint256 _index) external view returns (uint256);

    function _mint(address to, uint256 tokenId) internal override(ERC721){
        super._mint(to, tokenId);
        // A. agregar tokens al dueno
        _addTokensToOwnerEnumeration(to, tokenId);
        // B. agregar tokens al totalsupply
         _addTokensToAllTokenEnumeration(tokenId);
    }

    // agregar tokens a la matriz _allTokens
    function _addTokensToAllTokenEnumeration(uint256 tokenId) private {
        _allTokensIndex[tokenId] = _allTokens.length;
        _allTokens.push(tokenId);
    }

    function _addTokensToOwnerEnumeration(address to, uint256 tokenId) private {
        _ownedTokensIndex[tokenId] = _ownedTokens[to].length;
        _ownedTokens[to].push(tokenId);
    }

    // Retornar tokenPorIndice
    function tokenByIndex(uint256 index) public override view returns(uint256) {
        require(index < totalSupply(), 'Global index out of bounds');
        return _allTokens[index];
    }

    function tokenOfOwnerByIndex(address owner, uint256 index) public override view returns(uint256) {
        require(index < balanceOf(owner), 'Owner index out of bounds');
        return _ownedTokens[owner][index];
    }

    function totalSupply() public override view returns(uint256) {
        return _allTokens.length;
    }
    
}