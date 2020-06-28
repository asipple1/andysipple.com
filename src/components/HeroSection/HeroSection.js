import React, { useEffect} from "react"
import Rellax from "rellax";


import Image from "../image"
import HeroBlob from "../../images/svgs/heroBlob.svg";
import FloatingShape from "../FloatingShape/FloatingShape";
import {useWindowSize} from '../Helpers/Utilities'

import './HeroSection.scss';

const HeroSection = () => {
  const {width,height} = useWindowSize();
  const style = {
    height: width > height ? height : '85vh'
  }
  useEffect(() => {
    new Rellax('.hero-section__rellax');
  }, []);
  return (
    <div className="hero-section" style={style}>
      <div className="hero-section__container">
        <FloatingShape type={'square'} color={"#F2962F"} style={{top: '30%', left: '42%'}}/>
        <FloatingShape type={'circle'} speed={2} style={{top: '90%', left: '70%'}}/>
        <FloatingShape type={'triangle'} color={'#F2962F'} speed={-1} style={{top: '80%', left: '30%', transform: 'rotate(-45deg)' }}/>
        <FloatingShape type={'triangle'} color={'#E77470'} speed={-2} style={{width: '40px', top: '10%', left: '92%', transform: 'rotate(45deg)'}}/>
        <FloatingShape type={'circle'} color={'#88B0BF'} speed={-2} style={{top: '15%', left: '10%', transform: 'rotate(45deg)'}}/>
        <div className="hero-section__rellax hero-section__copy" data-rellax-speed="-2">
          <h1 className="font-color--white hero-section__headline">
            <div className="hero-section__brick"></div>
            <div className="hero-section__text">Aloha.</div>
          </h1>
          <h1 className="font-color--white hero-section__subhead">
            <div className="hero-section__brick"></div>
            <div className="hero-section__text">I'm Andy!</div>
          </h1>
          <div className="font-color--white hero-section__intro">Professional problem solver for the digital world.</div>
        </div>
        <div className="hero-section__image-container">
          <div className="hero-section__rellax hero-section__image-container__inner" data-rellax-speed="2">
            <Image />
            <HeroBlob className="image-svg-outside"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;