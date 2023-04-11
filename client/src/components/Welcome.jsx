// Importing React and useContext modules from the React library
import React, { useContext } from "react";
//Import required images, components and style sheet
import { TransactionContext } from "../context/TransactionContext";
import VideoTutorialIcon from '../../images/video-tutorial.png';
import FAQIcon from '../../images/faq.png';
import CustomerServiceIcon from '../../images/customer-service.png';
import BitcoinIcon from '../../images/bitcoin.png';
import EthereumIcon from '../../images/ethereum.png';
import MoreCurrenciesIcon from '../../images/cryptocurrencies.png';
import Header from "./Header.jsx";
import "./style/welcome.css";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
  />
);

const Welcome = () => {
  const { currentAccount, connectWallet, handleChange, sendTransaction, formData, isLoading } = useContext(TransactionContext);
  const handleSubmit = (e) => {
    const { addressTo, amount, message } = formData;
    e.preventDefault();
    if (!addressTo || !amount || !message) return;
    sendTransaction();
  };

  return (
  <>
    <div className="container">
      <Header/>
      <div className = "left-container">
        <div >
          {!currentAccount && (
            <button className="wallet-button" type="button" onClick={connectWallet} >
              <p className="wallet-label">Click to connect wallet</p>
            </button>
          )}
        </div>
        <div className="quickSend-box">
          <div className="quickSend-label">
            <p> {(currentAccount)} </p>
            <p> Quick Send </p>
          </div>
          <div>
            <input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
            <input placeholder="Amount" name="amount" type="number" handleChange={handleChange} />
            <input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />
          </div>
            <button className="quickSend-button" onClick={handleSubmit}>
              Send now
            </button>
          </div>
        </div>
      </div>

      <div className = "right-container">
        <div className = "pane">
          <label className="HelpHub-label" > HelpHub </label>
          <div className="HelpHub-pane">
            <div className="VButtonLabel">
              <button className="Button">
                <img src={VideoTutorialIcon} alt="Tutorials" />
              </button>
              <label className="ButtonLabel"> Tutorials </label>
            </div>
            <div className="VButtonLabel">
              <button className="Button">
                <img src={FAQIcon} alt="FAQs" />
              </button>
              <label className="ButtonLabel" > FAQs </label>
            </div>
            <div className="VButtonLabel">
              <button className="Button">
                <img src={CustomerServiceIcon} alt="Customer Support" />
              </button>
            <label className="ButtonLabel"> Customer Support </label>
            </div>
          </div>
        </div>
        <div className = "pane">
        <label className="Exchange-label"> Exchange </label>
          <div className="Exchange-pane">
            <div className="VButtonLabel">
              <button className="Button">
                <img src={BitcoinIcon} alt="Bitcoin" />
              </button>
              <label className="ButtonLabel" > Bitcoin </label>
            </div>
            <div className="VButtonLabel">
              <button className="Button">
                <img src={EthereumIcon} alt="Etherium" />
              </button>
              <label className="ButtonLabel"> Etherium </label>
            </div>
            <div className="VButtonLabel">
              <button className="Button">
                <img src={MoreCurrenciesIcon} alt="More Currencies" />
              </button>
              <label className="ButtonLabel"> Market </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
