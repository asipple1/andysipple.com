import PropTypes from "prop-types"
import React from "react"


// Styles
import './Logo.scss';

import LogoSvg from '../../images/svgs/logo.svg'

const Logo = ({className}) => (
  
  <a className={`logo ${className ? className : ''}`} href="/">
    <LogoSvg />
  </a>
)

Logo.propTypes = {
  className: PropTypes.string,
}

export default Logo
