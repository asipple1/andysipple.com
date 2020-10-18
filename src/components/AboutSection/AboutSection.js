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
          <h2>About me!</h2>
          <p>A curious, tenacious problem solver, tinkerer and self taught web dev. I spent several years in my twenties in a grueling, fast paced job with tireless hours. Needing to shift gears, I stumbled upon the wonderful world of code. It is the perfect combination of a challenge laced with reward. Now in my thirties, I’ve found my passion in digital problem solving. </p>
          <p>I'm forever a student of life and I am always looking for my next adventure! I’ve  had the honor to work with many great designers, developers and people in the creative digital world.  I’m a Nebraska native residing in the Aloha state with my lovely wife Ally and fur child Orion.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;