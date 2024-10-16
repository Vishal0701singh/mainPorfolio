import React from "react";
import "../components.css";
import profileImg from "../../assets/profile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/Resume/Vishal_singh_resume_UEC__.pdf"

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <img src={profileImg} alt="profileImg" className="image"/>
      <h1><span>I am Vishal Singh,</span> Front End Developer based in India. </h1>
      <div className="heroAction">
        <div className="heroConnect"><AnchorLink className="anchorLink" offset={50} href="#contact">Connect With Me</AnchorLink></div>
        <a className="heroResume" href={resume} target="_blank" rel="noreferrer">My Resume</a>
      </div>
    </div>
  );
};

export default Hero;
