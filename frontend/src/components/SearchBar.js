import React from "react";
import "./SearchBar.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const SearchBar = () => {
    const [data , setData] = useState(null); // data is our actual variable, setData is a function
                                       // setData() will allow you to pass in any value and will save it to data 

    useEffect(() => {
        fetch("https://www.googleapis.com/youtube/v3'")

    }


        )
}

class blank extends React.Component {
    state = {
        searchTerm: '',

    }
    handleChange = (event) => {this.setState({searchTerm: event.target.value})}

    handleSubmit = (event) => {
        event.preventDefault();
        const {searchTerm}= this.state;
        const { formSubmit} = this.props;

        formSubmit(searchTerm);

        


    }

    
    render(){
        return(
            // <Paper elevation= {6} style={{padding: '25px'}} >
                <form onSubmit={this.handleSubmit}>
                    <textarea fullwidth label="Search..." onChange={this.handleChange} />
                    {/* <BrowserRouter> */}
                    <button onClick={() => SearchBar("/SearchBar")}></button>
                    

                    
                     
                </form>

            // </Paper>
        )
    }
}

export default SearchBar;