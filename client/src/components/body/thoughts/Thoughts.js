import { Card, Input, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getNotes } from '../../../actions/noteActions';
import '../../../styles/thoughts.css';
import CreateThoughts from './CreateThoughts';
import ThoughtPage from './ThoughtPage';

function Thoughts(props){
    const {notes} = useSelector(state => state.note);
    const {isAuthenticated} = useSelector(state => state.auth);
    const[currentThought, setCurrentThought] = useState(null);
    const dispatch = useDispatch();
    const clickThought = (note) => {
        setCurrentThought(note);
    }
    useEffect(() => {
        dispatch(getNotes());
    }, [])
    return(
        <>
            <div className="universal-container">
                {currentThought === null? 
                <>
                    {isAuthenticated? <CreateThoughts /> : null }
                    <Typography>
                        <Typography.Title className="title default-text">What Are Thoughts?</Typography.Title>
                        <Typography.Paragraph className="title default-text" >Thoughts are mental cognitions—our ideas, opinions, and beliefs about ourselves and the world around us. They include the perspectives we bring to any situation or experience that color our point of view (for better, worse, or neutral). </Typography.Paragraph>
                    </Typography>
                    <div className="thoughts-container">
                        {notes.map((note, index) => {
                            return(
                                <div key={index} onClick={() => clickThought(note)}>
                                    <Card hoverable><Meta className="default-text" title={note.title} description={note.content.length < 200? note.content : note.content.substring(0,200)} /></Card>
                                </div>
                            )
                        })}
                    </div>
                    </>
                    : <ThoughtPage currentThought={currentThought}/>}
            </div>
        </>    
    )
}

export default Thoughts;