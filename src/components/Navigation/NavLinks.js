import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const exit = { opacity: 0, y: -1000, transition: { duration: 2 } };

  return (
    <ul className="box">
      <AnimatePresence>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.1 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#hero">HOME</a>
        </motion.li>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.2 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#about">ABOUT ME</a>
        </motion.li>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.3 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#skills">SKILLS</a>
        </motion.li>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.4 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#projects">PROJECTS</a>
        </motion.li>
        <motion.li
          key="box"
          initial={animateFrom}
          animate={animateTo}
          exit={exit}
          transition={{ delay: 0.5 }}
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a href="/#contact">CONTACT ME</a>
        </motion.li>
      </AnimatePresence>
    </ul>
  );
};

export default NavLinks;
