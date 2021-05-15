import React, { useState } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { useRouteMatch } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import classnames from "classnames";

const Tabsection = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  let match = useRouteMatch();
  return (
    <div>
      <Nav tabs>
        <LinkContainer to={`${match.url}/medicine`}>
          <NavItem className="w-50">
            <NavLink
              className={classnames(
                { active: activeTab === "1" },
                { tabLink: true }
              )}
              onClick={() => {
                toggle("1");
              }}
            >
              Medicines
            </NavLink>
          </NavItem>
        </LinkContainer>
        <LinkContainer to={`${match.url}/healthsupply`}>
          <NavItem className="w-50">
            <NavLink
              className={classnames(
                { active: activeTab === "2" },
                { tabLink: true }
              )}
              onClick={() => {
                toggle("2");
              }}
            >
              Health Suppliments
            </NavLink>
          </NavItem>
        </LinkContainer>
      </Nav>
    </div>
  );
};

export default Tabsection;
