import React from 'react'
import './Team.css'
import chef1 from '../../assets/images/team-1.jpg'
import chef2 from '../../assets/images/team-2.jpg'
import chef3 from '../../assets/images/team-3.jpg'
import chef4 from '../../assets/images/team-4.jpg'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
const Team = () => {
  return (
    <section className="team section" id="team">
      <h2 className="section--title" data-title="Chefs">
        Meet Our Experts
      </h2>
      <div className="team--grid grid container">
        <div className="team--item">
          <img src={chef1} alt="" className="team--img" />
          <div className="team--data">
            <h3 className="team--title">Malissa Fie</h3>
            <p className="team--job">Senior Chef</p>
          </div>
          <div className="team--socials">
            <a href="" className="team--social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team--social-link">
              <FaTwitter />
            </a>
            <a href="" className="team--social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team--social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team--item">
          <img src={chef2} alt="" className="team--img" />
          <div className="team--data">
            <h3 className="team--title">Chad Smith</h3>
            <p className="team--job">Senior Chef</p>
          </div>
          <div className="team--socials">
            <a href="" className="team--social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team--social-link">
              <FaTwitter />
            </a>
            <a href="" className="team--social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team--social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team--item">
          <img src={chef3} alt="" className="team--img" />
          <div className="team--data">
            <h3 className="team--title">Arron Rodri</h3>
            <p className="team--job">Senior Chef</p>
          </div>
          <div className="team--socials">
            <a href="" className="team--social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team--social-link">
              <FaTwitter />
            </a>
            <a href="" className="team--social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team--social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="team--item">
          <img src={chef4} alt="" className="team--img" />
          <div className="team--data">
            <h3 className="team--title">Tony Pinto</h3>
            <p className="team--job">Senior Chef</p>
          </div>
          <div className="team--socials">
            <a href="" className="team--social-link">
              <FaFacebookF />
            </a>
            <a href="" className="team--social-link">
              <FaTwitter />
            </a>
            <a href="" className="team--social-link">
              <FaLinkedinIn />
            </a>
            <a href="" className="team--social-link">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
