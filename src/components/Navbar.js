import React from "react";
import MobileNavigation from "./MobileNavigation";
import "./NavBar.css";
import Navigation from "./Navigation";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="navbar"
        initial={{ y: -1000, opacity: 1, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        exit={{ y: "50%", opacity: 0, transition: { duration: 0.1 } }}
      >
        <MobileNavigation />
        <Navigation />
      </motion.div>
    </AnimatePresence>
  );
};

export default NavBar;
