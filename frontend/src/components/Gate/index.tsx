// GATE
//imports
import { useAccount } from "wagmi";

// interfaces

// This component will have:
// 1. "This area is only for holders of the EntryMint token."
// 2. Button
// A. If user has token: "Enter"
// B. If not: "Mint My Token" 
// + error/status if mint fails

const SEPOLIA_FAUCET_URL = "https://cloud.google.com/application/web3/faucet/ethereum/sepolia";

const Gate = () => {
    const { address, isConnected } = useAccount();
    // contract token-check logic here
    const hasToken = false;
    const isMinting = false;
    const onMint: () => void = () => {
        // placeholder for now
        alert("Minting logic placeholder");
    };

    return (
        <div className="page-container">
            <h2>Gate</h2>
            <p>
                This page is token-gated. To proceed, you need an EntryMint token.
                <br />
                {isConnected ? (
                    hasToken ? (
                        <span> You have access! <a href="/success">Continue</a></span>
                    ) : (
                        <div>
                            <b>Don't have a token yet?</b>
                            <button disabled={isMinting} onClick={onMint}>Mint your free Entry Token</button>
                            <p>
                                Need Sepolia ETH for gas? <a href={SEPOLIA_FAUCET_URL} target="_blank" rel="noopner">Get testnet ETH here.</a>
                            </p>
                        </div>
                    )
                ) : (
                    <span>Please connect your wallet above to continue.</span>
                )}
            </p>
        </div>
    );
}

export default Gate;