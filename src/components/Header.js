import React from "react";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
export default function Header() {
  const navigate = useNavigate();
  // const [user, setUser] = useUser();

  return (
    <div className="nav-section row" id="nav-section">
      <Navbar expand="md" className="">
        <Container fluid id="container">
          <Navbar.Toggle
            className="dropdown dropdown-1"
            aria-controls="navbarScroll"
            id="nav-toggler"
            className="border-0 col-sm-3"
          >
            <img
              src="images/menuToggle.svg"
              alt=""
              aria-controls="navbarScroll"
            />
          </Navbar.Toggle>
          <div
            className="nav-logo col-sm-3 col-md-4 order-md-first col-lg-2"
            id="nav-logo"
          >
            <Navbar.Brand href="/" className="logo-brand" id="logo-brand">
              <img src="/images/logo.svg" alt="logo" />
              <span className="logo-title">Food Delivery</span>
            </Navbar.Brand>
          </div>
          <Navbar.Collapse
            id="navbarScroll"
            className="nav-menu col-md-7 col-lg-2 col-xl-3"
          >
            <Nav className="nav-menu" id="nav-menu" navbarScroll>
              <a href="#action1" style={{ color: "#F17228" }}>
                НҮҮР
              </a>
              <a href="#action2">ХООЛНЫ ЦЭС</a>
              <a href="#action2">ХҮРГЭЛТИЙН БҮС</a>
            </Nav>
          </Navbar.Collapse>
          <div className="search col-lg-2">
            <input type="text" name="search" id="search" placeholder="" />
          </div>
          <div
            className="btn-div col-sm-3 order-sm-4 col-md-1 col-lg-2"
            id="btn-div"
          >
            <button type="submit" className="search-btn">
              <img
                src="/images/search.svg"
                alt="search"
                className="search-img"
              />
              <a></a>
            </button>
            <button type="submit" className="basket-btn">
              <a href="#">
                <img src="/images/basket.svg" alt="" className="basket-img" />
                <p className="basket-ptag">Сагс</p>
              </a>
            </button>
            <button type="button" className="login-btn">
              <a href="/login">
                <img src="/images/login.svg" alt="" className="login-img" />
                <p className="login-ptag"> Нэвтрэх</p>
              </a>
            </button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}
