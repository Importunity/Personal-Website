import { Button, Divider, Drawer, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import '../../../styles/sort.css';
import {BrowserRouter as Router, Link, Route, Switch, useLocation} from 'react-router-dom';
import BubbleSort from './BubbleSort';
import InsertionSort from './InsertionSort';
import SelectionSort from './SelectionSort';

const generateRandomValues = () =>{
    // create empty array
    var values = [];
    for(var i = 0; i < 20; i++){
        values.push(Math.floor(Math.random() * (Math.floor(window.innerHeight / 3) - 50) + 50));
    }
    return values;
}



function Sort(){
    const[visible, setVisible] = useState(false);
    const[values, setValues] = useState(generateRandomValues());
    const[counter, setCounter] = useState(0);
    const[clicked, setClicked] = useState(false);
    useEffect(() => {
        setValues(generateRandomValues());
    }, [counter])
    const showDrawer = () => {
        setVisible(true);
        setClicked(true);
    }

    const closeDrawer = () => {
        setVisible(false);
    }

    const handleCounterChange = (value) => {
        setCounter(value);
    }

    const locationPath = useLocation().pathname;
    return (
        <Fragment>
            <div className="default-container">
                <Button id={!clicked? "change-btn" : null} className="sorting-btn" onClick={showDrawer}>
                    Click To Change Algorithm
                </Button>
                
                <Router>
                    <Drawer placement="right" closable={false} onClose={closeDrawer} visible={visible}>
                        <div className="drawer-contents">
                            <Typography>
                                <Typography.Title className="default-font">Algorithms</Typography.Title>
                            </Typography>
                            <Divider></Divider>
                            <Button className="drawer-button"><Link to={`${locationPath}/bubble-sort`}>Bubble Sort</Link></Button>
                            <Button className="drawer-button"><Link to={`${locationPath}/insertion-sort`}>Insertion Sort</Link></Button>
                            <Button className="drawer-button"><Link to={`${locationPath}/selection-sort`}>Selection Sort</Link></Button>
                        </div>
                    </Drawer>
                    <Switch>
                        <Route path={`${locationPath}/bubble-sort`}><BubbleSort values={values} counter={counter} handleCounterChange={handleCounterChange}/></Route>
                        <Route path={`${locationPath}/insertion-sort`}><InsertionSort values={values} counter={counter} handleCounterChange={handleCounterChange}/></Route>
                        <Route path={`${locationPath}/selection-sort`}><SelectionSort values={values} counter={counter} handleCounterChange={handleCounterChange}/></Route>
                    </Switch>
                </Router>
            </div>
            
        </Fragment>
    )
}

export default Sort;