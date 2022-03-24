import React from "react";



const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}` 

    return (
        <div>
             <iframe frameBorder= "0" height="100%" width="100%" title="Video Player" src ={videoSrc}/>
         
         
                <div variant="h4">{video.snippet.title} - {video.snippet.chanelTitle}</div>
                <div variant="subtitle1">{video.snippet.chanelTitle}</div>
                <div variant="subtitle2">{video.snippet.description}</div>
        </div>

    )
}

export default VideoDetail;