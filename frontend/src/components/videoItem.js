import React from "react";
import { Grid, Paper, Typography} from '@mui/material';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <grid item xs={12}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
                <img style={{ marginRight: '20px'}} alt="thumbnail" src={video.snippet.thumbnails.url}/>
                <Typography varient="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>
        </grid>
    )
}

export default VideoItem