import React from "react";
import { Link } from "react-router-dom";


const VideoDetail = ({video}) => {
    if(!video) return <div>Loading...</div>

    const videoSrc =`https://www.youtube.com/embed/${video.id.videoId}` 

    return (
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
            <Paper>
            </Paper elevation={6}>
            </Paper>
        </React.Fragment>
    )
}

export default VideoDetail;