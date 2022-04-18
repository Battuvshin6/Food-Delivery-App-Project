import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/MainComponent";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Search from "./components/Search";
import Order from "./components/Order";
import Login from "./components/Login";
import Menu from "./components/Menu";
import "./styles/MainComp.css";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
