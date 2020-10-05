import { Divider } from '@material-ui/core';
import React, { useState } from 'react';
import '../../../styles/Note.css';

function Note(props){
    const[clicked, setClicked] = useState(false);
    return (
        <div className="">
            <div className="card note-card" onClick={() => setClicked(true)}>
                <div className="card-header note-header">
                    <h1>{props.title}</h1>
                </div>
                <div className="card-body">
                    <p>{props.content}</p>
                </div>
            </div>
        </div>
    );
}

export default Note;