import React, { useEffect, useRef, useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";

// backgrounds
import HomeBG from '../../assets/images/Better-Tomorrow.jpg';
import AboutBG from '../../assets/images/Hong-Kong.jpg';
import ContactBG from '../../assets/images/revive.jpg';

function Navbar() {
  const[backgroundImage, setBackgroundImage] = useState(HomeBG);

  return (
    <div className="navbar-container" style={{backgroundImage: `url(${backgroundImage})` }} >
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
              <Link to={"/"} className="nav-link navbar-brand" onClick={() => setBackgroundImage(HomeBG)}>
                Navbar
              </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                    <Link to={'/about'} className="nav-link" onClick={() => setBackgroundImage(AboutBG)}>About <span className="sr-only">(current)</span></Link> 
                </li>
                <li className="nav-item">
                    <Link to={'/contact'} className="nav-link" onClick={() => setBackgroundImage(ContactBG)}>Contact</Link>
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
