import PropTypes from "prop-types"
import React from "react"

import Logo from "../Logo/Logo";

// Styles
import './Header.scss';

const Header = () => {
  // scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)
  const scrollTo = (ele) => {
    ele.preventDefault();
    if(ele) {
      const href = ele.currentTarget.getAttribute('href');
      const sectionScroll = document.querySelector(href);
      sectionScroll.scrollIntoView({ behavior: 'smooth'});
    }

  }
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <a className="header__link header__link--one" href="#projects-section" onClick={scrollTo.bind(this)}>Projects</a>
      <a className="header__link header__link--two" href="#about-section" onClick={scrollTo.bind(this)}>About</a>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
