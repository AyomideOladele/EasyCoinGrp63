// Importing React and useContext modules from the React library
import React, { useContext } from "react";
//Import required components and style sheet
import { TransactionContext } from "../context/TransactionContext";
import "./style/transactions.css";

const TransactionsCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {

  return (
    <div>
      <div>
        <div>
          <a href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p>From: {(addressFrom)}</p>
          </a>
          <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p>To: {(addressTo)}</p>
          </a>
          <p>Amount: {amount} ETH</p>
          {message && (
            <>
              <br />
              <p>Message: {message}</p>
            </>
          )}
        </div>
        <div>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const { transactions, currentAccount } = useContext(TransactionContext);

  return (
    <div>
      <div class="transactions-container">
        {currentAccount ? (
          <h3 className="transactions-label">
            Latest Transactions
          </h3>
        ) : (
          <h3 className="transactions-label">
            Connect your account to see the latest transactions
          </h3>
        )}
        <div className="transactions-log">
          {[...transactions].reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
