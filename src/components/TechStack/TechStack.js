import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TechStack.css";
import images from "./CarouselImages";

const TechStack = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="tech-stack" id="tech-stack">
      <h1>TECH STACK</h1>
      <motion.div ref={carousel} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          className="inner-carousel"
        >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
