import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="inner-container">
        <div className="hero-inner">
          <h1>
            <span id="span-one">
              I'm <span id="span-two">Humail Khan</span>
            </span>
          </h1>
          <span className="description">Full stack web developer</span>
          <div>
            <button className="hero-button">Resumé</button>
          </div>
          <div className="hero-icons">
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
            <div className="icon-spacing twitter-icon">
              <FontAwesomeIcon
                className="media-icons"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
