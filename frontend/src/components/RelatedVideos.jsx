import React from "react";



const RelatedVideo = (props) => {
   const handleClick = (event, videoId) => {
   event.preventDefault();
   props.setCurrentVideo(videoId);
   console.log("search related videos")
   console.log(videoId)
   }

    return(
        <div>
          <h1>Related Search</h1>
          <table>
            <tbody>
              {props.relatedVideoId.map((video, index) => {
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

// const RelatedVideo = (props) => {

//   function NewLink() {

//       return props.relatedVideo.map((video) => {
//           return (
//               <ListGroup.Item key={video.videoId}>
//                   <Image src={video.thumbnailUrl} alt="video thumbnail" rounded style={{width: "100%", height: "100%"}}/>
//                   <Button variant='link' onClick={() => props.displayNewVideo(video.videoId)}>{video.videoTitle}</Button>
//               </ListGroup.Item>




export default RelatedVideo