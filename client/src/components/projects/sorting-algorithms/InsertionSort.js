import { Button, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { sleep } from './SortingUtil';

function InsertionSort(props){
    const[values, setValues] = useState(props.values);
    useEffect(() => {
        setValues(props.values);
    }, [props.values])
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
    return(
        <>
            <Button className="sorting-btn"  onClick={insertionSort}>Start</Button>
            <Button className="sorting-btn" onClick={() => props.handleCounterChange(props.counter + 1)}>New Set</Button>
            <div className="title">
                <Typography>
                    <Typography.Title className="default-font default-text">Insertion Sort</Typography.Title>
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

export default InsertionSort;