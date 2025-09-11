// NAV BAR
// imports
import { useConnect, useDisconnect, useAccount } from "wagmi";

import './NavBar.css';

// interfaces

// This component will have:
// 1. CONDITIONAL render:
// If not connected:
// "Connect Wallet" button
// If connected:
// "Conncected: [wallet address]"" + "Disconnect"

const NavBar = () => {
    const { connect, connectors, isPending } = useConnect();
    const { disconnect } = useDisconnect();
    const { address, isConnected } = useAccount();

    // console.log(connectors.map(c => ({ name: c.name, ready: c.ready, id: c.id })));

    return (
        <nav className="navbar">
            {isConnected && address ? (
                <div>
                    <span>Connected: {address.slice(0, 6)}...{address.slice(-4)}</span>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                <div>
                    <span>Please do not connect a wallet with real funds!</span>
                    {connectors.map((connector) => (
                        <button
                            key={connector.uid}
                            onClick={() => connect({ connector })}
                        >
                            Connect {connector.name}
                            {isPending && " (connecting...)"}
                        </button>
                    ))}
                </div>
            )
            }
        </nav>
    )
}

export default NavBar;