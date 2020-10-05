import { Card, CardContent, CardHeader, TextField, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import TextareaAutoSize from 'react-textarea-autosize';
import '../../../styles/CreateNote.css';


const useClickOutside = (handler) =>{
    const domNode = useRef();
    useEffect(() =>{
        // the check handler is used to check to make sure that the event is outside the document object model handler
        const checkHandler = (event) => {
            // of the document object node contains an event target, then handle
            if(!domNode.current.contains(event.target)){
                handler();
            }
        };
        // adds an event listener to check if its clicked then outside to false
        document.addEventListener("mousedown", checkHandler);
        return () => {
            document.removeEventListener("mousedown", checkHandler);
        };
    });
    return domNode;
};

function CreateNote(props){

    function addNote() {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        });
    }

    const [change, setChange] = useState(false);

    // used for checking and seeing if the input has been clicked
    const[isOpen, setIsOpen] = useState(false);
    // note
    const [note, setNote] = useState({title: "",content: ""});


    function handleChange(event) {
        const { name, value } = event.target;
        //sets the note and returns the previous note with the value of the title/content
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    let domNode = useClickOutside(() => {
        setIsOpen(false);
        // if the input field has changed and the card is open and note has content
        if(change && isOpen && note.content !== "" ){
            // submit the note
            addNote();
            // reset change to false 
            setChange(false);
        }
        // reinitializes not title and content to empty
        setNote({
            title: "",
            content: ""
        })
    });




    return (
        <div ref={domNode} className="create-note-container">
            {isOpen?(
            <Card>
                <CardContent>
                    <TextareaAutoSize onChange={handleChange}  name="title" className="create-input" type="text" placeholder="Title" value={note.title}></TextareaAutoSize>
                </CardContent>
                <CardContent>
                    <TextareaAutoSize onChange={handleChange}  name="content" className="create-input" type="text" placeholder="Take a note.." value={note.content}></TextareaAutoSize>
                </CardContent>
            </Card>
            ):(
                <TextField onClick={() => {setChange(true); setIsOpen(true);}} className="note-text" id="outlined-basic" variant="outlined" placeholder="Take a note.." fullWidth/>
            )}
        </div>
    );
}

export default CreateNote;