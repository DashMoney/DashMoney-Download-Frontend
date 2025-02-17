import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import RentalsIMG from "../Images/RentalsIMG.jpg";
import StoreIMG from "../Images/StoreIMG.jpg";

import Image from "react-bootstrap/Image";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Figure from "react-bootstrap/Figure";

import "./LandingPage.css";

class Frontends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div
          style={{
            //textAlign: "center",
            marginTop: "1.5rem",
            //font-family: Arial, Helvetica, sans-serif;
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <h3>
            <b>Merchant Frontends</b>
          </h3>
        </div>
        <div //className="bodytext"
        ></div>
        <Container>
          <Row className="justify-content-around">
            <Col sm={8} md={4} style={{ marginTop: ".5rem" }}>
              <Image
                fluid
                rounded
                id="dash-landing-page"
                src={RentalsIMG}
                alt="Rentals Frontend"
              />

              <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.dashpayrentals.com"
                >
                  <b>DashPayRentals.com</b>
                </a>
              </h4>
            </Col>

            <Col sm={8} md={4} style={{ marginTop: ".5rem" }}>
              <Image
                fluid
                rounded
                id="dash-landing-page"
                src={StoreIMG}
                alt="Online-Store Frontend"
              />
              <h4 style={{ textAlign: "center", marginTop: "1rem" }}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.dashgetpaid.com"
                >
                  <b>DashGetPaid.com</b>
                </a>
              </h4>
            </Col>
          </Row>

          <Row>
            <Col xs={2} md={2}></Col>

            <Col xs={8} md={8}>
              <p></p>
              <div className="positionCaptionAlone">
                <Figure.Caption>
                  <b>Preview of Approach #2 Merchant Frontends </b>
                </Figure.Caption>
              </div>
            </Col>
            <Col xs={2} md={2}></Col>
          </Row>
        </Container>
        <div
          className="bodytextnotop"
          style={{
            marginTop: "2rem",
          }}
        >
          <p>
            To operate your own Dash Merchant Frontend just visit the Github
            link below, and follow the README instructions.
          </p>
          <ul>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/DashMoney/DashPayRentals-Frontend"
              >
                <b>Rentals Frontend - GitHub</b>
              </a>
            </li>
            <li>
              {" "}
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/DashMoney/Online-Store-Frontend"
              >
                <b>Online Store Frontend - GitHub</b>
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Frontends;
