import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="info">
          <h2>© Humail khan 2022</h2>
        </div>
        <div className="footer-icons">
          <div className="icon-spacing">
            <FontAwesomeIcon
              className="media-icons envelope-icon"
              icon={faEnvelope}
            ></FontAwesomeIcon>
          </div>
          <div className="icon-spacing">
            <FontAwesomeIcon
              className="media-icons github-icon"
              icon={faGithub}
            ></FontAwesomeIcon>
          </div>
          <div className="icon-spacing">
            <FontAwesomeIcon
              className="media-icons linkedin-icon"
              icon={faLinkedin}
            ></FontAwesomeIcon>
          </div>
          <div className="icon-spacing ">
            <FontAwesomeIcon
              className="media-icons twitter-icon"
              icon={faTwitter}
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
