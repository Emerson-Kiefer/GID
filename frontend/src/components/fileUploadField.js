import * as React from "react";
import Button from "@mui/material/Button";
// import Paper from "@mui/material/Paper";

export default function FileUploadField(props) {
  const handleFileUpload = (event) => {
    // const newFiles = event.target.files;
    props.setFiles(event.target.files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    console.log(event.dataTransfer);
    event.preventDefault();
    props.setFiles(event.dataTransfer.files);

    //upload the files here?
  };

  const listFiles = () => {
    return Array.from(props.files).map((file, index) => (
      <li key={index}>{file.name}</li>
    ));
  };

  return (
    <div className="App">
      {/* <Paper elevation={2} variant="elevation"> */}
      <div onDragOver={handleDragOver} onDrop={handleSubmit}>
        <header>
          <input
            id="file-upload"
            multiple
            type="file"
            onChange={handleFileUpload}
            hidden
          />
          <label htmlFor="file-upload">
            <Button variant="contained" component="span">
              Upload File(s)
            </Button>
          </label>

          <p>Or drag and drop a file here</p>
          {/* {files && <p>Selected file: {files}</p>} */}
          {props.files.length > 0 && <ul>Files: {listFiles()}</ul>}
        </header>
      </div>
      
    </div>
    // </Paper>
  );
}
