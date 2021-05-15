import React from "react";
import Tabsection from "./Tabs/Tabsection.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Medicine from "./Tabs/Medicine.jsx";
import HealthSupply from "./Tabs/HealthSupply.jsx";
const ElderOld = () => {
  return (
    <div className="container py-3" style={{ width: "80%" }}>
      <Tabsection />
      <Switch>
        <Route path="/product/elders-old/medicine">
          <Medicine />
        </Route>
        <Route path="/product/elders-old/healthsupply">
          <HealthSupply />
        </Route>
        <Redirect to="/product/elders-old/medicine" />
      </Switch>
    </div>
  );
};
export default ElderOld;
