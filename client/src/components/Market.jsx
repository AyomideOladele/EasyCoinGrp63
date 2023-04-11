//Import React library, useEffect and useState modules
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";
import Header from "./Header.jsx";
import "./style/market.css";


const Market = () => {
  const [coinList, setCoinList] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) => {
      console.log(response.data);
      setCoinList(response.data.coins);
    });
  }, []);

  const searchedCoins = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(userInput.toLowerCase());
  });

  return (
    <div>
      <Header/>
      <div className="cryptoHeader">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setUserInput(event.target.value);
          }}
        />
      </div>
      <div className="coinDisplay">
        {searchedCoins.map((coin) => {
          return (
            <Coin
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
              website={coin.websiteUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Market;
