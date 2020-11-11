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
    useEffect(() => {
        setValues(props.values);
    }, [props.values])
    async function bubbleSort(){
        var tempArr = values;
        var sorted = false;
        while(!sorted){
            sorted = true;
            for(var i = 0; i < tempArr.length; i++){
                if (tempArr[i] > tempArr[i + 1]) {
                    swap(tempArr, i, i + 1);
                    setValues([...values, tempArr]);
                    document.getElementById(i).style.background = "black";
                    document.getElementById(i + 1).style.background = "black";
                    await sleep(200);
                    document.getElementById(i).style.background = "white";
                    document.getElementById(i + 1).style.background = "white";
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