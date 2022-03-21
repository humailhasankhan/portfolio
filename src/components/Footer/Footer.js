import React, { useEffect } from "react";
import "./Footer.css";
import { BsEnvelope, BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import mailgo from "mailgo";

const Footer = () => {
  useEffect(() => {
    mailgo();
  }, []);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="info">
          <h4>© Humail khan 2022</h4>
        </div>
        <div className="footer-icons">
          <div className="icon-spacing">
            <a
              href="mailto:h.hasan.khan88@gmail.com"
              aria-label="Link to email"
            >
              <BsEnvelope className="media-icons envelope-icon" size={30} />
            </a>
          </div>
          <div className="icon-spacing">
            <a
              href="https://github.com/humailhasankhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github link"
            >
              <BsGithub className="media-icons github-icon" size={30} />
            </a>
          </div>
          <div className="icon-spacing">
            <a
              href="https://www.linkedin.com/in/humail-khan-619644217/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github link"
            >
              <BsLinkedin className="media-icons linkedin-icon" size={30} />
            </a>
          </div>
          <div className="icon-spacing ">
            <a
              href="https://twitter.com/HumailHKhan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github link"
            >
              <BsTwitter className="media-icons twitter-icon" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
