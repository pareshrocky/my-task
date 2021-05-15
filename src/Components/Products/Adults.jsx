import React from "react";
import Tabsection from "./Tabs/Tabsection.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Medicine from "./Tabs/Medicine.jsx";
import HealthSupply from "./Tabs/HealthSupply.jsx";
const Adults = () => {
  return (
    <div className="container py-3" style={{ width: "80%" }}>
      <Tabsection />
      <Switch>
        <Route path="/product/adults/medicine">
          <Medicine />
        </Route>
        <Route path="/product/adults/healthsupply">
          <HealthSupply />
        </Route>
        <Redirect to="/product/adults/medicine" />
      </Switch>
    </div>
  );
};
export default Adults;
