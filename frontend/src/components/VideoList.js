import React from "react";

import VideoItem from "./videoItem";


const VideoList = ({ videos, videoSelect }) => {
    const listOfVideos = videos.map((video, id) => <VideoItem videoSelect={videoSelect} key={id}/>)

    return(
        <>  
          {listOfVideos}
        </>
        


    
        

    )
}

export default VideoList
