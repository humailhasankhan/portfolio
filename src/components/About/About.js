import React, { useEffect } from "react";
import "./About.css";
import profileImage from "../../assets/hero/profile.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.1 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
        opacity: 0,
        transition: { duration: 1 },
      });
    }
    console.log("use effect hook, inView =", inView);
  }, [inView, animation]);
  return (
    <div ref={ref} className="about" id="about">
      <motion.div className="about-container" animate={animation}>
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
    </div>
  );
};

export default About;
