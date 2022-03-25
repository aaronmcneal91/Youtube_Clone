import React from "react";



const RelatedVideo = (props) => {
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
              {props.relatedVideoId.map((videoId, index) => {
                return (
                  <tr key={index}>
                     <td>{videoId.snippet.title}</td>
                     <input alt="image" type="image" src={videoId.snippet.thumbnails.medium.url}
                     onClick={(event) => handleClick(event, videoId)}
                     />
                     <td>{videoId.snippet.description}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
          )
}

export default RelatedVideo