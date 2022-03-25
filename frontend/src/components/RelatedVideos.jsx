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

// const RelatedVideo = (props) => {

//   function NewLink() {

//       return props.relatedVideo.map((video) => {
//           return (
//               <ListGroup.Item key={video.videoId}>
//                   <Image src={video.thumbnailUrl} alt="video thumbnail" rounded style={{width: "100%", height: "100%"}}/>
//                   <Button variant='link' onClick={() => props.displayNewVideo(video.videoId)}>{video.videoTitle}</Button>
//               </ListGroup.Item>




export default RelatedVideo