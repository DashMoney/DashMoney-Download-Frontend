import React from "react";
import DashIcon from "../../Images/white-d.svg";
import DashIconBlue from "../../Images/blue-d.svg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

//import Button from "react-bootstrap/Button";
//import Dropdown from "react-bootstrap/Dropdown";
//import NavLink from "react-bootstrap/NavLink";

//import Badge from "react-bootstrap/Badge";

//import Offcanvas from "react-bootstrap/Offcanvas";

import CloseButton from "react-bootstrap/CloseButton";

//import NavSelects from "./NavSelects";

import "./TopNav.css";

class TopNav extends React.Component {
  handleCloseClick = () => {
    this.props.toggleTopNav();
  };

  render() {
    return (
      <>
        <Navbar
          //expanded={this.props.expandedTopNav}
          //className="Top"
          fixed="top"
          bg={this.props.mode}
          variant={this.props.mode}
          //expand={false}
          collapseOnSelect
          expand="lg"
          //className="bg-body-tertiary"
        >
          <Container className="d-flex justify-content-evenly">
            <Navbar.Brand>
              {this.props.mode === "primary" ? (
                <img
                  src={DashIcon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Dash logo"
                />
              ) : (
                <img
                  src={DashIconBlue}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Dash logo"
                />
              )}
              {"   "}
              {this.props.mode === "primary" ? (
                <>
                  <b className="lightMode">
                    {import.meta.env.VITE_FRONTEND_NAME}
                  </b>
                </>
              ) : (
                <>
                  <b>{import.meta.env.VITE_FRONTEND_NAME}</b>
                </>
              )}
            </Navbar.Brand>
            <div style={{ marginLeft: "2rem" }}>
              {this.props.mode === "primary" ? (
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onChange={() => this.props.handleMode()}
                />
              ) : (
                <Form.Check
                  type="switch"
                  id="custom-switch-dark"
                  onChange={() => this.props.handleMode()}
                />
              )}
            </div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto d-flex justify-content-evenly">
                <Nav.Link
                  style={{ marginRight: "2rem" }}
                  onClick={() => this.props.scrollToAbout()}
                >
                  <b className="lightMode">About</b>
                </Nav.Link>
                <Nav.Link
                  style={{ marginRight: "2rem" }}
                  onClick={() => this.props.scrollToDownloads()}
                >
                  <b className="lightMode">Downloads</b>
                </Nav.Link>
                <Nav.Link
                  style={{ marginRight: "2rem" }}
                  onClick={() => this.props.scrollToFrontends()}
                >
                  <b className="lightMode">Merchant Frontends</b>
                </Nav.Link>
                <Nav.Link onClick={() => this.props.scrollToWhyMoney()}>
                  <b className="lightMode">Why Money?</b>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default TopNav;
