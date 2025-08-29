// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {EntryMint} from "../src/EntryMint.sol";

contract EntryScript is Script {
    function run() public {
        vm.startBroadcast();

        new EntryMint();

        vm.stopBroadcast();
    }
}