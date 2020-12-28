import React from 'react';
import '../../styles/navbar.css';
import { Button } from 'antd';
import Home from '../body/Home';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Thoughts from '../body/thoughts/Thoughts';
import {BarChartOutlined, GlobalOutlined, ProjectOutlined} from '@ant-design/icons';
import About from '../body/About';
import Sort from '../projects/sorting-algorithms/Sort';
import Contact from '../body/Contact';
import Music from '../body/Music';
import Login from '../login/Login';
import Logout from '../login/Logout';
import { useSelector } from 'react-redux';


function Navbar(){
    const {isAuthenticated} = useSelector(state => state.auth);
    return(
        <Router>
            <div className="navbar">
                <ul className="container">
                    <li className="nav-item"><Link to="/" className="default-link">U M B R E L L A</Link></li>
                    <li className="nav-item"><Link to="/about" className="default-link">About</Link></li>
                    <li className="nav-item"><Link to="/thoughts" className="default-link">Thoughts</Link></li>
                    <li className="nav-item dropdown">Projects
                        <div className="dropdown-content">
                            <Button className="nav-btn" type="ghost" icon={<span className="nav-icon"><BarChartOutlined /></span>}><Link to="/sort" className="sort-link">Sorting Algorithms</Link></Button>
                            <Button className="nav-btn" type="ghost" icon={<span className="nav-icon"><ProjectOutlined /></span>}><a href="https://github.com/Importunity/Nexus">Nexus</a></Button>
                            <Button className="nav-btn" type="ghost" icon={<span className="nav-icon"><GlobalOutlined /></span>}><a href="https://github.com/Importunity/Eat-N-Go">Eat-N-Go</a></Button>
                        </div>
                    </li>
                    <li className="nav-item"><Link to="/music" className="default-link">Music</Link></li>
                    <li className="nav-item"><Link to="/contact" className="default-link">Contact</Link></li>

                    {isAuthenticated? <li className="nav-item"><Logout /></li> : null }
                </ul>
            </div>
            <Switch>
                <Route path="/thoughts"><Thoughts /></Route>
                <Route path="/about"><About /></Route>
                <Route path="/sort"><Sort /></Route>
                <Route path="/contact"><Contact /></Route>
                <Route path="/music"><Music /></Route>
                <Route path="/amadeus/blog/login"><Login /></Route>
                <Route path="/"><Home /></Route>
            </Switch>
        </Router>
    )
}

export default Navbar;