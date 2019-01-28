import React, { Component } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Book from "./components/footerNav/Book";
import ContactUs from "./components/footerNav/ContactUs";
import AboutUs from "./components/footerNav/AboutUs";
import Home from "./components/Home/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={AboutUs} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/book" component={Book} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
