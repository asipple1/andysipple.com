import React, {useEffect} from "react"
import Rellax from "rellax";
import { useStaticQuery, graphql } from "gatsby"


import WorkCard from "./WorkCard";


import './WorkSection.scss';


const WorkSection = () => {
  const workData = useStaticQuery(
    graphql`
      query WorkQuery {
        workYaml {
          content {
            description
            image
            title
            url
            tags
          }
        }
      }
    `
  );
  useEffect(() => {
    new Rellax('.work-section__dec-headline-one');
  }, []);
  return (
    <section id="projects-section" className="work-section">
      <div className="work-section__top-wave">
        <svg viewBox="0 0 1920 241.595"><path d="M0,119.894l64,19.982c64,19.982,192,59.947,320,39.965S640,79.929,768,59.947s256,19.982,384,73.31c128,52.828,256,120.269,384,106.531s256-106.156,320-153.24l64-46.584V0H0Z"/></svg>
      </div>
      <div className="work-section__container">
        <div className="work-section__header">
          <h1 className="font-color--white">PROJECTS</h1>
        </div>
        <div className="work-section__cards">
          {workData.workYaml.content.map((work, index) => {
            return  (
              <WorkCard title={work.title} tags={work.tags} url={work.url} description={work.description} image={work.image} key={index}/>
            )
          })}
        </div>
        <h1 className="work-section__dec-headline-one" data-rellax-speed="-2">WEB</h1>
      </div>
      <div className="work-section__bottom-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,133.3C672,85,768,43,864,69.3C960,96,1056,192,1152,224C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  )
}



export default WorkSection;