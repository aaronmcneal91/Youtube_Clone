// import React from "react";
// import "./SearchBar.css";
// import { useState } from "react";

// const SearchBar = (props) => {

// const[searchRequest, setSearchRequest] = useState('')

// const handleSubmit = (event) =>{
// event.preventDefault();
// props.getSearchResults(searchRequest);
// }

//     return (
//         <form>
//             <div>
//                 <input type="text" placeholder="Search Youtube" value={searchRequest} onChange={(event) => setSearchRequest(event.target.value)} />

//             </div>
//             <button onClick={handleSubmit} type="submit"> Search </button>
//         </form>
//     );
        
// }

// export default SearchBar;






// const SearchBar = () => {
//     const [data , setData] = useState(null); // data is our actual variable, setData is a function
//                                        setData() will allow you to pass in any value and will save it to data 

//     useEffect(() => {
//         fetch("https://www.googleapis.com/youtube/v3'")

//     }


//         )
// }


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
// }
