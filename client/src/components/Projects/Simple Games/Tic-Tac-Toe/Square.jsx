import React, { useState } from 'react';
import '../../../../styles/TicTacToe.css';

function Square(props){
    const[value, setValue] = useState(null);
    return (
        <button className="square" onClick={() => setValue(props.onClick)}>
            {props.value}
        </button>
    );
}

export default Square;