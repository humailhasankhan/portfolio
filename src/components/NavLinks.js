import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -1000, transition: { delay: 0.4 } };
  return (
    <ul className="box">
      <AnimatePresence>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#hero">HOME</a>
          <a href="/#about">ABOUT ME</a>
          <a href="/#skills">SKILLS</a>
          <a href="/#projects">PROJECTS</a>
          <a href="/#contact">CONTACT ME</a>
        </motion.li>
      </AnimatePresence>
    </ul>
  );
};

export default NavLinks;
