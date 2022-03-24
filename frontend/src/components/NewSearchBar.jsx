import React, { useState } from 'react';

const NewSearchBar = (props) => {
const [searchRequest, setSearchRequest] = useState("");

const handleSubmit = (event) => {
event.preventDefault();
console.log(searchRequest)
props.getSearchResults(searchRequest)
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Search</label>
            <input type="text" placeholder="search for a video..." value={searchRequest} onChange ={(event) => setSearchRequest(event.target.value) } ></input>
            <button type="submit">search</button>
        </form>
    </div>
)


}

export default NewSearchBar;