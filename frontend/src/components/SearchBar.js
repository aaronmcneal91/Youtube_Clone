import React from "react";
import "./SearchBar.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// const SearchBar = () => {
//     const [data , setData] = useState(null); // data is our actual variable, setData is a function
                                       // setData() will allow you to pass in any value and will save it to data 

//     useEffect(() => {
//         fetch("https://www.googleapis.com/youtube/v3'")

//     }


//         )
// }
function SearchBar() {

const [searchResults, setSearchResults] = useState(['']);

useEffect(() => {
    getSearchResults()
},[])


async function getSearchResults(searchTerm="dogs"){
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyDWtRZ0DbDR4RMEIS1F9Bjp_FkhuecPsIs`);
    console.log(response.data)
    setSearchResults(response.data)
}
    return (
        <div className="SearchBar">

        </div>
    )    
    
}

export default SearchBar;

// class SearchBar extends React.Component {
//     state = {
//         searchTerm: '',

//     }
//     handleChange = (event) => {this.setState({searchTerm: event.target.value})}

//     handleSubmit = (event) => {
//         event.preventDefault();
//         const {searchTerm}= this.state;
//         const { formSubmit} = this.props;

//         formSubmit(searchTerm);

        


//     }

    
//     render(){
//         return(
//             // <Paper elevation= {6} style={{padding: '25px'}} >
//                 <form onSubmit={this.handleSubmit}>
//                     <textarea fullwidth label="Search..." onChange={this.handleChange} />
//                     {/* <BrowserRouter> */}
//                     <button onClick={() => SearchBar("/SearchBar")}></button>
                    

                    
                     
//                 </form>

//             // </Paper>
//         )
//     }
// }

// export default SearchBar
