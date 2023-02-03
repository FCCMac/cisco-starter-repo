import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import logo from "../cisco-logo.svg";

class Banner extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light" className="px-2">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand">
            <img
              alt="Cisco Logo"
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top"
            />{" "}
            Sextant
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default Banner;
