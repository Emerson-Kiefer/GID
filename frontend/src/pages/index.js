import logo from "../assets/images/logo_full.png";
import "./App.css";
import React from "react"; //Source #4
import { Link } from "react-router-dom";

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
            <Link to="/begin">
              <button className="button">File(s) Analysis</button>
            </Link>
            <p>
            <Link to="/onlineanalysis">
              <button className="online">Live Analysis</button>
            </Link>
            </p>
            <p>
              If this is your first time using GID, click the button below to
              learn how to use it and what file types GID accepts.
            </p>
            <p>
              <Link to="/howto">
                <button className="button">How to?</button>
              </Link>
            </p>
          </header>
        </logo-container>
      </div>
    </div>
  );
};

export default Home;
