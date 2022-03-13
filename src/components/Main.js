import React, { useState, useEffect } from "react";
import AnimateComponent from "./AnimateComponent";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const [showComponent, setShowComponent] = useState(false);
  setTimeout(() => {
    setShowComponent(true);
  }, 8000);
  useEffect(() => {}, [showComponent]);

  return (
    <>
      <AnimateComponent>
        <AnimatePresence>
          {showComponent && (
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h1>Hello how are you</h1>
            </motion.div>
          )}
        </AnimatePresence>
      </AnimateComponent>
    </>
  );
};

export default Main;
