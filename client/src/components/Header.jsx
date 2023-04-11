// Import React library and necessary components/module
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import EasyCoinLogo from "../../images/EasyCoinLogo.png";
import Navbar from "./Navbar.jsx";
import "./style/header.css"

// Define a Header functional component
function Header() {
  return (
    // Renders the header element with the EasyCoin logo, site name, and Navbar component
    <header>
      <img src={EasyCoinLogo} alt="Easy Coin Logo" id="easy-coin-logo" />
      <h1>EASYCOIN</h1>
      <Navbar/>
    </header>
  );
}

// Export the Header component as the default export of the module
export default Header;