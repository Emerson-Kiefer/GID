import logo from "./logo.png";
import "./App.css";
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";
import AnalysisButton from "../components/analysisButton";
import AnalysisResultsTable from "../components/analysisResultsTable";
import FileUploadDialog from "../components/fileUploadDialog";

const Home = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

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
        <FileUploadDialog files={files}/>
        <AnalysisButton files={files} uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiles}/>
        <AnalysisResultsTable uploadedFiles={uploadedFiles}/>
      </div>
    </div>
  );
};

export default Home;
