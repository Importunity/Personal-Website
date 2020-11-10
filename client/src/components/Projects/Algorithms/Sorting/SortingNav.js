import { AppBar, Button, rgbToHex, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '../../../../styles/Sort.css';
import BubbleSort from './BubbleSort';

const sort = () => {
    return <div></div>
}

function SortingNav(){
    return (
        <div className="sort-container">
            <div className="inner-container">
                <Router>
                    <AppBar position="static" style={{ background: "#196b63"}} >
                        <Toolbar>
                            <Button>
                                <Link to={'/sort/bubble-sort'} className="sort-item">Bubble Sort</Link>
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Switch>
                        <Route exact path="/sort" component={sort} />
                        <Route path="/sort/bubble-sort" component={BubbleSort}/>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default SortingNav;