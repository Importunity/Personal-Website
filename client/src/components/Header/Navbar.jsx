import React, { useEffect, useRef, useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";

function Navbar() {
  return (
    <div>
      <Router>
        <div>
          <nav>
            <div class="menu-icon">
              <i class="fa fa-bars fa-2x"></i>
            </div>
            <div class="logo">LOGO</div>
            <div class="menu">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/amadeus/blog/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;
