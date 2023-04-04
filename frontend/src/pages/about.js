import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import myPicture from "./umass.jpeg";
// import aboutgid from "/.aboutgid.js";
import AboutGid from "./aboutgid";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <img src={myPicture} alt="My Picture" className="about-img" />
        <div className="about-text">
          <Link to="/about-gid">Learn more about GID</Link>
        </div>
      </div>
      <AboutGid />
    </div>
  );
};

export default About;
