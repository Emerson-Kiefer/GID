import React, { useState } from "react";
import "./aboutus.css";
import erica from "./erica.jpg";
import emerson from "./emerson.jpeg";
import aidan from "./aidan.jpeg";

const images = [
  {
    id: 1,
    src: erica,
    alt: "Image 1",
    name: "Erica Pickard",
    description:
      "Erica is a senior at UMass, graduating in May 2023 with a BS in computer science. She is part of the reasearch, UI, and frontend teams.",
  },
  {
    id: 2,
    src: emerson,
    alt: "Image 2",
    name: "Emerson Kiefer",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
  },
  {
    id: 3,
    src: aidan,
    alt: "Image 3",
    name: "Aidan Nuzum-Clark",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet",
  },
  {
    id: 4,
    src: "",
    alt: "Image TBD",
    name: "Jeevitha Patel",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna",
  },
];

function AboutUs() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <h1 className="team-header">Meet the Team!</h1>
      <div className="about-container">
        {images.map((image) => (
          <div
            key={image.id}
            className={`about-item ${image.id === activeImage ? "active" : ""}`}
            onClick={() => setActiveImage(image.id)}
          >
            <img src={image.src} alt={image.alt} />
            <div className="about-text">
              <h2>{image.name}</h2>
              <p className="about-description">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AboutUs;
