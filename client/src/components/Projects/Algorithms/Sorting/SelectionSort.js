import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import '../../../../styles/Sort.css';
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
    //var arr = [26,54,93,17,77,31,44,55,20]; //testing arr
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
            document.getElementById(i).style.background = "black";
            document.getElementById(largest).style.background = "black";
            await sleep(200)
            document.getElementById(i).style.background = "white";
            document.getElementById(largest).style.background = "white";
        }
    }
    return (
        <div>
            <div className="container mt-5 " >
                <Button className="sort-button" variant="contained" color="inherit" onClick={selectionSort}>START</Button>
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

export default SelectionSort;