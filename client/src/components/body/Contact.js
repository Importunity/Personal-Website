import { Input, Typography, Button, Alert } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import '../../styles/contact.css';
import emailjs from 'emailjs-com';




function Contact(props){
    const[info, setInfo] = useState({name: '', email: '', message: ''});
    const[errors, setError] = useState({name: '', email: '', message: ''});

    const changeInfo = (event) => {
        setInfo({...info, [event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail(event)
        event.target.reset();
    }

    const sendEmail = (event) => {
        emailjs.sendForm('Gmail', 'contact_template', event.target, process.env.REACT_APP_CONTACT_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }


    return(
        <div className="default-container">
            <div className="universal-container">
                <form id="contact-form" className="form-container" onSubmit={handleSubmit} >
                    <Typography>
                        <Typography.Title className="default-font default-text">Contact Form</Typography.Title>
                    </Typography>
                    <Input className="contact-item" placeholder="name" name="name" onChange={changeInfo}  />
                    {errors.name? <Alert className="contact-item" message="Name is required!" type="error"/> : null }
                    <Input className="contact-item" placeholder="email" name="email" type="email" onChange={changeInfo} />
                    <TextArea className="contact-item" placeholder="message" name="message" maxLength={300} showCount onChange={changeInfo}/>
                    <button className="contact-item" >Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;