import React from "react";
import images from "./ProjectImages";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>PROJECTS</h1>
      <div className="container">
        <div className="inner-container">
          <div className="item">
            <a
              href="https://caritas-education.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[0]} alt="caritas project thumbnail" />
            </a>
          </div>
          <div className="item">
            <a
              href="https://humailkhan-assessment-project.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                <img
                  src={images[1]}
                  alt="video recommendation project thumbnail"
                />
              }
            </a>
          </div>
          <div className="item">
            <a
              href="https://humailkhan-full-stack-todo-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[2]} alt="todo project thumbnail" />
            </a>
          </div>
          <div className="item">
            <a
              href="https://cyf-humailhasankhan-hotel-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[3]} alt="hotel app project thumbnail" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
