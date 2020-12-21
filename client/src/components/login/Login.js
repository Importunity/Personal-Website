import { Alert, Button, Card, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import '../../styles/login.css';
import {login} from '../../actions/authActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Login(){
    const dispatch = useDispatch();
    const {error} = useSelector(state => state);
    const[msg, setMsg] = useState(null);
    const[submitted, setSubmitted] = useState(false);


    const[info, setInfo] = useState({email: '', passowrd: ''})
    
    const infoChange = (event) => {
        setInfo({...info, [event.target.name]: event.target.value});
    }
    
    useEffect(() => {
        if (error.id === 'LOGIN_FAIL') {
            setMsg(error.msg.msg);
        } else {
            setMsg(null);
        }
    }, [error])

    const loginSubmit = (event) => {
        event.preventDefault();
        dispatch(login(info));
        setSubmitted(true);
    }
    return(
        <div className="login-container universal-container">
            <div className="login-form-container container">
                <Input className="default-input" placeholder="email" name="email" type="email" onChange={infoChange} />
                <Input className="default-input" placeholder="password" name="password" type="password" onChange={infoChange}/>
                <Button className="default-input"  onClick={loginSubmit}>Login</Button>
                {msg !== null && submitted? <Alert className="default-input" type="error" message={msg}/> : null}
            </div>
        </div>
    )
}

export default Login;