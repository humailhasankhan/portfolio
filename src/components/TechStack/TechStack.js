import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./TechStack.css";
import images from "./CarouselImages";
import anime from "animejs";
import { FaArrowRight } from "react-icons/fa";

const TechStack = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  const animation = () => {
    anime({
      targets: "#arrow",
      // strokeDashoffset: [anime.setDashoffset, 0],
      // fill: ["rgba(0,0,0,0)", "rgba(255, 255, 255)"],
      opacity: 0,
      translateX: 45,
      direction: "alternate",
      easing: "easeInOutSine",
      loop: true,
    });
  };

  useEffect(() => {
    animation();
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
        <motion.div id="arrow" onLoad={animation}>
          <FaArrowRight size={50} color={"white"} />
          {/* <svg
            width="40"
            height="66"
            viewBox="0 0 40 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.6876 28.5626L11.1876 2.06261C10.6066 1.4768 9.9153 1.01184 9.15368 0.694534C8.39205 0.37723 7.57514 0.213867 6.75007 0.213867C5.925 0.213867 5.10809 0.37723 4.34647 0.694534C3.58485 1.01184 2.89359 1.4768 2.31257 2.06261C1.1485 3.23362 0.495117 4.81769 0.495117 6.46885C0.495117 8.12002 1.1485 9.70409 2.31257 10.8751L24.4376 33.0001L2.31257 55.1251C1.1485 56.2961 0.495117 57.8802 0.495117 59.5313C0.495117 61.1825 1.1485 62.7666 2.31257 63.9376C2.89657 64.5169 3.58917 64.9751 4.35066 65.2862C5.11214 65.5972 5.92753 65.7548 6.75007 65.7501C7.57261 65.7548 8.388 65.5972 9.14949 65.2862C9.91097 64.9751 10.6036 64.5169 11.1876 63.9376L37.6876 37.4376C38.2734 36.8566 38.7383 36.1653 39.0556 35.4037C39.3729 34.6421 39.5363 33.8252 39.5363 33.0001C39.5363 32.175 39.3729 31.3581 39.0556 30.5965C38.7383 29.8349 38.2734 29.1436 37.6876 28.5626Z"
              fill="black"
            />
          </svg> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStack;
