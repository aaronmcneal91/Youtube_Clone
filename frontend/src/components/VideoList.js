import React from "react";
import {Grid} from '@mui/material';
import VideoItem from "./VideoItem";


const VideoList = ({ videos, onVideoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem onVideoSelect={onSelectVideo} key={id}/>)

    return(
        <grid container spacing={10}>
            {listOfVideos}

        </grid>
    
        

    )
}

export default VideoList
