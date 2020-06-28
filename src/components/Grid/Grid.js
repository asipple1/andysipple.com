import PropTypes from "prop-types"
import React from "react"

// Components
import SocialMedia from '../SocialMedia/SocialMedia'
import {useWindowSize} from '../Helpers/Utilities'

// Styles
import './Grid.scss';

const Grid = () => {
  const {width} = useWindowSize();

  return (
    <div id="grid" className="grid">
      <div className="grid__child grid__child--one sidebar">
        <div className="grid__line"></div>
        <div className="grid__container sidebar__container">
          <SocialMedia className="sidebar__social-media"/>
        </div>
      </div>
      <div className="grid__child grid__child--two">
      <div className="grid__line"></div>
      </div>
      <div className="grid__child grid__child--three">
      <div className="grid__line"></div>
      </div>
      <div className="grid__child grid__child--four">
      <div className="grid__line"></div>
      </div>
      <div className="grid__child grid__child--five">
      <div className="grid__line"></div>
      </div>
      <div className="grid__child grid__child--six">
      <div className="grid__line"></div>
      </div>
      {width > '1024' &&
        <>
          <div className="grid__child grid__child--hide-mobile grid__child--seven">
            <div className="grid__line"></div>
          </div>
          <div className="grid__child grid__child--eight">
            <div className="grid__line"></div>
          </div>
          <div className="grid__child grid__child--nine">
            <div className="grid__line"></div>
          </div>
          <div className="grid__child grid__child--ten">
            <div className="grid__line"></div>
          </div>
        </>
      }
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
}

export default Grid
