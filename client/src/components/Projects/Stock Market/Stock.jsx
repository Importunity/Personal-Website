import React, { useEffect, useState } from 'react';
import '../../../styles/Stock.css';
import Plot from 'react-plotly.js';
import { Button, Menu, MenuItem, TextField } from '@material-ui/core';


function Stock(props){

    const[values, setValues] = useState({xValues:[], yValues:[]});
    const[symbol, setSymbol] = useState('IBM');
    const[timeSeries, setTimeSeries] = useState({msg: 'TIME_SERIES_DAILY_ADJUSTED', value: 'Time Series (Daily)', interval: "", tradeSelection: "1. open"});
    const[trades, setTrades] = useState([]);
    
    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSymbol = (event) => {
        setSymbol(event.target.value.toUpperCase());
    }

    function retrieveStocks() {
        let key = undefined;//process.env.REACT_APP_ALPHA_VANTAGE_KEY;
        let stockSymbol = symbol;
        let api = `https://www.alphavantage.co/query?function=${timeSeries.msg}${timeSeries.interval}&symbol=${stockSymbol}&outputsize=compact&apikey=${key}`;
        let xValues = [];
        let yValues = [];
        fetch(api)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    let date = new Date();
                    let currentDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);
                    let i = 0;
                    console.log(data[`${timeSeries.value}`][currentDate])
                    for(var key in data[`${timeSeries.value}`][currentDate]){
                        //console.log(key);
                        trades.push(key);
                        i++;
                    }
                    for (var key in data[`${timeSeries.value}`]) {
                        xValues.push(key);
                        yValues.push(data[timeSeries.value][key]['1. open']);
                    }
                    setValues({xValues: xValues, yValues: yValues})
                }
            )
    }
    console.log(trades);


    useEffect(() =>{
        const delayDebounceFn = setTimeout(() => {
            retrieveStocks();
        }, 3000)
      
        return () => clearTimeout(delayDebounceFn)
        //retrieveStocks();
    }, [symbol, timeSeries])


    return(
        <div className="stock-container">
            <div className="inner-container">
                <TextField onChange={handleSymbol}></TextField>
                <Plot data={[{x: values.xValues, y: values.yValues, type: "scatter", mode: 'lines+markers', marker: {color: 'red'}}]} layout={{width: 720, height: 440,
                xaxis: {
                 title: "Date/Time",
                 titlefont: {
                     family: 'Courier New, monospace',
                     size: 18,
                     color: '#7f7f7f'
                    }
                },
                yaxis: {
                  title: "Price",
                  titlefont: {
                      family: 'Courier New, monospace',
                      size: 18,
                      color: '#7f7f7f'
                    }
                }, 
                title: `Stock Market For ${symbol}`
                }}/>
                <Button aria-controls="simple-menu" variant={"outlined"} color={"default"} aria-haspopup="true" onClick={handleClick}>
                    {timeSeries.msg}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => {setTimeSeries({msg: 'TIME_SERIES_INTRADAY', value: 'Time Series (5min)', interval: '&interval=5min'});handleClose()}}>INTRADAY</MenuItem>
                    <MenuItem onClick={() => {setTimeSeries({msg: 'TIME_SERIES_DAILY_ADJUSTED', value: 'Time Series (Daily)', interval: ""});handleClose()}}>DAILY ADJUSTED</MenuItem>
                    <MenuItem onClick={() => {setTimeSeries({msg: 'TIME_SERIES_WEEKLY_ADJUSTED', value: 'Weekly Adjusted Time Series', interval: ""});handleClose()}}>WEEKLY ADJUSTED</MenuItem>
                    <MenuItem onClick={() => {setTimeSeries({msg: 'TIME_SERIES_MONTHLY_ADJUSTED', value: 'Monthly Adjusted Time Series', interval: ""});handleClose()}}>MONTHLY ADJUSTED</MenuItem>                
                </Menu>
                <Button aria-controls="trade-menu" variant={"outlined"} color={"default"} aria-haspopup="true" onClick={handleClick}>
                    Testing
                </Button>
                <Menu
                    id="trade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {trades.map((data, i) => {
                        return (
                            <MenuItem key={i} onClick={handleClose} >{data}</MenuItem>
                        );              
                    })}
                </Menu>
            </div>
        </div>
        
    );
}

export default Stock;