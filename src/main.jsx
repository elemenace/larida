import React from "react";
import ReactDOM from "react-dom/client"; // Use the new ReactDOM API
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root using the new API
root.render(
  <BrowserRouter>
    {/* Wrap the entire app with BrowserRouter */}
    <App />
  </BrowserRouter>
);
