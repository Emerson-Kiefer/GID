import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";
import PredictButton from "./predict_button";

const Home = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <logo-container>
          <header>
            <p>Please upload a file to begin</p>
            <FileUploadField
              files={files}
              setFiles={setFiles}
              className="file-upload"
            />
          </header>
        </logo-container>
        <PredictButton></PredictButton>
      </div>
    </div>
  );
};

export default Home;