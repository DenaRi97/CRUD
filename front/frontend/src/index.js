import React from "react";
import { createRoot } from "react-dom/client"
// import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/Context";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);