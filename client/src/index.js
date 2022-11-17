import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import 'antd/dist/antd.min.css'
import { CarProvider } from "./providers/cars";
import { UserProvider } from "./providers/User";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <CarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CarProvider>
    </UserProvider>
  </React.StrictMode>
);
