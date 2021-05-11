import React from "react";
import { Jumbotron } from "reactstrap";
import Consection from "./Consection";
import Gallery from "./Gallery";
import Footer from "./Footer";
import Carosection from "./Carosection";
const Home = () => {
  return (
    <div>
      <Jumbotron className="jumbo d-flex justify-content-center align-items-center mb-0 w-100">
        <h1 className="display-3 text-center text-white font-weight-lighter">
          Header Image
        </h1>
      </Jumbotron>
      <div className="pt-2 pb-1 bg-light">
        <h2 className="mb-2 px-5">Amazing responsive carousel</h2>
        <span className="dot d-inline-block mx-2 bg-secondary"></span>
        <span className="dot d-inline-block mx-2 "></span>
        <span className="dot d-inline-block mx-2"></span>
      </div>
      <Consection />
      <div
        className=" bg-light d-flex flex-column justify-content-center align-item-center mt-5"
        style={{ padding: "0 21% 0" }}
      >
        <h2 className="text-center mt-5 pt-5 pb-3">Amazing Title</h2>
        <p className="lorem text-center mb-5 pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <Gallery />
      <Carosection />
      <Footer />
    </div>
  );
};
export default Home;
