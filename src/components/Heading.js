import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar color="white" >
      <Container>
        <NavbarBrand href="/">Employee Details</NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">Add New</Link>
          </NavItem>
        </Nav>

      </Container>
    </Navbar>
  )
}
