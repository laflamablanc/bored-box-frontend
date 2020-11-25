import React, {Component} from 'react'
import { useHistory } from "react-router-dom";

function HeroImage() {
  const history = useHistory();
  function handleClick() {
      history.push("/quiz");
    }

  return(
    <div className = "hero-image">
      <div className="container">
        <div> THE WARBY PARKER </div>
        <div> OF BOARD GAMES </div>
        <button className = "hero-button center" onClick={handleClick}>Get Started </button>
      </div>
    </div>
  )
}

export default HeroImage
