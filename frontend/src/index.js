import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


// function find_comment(arrayOfComments, comment){
//   let replies = arrayOfComments.map(find_comment(element){
//       return element + " " + comment;

//   })
//   return replies
// }