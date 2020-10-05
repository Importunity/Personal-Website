import React, { useEffect, useState } from 'react';
import CreateNote from './CreateNote';
import Note from './Note';
import {connect} from 'react-redux';
import {getNotes, deleteNote, addNote} from '../../../actions/noteActions';
import PropTypes from 'prop-types';
import { Pagination } from '@material-ui/lab';
import { TablePagination } from '@material-ui/core';
import '../../../styles/ThoughtsContentArea.css';


function ThoughtsContentArea(props){
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = event => {
      setRowsPerPage(parseInt(event.target.value, 4));
      setPage(0);
    };
    // get notes on render
    useEffect(() => {
        props.getNotes();
    },[]);

    // adds a new note
    function addNote(newNode){
        props.addNote(newNode);
    }

    // deletes note according to id
    function deleteNote(id){
        props.deleteNote(id);
    }

    const notes = props.note.notes;
    const {isAuthenticated} = props.auth;

    const[search, setSearch] = useState("");
    const updateSearch = event => {
        setSearch(event.target.value.substr(0,20));
    }
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    return (
        <div className="">
            <div className="row">
                <div className="col-md-3">
                    <div className="search-container">
                        <form className="search-form">
                            <input className="form-control search-form-control" value={search} onChange={updateSearch} type="search" placeholder="Search Thoughts"  />
                        </form>
                    </div>
                    {isAuthenticated? (
                    <CreateNote onAdd={addNote} /> ) : null }
                    {filteredNotes
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((objectNote, index) => {
                        //console.log(index);
                        return (
                            <Note key={objectNote._id} id={objectNote._id} title={objectNote.title} content={objectNote.content} onDelete={deleteNote} />
                        );
                    })}
                    <TablePagination component="div" className="pagination" rowsPerPageOptions={[]} count={notes.length} rowsPerPage={rowsPerPage} page={page} onChangePage={handleChangePage} onChangeRowsPerPage={handleChangeRowsPerPage} width="90%" />
                </div>
                <div className="col-md-9 main-content">

                </div>
            </div>
        </div>
    );

}

ThoughtsContentArea.propTypes = {
    getNotes: PropTypes.func.isRequired,
    note: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    note: state.note,
    auth: state.auth
});

export default connect(mapStateToProps, {getNotes, deleteNote, addNote})(ThoughtsContentArea);