// import logo from "./logo.png";
// // import "./App.css";
// import Button from "@mui/material/Button"; //importing material ui component
import React, { useState } from "react"; //Source #4
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Events from "./pages/events";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import SignUp from "./pages/signup";

const App = () => {
  /* Initial State */
  // let [Name, setname] = useState("");

  // /* The handleChange() function to set a new state for input */
  // const handleChange = (event) => {
  //   setname(event.target.value);
  // };
  return (
    // </>
    <nav className="navbar">
      {/* <div className="App"> */}
      <div className="nav-elements">
        <ul>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/events" element={<Events />} />
              <Route path="/annual" element={<AnnualReport />} />
              <Route path="/team" element={<Teams />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
          </Router>
        </ul>
        {/* <header>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Grooming Identification Device</p>
            <Button //upload button
              variant="contained"
              component="label"
            >
              <p>Upload File</p>
              <input type="file" onChange={handleChange} />
            </Button>
          </header>
        </div> */}
      </div>
    </nav>
  );
};

export default App;
