import logo from './logo.png';
import './App.css';
import Button from '@mui/material/Button'; //importing material ui component
import React, { useState } from "react"; //Source #4

const App = () => {
/* Initial State */
let [Name, setname] = useState('');

/* The handleChange() function to set a new state for input */
const handleChange = (event) => {
	setname(event.target.value);
}

return (
	// </>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Grooming Identification Device
        </p>
        <Button //upload button 2
          variant="contained"
          component="label"
        >
        <p>
          Upload File  
        </p>
          <input type="file" onChange={handleChange} />       
        </Button>
      </header> 
    </div>
)
}

export default App;

