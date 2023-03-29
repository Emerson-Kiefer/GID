import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";
import PredictButton from "./predict_button";

const Home = () => {
  const [files, setFiles] = useState([]);

  return (
    <div className="App">
      <header>
        <p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>Grooming Identification Device</p>
          <FileUploadField
            files={files}
            setFiles={setFiles}
            className="file-upload"
          />
        </p>
      </header>
      <PredictButton></PredictButton>
    </div>
  );
};

export default Home;
