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
            <button
              className="hero-button"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/17ZviYd9qAKZIAlJcuvCPLjXc_aFIHSs-/edit?usp=sharing&ouid=105150569418528521808&rtpof=true&sd=true",
                  "_blank"
                )
              }
            >
              Resumé
            </button>
          </div>
          <div className="hero-icons">
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
    </div>
  );
};
export default Hero;
