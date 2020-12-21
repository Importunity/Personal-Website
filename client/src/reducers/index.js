// meeting place for all reducers
import {combineReducers} from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import noteReducer from './noteReducer';

export default combineReducers({
    error: errorReducer,
    auth: authReducer,
    note: noteReducer
});