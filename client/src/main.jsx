// Import the necessary React, ReactDOM modules, and necessary components
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";

// Render the TransactionsProvider and App components to the root DOM element
ReactDOM.render(
  <TransactionsProvider>
    <App />
  </TransactionsProvider>,
  document.getElementById("root"),
);
