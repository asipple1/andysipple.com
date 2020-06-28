import React, {useEffect} from "react"
import gsap from "gsap";
import debounce from 'lodash/debounce';

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import Grid from "../components/Grid/Grid";
import Header from "../components/Header/Header";
import HeroSection from "../components/HeroSection/HeroSection";
import WorkSection from "../components/WorkSection/WorkSection";
import AboutSection from "../components/AboutSection/AboutSection";

const IndexPage = () => {
  const tl = gsap.timeline({
    paused: true
  });
  useEffect(() => {
    gsap.set('.hero-section__container', {visibility:"visible"});
    gsap.set('.grid', {visibility:"visible"});
    gsap.set('.header', {visibility:"visible"});
    let windowWidth = window.innerWidth;

    introAnimation();
    tl.play();
    window.addEventListener('resize', debounce(() => {
      if (window.innerWidth != windowWidth) {
        windowWidth = window.innerWidth;
        tl.kill();
        introAnimation();
        tl.play();
      }
    }, 500));
  }, []);

  const introAnimation = () => {
    tl.fromTo('.header__logo', {x: -400}, {x: 0, duration: 0.8 });
    tl.fromTo(['.grid__line'], 0.6, {height: 0}, {height: '100%', stagger: { amount: -1.5, from: 'center'}}, '<');
    tl.fromTo(['.header__link'], 0.6, {y: -800}, {y: 0, stagger: { amount: 0.2}}, "<");
    tl.fromTo(['.sidebar__social-media'], 0.4, {y: 2000, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: { amount: 0.1}}, "<");
    tl.fromTo(['.sidebar__social-media a'], 0.4, {y: 2000, autoAlpha: 0}, {y: 0, autoAlpha: 1, stagger: { amount: 0.3}}, "<");
    tl.fromTo('.hero-section__brick', 1, {xPercent: -101},{xPercent: 101, stagger: { amount: 0.2}}, '<+0.5')
    tl.fromTo(['.hero-section__text'], 1, {xPercent: -100, autoAlpha: 0},{xPercent: 0, autoAlpha: 1, stagger: { amount: 0.4}}, '<')
    tl.fromTo('.hero-section__intro', 1, {autoAlpha: 0, y: 20}, {autoAlpha: 1, y: 0}, '<+0.5')
    tl.from('.hero-section__image-container', 0.8, {xPercent: 150, ease: "back.inOut(2)"}, "<");
    tl.to('.image-svg-outside', 0.4, {scale: 1.12, rotate: 3}, '>');
    tl.fromTo(['.floating-shape'], 0.4, {autoAlpha: 0, y: -20}, {autoAlpha: 1, y: 0, stagger: { amount: 0.4}}, "<");
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Grid />
      <Header />
      <HeroSection />
      <WorkSection />
      <AboutSection />
    </Layout>
  )
}

export default IndexPage
