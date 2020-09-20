import React, { useEffect, useRef, useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";

// images
import AboutBG from '../../assets/images/Hong-Kong.jpg';
import ContactBG from '../../assets/images/revive.jpg';

import Umbrella from '../../assets/images/Umbrella.png';

function Navbar() {
  const[backgroundImage, setBackgroundImage] = useState("black");

  const[showMainText, setMainText] = useState(true);

  return (
    <div className="home-container" style={{backgroundColor: "black" }} >
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
              <Link to={"/"} className="nav-link navbar-brand nav-text" onClick={() => {setMainText(true);}} >
                U M B R E L L A
              </Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                    <Link to={'/about'} className="nav-link nav-text" onClick={() => {setBackgroundImage(AboutBG); setMainText(false)}}>About <span className="sr-only">(current)</span></Link> 
                </li>
                <li className="nav-item">
                    <Link to={'/contact'} className="nav-link nav-text" onClick={() => {setBackgroundImage(ContactBG); setMainText(false)}}>Contact</Link>
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
      {showMainText? (
        <img src={Umbrella} id="main-text"/> 
      ): null }
    </div>
  );
}

export default Navbar;
