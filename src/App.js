import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/MainComponent";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Order from "./components/Order";
import Login from "./components/Login";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import "./styles/MainComp.css";
import Register from "./components/contents/Register";
import ForgotPassword from "./components/contents/ForgotPassword";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/order/*" element={<Order />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
