import React, { useCallback } from "react";
import "./Web3Data.css";

export default function Web3Data(props) {
  const { web3Context } = props;
  const { networkId, networkName, accounts, providerName } = web3Context;
  const requestAuth = async (web3Context) => {
    try {
      await web3Context.requestAuth();
    } catch (e) {
      console.error(e);
    }
  };

  const requestAccess = useCallback(() => requestAuth(web3Context));

  return (
    <div className="container">
      <div className="content">
        <h3> {props.title} </h3>
        <div>
          Network:{" "}
          {networkId ? `${networkId} – ${networkName}` : "No connection"}
        </div>
        <div>
          Your address: {accounts && accounts.length ? accounts[0] : "Unknown"}
        </div>
      </div>

      <div className="flap">
        <div>Provider: {providerName}</div>

        {accounts && accounts.length ? (
          <div>Accounts & Signing Status: Access Granted</div>
        ) : !!networkId && providerName !== "infura" ? (
          <div>
            <button className="btn" onClick={requestAccess}>
              Connect MetaMask
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
