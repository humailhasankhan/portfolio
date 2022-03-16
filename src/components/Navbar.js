import React from "react";
import MobileNavigation from "./MobileNavigation";
import "./NavBar.css";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <div className="navbar">
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default NavBar;
