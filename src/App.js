import React, { Component } from "react";
import Routers from "./Routers"
import NavBar from "./component/Header/NavBar";
import SlideOn from "./component/slide_bar/SlideOn";
import Footer from "./component/footer/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  slideClickHandler = () => {
    this.setState((prevState) => {
      return { isSlideOpen: !prevState.isSlideOpen };
    });
  };

  slideHideHandlar = () => {
    this.setState({ isSlideOpen: false });
  };

  state = {
    isSlideOpen: false
  };

  render() {
    let slide_on;
    if (this.state.isSlideOpen) {
      slide_on = <SlideOn slideHideHandlar={this.slideHideHandlar} />;
    }
    return (
      <div style={{ height: "100%", marginTop: "8vh" }}>
        <Router>
          <NavBar slideClickHandler={this.slideClickHandler} />
          <Routers/>  
          {slide_on}
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
