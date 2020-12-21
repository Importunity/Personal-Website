// this javascript file is used to make request to the backend
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from './types';
import axios from 'axios';

import {tokenConfig} from './authActions';
import {getErrors} from './errorActions';


export const getNotes = () => dispatch =>{
    dispatch(setNotesLoading());
    axios
        .get('/api/notes')
        .then(response => 
            dispatch({
                type: GET_NOTES,
                payload: response.data
            })
        ).catch(error => 
            dispatch(
                getErrors(error.response.data, error.response.status))
            );
    
};

export const deleteNote = (id) => (dispatch, getState) => {
    axios
        .delete(`/api/notes/${id}`, tokenConfig(getState))
        .then(response => dispatch({
            type: DELETE_NOTE,
            payload: id
        })).catch(error => 
            dispatch(
                getErrors(error.response.data, error.response.status))
            );

};


export const addNote = (note) => (dispatch, getState) => {
    axios
        .post('/api/notes', note, tokenConfig(getState))
        .then(response => dispatch({
            type: ADD_NOTE,
            payload: response.data
        })).catch(error => 
            dispatch(
                getErrors(error.response.data, error.response.status))
            );
};


export const setNotesLoading = () => {
    return {
        type: NOTES_LOADING
    }
};