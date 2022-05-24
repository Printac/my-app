import React from 'react';

const SearchBox = ({searchfield, searchChange }) => {
    return (
        <div className = 'pa2' >
            <input className = 'pa3 ba b--green bg-lightest-blue grow' type="search" placeholder="Search Robots" onChange={searchChange}/>
            <br></br>
            <br></br>
        </div>
        );
}
export default SearchBox;