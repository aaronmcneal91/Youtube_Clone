import React from "react";
import "./SearchBar.css";




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
                    <textarea fullWidth label="Search..." onChange={this.handleChange} />
                </form>

            // </Paper>
        )
    }
}

export default SearchBar;