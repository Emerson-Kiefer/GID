// import React from "react";
import logo from "./logo.png";
import "./App.css";
import Button from "@mui/material/Button"; //importing material ui component
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";

const Home = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <header>
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Grooming Identification Device</p>
          <FileUploadField files={files} setFiles={setFiles}/>
        </p>
      </header>
    </div>
  );
};

export default Home;
