import { AppBar, Button, rgbToHex, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import '../../../../styles/Sort.css';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';

const sort = () => {
    return <div></div>
}

const generateRandomValues = () =>{
    // create empty array
    var values = [];
    for(var i = 0; i < 50; i++){
        values.push(Math.floor(Math.random() * (Math.floor(window.innerHeight / 3) - 50) + 50));
    }
    return values;
}


function SortingNav(){
    const[values, setValues] = useState(generateRandomValues());
    const[counter, setCounter] = useState(0);
    const[showDescription, setShowDescription] = useState(true);
    useEffect(() => {
        setValues(generateRandomValues());
    }, [counter])
    const handleCounterChange = (value) => {
        setCounter(value);
    }

    const handleShowDescrption = () => {
        setShowDescription(false);
    }
    //console.log(values);
    return (
        <div className="sort-container">
            <div className="inner-container">
                <Router>
                    <AppBar position="static" style={{ background: "#196b63"}} >
                        <Toolbar>
                            <Button onClick={handleShowDescrption}>
                                <Link to={'/sort/bubble-sort'} className="sort-item">Bubble Sort</Link>
                            </Button>
                            <Button onClick={handleShowDescrption}>
                                <Link to={'/sort/insertion-sort'} className="sort-item">Insertion Sort</Link>
                            </Button>
                            <Button onClick={handleShowDescrption}>
                                <Link to={'/sort/selection-sort'} className="sort-item">Selection Sort</Link>
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {showDescription? 
                        (
                            <Typography id="navigation-title">
                                Click on links above to navigate to the sorting alogrithm
                            </Typography>
                        ) : null 
                    }
                    <Switch>
                        <Route exact path="/sort" component={sort} />
                        <Route exact path="/sort/bubble-sort" render={(props) => (<BubbleSort {...props} values={values} counter={counter} handleCounterChange={handleCounterChange} />)}/>
                        <Route exact path="/sort/insertion-sort" render={(props) => (<InsertionSort {...props} values={values} counter={counter} handleCounterChange={handleCounterChange} />)}/>
                        <Route exact path="/sort/selection-sort" render={(props) => (<SelectionSort {...props} values={values} counter={counter} handleCounterChange={handleCounterChange} />)}/>
                    </Switch>
                </Router>
            </div>
        </div>
    )
}

export default SortingNav;