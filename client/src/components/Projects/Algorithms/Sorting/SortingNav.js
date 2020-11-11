import { AppBar, Button, rgbToHex, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '../../../../styles/Sort.css';
import BubbleSort from './BubbleSort';

const sort = () => {
    return <div></div>
}

const generateRandomValues = () =>{
    // create empty array
    var values = [];
    for(var i = 0; i < 50; i++){
        values.push(Math.floor(Math.random() * (500 - 50) + 50));
    }
    return values;
}


function SortingNav(){
    const[values, setValues] = useState(generateRandomValues());
    const[counter, setCounter] = useState(0);
    useEffect(() => {
        setValues(generateRandomValues());
    }, [counter])
    const handleCounterChange = (value) => {
        setCounter(value);
    }
    //console.log(values);
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
                        <Route path="/sort/bubble-sort" render={(props) => (<BubbleSort {...props} values={values} counter={counter} handleCounterChange={handleCounterChange} />)}/>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default SortingNav;