import React from "react"

import Image from "../Image/Image";
// Styles
import "./AboutSection.scss"

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="about-section__container">
        <div className="about-section__image">
          <Image alt={'Andy Sipple'} filename={'about-image'} />
        </div>
        <div className="about-section__copy">
          <h2>About</h2>
          <p>A little about myself. I am a self-taught web developer who discovered the wonderful world of coding in my late twenties. One of my greatest passions in life is listening to challenging digital problems and working out solutions to solve them. I have had the honor to work with many great designers and developersit. I live in Honolulu, Hawaii with my beautiful wife Ally and our loyal companion Orion.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;