import React from 'react';
import '../../../styles/Note.css';

function Note(props){
    const content = props.content.substring(0, 150)
    function handleDelete() {
        //console.log(`deleted id: ${props.id}`);
        props.onDelete(props.id);
    }
    return (
        <div className="card note-card">
            <div className="card-body note-header">
                <h1>{props.title}</h1>
            </div>
            <div className="card-body">
                <p>{content}</p>
            </div>
            {props.isAuthenticated? (
            <div className="card-footer">
                <i className="fas fa-trash-alt" onClick={handleDelete}></i>
            </div>
            ): null }
        </div>
    );
}



export default Note;