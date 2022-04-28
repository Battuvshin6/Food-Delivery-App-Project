import React, { Component } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import "../styles/Header.css";
class Header extends Component {
  render() {
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
              <input type="text" name="search" id="search" placeholder="Хайх" />
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
}

export default Header;
/*<li class="dropdown dropdown-1">
      TranslateY
      <ul class="dropdown_menu dropdown_menu-1">
        <li class="dropdown_item-1">Item 1</li>
        <li class="dropdown_item-2">Item 2</li>
        <li class="dropdown_item-3">Item 3</li>
          <li class="dropdown_item-4">Item 4</li>
          <li class="dropdown_item-5">Item 5</li>
      </ul>
    </li>*/
/*.dropdown_menu
   position: absolute
   top: 100%
   left: 0
   width: 100%
   perspective: 1000px
   z-index: -1
   li
    display: none
    color: white
    background-color: #34495e
    padding: 10px 20px
    font-size: 16px
    opacity: 0
    &:hover
      background-color: #2980b9 */
