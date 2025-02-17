import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

class About extends React.Component {
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
            <b>About DashMoney.io</b>
          </h3>
        </div>
        <div
          className="bodytextnotop"
          style={{
            marginTop: "2rem",
          }}
        >
          <p>
            DashMoney is the idea to use Dash as Money. Dash is the
            cryptocurrency started by Evan Duffield.
          </p>
          <p>
            This webpage distributes the <b>Name-Wallet</b> that has been build
            over the past several months. (OCT2024 - FEB2025)
          </p>
          <p>
            You will also find here, links to the Approach #2 Merchant Frontends
            that have been built, so any entrepreneur that wants to use Dash as
            Money can get started.
          </p>
          <p style={{ marginTop: "2rem", marginBottom: "0rem" }}>
            Please check out the video, to see DashMoney in action.
          </p>
          <h5
            style={{
              marginTop: ".5rem",
              marginLeft: "1.4rem",
              marginBottom: "0rem",
            }}
          >
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://vimeo.com/1043292508"
            >
              <b style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                Name-Wallet Demonstration video
              </b>
            </a>
            <span className="textsmaller"> (No audio, sorry.)</span>
          </h5>
        </div>
      </>
    );
  }
}

export default About;
