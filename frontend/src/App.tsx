// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import { WagmiProvider, createConfig } from 'wagmi'
import { sepolia } from 'wagmi/chains';
import { createClient, http } from 'viem';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Gate from './components/Gate';
import Success from './components/Success';

const config = createConfig({
  chains: [sepolia],
  client({ chain }) {
    return createClient({ chain, transport: http()}) // what's the http argument?
  }
})
 
function App() {
  return (
    <WagmiProvider config={config} reconnectOnMount={true}>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gate" element={<Gate />} />
          <Route path="/success" element={<Success />}/>
        </Routes>
      </Router>
    </WagmiProvider>
  )
}

export default App;