import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="nav-section row" id="nav-section">
        <Navbar expand="md" className="">
          <Container fluid id="container">
            <div className="nav-logo col-sm-6 order-sm-2">
              <Navbar.Brand href="/" className="logo-brand" id="logo-brand">
                <img src="/images/logo.svg" alt="logo" />
                <span className="logo-title">Food Delivery</span>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              id="nav-toggler"
              className="border-0 col-sm-3 order-sm-1"
            >
              <img
                src="images/menuToggle.svg"
                alt=""
                aria-controls="navbarScroll"
                className="order-sm-1"
                className="order-sm-1"
              />
            </Navbar.Toggle>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="nav-menu d-flex w-100 justify-content-around"
                className="nav-menu"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <a href="#action1" style={{ color: "#F17228" }}>
                  НҮҮР
                </a>
                <a href="#action2">ХООЛНЫ ЦЭС</a>
                <a href="#action2">ХҮРГЭЛТИЙН БҮС</a>
              </Nav>
            </Navbar.Collapse>
            <div className="search">
              <input type="text" name="search" id="search" placeholder="Хайх" />
            </div>
            <div className="btn-div col-sm-3 order-sm-4" id="btn-div">
              <button type="submit" className="search-btn">
                <img src="/images/search.svg" alt="search" />
                <p></p>
              </button>
              <button type="submit" className="basket-btn">
                <img src="/images/basket.svg" alt="" />
                <p>Сагс</p>
              </button>
              <button type="submit" className="login-btn">
                <img src="/images/login.svg" alt="" />
                <p>Нэвтрэх</p>
              </button>
            </div>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
