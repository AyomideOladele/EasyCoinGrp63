// Import React library
import React from "react";

const Coin = ({ name, icon, price, symbol, website }) => {
  return (
    <div className="coin">
      <h1> {name} </h1>
      <img src={icon} alt="coin icon" />
      <h3>Price: {price} </h3>
      <h3 className="symbol">Symbol: {symbol} </h3>
      <a className="website" href={website}>
        {" "}
        {website}{" "}
      </a>
    </div>
  );
};

export default Coin;
