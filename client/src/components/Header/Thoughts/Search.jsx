import React from 'react';
import '../../../styles/Search.css';

function Search(){
    return (
        <div className="search-container">
            <form className="search-form">
                <input className="form-control search-form-control" type="search" placeholder="Search Thoughts"  />
            </form>
        </div>
    );
}

export default Search;