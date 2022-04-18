import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Cards = (props) => {
  console.log(props.foods);
  let url = "https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com";

  const renderCard = (card) => {
    return (
      <Col sm={6} lg={3}>
        <Card key={card.category_id}>
          <Card.Img variant="top" src={url + card.image} />
          <Card.Body>
            <Card.Text className="badge">{card.discount}%</Card.Text>
            <Card.Title className="foodName">{card.name}</Card.Title>
            <Card.Text className="foodPrice">{card.price}₮</Card.Text>
            <Card.Text className="activePrice">
              {card.discount > 0
                ? `${card.price - (card.price * card.discount) / 100}₮`
                : ""}
              {""}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  return (
    <Container fluid>
      <Row xs={2} md={2} className="d-flex">
        {props.foods.filter((item, index) => index < 4).map(renderCard)}
      </Row>
    </Container>
  );
};

export default Cards;
