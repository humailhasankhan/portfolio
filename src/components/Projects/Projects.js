import React from "react";
import images from "./ProjectImages";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div className="projects" id="projects">
      <h1 className="heading">PROJECTS</h1>
      <div className="container">
        <div className="inner-container">
          <motion.div
            className="item"
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.5,
              delay: 0.2,
              bounce: 0.3,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="https://caritas-education.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[0]} alt="caritas project thumbnail" />
            </a>
          </motion.div>
          <motion.div
            className="item"
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.7,
              delay: 0.4,
              bounce: 0.3,
            }}
            whileHover={{ scale: 1.2 }}
          >
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
          </motion.div>
          <motion.div
            className="item"
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 0.9,
              delay: 0.6,
              bounce: 0.3,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="https://humailkhan-full-stack-todo-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[2]} alt="todo project thumbnail" />
            </a>
          </motion.div>
          <motion.div
            className="item"
            initial={{ opacity: 0, y: "-100%" }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              duration: 1.1,
              delay: 0.8,
              bounce: 0.3,
            }}
            whileHover={{ scale: 1.2 }}
          >
            <a
              href="https://cyf-humailhasankhan-hotel-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={images[3]} alt="hotel app project thumbnail" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
