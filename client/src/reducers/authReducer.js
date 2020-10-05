import {USER_LOADING,USER_LOADED ,AUTH_ERROR ,LOGIN_SUCCESS, LOGIN_FAIL,LOGOUT_SUCCESS,REGISTER_SUCCESS ,REGISTER_FAIL} from '../actions/types';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default function(state = initialState, action){
    //console.log(state);
    switch(action.type){
        // will run on entrance
        case USER_LOADING:
            //console.log(localStorage.getItem('token'));
            return{
                // returns the state and sets the loading user to true
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            
            return{
                // when the user has been loaded sets it to false and successful authentication
                ...state,
                isAuthenticated: true,
                isLoading: false,
                // user contains the payload or user data
                user: action.payload
            };
        case LOGIN_SUCCESS: case REGISTER_SUCCESS:
            //console.log(action);
            localStorage.setItem('token', action.payload.token);

            return{
                // when user has been loaded or register is success, then sets loading to false and authentication to true
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            };
        case AUTH_ERROR: case LOGIN_FAIL: case LOGOUT_SUCCESS: case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{
                // when the login has failed, then eerything is default or logout has been success or register has failed or the authentication has failed
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            };
        // the default is everything is null
        default:
            return state;


    }
}