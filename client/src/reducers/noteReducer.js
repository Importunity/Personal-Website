// where we check out actions for notes
import {GET_NOTES, ADD_NOTE, DELETE_NOTE, NOTES_LOADING} from '../actions/types';
const initialState = {
    notes: [],
    loading: false
};

export default function(state = initialState, action){
    switch(action.type){
        case GET_NOTES:
            return {
                // returns all the objects of the state
                ...state,
                notes: action.payload,
                loading: false
            };
        case DELETE_NOTE:
            // console.log(`payload is: ${action.payload}`);
            return {
                ...state,
                // action.payload contains the id
                notes: state.notes.filter(note =>  note._id !== action.payload )
            };
        case ADD_NOTE:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            };
        case NOTES_LOADING:
            return {
                ...state,
                loading: true
            };

        default:
            return state
    }
}