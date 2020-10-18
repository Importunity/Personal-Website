import { Card, CardContent, Snackbar, TextField } from "@material-ui/core";
import React, {  useState } from "react";
import '../../styles/Contact.css';
import { Alert, AlertTitle } from '@material-ui/lab';
import validator from 'validator';
import contactImage from '../../assets/images/contact-image2.jpg';
import emailjs from 'emailjs-com';


function Contact() {



  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('Gmail', 'contact_template', e.target, process.env.REACT_APP_CONTACT_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

  }

  const[info, setInfo] = useState({name: '', email: '', message:''});
  // email validator
  const[validEmail, setValidEmail] = useState({isEmail: false, msg: ''});
  const[validName, setValidName] = useState({isName: false, msg: ''});

  // message
  const [message, setMessage] = useState({isMsg: false, msg: '', characterLimit: 120});
  // handle message character count
  const handleCharacterCount = (prop) => (event) => {
    setMessage({...message, [prop]: event.target.value});
  };

  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setInfo({...info, [prop]: event.target.value});
  }




  const handleSubmit = (event) =>{
    event.preventDefault();
    const valid = validator.isEmail(info.email);



    if(valid){
      setValidEmail({isEmail: valid, msg: 'valid email'});
    }else{
      setValidEmail({isEmail: valid, msg: 'invalid email'});
    }

    if(info.name.length >= 2){
      setValidName({isName: true, msg: 'valid name'});
    }else{
      setValidName({isName: false, msg: 'name must be at least 2 charcters'});
    }

    if(info.message.length < 120){
      setMessage({isMsg: true, msg: 'valid message'});
    }else{
      setMessage({isMsg: false, msg: 'message must be less than 120 characters'});
    }

    if(valid && info.name.length > 2 && info.message.length < 120){
      setInfo({message: message.msg});
      sendEmail(event);
    }

    event.target.reset();

    
  }


  return (
    <div className="contact-container">
      <div className="inner-container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 center-contact-container">
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="contact-form-container">
          <Card className="contact-card">
                <CardContent>
                  <h1 id="contact-me">C O N T A C T / M E</h1>
                </CardContent>
                <CardContent>
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <TextField className="contact-item" type="text" name="name" label="N A M E" placeholder="Name" onChange={handleChange('name')}/><br/>
                    <TextField className="contact-item" type="email" name="email" label="E M A I L" placeholder="Email" onChange={handleChange('email')}/><br/>
                    <TextField id="standard-secondary" name="message" className="contact-item message" label="M E S S A G E" placeholder="Message" color="secondary" onChange={handleCharacterCount('msg'), handleChange('message')}/><br/>
                    <h5 id="characters">{message.characterLimit - info.message.length} characters left</h5>
                  </form>
                </CardContent>
          </Card>
        </div>
        <img className="contact-image" src={contactImage} />
        <div className="send-email">
          <button onClick={() => {setOpen(true);}} form="contact-form" className="email-btn"><span>SEND MESSAGE</span></button>
        </div>
        {open && validEmail.isEmail && validName.isName? (
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                  <AlertTitle>Success</AlertTitle>
                  <strong>Message Successfully sent!</strong>
                </Alert>
              </Snackbar>
        ): (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              <AlertTitle>Invalid Inputs</AlertTitle>
              <strong>Message Not Sent:</strong><br/>
              <div className="invalid-inputs">
                {validEmail.msg}
                <br />
                {validName.msg}
                <br />
                {message.msg}
              </div>
            </Alert>
          </Snackbar>
        )}
      </div>
    </div>
  );
}

export default Contact;
