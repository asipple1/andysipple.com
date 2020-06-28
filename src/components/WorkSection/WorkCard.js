import React from "react"

import Image from "../Image/Image";
import ArrowRight from "../../images/svgs/arrowright.svg";

const WorkSection = (props) => {
  const {title, image, tags, url, description} = props;
  return (
    <div className="work-card">
      <div className="work-card__image">
        <a href={url} rel="noreferrer" target="_blank" className="work-gallery__image-wrapper">
          <Image alt={title} filename={image} />
        </a>
      </div>
      <div className="font-color--white work-card__copy">
        <a href={url} className="work-card__headline" target="_blank" rel="noreferrer"><h3 className="font-color--white">{ title }</h3></a>
        <div className="work-card__tags">{tags}</div>
        <div className="work-card__description">{description}</div>
        <a href={url} target="_blank" rel="noreferrer" className="button work-card__link"><span>Visit <ArrowRight /></span></a>
      </div>
    </div>
  )
}
export default WorkSection;