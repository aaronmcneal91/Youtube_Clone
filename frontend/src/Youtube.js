import React from "react";
import "./App.css";

import youtube from "./api/youtube";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Grid } from '@mui/material';
import {SearchBar,  VideoDetail, VideoList } from "./components";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { useState } from "react";


//function YouTube(props){
    //const [videos, setVideos] = useState([])
    //setVideos([1,2,3,4,5,5])
//}

class Youtube extends React.Component {
    state = {
      videos: [],
      selectedVideo: null,
  
    }
    videoSelect = (video) => {
      this.setState({ selectedVideo: video});
    }
  
  
    handleSubmit = async (searchTerm) => {
      const response = await youtube.get('search',{
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyDWtRZ0DbDR4RMEIS1F9Bjp_FkhuecPsIs',
          q: searchTerm,
      }
  
    });
    this.setState ({ videos: response.data.items, selectedVideo: response.data.items [0] });
}
  
  //
  
    render(){
      //const{selectedVideo,videos} = this.state
      return (
        <div justify="center" container spacing={10}>
          {/* <Grid item xs={12}>
            <Grid container spacing={10}>
              <Grid item xs={12}> */}
                <SearchBar formSubmit={this.handleSubmit} />
              {/* </Grid>
              <Grid item xs={8}> */}
                <VideoDetail video={this.state.selectedVideo}/>
              {/* </Grid>
              <Grid item xs={4}> */}
                <VideoList videos={this.state.videos} videoSelect={this.videoSelect}/>
              {/* </Grid>
            </Grid>
          </Grid> */}
        </div>
      )
      }
    
  }
  export default Youtube;