import React from "react";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import Navsection from "./Navsection.jsx";
import Feedback from "./Feedback.jsx";
import Home from "./Home.jsx";
import PhotosApi from "./PhotosApi.jsx";
import Products from "./Products/Products.jsx";
const Navigations = () => {
  return (
    <Router>
      <Navsection />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <h1>This is our Company.</h1>
        </Route>
        <Route path="/photos">
          <PhotosApi />
        </Route>
        <Route exact path="/contacts">
          <Feedback />
        </Route>
        <Route path="/product">
          <Products />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </Router>
  );
};
export default Navigations;
