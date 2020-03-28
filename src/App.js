import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./assets/scss/material-kit-react.scss?v=1.8.0";

//pages
import Home from "./views/Home/Home.js"; 
import About from "./views/About/About.js";
import ContactUs from "./views/ContactUs/ContactUs.js";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact-us" exact component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
