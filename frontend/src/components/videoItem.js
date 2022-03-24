import React from "react";
import { Link } from "react-router-dom";

const VideoItem = ({ video, videoSelect }) => {
    return (
        // <Grid item xs={12}>
            // <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => videoSelect(video)}>
                <img style={{ marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.url}/>
                
    //             <Typography varient="subtitle1"><b>{video.snippet.title}</b></Typography>
    //         </Paper>
    //     </Grid>
    )
}

export default VideoItem