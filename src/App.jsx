import React from "react";
import LocalForage from "localforage";

import Image from "react-bootstrap/Image";

import DashBkgd from "./Images/dash_digital-cash_logo_2018_rgb_for_screens.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "react-bootstrap/Button";

import TopNav from "./Components/TopNav/TopNav";

import About from "./Components/About";
import Downloads from "./Components/Downloads";
import Frontends from "./Components/Frontends";
import WhyMoney from "./Components/WhyMoney";

import LandingPage from "./Components/LandingPage";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: import.meta.env.VITE_BKGD,

      expandedTopNav: false,
    };
  }

  scrollToAbout = () => {
    this.positionAbout.scrollIntoView({
      // behavior: "instant",
      block: "start",
      //inline: "nearest",
    });
  };

  scrollToDownloads = () => {
    this.positionDownloads.scrollIntoView({
      // behavior: "instant",
      block: "start",
      //inline: "nearest",
    });
  };

  scrollToFrontends = () => {
    this.positionFrontends.scrollIntoView({
      // behavior: "instant",
      block: "start",
      //inline: "nearest",
    });
  };

  scrollToWhyMoney = () => {
    this.positionWhyMoney.scrollIntoView({
      // behavior: "instant",
      block: "start",
      //inline: "nearest",
    });
  };

  //https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
  scrollToTop = () => {
    this.positionStart.scrollIntoView({
      behavior: "instant",
      block: "start",
      //inline: "nearest",
    });
  };

  closeTopNav = () => {
    this.setState({
      expandedTopNav: false,
    });
  };

  toggleTopNav = () => {
    if (this.state.expandedTopNav) {
      this.setState({
        expandedTopNav: false,
      });
    } else {
      this.setState({
        expandedTopNav: true,
      });
    }
  };

  hideModal = () => {
    this.setState({
      isModalShowing: false,
    });
  };

  showModal = (modalName) => {
    this.setState({
      presentModal: modalName,
      isModalShowing: true,
    });
  };

  handleMode = () => {
    if (this.state.mode === "primary")
      this.setState(
        {
          mode: "dark",
        },
        () => this.setFrontendLFmode()
      );
    else {
      this.setState(
        {
          mode: "primary",
        },
        () => this.setFrontendLFmode()
      );
    }
  };

  setFrontendLFmode = () => {
    let DashFrontend = LocalForage.createInstance({
      name: "dash-frontend",
    });
    DashFrontend.setItem("mode", this.state.mode)
      .then((d) => {
        console.log("Return from LF setitem:", d);
      })
      .catch((err) => {
        console.error("Something went wrong setting to localForage:\n", err);
      });
  };

  // handleLogout = () => {
  //   window.location.reload();
  // };
  //FIX THIS *** BELOW
  //componentDidMount() {}

  render() {
    this.state.mode === "primary"
      ? (document.body.style.backgroundColor = "rgb(280,280,280)")
      : (document.body.style.backgroundColor = "rgb(20,20,20)");

    this.state.mode === "primary"
      ? (document.body.style.color = "black")
      : (document.body.style.color = "white");

    return (
      <>
        <TopNav
          handleMode={this.handleMode}
          mode={this.state.mode}
          showModal={this.showModal}
          toggleTopNav={this.toggleTopNav}
          expandedTopNav={this.state.expandedTopNav}
          scrollToAbout={this.scrollToAbout}
          scrollToDownloads={this.scrollToDownloads}
          scrollToFrontends={this.scrollToFrontends}
          scrollToWhyMoney={this.scrollToWhyMoney}
        />
        <Image fluid="true" id="dash-bkgd" src={DashBkgd} alt="Dash Logo" />

        <Container className="g-0">
          <Row className="justify-content-md-center">
            <Col md={11} lg={10} xl={10} xxl={10}>
              <div
                ref={(el) => {
                  this.positionStart = el;
                }}
              ></div>

              <div className="bodytext">
                <div
                  ref={(about) => {
                    this.positionAbout = about;
                  }}
                ></div>
                <div
                  style={{
                    paddingTop: "3rem",
                  }}
                ></div>
                <About />

                <div
                  ref={(downloads) => {
                    this.positionDownloads = downloads;
                  }}
                ></div>
                <div
                  style={{
                    paddingTop: "2.5rem",
                  }}
                ></div>

                <Downloads />
                <div
                  ref={(frontends) => {
                    this.positionFrontends = frontends;
                  }}
                ></div>
                <div
                  style={{
                    paddingTop: "2.5rem",
                  }}
                ></div>
                <Frontends />

                <div
                  ref={(whyMoney) => {
                    this.positionWhyMoney = whyMoney;
                  }}
                ></div>
                <div
                  style={{
                    paddingTop: "2.5rem",
                  }}
                ></div>
                {/* <LandingPage /> */}
                <WhyMoney />

                <div
                  ref={(le) => {
                    this.positionEnd = le;
                  }}
                >
                  <Button
                    variant="primary"
                    //size="lg"
                    onClick={() => this.scrollToTop()}
                  >
                    <b>Scroll to Top</b>
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* #####    BELOW ARE THE MODALS    #####    */}
      </>
    );
  }
}

export default App;
