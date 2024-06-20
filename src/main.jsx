import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./components/Context.jsx";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <DataProvider>
      <App />
     </DataProvider>
  </React.StrictMode>
);
