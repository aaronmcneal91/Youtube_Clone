import React from "react";
import "./SearchBar.css";
import { BrowserRouter } from "react-router-dom";



class SearchBar extends React.Component {
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
                    <button>Search</button>
                    

                    
                     
                </form>

            // </Paper>
        )
    }
}

export default SearchBar;