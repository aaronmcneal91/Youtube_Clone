import React from "react";



const VideoList = (props) => {
   const handleClick = (event, video) => {
   event.preventDefault();
   props.setCurrentVideo(video);
   console.log("handle click ran")
   console.log(video)
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
                     onClick={(event) => handleClick(event, video)}
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
