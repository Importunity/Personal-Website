import { Button, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { sleep } from './SortingUtil';

const swap = (arr, firstIndex, secondIndex) => {
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

function SelectionSort(props){
    const[values, setValues] = useState(props.values);
    useEffect(() => {
        setValues(props.values);
    }, [props.values])
    async function selectionSort(){
        var tempArr = values;
        for(var i = tempArr.length - 1; i >= 0; i--){
            var largest = i;
            for(var j = 0; j < i; j++){
                if(tempArr[largest] < tempArr[j]){
                    largest = j;
                }
            }
            swap(tempArr, largest, i);
            setValues([...values, tempArr]);
            document.getElementById(i).style.background = "red";
            document.getElementById(largest).style.background = "red";
            await sleep(200)
            document.getElementById(i).style.background = "yellow";
            document.getElementById(largest).style.background = "yellow";
        }
    }
    return(
        <>
            
            <Button className="sorting-btn"  onClick={selectionSort}>Start</Button>
            <Button className="sorting-btn" onClick={() => props.handleCounterChange(props.counter + 1)}>New Set</Button>
            <div className="title">
                <Typography>
                    <Typography.Title className="default-font default-text">Selection Sort</Typography.Title>
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

export default SelectionSort;