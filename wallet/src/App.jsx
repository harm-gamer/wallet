import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {generateMnemonic} from "bip39"
// import { SolanaWallet } from '../component/Solona'
// import { EthWallet } from '../component/Ether'

function App() {
  const [mnemonic,setMnemonic] = useState("");

  return (
    <>
<button onClick={async function() {
  const mn = await generateMnemonic();
  setMnemonic(mn);
}}>
Create Seed phase
</button>

<input type="text" value={mnemonic}></input>
{/* <SolanaWallet mnemonic={mnemonic} /> */}
 {/* <EthWallet mnemonic={mnemonic} /> */}

      </>
   
  )
}

export default App
