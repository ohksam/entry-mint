// NAV BAR
// imports
import { useConnect, useDisconnect, useAccount } from "wagmi";
// import type { Address } from "wagmi";

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

    return (
        <nav>
            {isConnected && address ? (
                <div>
                    <span>Connected: {address.slice(0,6)}...{address.slice(-4)}</span>
                    <button onClick={() => disconnect()}>Disconnect</button>
                </div>
            ) : (
                connectors.map((connector) => (
                    <button
                        key={connector.uid}
                        onClick={() => connect({ connector })}
                        disabled={!connector.ready}
                    >
                        Connect {connector.name}
                        {isPending && " (connecting...)"}
                    </button>
                ))
            )
            }
        </nav>
    )
}

export default NavBar;