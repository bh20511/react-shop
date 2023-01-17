// import
import React from "react";
import Nav from "./component/Nav";
import Footer from "./component/Footer";
import Login from "./pages/member/Login";
import Home from "./pages/Home";
import SignUp from "./pages/member/SignUp";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Token from "./pages/Token";
import Cart from "./pages/Cart";
import CartCard from "./component/cart/CartCard";

import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:sid" element={<ProductDetail />} />

          <Route path="/token" element={<Token />} />
          <Route path="/cartcard" element={<CartCard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
