// import React from "react";
import React, { useState } from "react"; //Source #4
import Button from "@mui/material/Button";

const AnalysisButton = (props) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
  
    const formData = new FormData();
  
    for (let i = 0; i < props.files.length; i++) {
      formData.append('files', props.files[i]);
    }
    const response = await fetch('http://127.0.0.1:8080/api/upload', {
      method: 'POST',
      body: formData,
    });

    // handle the server response
    if(response.ok) {
      const data = await response.json();
      setUploadedFiles(data.files);
    } else {
      console.error(response.statusText);
    }
  }

  function renderUploadedFiles(){
    return (
      <ul>
        {uploadedFiles.map((file) =>(
          <li key={file.name}>
            <h3>{file.name}</h3>
            <pre>{file.contents}</pre>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input type="file" multiple onChange={handleFileChange} /> */}
        <Button type="submit" variant="contained">Run Analysis</Button>
      </form>
      {uploadedFiles.length > 0 && renderUploadedFiles()}
    </div>
  );
};

export default AnalysisButton;
