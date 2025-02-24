import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FaApple } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { FaLinux } from "react-icons/fa";

class Downloads extends React.Component {
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
          }}
        >
          <h3 style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
            <b>Downloads (Testnet Only)</b>
            {/* (testnet only) */}
          </h3>
        </div>
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.proofofdash.com"
          >
            <b style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
              ProofOfDash.com
            </b>
          </a>
        </h2>
        <p
          style={{
            fontSize: "large",
            textAlign: "center",
            marginTop: "1rem",
            marginLeft: "3rem",
            marginRight: "3rem",
            marginBottom: "2rem",
          }}
        >
          To understand how the Name-Wallet works prior to download, you can
          tryout it out in your browser at <b>ProofofDash.com</b>.
        </p>

        <Container>
          <Row className="justify-content-between">
            <Col style={{ marginTop: ".5rem" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div style={{ textAlign: "center" }}>
                    <FaApple size="6em" />
                  </div>
                  <Card.Title style={{ textAlign: "center" }}>Mac</Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ textAlign: "right", marginRight: "1rem" }}
                  >
                    dmg
                  </Card.Subtitle>

                  <Card.Text>
                    <b>Delayed - Time to Resolve Undetermined</b>
                  </Card.Text>
                  <Card.Text>
                    Determining best way to resolve signing requirement.
                  </Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Card.Text //href="#"
                    >
                      Download
                    </Card.Text>
                    <Card.Text //href="#"
                    >
                      Github Link
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ marginTop: ".5rem" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div style={{ textAlign: "center" }}>
                    <FaLinux size="6em" />
                  </div>
                  <Card.Title style={{ textAlign: "center" }}>Linux</Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ textAlign: "right", marginRight: "1rem" }}
                  >
                    AppImage
                  </Card.Subtitle>
                  <Card.Text>
                    This is the Name-Wallet for download. Currently, only
                    available for testnet usage.
                  </Card.Text>
                  <Card.Text>
                    Set <b>AppImage</b> to executable in order to run
                    application.
                  </Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Card.Link href="https://github.com/DashMoney/Name-Wallet-Desktop/releases/download/v0.1.0/Name-Wallet-1.0.0.AppImage">
                      <b>Download</b>
                    </Card.Link>
                    {/* <Card.Link //href="#"
                    >
                      Github Link
                    </Card.Link> */}
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/DashMoney/Name-Wallet-Desktop/releases/tag/v0.1.0"
                    >
                      <b>Github Link</b>
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col style={{ marginTop: ".5rem" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <div style={{ textAlign: "center" }}>
                    <TfiMicrosoftAlt size="6em" />
                  </div>
                  <Card.Title style={{ textAlign: "center" }}>
                    Windows
                  </Card.Title>
                  <Card.Subtitle
                    className="mb-2 text-muted"
                    style={{ textAlign: "right", marginRight: "1rem" }}
                  >
                    exe
                  </Card.Subtitle>
                  <Card.Text>
                    This is the Name-Wallet for download. Currently, only
                    available for testnet usage.
                  </Card.Text>
                  <Card.Text>
                    <b>
                      Signing was not performed on this Windows distributable.
                    </b>
                  </Card.Text>
                  <div className="d-flex justify-content-evenly">
                    <Card.Link href="https://github.com/DashMoney/Name-Wallet-Desktop/releases/download/v0.1.0/Name-Wallet-1.0.0-setup.exe">
                      <b>Download</b>
                    </Card.Link>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://github.com/DashMoney/Name-Wallet-Desktop/releases/tag/v0.1.0"
                    >
                      <b>Github Link</b>
                    </a>
                    {/* <Card.Link //href="#"
                    >
                      Github Link
                    </Card.Link> */}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <p
          style={{
            marginBottom: "0rem",
            marginTop: "2.5rem",
            opacity: "0.75",
            fontSize: "small",
          }}
        >
          Everything will remain "testnet only" until the new DCG SDK is
          released.
        </p>
        <p style={{ marginBottom: "0rem", opacity: "0.75", fontSize: "small" }}>
          When released, Proxy Accounts will be implemented with Identities
          instead of wallets, and the Platform proofs will be added to the
          Name-Wallet.
        </p>
        <p
          style={{
            opacity: "0.75",
            fontSize: "small",
          }}
        >
          There will be a video to showcase when complete.
        </p>
      </>
    );
  }
}

export default Downloads;
