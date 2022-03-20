import React from "react";
import "./Hero.css";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero" id="hero">
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
    </div>
  );
};
export default Hero;
