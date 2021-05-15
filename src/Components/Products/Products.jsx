import React from "react";
import { Switch, Route } from "react-router-dom";
import Children from "./Children.jsx";
import Adults from "./Adults.jsx";
import ElderOld from "./ElderOld.jsx";
const Products = () => {
  return (
    <Switch>
      <Route path="/product/children">
        <h1 className="font-weight-light text-info mt-5">
          Products for Children
        </h1>
        <Children />
      </Route>
      <Route path="/product/adults">
        <h1 className="font-weight-light text-info mt-5">Adults</h1>
        <Adults />
      </Route>
      <Route path="/product/elders-old">
        <h1 className="font-weight-light text-info mt-5">Elders Or Old</h1>
        <ElderOld />
      </Route>
    </Switch>
  );
};
export default Products;
