import React from 'react'
import './Features.css'
import { features } from '../../Data'
import shape from '../../assets/images/shape.png'
const Features = () => {
  return (
    <section className="features section" id="features">
      <h2 className="section--title" data-title="Features">
        Our Best Features
      </h2>

      <div className="features--grid container grid">
        {features.map(({ img, title, description }, index) => {
          return (
            <div className="features--item" key={index}>
              <img src={img} className="features--img" />
              <h3 className="features--title">{title}</h3>
              <p className="features--des">{description}</p>
              <img src={shape} className="features--shape" />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Features
