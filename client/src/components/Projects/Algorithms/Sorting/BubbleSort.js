import React, { useEffect, useState } from 'react';
import {Button} from '@material-ui/core';
import { sleep } from './SortingUtil';
import '../../../../styles/Sort.css';

const swap = (arr, firstIndex, secondIndex) => {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}


function BubbleSort(props){
    const[values, setValues] = useState(props.values);
    const[stop, setStop] = useState(false);
    useEffect(() => {
        setValues(props.values);
    }, [props.values])
    console.log(stop);
    async function bubbleSort(){
        var tempArr = values;
        var sorted = false;
        setStop(false);
        while(!sorted){
            sorted = true;
            for(var i = 0; i < tempArr.length; i++){
                if (tempArr[i] > tempArr[i + 1]) {
                    swap(tempArr, i, i + 1);
                    setValues([...values, tempArr]);
                    await sleep(40);
                    sorted = false;
                }
            }
        }
    }

    return (
        <div>
            <div className="container mt-5 " >
                <Button className="sort-button" variant="contained" color="inherit" onClick={bubbleSort}>START</Button>
                <Button variant="contained" color="inherit" className="sort-button" onClick={() => props.handleCounterChange(props.counter + 1)}>Generate New Values</Button>
                <Button variant="contained" color="inherit" className="sort-button" onClick={() => setStop(true)}>Stop</Button>

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

export default BubbleSort;