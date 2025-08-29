// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Test} from "forge-std/Test.sol";
import {EntryMint, OutOfSupply, AlreadyMinted} from "../src/EntryMint.sol";

contract EntryTest is Test {
    EntryMint public entryMint;

    address public first;
    address public second;

    function setUp() public {
        entryMint = new EntryMint();
        
        first = makeAddr("first");
        second = makeAddr("second");
    }

    // Testing single mint
    function test_MintAsDefault() public {
        entryMint.mint();
        assertEq(entryMint.minted(address(this)), 1);
    }
    
    // Testing another address
    function test_MintAsFirst() public {
        vm.prank(first);
        entryMint.mint();
        assertEq(entryMint.minted(first), 1);
    }

    // Testing double mint on same address
    function test_RevertOnDoubleMint() public {
        entryMint.mint();
        assertEq(entryMint.minted(address(this)), 1);
        vm.expectRevert(AlreadyMinted.selector);
        entryMint.mint();
    }

    // Testing supply cap *ASSUME MAX_SUPPLY IS 2*
    function test_RevertSupplyExceeded() public {
        // mint as first and second
        vm.prank(first);
        entryMint.mint();
        vm.prank(second);
        entryMint.mint();

        // mint as self
        vm.expectRevert(OutOfSupply.selector);
        entryMint.mint();
    }
}