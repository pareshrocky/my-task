import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from "reactstrap";
import { Link } from "react-router-dom";
const Navsection = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand className="ml-lg-5" href="/">
        LOGO
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="nav-div mr-auto" navbar>
          <NavItem className="mx-auto mb-2">
            <Link to="/" className="text-white p-0 text-decoration-none ">
              Home
            </Link>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle
              nav
              caret
              className="text-white p-0 text-decoration-none mb-2"
            >
              Products
              <Badge color="secondary" className="ml-2 rounded-circle">
                6
              </Badge>
            </DropdownToggle>
            <DropdownMenu right className="dropDown">
              <DropdownItem>
                <Link
                  className="text-decoration-none p-0 text-secondary"
                  to="/product/children"
                >
                  Children
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  className="text-decoration-none p-0 text-secondary"
                  to="/product/adults"
                >
                  Adults
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link
                  className="text-decoration-none p-0 text-secondary"
                  to="/product/elders-old"
                >
                  Elders or Old
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem className="mx-auto mb-2">
            <Link to="/photos" className="text-white p-0 text-decoration-none ">
              Photos
            </Link>
          </NavItem>
          <NavItem className="mx-auto mb-2">
            <Link to="/company" className="text-white p-0 text-decoration-none">
              Company
              <Badge color="secondary" className="ml-2 rounded-circle">
                6
              </Badge>
            </Link>
          </NavItem>
          <NavItem className="mx-auto mb-2">
            <Link
              className="text-white p-0 text-decoration-none "
              to="/contacts"
            >
              Contacts
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Navsection;
