import React from "react";
import { Container, Row, Col } from "reactstrap";

const Consection = () => {
  return (
    <Container className="pt-5 mt-4 px-lg-0">
      <Row className="mx-auto">
        <Col
          lg="3"
          md="6"
          sm="12"
          className="px-3 d-flex flex-column justify-content-center align-items-center"
        >
          <i className="fa-flip-horizontal icon telegram w-25 h-25 fab fa-telegram-plane"></i>
          <h2 className="text-center pt-3 pb-3">About</h2>
          <p className="lorem text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute
            erat volutpat.
          </p>
        </Col>
        <Col
          lg="3"
          md="6"
          sm="12"
          className="px-3 d-flex flex-column justify-content-center align-items-center"
        >
          <i className=" icon w-25 h-25 fas fa-star"></i>
          <h2 className="text-center pt-3 pb-3">Company</h2>
          <p className="lorem text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute
            erat volutpat.
          </p>
        </Col>
        <Col
          lg="3"
          md="6"
          sm="12"
          className="px-3 d-flex flex-column justify-content-center align-items-center"
        >
          <i className="icon w-25 h-25 fas fa-comment "></i>
          <h2 className="text-center pt-3 pb-3">Services</h2>
          <p className="lorem text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute
            erat volutpat.
          </p>
        </Col>
        <Col
          lg="3"
          md="6"
          sm="12"
          className="px-3 d-flex flex-column justify-content-center align-items-center"
        >
          <i className="icon w-25 h-25 fas fa-envelope"></i>
          <h2 className="text-center pt-3 pb-3">Contact</h2>
          <p className="lorem text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua duis aute
            erat volutpat.
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default Consection;
