import React from "react";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { VideoDetail, VideoList } from "./components";
import NewSearchBar from "./components/NewSearchBar";
// Util Imports

import { useState, useEffect } from "react";
import axios from "axios";


//function YouTube(props){
    //const [videos, setVideos] = useState([])
    //setVideos([1,2,3,4,5,5])
//}
function Search() {

    const [searchResults, setSearchResults] = useState([]);
    const [currentVideoId, setCurrentVideo] = useState("x79XHJFo0ls");
    
    useEffect(() => {
        getSearchResults()
    },[])
    
    
    async function getSearchResults(searchTerm="dogs"){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=5&key=AIzaSyDWtRZ0DbDR4RMEIS1F9Bjp_FkhuecPsIs`);
        console.log(response.data.items)
        setSearchResults(response.data.items)
    }
    return (
                <div justify="center" container spacing={10}>
                  {/* <Grid item xs={12}>
                    <Grid container spacing={10}>
                      <Grid item xs={12}> */}
                      <NewSearchBar getSearchResults={getSearchResults}/>
                       
                        
                      
                      {/* </Grid>
                      <Grid item xs={8}> */}
                        <VideoDetail currentVideoId={currentVideoId}/>
                      {/* </Grid>
                      <Grid item xs={4}> */}
                        <VideoList 
                        searchResults={searchResults}
                        setCurrentVideo={setCurrentVideo}
                        />
                      {/* </Grid>
                    </Grid>
                  </Grid> */}
                </div>
              )  
        
    }
    
    


// class Youtube extends React.Component {
//     state = {
//       videos: [],
//       selectedVideo: null,
  
//     }
//     videoSelect = (video) => {
//       this.setState({ selectedVideo: video});
//     }
  
  
//     handleSubmit = async (searchTerm) => {
//       const response = await youtube.get('search',{
//         params: {
//           part: 'snippet',
//           maxResults: 5,
//           key: 'AIzaSyDWtRZ0DbDR4RMEIS1F9Bjp_FkhuecPsIs',
//           q: searchTerm,
//       }
  
//     });
//     this.setState ({ videos: response.data.items, selectedVideo: response.data.items [0] });
// }
  
//   //
  
//     render(){
//       //const{selectedVideo,videos} = this.state
//       return (
//         <div justify="center" container spacing={10}>
//           {/* <Grid item xs={12}>
//             <Grid container spacing={10}>
//               <Grid item xs={12}> */}
//                 <SearchBar formSubmit={this.handleSubmit} />
//               {/* </Grid>
//               <Grid item xs={8}> */}
//                 <VideoDetail video={this.state.selectedVideo}/>
//               {/* </Grid>
//               <Grid item xs={4}> */}
//                 <VideoList videos={this.state.videos} videoSelect={this.videoSelect}/>
//               {/* </Grid>
//             </Grid>
//           </Grid> */}
//         </div>
//       )
//       }
    
//   }
  export default Search;