import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -1000, transition: { duration: 2 } },
};

const NavLinks = (props) => {
  // const animateFrom = { opacity: 0, y: -40 };
  // const animateTo = { opacity: 1, y: 0 };
  // const exit = { opacity: 0, y: -1000, transition: { duration: 2 } };

  return (
    <AnimatePresence>
      <ul className="box">
        <motion.li
          key="box"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#hero">HOME</a>
        </motion.li>
        <motion.li
          key="box"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2, delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#about">ABOUT ME</a>
        </motion.li>
        <motion.li
          key="box"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2, delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#skills">SKILLS</a>
        </motion.li>
        <motion.li
          key="box"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2, delay: 0.6 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#projects">PROJECTS</a>
        </motion.li>
        <motion.li
          key="box"
          variants={animations}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2, delay: 0.8 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#contact">CONTACT ME</a>
        </motion.li>
      </ul>
    </AnimatePresence>
  );
};

export default NavLinks;
