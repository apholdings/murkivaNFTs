// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

library SafeMath {
    // sumar: r = x + y
    function add(uint256 x , uint256 y) internal pure returns(uint256) {
        uint256 r = x + y;
        require(r >= x, 'Safemath: addition overflow');
        return r;
    }

    function sub(uint256 x , uint256 y) internal pure returns(uint256) {
        require(y <= x, 'Safemath: subtraction overflow');
        uint256 r = x - y;
        return r;
    }

    // optmimzar uso de gas en multiplicacion
    function mul(uint256 x , uint256 y) internal pure returns(uint256) {
        // gas optimization
        if(x == 0) {
            return 0;
        }

        uint256 r = x * y;
        require(r / x == y, 'SafeMath: multiplication overflow');
        return r;
    }

    function divide(uint256 x, uint256 y) internal pure returns(uint) {
        require(y > 0, 'SafeMath: division by zero');
        uint256 r = x / y;
        return r;  
    }

    //el gasto de gas se mantiene intacto
    function mod(uint256 x, uint256 y) internal pure returns(uint) {
        require(y != 0, 'Safemath: modulo by zero');
        return x % y;
    }
}