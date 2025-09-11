// HOME PAGE
// imports

import type React from "react";
import { useNavigate } from "react-router";

import './HomePage.css'

// interfaces (probably not needed for home)

// This component will have:
    // 0. Welcome message, obviously
    // 1. Animated background or some sort of nice graphic that makes a good aesthetic first impression
    // 2. "This is a demo dApp on testnet. For your own safety, please do not connect a wallet with real funds!"
    // 3. "Connect Wallet" button


const HomePage = () => {

    const navigate = useNavigate();

    const handleTestClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        alert('Anchor clicked! you got this!');
    };

    const handleProceed = () => {
        navigate("/gate");
    };

    return (
        <div className="page-container">
            <a href="#" onClick={handleTestClick}>Test Anchor</a>
            <h1>Welcome to EntryMint!</h1>
            <div>EntryMint lets you experience token-gated access in a fun, secure way.</div>
            {/* <br/> */}
            <div>Connect your wallet, mint a free entry token, and head inside!</div>
            {/* <br/> */}
            <div>This is a testnet demo - no real ETH required!</div>
            {/* <br/> */}
            <div>PLEASE DO NOT CONNECT A WALLET WITH REAL FUNDS</div>
            {/* <br/> */}
            <button onClick={handleProceed}>Proceed to Gate</button>
        </div>
    )
}

export default HomePage;