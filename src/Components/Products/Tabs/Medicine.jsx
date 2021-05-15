import React from "react";
import { Button, Row, Col } from "reactstrap";
const Medicine = () => {
  return (
    <div>
      <Row className="bg-light mx-auto  pt-3 d-flex flex-row align-items-center justify-content-around">
        <Col
          sm="12"
          lg="6"
          md="6"
          className="d-flex flex-column align-items-center justify-content-center mt-3 "
        >
          <div className="med-1"></div>
          <p className="mt-3">Paracetamol Tablets</p>
        </Col>
        <Col
          sm="12"
          lg="6"
          md="6"
          className="d-flex flex-column align-items-center"
        >
          <Button color="success" className="med-btn my-2">
            Place Order
          </Button>
          <Button color="info" className="med-btn my-2">
            View Details
          </Button>
        </Col>
      </Row>
      <Row className="bg-light mx-auto pt-3 d-flex flex-row align-items-center justify-content-around">
        <Col
          sm="12"
          lg="6"
          md="6"
          className="d-flex flex-column align-items-center justify-content-center mt-3 "
        >
          <div className="med-2"></div>
          <p className="mt-3">Levocitrizine Tablets</p>
        </Col>
        <Col
          sm="12"
          lg="6"
          md="6"
          className="d-flex flex-column align-items-center"
        >
          <Button color="success" className="med-btn my-2">
            Place Order
          </Button>
          <Button color="info" className="med-btn my-2">
            View Details
          </Button>
        </Col>
      </Row>
    </div>
  );
};
export default Medicine;
