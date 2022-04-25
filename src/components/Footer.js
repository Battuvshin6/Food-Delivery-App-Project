import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="main-footer">
      <Container>
        <Row className="d-flex d-md-flex">
          <Col lg={4} md={4}>
            <div className="top-items">
              <img src="/images/logo.svg" width="30" height="30" alt="logo" />
              <p>Food Delivery</p>
            </div>
          </Col>
          <Col lg={4} md={4} xs={6}>
            <div className="secondrow-left">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Нүүр
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Хоолны цэс
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    Хүргэлтийн бүс
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col lg={4} md={4} xs={6}>
            <div className="secondrow-right">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    Холбоо барих
                  </a>
                </li>
              </ul>
              <div className="phone-numbers">
                <ul>
                  <li> (976) 77123456</li>
                  <li>(976) 77123456</li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="d-none d-md-block" />
        <Row className="bottom-part">
          <Col lg={6} md={6}>
            <div className="d-md-block">
              <div className="join-us d-none d-md-block">
                <p>Бидэнтэй нэгдээрэй</p>
              </div>
              <div className="logos d-sm-block d-lg-flex d-md-flex">
                <a href="http://www.facebook.com" target="_blank">
                  <img src="/images/fb.svg" width="20" height="20" />
                </a>
                <a href="http://www.instagram.com" target="_blank">
                  <img src="/images/ig.svg" width="20" height="20" />
                </a>
                <a href="http://www.twitter.com" target="_blank">
                  <img src="/images/twitter.svg" width="20" height="20" />
                </a>
              </div>
            </div>
            <hr className="d-block d-md-none" />
          </Col>
          <Col lg={6} md={6} sm={12}>
            <Row>
              <Col lg={6} sm={12}>
                <div className="terms-service d-md-flex d-lg-flex">
                  <div className="bottom-items">
                    <a href="#" target="_blank">
                      Үйлчилгээний нөхцөл
                    </a>
                  </div>
                  <div className="bottom-items">
                    <a href="#" target="_blank">
                      Нууцлалын бодлого
                    </a>
                  </div>
                </div>
              </Col>
              <Col lg={6} sm={12}>
                <div className="bottom-paragraphs">
                  <div className="copyright">
                    <p>&copy; 2020 MStars Foods LLC</p>
                  </div>
                  <div className="last-paragraph d-none d-md-block">
                    <p>Зохиогчийн эрх хуулиар хамгаалагдсан.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
