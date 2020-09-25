// meeting place for all reducers
import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
});