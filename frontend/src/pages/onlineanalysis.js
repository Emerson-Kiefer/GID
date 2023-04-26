import logo from "./logo.png";
import "./App.css";
import "./onlineanalysis.css";
import React, { useState } from "react"; //Source #4
import FileUploadField from "../components/fileUploadField";
import AnalysisButton from "../components/analysisButton";
import AnalysisResultsTable from "../components/analysisResultsTable";
import FileUploadDialog from "../components/fileUploadDialog";
import ChatDisplay from "./chatpages/chatdisplay";

const OnlineAnalysis = () => {
  const [files, setFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        <logo-container>
          <header>
            <p>Please upload a file to begin for ~online~ analysis :0</p>
          </header>
        </logo-container>
        <div className="row">
          <FileUploadField
            files={files}
            setFiles={setFiles}
            className="file-upload"
          />
          <FileUploadDialog files={files} />
          <AnalysisButton
            files={files}
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </div>
        <ChatDisplay></ChatDisplay>
        <button>Next</button>
      </div>
    </div>
  );
};

export default OnlineAnalysis;
