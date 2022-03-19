import React from "react";
import images from "./ProjectImages";
import "./Projects.css";

const Projects = () => {
  console.log(images);
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="container">
        <div className="inner-container">
          {images.map((image) => {
            return (
              <div className="item">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
