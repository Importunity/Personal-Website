import React, { useCallback, useEffect, useRef, useState } from 'react';
import {login} from '../../actions/authActions';
import {clearErrors} from '../../actions/errorActions';

import PropTypes from 'prop-types';

// the provider helps us share states throughout the components
import { connect } from 'react-redux';
import '../../styles/Login.css';
import { Button, TextField } from '@material-ui/core';
import { Route, useHistory } from 'react-router';
import Navbar from '../Header/Navbar';
import Logout from './Logout';


function Login(props){
    // user information
   const [info, setInfo] = useState({name: "", email: "", password: "", message: null});
   // retrieve the error responses
   const {error, isAuthenticated} = props;
   // use reference to contain the previous error
   const previousErrorReference = useRef();
   useEffect(() => {
       const {error} = props;
       // the current previouserrorreference is initialized to error
       previousErrorReference.current = error;
   });
   // previous error is not equal to the previouserrorreference
   const previousError = previousErrorReference.current;
   useEffect(() => {
       const {error} = props;
       //console.log(error);
       //console.log(previousError);
       // if the errror is not equal to the prevoius error reference
       if(error !== previousError){
           //console.log(error);
           // if the error id is equal to login fail
           if(error.id === 'LOGIN_FAIL'){
               // then initialize information to the msg
               setInfo({msg: error.msg.msg});
           }else{
               setInfo({msg: null});
           }
       }
       
   }, [error, previousError, info]);

   const handleSubmit = event => {
        event.preventDefault();
        const {email, password} = info;

        const user = {
            email,
            password
        };

        // logging in user
        props.login(user);
        // every time the user submit the form the previous errors are cleared
        event.target.reset();
        props.clearErrors();


    };
    //console.log(info);

    const handleChange = event => {
        //setInfo({[event.target.name]: event.target.value});
        const {name, value} = event.target;
        setInfo({...info, [name]: value});
    };

    const history = useHistory();
    const handleOnClickHistory = useCallback(() => history.push('/'), [history]);



    return(
        <div className="login-container">
            <div className="inner-container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 login">
                        <div className="card login-card" >
                            <div className="card-body">
                                <form id="login-form" noValidate autoComplete="off" onSubmit={handleSubmit}>
                                    <div className="login-input">
                                        <TextField required className="login-input" name="email" id="email" label="Email" fullWidth onChange={handleChange}/>
                                    </div>
                                    <div className="login-input">
                                        <TextField id="password" className="login-input" name="password" label="Password" type="password" autoComplete="current-password"  fullWidth onChange={handleChange}/>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                {info.msg? (
                                    <div className="alert alert-danger" role="alert">
                                        {info.msg}
                                    </div>
                                ):(
                                    null
                                )}

                                <button onClick={isAuthenticated? handleOnClickHistory : null} form="login-form" className="btn draw-border">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    );
}

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})

export default connect(mapStateToProps, {login, clearErrors})(Login);