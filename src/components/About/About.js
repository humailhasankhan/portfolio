import React from "react";
import "./About.css";
import profileImage from "../../assets/hero/profile.png";
import { motion, AnimatePresence } from "framer-motion";

const About = () => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -1000, transition: { delay: 0.4 } };
  return (
    <AnimatePresence>
      <motion.div
        className="about"
        id="about"
        initial={animateFrom}
        animate={animateTo}
        exit={exit}
        transition={{ delay: 0.4 }}
      >
        <div className="heading-container">
          <h1 className="about-heading">ABOUT ME</h1>
        </div>
        <div className="text-container">
          <p className="about-text">
            A full stack web developer who recently graduated from{" "}
            <span>Code</span>
            YourFuture. Good attention to detail, highly motivated and an eager
            to learn developer with projects in React, Gatsby, JavaScript,
            Node.js and GraphQl.{" "}
          </p>
        </div>

        <div className="image-container">
          <img className="about-image" src={profileImage} alt="profile" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
