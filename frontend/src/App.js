import React from "react"; //Source #4
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Begin from "./pages/begin";
import AnnualReport from "./pages/annual";
import Teams from "./pages/team";
import Blogs from "./pages/blogs";
import AboutGid from "./components/Navbar/aboutgid";

const App = () => {
  return (
    <nav className="navbar">
      <div className="nav-elements">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/begin" element={<Begin />} />
            <Route path="/annual" element={<AnnualReport />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/about-gid" element={<AboutGid />} />
          </Routes>
        </Router>
      </div>
    </nav>
  );
};

export default App;
