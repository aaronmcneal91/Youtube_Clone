import React from "react";



const VideoList = (props) => {
   const handleClick = (event, videoId) => {
   event.preventDefault();
   props.setCurrentVideo(videoId);
   console.log("handle click ran")
   console.log(videoId)
   }

    return(
        <div>
          <h1>Search Results</h1>
          <table>
            <tbody>
              {props.searchResults.map((video, index) => {
                return (
                  <tr key={index}>
                     <td>{video.snippet.title}</td>
                     <input alt="image" type="image" src={video.snippet.thumbnails.medium.url}
                     onClick={(event) => handleClick(event, video.id.videoId)}
                     />
                     <td>{video.snippet.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
          )
}

export default VideoList
