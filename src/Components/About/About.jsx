import React from 'react'
import './About.css'
import aboutImg from '../../assets/images/about-img.jpg'
import { FiCheck } from 'react-icons/fi'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about--grid container grid">
        <div className="about--img-wrapper">
          <img src={aboutImg} className="about--img" />
        </div>
        <div className="about--content">
          <h2 className="section--title title-left" data-title="About Us">
            There are many variations of passages of Lorem Ipsum available
          </h2>
          <p className="about--des">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable
          </p>

          <div className="about--details grid">
            <p className="about--details-des">
              <FiCheck className="about--details-icon" />
              There are many variations of passages
            </p>
            <p className="about--details-des">
              <FiCheck className="about--details-icon" />
              There are many variations of passages
            </p>
            <p className="about--details-des">
              <FiCheck className="about--details-icon" />
              There are many variations of passages
            </p>
            <a href="#team" className="btn about--button">
              Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
