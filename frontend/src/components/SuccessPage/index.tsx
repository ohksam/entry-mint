// GATE
//imports
import { useAccount, useDisconnect } from "wagmi";
import { useNavigate } from "react-router";

// interfaces
interface SuccessPageProps {
    txHash?: string;
    tokenId?: string | number;
    totalMinted?: number;
    maxSupply?: number;
}

// This component will have:
    // 1. Thank you message
    // 2. Maybe plans to expand or something

const ETHERSCAN_TX_URL = "https";
const ETHERSCAN_TOKEN_URL = "token";

const SuccessPage = ({
    txHash,
    tokenId,
    totalMinted,
    maxSupply,
}: SuccessPageProps) => {
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const navigate = useNavigate();
    
    return (
        <div className="page-container">
            <h2>Access Granted!</h2>
            <p>Congrats, you've minted your EntryMint token and unlocked the gate.</p>

            {address && (
                <div>
                    <div>
                        <b>Wallet:</b> <code>{address}</code>
                    </div>
                    {tokenId &&(
                        <div>
                            <b>Token ID:</b> #{tokenId}
                        </div>
                    )}
                    {txHash && (
                        <div>
                            <b>Tx:</b>{" "}
                            <a
                                href = {ETHERSCAN_TX_URL + txHash}
                                target = "_blank"
                                rel = "noopener"
                            >
                                View on Etherscan
                            </a>
                        </div>
                    )}
                    {tokenId && (
                        <div>
                            <b>Your Token:</b>{" "}
                            <a
                                href = {ETHERSCAN_TOKEN_URL + tokenId}
                                target = "_blank"
                                rel = "noopener"
                            >
                                View Token
                            </a>
                        </div>
                    )}
                </div>
            )}

            {typeof totalMinted === "number" && typeof maxSupply === "number" && (
                <div>
                    <b>
                        {totalMinted} / {maxSupply} minted!
                    </b>
                </div>
            )}

            <div>
                <button onClick={() => navigate('/')}>Back to Home</button>
                <button onClick={() => disconnect()}>Disconnect</button>
            </div>

            <div>
                <a
                    href="https://github.com/ohksam/entry-mint"
                    target="_blank"
                    rel="noopener"
                >
                    View Project on GitHub
                </a>
            </div>
        </div>
    );
};

export default SuccessPage;