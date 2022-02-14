import React from 'react';
import AboutImage from "../assets/dosa.jpg"

export const About = () => {
  return (
    <div className="about">
        <div className="aboutTop" style={{backgroundImage:`url(${AboutImage})`}}>

        </div>
        <div className="aboutButton">
        <h1>About us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipis</p>
        </div>
    </div>
  )
}
