import React, { useState } from "react";
import NavLinks from "./NavLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import "./NavBar.css";

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
    <nav className="mobile-navigation">
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
