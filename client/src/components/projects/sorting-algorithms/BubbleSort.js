import React, { useEffect, useState } from 'react';
import { sleep } from './SortingUtil';
import {Button, Typography} from 'antd';

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
                    document.getElementById(i).style.background = "red";
                    document.getElementById(i + 1).style.background = "red";
                    await sleep(200);
                    document.getElementById(i).style.background = "yellow";
                    document.getElementById(i + 1).style.background = "yellow";
                    sorted = false;
                }
            }
        }
    }
    return(
        <>
            <Button className="sorting-btn"  onClick={bubbleSort}>Start</Button>
            <Button className="sorting-btn" onClick={() => props.handleCounterChange(props.counter + 1)}>New Set</Button>
            <div className="title">
                <Typography>
                    <Typography.Title className="default-font default-text">Bubble Sort</Typography.Title>
                </Typography>
            </div>
            <div className="algo-container">
                {values.map((value, index) => {
                    return (
                        <div className="vertical-bar" id={index} key={index} style={{height: value}}></div>
                    )
                })}
            </div>
        </>
    )
}

export default BubbleSort;