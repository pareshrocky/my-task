import React from "react";
import Tabsection from "./Tabs/Tabsection.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Medicine from "./Tabs/Medicine.jsx";
import HealthSupply from "./Tabs/HealthSupply.jsx";
const Children = () => {
  return (
    <div className="container py-3" style={{ width: "80%" }}>
      <Tabsection />
      <Switch>
        <Route path="/product/children/medicine">
          <Medicine />
        </Route>
        <Route path="/product/children/healthsupply">
          <HealthSupply />
        </Route>
        <Redirect to="/product/children/medicine" />
      </Switch>
    </div>
  );
};
export default Children;
