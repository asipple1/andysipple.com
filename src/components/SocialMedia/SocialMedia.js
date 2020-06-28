import PropTypes from "prop-types"

import React from "react"

import Codepen from "../../images/svgs/codepen.svg";
import GitHub from "../../images/svgs/github.svg";
import Linkedin from "../../images/svgs/linkedin-round-line.svg";
import Instagram from "../../images/svgs/instagram-round-line.svg";

// Styles
import './SocialMedia.scss';

const SocialMedia = ({className}) => (
  <nav className={`social-media ${className ? className : ''}`}>
    <a className="social-media__link social-media__link--code" href="https://codepen.io/targrayen" role="button" aria-label="Codepen"><Codepen /></a>
    <a className="social-media__link social-media__link--git" href="https://github.com/asipple1" role="button" aria-label="Github"><GitHub /></a>
    <a className="social-media__link social-media__link--linkedin" href="https://www.linkedin.com/in/andy-sipple-7ab92a28/" role="button" aria-label="Linkedin"><Linkedin /></a>
    <a className="social-media__link social-media__link--insta" href="https://www.instagram.com/and_a_z/" role="button" aria-label="instagram"><Instagram /></a>
  </nav>
)

SocialMedia.propTypes = {
  className: PropTypes.string,
}


export default SocialMedia
