import React, { useState, useEffect } from "react";
import AnimateComponent from "./AnimateComponent";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import Hero from "./Hero";
import NavBar from "./Navbar";
import About from "./About";

const Home = () => {
  const [showComponent, setShowComponent] = useState(false);
  const childVariants = {
    hidden: { opacity: 0, x: -1000 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };
  setTimeout(() => {
    setShowComponent(true);
  }, 7000);
  useEffect(() => {}, [showComponent]);

  return (
    <>
      <AnimateComponent>
        <AnimatePresence>
          {showComponent && (
            <motion.div
              className="home-body"
              variants={childVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 2 }}
            >
              <NavBar />
              <Hero />
            </motion.div>
          )}
          {showComponent && (
            <div>
              <About />
            </div>
          )}
        </AnimatePresence>
      </AnimateComponent>
    </>
  );
};

export default Home;
