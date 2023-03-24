import './App.css';
import Button from "@mui/material/Button"
import FileUploadField from './components/fileUploadField';
import React from 'react';

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <FileUploadField></FileUploadField>
      </header>
    </div>
  );
}

export default App;
