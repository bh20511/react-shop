// import
import React from "react";
import Nav from "./component/Nav";
import Login from "./pages/member/Login";
import Home from "./pages/Home";
import SignUp from "./pages/member/SignUp";
import { AuthContextProvider } from "./contexts/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
};

export default App;
