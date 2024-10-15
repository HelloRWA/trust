// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/cryptography/MessageHashUtils.sol";

contract Trust is ERC20, ERC20Pausable, Ownable {
    address public signer;
    address public tfAddress;

    mapping(address => uint256) public lastClaimTime;

    constructor(
        address initialOwner,
        address _signer,
        address _tfAddress
    ) ERC20("Trust", "Trust") Ownable(initialOwner) {
        signer = _signer;
        tfAddress = _tfAddress;
    }

    uint256 public dailySupply;

    function setDailySupply(uint256 _dailySupply) public onlyOwner {
        dailySupply = _dailySupply;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function claim(address to) public whenNotPaused {
        require(block.timestamp >= lastClaimTime[to] + 24 hours, "Can only claim once every 24 hours");

        uint256 tfScore = IERC20(tfAddress).balanceOf(address(to));
        uint256 tfTotalSupply = IERC20(tfAddress).totalSupply();
        uint256 amount = (tfScore * dailySupply) / tfTotalSupply;
        _mint(to, amount);

        lastClaimTime[to] = block.timestamp;
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address from,
        address to,
        uint256 value
    ) internal override(ERC20, ERC20Pausable) {
        super._update(from, to, value);
    }
}
