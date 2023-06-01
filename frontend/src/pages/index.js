import logo from "../assets/images/logo_full.png";
import "./App.css";
import React from "react"; //Source #4
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";


const Home = () => {

  return (
    <div className="App">
      <div className="logo-container">
        <p>Welcome to</p>
        <img src={logo} className="App-logo" alt="logo" style={{ width: 900, height: 150}}/>
        <logo-container>
          <header>
            <p>
              Defending childhood, one message at a time - with our advanced
              grooming detection system
            </p>
            <Button component={Link} to="/begin" type="submit" variant="contained">
              File(s) Analysis
            </Button>
            <p>
            <Button component={Link} to="/onlineanalysis" type="submit" variant="contained">
              Live Analysis
            </Button>
            </p>
            <p>
              If this is your first time using GID, click the button below to
              learn how to use it and what file types GID accepts.
            </p>
            <p>
            <Button component={Link} to="/howto" type="submit" variant="contained">
              How To?
            </Button>
            </p>
          </header>
        </logo-container>
      </div>
    </div>
  );
};

export default Home;
