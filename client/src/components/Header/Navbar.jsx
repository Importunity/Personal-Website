import React, { useEffect, useRef, useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "../Login/Login";
import Blog from './Blog';

// logout portion
import Logout from '../Login/Logout';
import PropTypes from 'prop-types';

// images
//import AboutBG from '../../assets/images/Hong-Kong.jpg';
//import ContactBG from '../../assets/images/revive.jpg';

import Umbrella from '../../assets/images/Umbrella.png';
import { connect } from "react-redux";

function Navbar(props) {
  const[backgroundImage, setBackgroundImage] = useState("black");

  const[showMainText, setMainText] = useState(true);

  const {isAuthenticated} = props;

  return (
    <div className="home-container" style={{backgroundColor: "black" }} >
      <Router>
        <div>
          {showMainText? (
          <img src={Umbrella} id="main-text"/> 
        ): null }
            <ul className="nav flex-column">
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link nav-text" onClick={() => {setMainText(true);}} >U M B R E L L A</Link>
                </li>
                <div className="link-container">
                  <li className="nav-item active">
                    <Link to={'/blog'} className="nav-link nav-text" onClick={() => {{/*setBackgroundImage(Blog);*/} setMainText(false)}}>Blog</Link> 
                  </li>
                  <li className="nav-item active">
                    <Link to={'/about'} className="nav-link nav-text" onClick={() => {{/*setBackgroundImage(AboutBG);*/} setMainText(false)}}>About</Link> 
                  </li>
                  <li className="nav-item active">
                    <Link to={'/contact'} className="nav-link nav-text" onClick={() => {{/*setBackgroundImage(ContactBG);*/} setMainText(false)}}>Contact</Link>
                  </li>
                  {isAuthenticated? (
                    <li className="nav-item active">
                      <Logout />
                    </li>
                  ): null}
                </div>
            </ul>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/amadeus/blog/login" component={Login} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Navbar);
