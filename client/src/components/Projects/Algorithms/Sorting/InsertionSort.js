import React, { useState } from 'react';
import '../../../../styles/Sort.css';
import { Button } from '@material-ui/core';
import { sleep } from './SortingUtil';


function InsertionSort(props){
    const[values, setValues] = useState(props.values);
    async function insertionSort(){
        //[5,4,2,1]
        var temp = values;
        for(var i = 0; i < temp.length; i++){
            var j = temp[i];
            var k = i - 1;
            while(k >= 0 && temp[k] > j){
                temp[k + 1] = temp[k];
                k = k - 1;
                setValues([...values, temp]);
                await sleep(40)
            }
            temp[k + 1] = j
        }
    }
    return (
        <div>
            <div className="container mt-5 " >
                <Button className="sort-button" variant="contained" color="inherit" onClick={insertionSort}>START</Button>
                <Button variant="contained" color="inherit" className="sort-button" onClick={() => props.handleCounterChange(props.counter + 1)}>Generate New Values</Button>
            </div>
            <div className="algo-container">
                {values.map((value, index) => {
                    return (
                        <div className="vertical-bar" id={index} key={index} style={{height: value}}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default InsertionSort;