import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input'
import Paper from '@mui/material/Paper'


export default function FileUploadField() {
  const [files, setFiles] = React.useState([])

  const handleFileUpload = (event) => {
    // const newFiles = event.target.files;
    setFiles(event.target.files);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  }

  const handleSubmit = (event) => {
    console.log(event.dataTransfer)
    event.preventDefault()
    setFiles(event.dataTransfer.files);

    //upload the files here?
  }

  const listFiles = () => {
    return Array.from(files).map((file, index) => <li key={index}>{file.name}</li>)
  }

  return (
    <Paper>
      <input id="file-upload" multiple type="file" onChange={handleFileUpload} hidden/>
        <label htmlFor="file-upload">
          <Button variant="contained" component="span">
            Upload File(s)
          </Button>
        </label>
        <div onDragOver={handleDragOver} onDrop={handleSubmit}>
        <p>Or drag and drop a file here</p>
        {/* {files && <p>Selected file: {files}</p>} */}
        <ul>Files: {listFiles()}</ul>
      </div>
  </Paper>

  );
}