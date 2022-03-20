import React from "react";
import images from "./ProjectImages";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <div className="container">
        <div className="inner-container">
          {images.map((image, index) => {
            return (
              <div className="item" key={index}>
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
