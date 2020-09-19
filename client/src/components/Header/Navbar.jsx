import React, { useEffect, useRef, useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";

function Navbar() {
  const [backgroundImages, setBackgroundImage] = useState("background-image: url('../assets/images/Better-Tomorrow.jpg')");
  return (
    <div className="navbar-container" style={{backgroundImage: '../assets/images/Better-Tomorrow.jpg' }} >
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand">
              <Link to={"/"} className="nav-link">
                Navbar
              </Link>
            </a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto ">
                <li className="nav-item active">
                  <a className="nav-link" href="/#" onClick={() => "background-image: url('../assets/images/Better-Tomorrow.jpg')"}>
                    <Link to={'/about'} className="nav-link" >About <span className="sr-only">(current)</span></Link> 
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    <Link to={'/contact'} className="nav-link" onClick={() => "background-image: url('../assets/images/Hong-Kong.jpg')"}>Contact</Link>
                  </a>
                </li>
              </ul>
              {/*<form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
  </form>*/}
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
