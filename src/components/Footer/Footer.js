import React from "react";
import "./Footer.css";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="info">
          <h4>© Humail khan 2022</h4>
        </div>
        <div className="footer-icons">
          <div className="icon-spacing">
            <BsEnvelope className="media-icons envelope-icon" size={30} />
          </div>
          <div className="icon-spacing">
            <BsGithub className="media-icons github-icon" size={30} />
          </div>
          <div className="icon-spacing">
            <BsLinkedin className="media-icons linkedin-icon" size={30} />
          </div>
          <div className="icon-spacing ">
            <BsTwitter className="media-icons twitter-icon" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
