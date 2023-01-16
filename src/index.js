import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartSlice from "./stores/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
