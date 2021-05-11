import React from "react";
import { Container, Row, Col } from "reactstrap";
const Gallery = () => {
  return (
    <Container className="pt-2 mt-5 pb-4 px-0">
      <h2 className="text-center mb-5">Gallery</h2>

      <Row>
        <Col lg="3" md="6" sm="12" className="px-3 mb-5">
          <div className="gal-img-1"></div>
        </Col>
        <Col lg="3" md="6" sm="12" className="px-3 mb-5">
          <div className="gal-img-2"></div>
        </Col>
        <Col lg="3" md="6" sm="12" className="px-3 mb-5">
          <div className="gal-img-3"></div>
        </Col>
        <Col lg="3" md="6" sm="12" className="px-3 mb-5">
          <div className="gal-img-4"></div>
        </Col>
      </Row>
    </Container>
  );
};
export default Gallery;
