// GATE
//imports

// interfaces

// This component will have:
    // 1. "This area is only for holders of the EntryMint token."
    // 2. Button
        // A. If user has token: "Enter"
        // B. If not: "Mint My Token" 
            // + error/status if mint fails

const Gate = () => {
    return (
        <div>
            <h1>This area is only for holders of the EntryMint Token.</h1>
        </div>
    )
}

export default Gate;