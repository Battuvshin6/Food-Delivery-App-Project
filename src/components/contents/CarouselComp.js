import React from "react";
import { Carousel, Container, Col, Row } from "react-bootstrap";

export default function CarouselComp() {
  /******************************** Main ******************************

Slider:
every 3 second slides to next picture
right left arrows will redirect to next or previous images
images will be 100% width of screen!
contents must have max-width so that it can look better in wider screen
Info-panel:
Only information texts and icons, DO NOT INCLUDE SCREENSHOTS OF FIGMA
Categories:
Design a Single Category and map over the Categories that from
back-end and render every category in row order
Every Category filters the foods (by name) and map over 4 of the foods
and send the information to Card component to render
When Бүгдийг харах button clicked Open Menu component with selected category
*******************************************************************************/
  const arrowright = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="40"
      fill="currentColor"
      background="white"
      className="bi bi-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
      />
    </svg>
  );

  const arrowleft = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="40"
      fill="currentColor"
      className="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
      />
    </svg>
  );

  return (
    <>
      <Carousel fade={true} nextIcon={arrowright} prevIcon={arrowleft}>
        <Carousel.Item interval={999999}>
          <img
            className="d-block mw-100"
            src="/images/background.jpg"
            alt="First slide"
          />
          <Row className="position-absolute top-0 start-0 w-100 carousel-row">
            <Col className="position-relative carousel-images">
              <img
                className="plate1 position-relative mw-25"
                src="/images/plate1.png"
                alt="plate1"
              />
              <img
                className="plate2 position-relative mw-25"
                src="/images/plate2.png"
                alt="plate2"
              />
            </Col>
            <Col md={3}>
              <div className="main-car position-absolute start-50">
                <h3>MStars Food delivery</h3>
                <span id="carouselSpan" />
                <div id="carouselText">
                  {" "}
                  Хосгүй амтыг хормын дотор хүргэж өгнө.
                </div>
              </div>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="/images/Slider2.png"
            alt="Second slide"
          />

          <Carousel.Caption className="end position-absolute second-car start-50">
            <h3>Сет хоол гарч эхэллээ.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slider3.png"
            alt="Third slide"
          />

          <Carousel.Caption className="position-absolute second-car start-50">
            <h3>Тун удахгүй</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
