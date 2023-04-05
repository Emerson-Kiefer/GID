import React, { useState } from "react";
import "./aboutus.css";
import erica from "./erica.jpg";

const images = [
  {
    id: 1,
    src: erica,
    alt: "Erica img",
    description: "Erica Pickard: Description.",
  },
  {
    id: 2,
    src: erica,
    alt: "Image 2",
    description: "Short description of image 2.",
  },
  {
    id: 3,
    src: erica,
    alt: "Image 3",
    description: "Short description of image 3.",
  },
  {
    id: 4,
    src: erica,
    alt: "Image 4",
    description: "Short description of image 4.",
  },
];

function AboutUs() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="about-container">
      {images.map((image) => (
        <div
          key={image.id}
          className={`about-item ${image.id === activeImage ? "active" : ""}`}
          onClick={() => setActiveImage(image.id)}
        >
          <img src={image.src} alt={image.alt} />
          <p className="about-description">{image.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
