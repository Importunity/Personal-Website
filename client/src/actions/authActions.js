import axios from 'axios';
import {USER_LOADING,USER_LOADED ,AUTH_ERROR ,LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_SUCCESS ,REGISTER_FAIL} from './types';
import { getErrors } from './errorActions';

// check the token and load the user
// since we want the token also it is good to have the state
export const loadUser = () => (dispatch, getState) => {
    // dispatches an action to trigger a state change
    dispatch({type: USER_LOADING});

    // retrieving the information from api/auth/user
    axios.get('/api/auth/user', tokenConfig(getState))
        // then as a response, we'll assign the type to userloaded and assign payload to the response data
        .then(response => dispatch({
            type: USER_LOADED,
            payload: response.data
        }))
        // if there's an error then 
        .catch(error => {
            // dispatch the errors action witht he response data and the status
            dispatch(getErrors(error.response.data, error.response.status));
            // then assign the type to the authentication error
            dispatch({
                type: AUTH_ERROR
            });
        });
}

// Register user
export const register = ({name, email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body
    const body = JSON.stringify({name, email, password});
    axios.post('/api/users', body, config)
        .then(response => dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        }))
        .catch(error => {
            dispatch(getErrors(error.response.data, error.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL
            })
        })
}

// login user
export const login = ({email, password}) => dispatch => {
    // headers
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    // request body
    const body = JSON.stringify({email, password});
    axios.post('/api/auth', body, config)
        .then(response => dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        }))
        .catch(error => {
            dispatch(getErrors(error.response.data, error.response.status, 'LOGIN_FAIL'));
            dispatch({
                type: LOGIN_FAIL
            })
        })
}

// logout user
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}

// setup config/headers and token
export const tokenConfig = getState => {
        // this will go into the authReducer and retrieve the token from the initial state localstorage
        // the "auth" can be found at combinereducers
        const token = getState().auth.token;
        //console.log(`state token: ${token}`);
        //console.log(`token is: ${getState().auth.token}`);

        // headers
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
    
        // add the token
        if(token){
            config.headers['x-auth-token'] = token;
        }
    return config;
}