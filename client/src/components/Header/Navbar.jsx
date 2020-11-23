import React, {useState } from "react";

import "../../styles/Navbar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "../Login/Login";
//import Blog from './Blog';
import Thoughts from './Thoughts/Thoughts';
import TicTacToe from '../Projects/Simple Games/Tic-Tac-Toe/Game';
import Stock from '../Projects/Stock Market/Stock';

// logout portion
import Logout from '../Login/Logout';
import PropTypes from 'prop-types';


import Umbrella from '../../assets/images/Umbrella1.png';
import { connect } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core";
import SortingNav from "../Projects/Algorithms/Sorting/SortingNav";
import cloud4 from '../../assets/images/cloud4.png';

function Navbar(props) {
  const[showMainText, setMainText] = useState(true);

  const {isAuthenticated} = props;

  // for projects anchor
  const [projectsAnchor, setProjectsAnchor] = useState(null);

  const handleClick = (event) => {
    setProjectsAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setProjectsAnchor(null);
  };

  return (
    <div className="home-container" style={{backgroundColor: "black" }} >
      <Router>
        <div>
          {showMainText? (
            <div>
              <img src={Umbrella} id="main-text"/> 
              <img src={cloud4} id="cloud"/> 
            </div>
          ): null }
            <ul className="nav flex-column" >
                <li className="nav-item active">
                  <Link to={"/"} className="nav-link nav-text" onClick={() => {setMainText(true);}} >U M B R E L L A</Link>
                </li>
                <div className="link-container">
                  {/*<li className="nav-item active">
                    <Link to={'/blog'} className="nav-link nav-text" onClick={() => {{ setMainText(false)}}>Blog</Link> 
                  </li>*/}
                  <li className="nav-item active">
                    <Link to={'/thoughts'} className="nav-link nav-text" onClick={() => {{/*setBackgroundImage(img1);*/} setMainText(false)}}>Thoughts</Link> 
                  </li>
                  <li className="nav-item active" onClick={handleClick}>
                    <Link to={'#'} className="nav-text nav-link">Projects</Link>
                  </li>
                  <Menu className=" active projects-menu" projectsAnchor={projectsAnchor} keepMounted open={Boolean(projectsAnchor)} onClose={handleClose} >
                    {/*<MenuItem onClick={handleClose}>
                      <Link to={'/tic-tac-toe'} className="nav-link nav-text menu-item" onClick={() => {setMainText(false)}}>Tic Tac Toe</Link>
                </MenuItem>*/}
                    {/*<MenuItem onClick={handleClose}>
                      <Link to={'/stock'} className="nav-link nav-text menu-item" onClick={() => {setMainText(false)}}>Stocks</Link>
              </MenuItem>*/}
                    <MenuItem onClick={handleClose}>
                      <Link to={'/sort'} className="nav-link nav-text menu-item" onClick={() => {setMainText(false)}}>Sorting Algorithms</Link>
                    </MenuItem>
                  </Menu>
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
            {/*<Route path="/blog" component={Blog} />*/}
            <Route path="/sort" component={SortingNav} />
            <Route path="/stock" component={Stock} />
            <Route path="/thoughts" component={Thoughts} />
            <Route path="/tic-tac-toe" component={TicTacToe} />
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
