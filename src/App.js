import React from "react";
import "./App.css";
import { useWeb3 } from "@openzeppelin/network/react";
import Web3Data from "./Web3Data";
const infuraProjectId = process.env.INFURA_PROJECT_ID;

function App() {
  const web3Context = useWeb3(
    `wss://rinkeby.infura.io/ws/v3/${infuraProjectId}`
  );
  return (
    <div className="App">
      <div>
        <h1>Metamask ETH Detail</h1>
        <Web3Data title="Web3 Data" web3Context={web3Context} />
      </div>
    </div>
  );
}
export default App;
