import React from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -40 },
  whileInView: { opacity: 1, y: 0 },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const NavLinks = (props) => {
  return (
    <AnimatePresence>
      <motion.ul
        className="box"
        variants={animations}
        initial={animations.initial}
        whileInView={animations.whileInView}
        transition={{ duration: 2, delay: 0.1 }}
      >
        <motion.li
          className="nav-item"
          variants={animations}
          initial={animations.initial}
          whileInView={animations.whileInView}
          exit={animations.exit}
          transition={{ duration: 2 }}
        >
          <Link
            to="hero"
            spy={true}
            offset={-65}
            duration={500}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            HOME
          </Link>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={animations}
          initial={animations.initial}
          whileInView={animations.whileInView}
          exit={animations.exit}
          transition={{ duration: 2, delay: 0.2 }}
        >
          <Link
            to="about"
            spy={true}
            offset={-65}
            duration={500}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            ABOUT
          </Link>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={animations}
          initial={animations.initial}
          whileInView={animations.whileInView}
          exit={animations.exit}
          transition={{ duration: 2, delay: 0.4 }}
        >
          <Link
            to="tech-stack"
            spy={true}
            offset={-65}
            duration={500}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            TECH STACK
          </Link>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={animations}
          initial={animations.initial}
          whileInView={animations.whileInView}
          exit={animations.exit}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <Link
            to="projects"
            spy={true}
            offset={-65}
            duration={500}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            PROJECTS
          </Link>
        </motion.li>
        <motion.li
          className="nav-item"
          variants={animations}
          initial={animations.initial}
          whileInView={animations.whileInView}
          exit={animations.exit}
          transition={{ duration: 2, delay: 0.8 }}
        >
          <Link
            to="contact"
            spy={true}
            offset={-65}
            duration={500}
            onClick={() => props.isMobile && props.closeMobileMenu()}
          >
            CONTACT ME
          </Link>
        </motion.li>
      </motion.ul>
    </AnimatePresence>
  );
};

export default NavLinks;
