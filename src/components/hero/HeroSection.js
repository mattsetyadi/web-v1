import React from "react";
import { Button } from "../button/index.js";
import "../../App.css";
import "./HeroSection.css";
import VideoBg from "../../assets/videos/video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={VideoBg} autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
