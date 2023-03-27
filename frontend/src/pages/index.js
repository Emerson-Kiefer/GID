// import React from "react";
import logo from "./logo.png";
import "./App.css";
import Button from "@mui/material/Button"; //importing material ui component
import React, { useState } from "react"; //Source #4
// import Navbar from "./components/Navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "./pages";
// import About from "./pages/about";
// import Events from "./pages/events";
// import AnnualReport from "./pages/annual";
// import Teams from "./pages/team";
// import Blogs from "./pages/blogs";
// import SignUp from "./pages/signup";

const Home = () => {
  let [Name, setname] = useState("");

  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setname(event.target.value);
  };
  return (
    <div className="App">
      <header>
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Grooming Identification Device</p>
          <Button //upload button
            variant="contained"
            component="label"
          >
            <p>Upload File</p>
            <input type="file" onChange={handleChange} />
          </Button>
        </p>
      </header>
    </div>
  );
};

export default Home;
