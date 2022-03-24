// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import youtube from "./api/youtube";
// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Youtube from "./Youtube";
// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import { SearchBar, VideoDetail, VideoList } from "./components";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";



 
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Youtube />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

