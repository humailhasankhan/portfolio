import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import "./NavBar.css";
import { motion, AnimatePresence } from "framer-motion";

const animations = {
  initial: { opacity: 0, y: -40 },
  animate: { opacity: 1, y: 0, transition: { duration: 2 } },
  close: { opacity: 0, transition: { duration: 2 } },
};

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const hamburgerIcon = (
    <GiHamburgerMenu
      className="hamburger"
      size={"40px"}
      color={"white"}
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <CgClose
      className="hamburger"
      size={"40px"}
      color={"white"}
      onClick={() => setOpen(!open)}
    />
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <AnimatePresence>
      <motion.nav
        className="mobile-navigation"
        variants={animations}
        initial={animations.initial}
        animate={animations.animate}
        exit={animations.close}
        transition={{ duration: 2 }}
      >
        {open ? closeIcon : hamburgerIcon}
        {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
      </motion.nav>
    </AnimatePresence>
  );
};

export default MobileNavigation;
