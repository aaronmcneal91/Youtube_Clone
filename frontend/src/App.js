// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import youtube from "./api/youtube";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { Grid } from '@mui/material';
import { SearchBar, VideoDetail } from "./components";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";


class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null,

  }
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: '[API KEY]'
        q: searchTerm,
    }

    });
    this.setState ({ videos: response.data.items, selectedVideo: response.data.items [0] });



render () {
  const{selectedVideo} = this.state
  return (
    <Grid justify="center" container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={this.handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail video={selectedVideo}/>
          </Grid>
          <Grid item xs={4}>
            {/*video list*/}
          </Grid>
        </Grid>
      </Grid>
    </Grid>


  });
}


<div>
     
<Navbar />
<Routes>
  <Route
    path="/"
    element={
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    }
  />
  <Route path="/register" element={<RegisterPage />} />
  <Route path="/login" element={<LoginPage />} />
</Routes>
<Footer />
</div>
);
}


export default App;
