import React from "react";
import "./SearchBar.css";
import { useState } from "react";

const SearchBar = (props) => {

const[searchRequest, setSearchRequest] = useState('')

const handleSubmit = (event) =>{
event.preventDefault();
props.getSearchResults(searchRequest);
}

    return (
        <form>
            <div>
                <input type="text" placeholder="Search Youtube" value={searchRequest} onChange={(event) => setSearchRequest(event.target.value)} />

            </div>
            <button onClick={handleSubmit} type="submit"> Search </button>
        </form>
    );
        
}

export default SearchBar;