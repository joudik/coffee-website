import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'
import {
  FaRegEnvelope,
  FaCaretRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
export const Footer = () => {
  return (
    <footer className="footer " id="footer">
      <div className="footer--grid container grid">
        <div className="footer--content">
          <a href="/" className="footer--logo">
            <img src={logo} className="footer--logo-img" />
          </a>
          <p className="footer--des">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English
          </p>
          <ul className="footer--contact">
            <li className="footer--contact-item">
              <AiOutlinePhone className="icon" /> +2 123 456 789
            </li>
            <li className="footer--contact-item">
              <MdOutlineLocationOn className="icon" /> New york 25/b bond
            </li>
            <li className="footer--contact-item">
              <FaRegEnvelope className="icon" /> example@gmail.com
            </li>
          </ul>
        </div>

        <div className="footer--content">
          <h3 className="footer--title">Quick Links</h3>
          <ul className="footer--links">
            <li>
              <a href="#about" className="footer--link">
                <FaCaretRight className="icon" />
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="footer--link">
                <FaCaretRight className="icon" />
                Menu
              </a>
            </li>
            <li>
              <a href="#features" className="footer--link">
                <FaCaretRight className="icon" />
                Features
              </a>
            </li>
            <li>
              <a href="#gallery" className="footer--link">
                <FaCaretRight className="icon" />
                Gallery
              </a>
            </li>
            <li>
              <a href="#team" className="footer--link">
                <FaCaretRight className="icon" />
                Team
              </a>
            </li>
            <li>
              <a href="#reserve" className="footer--link">
                <FaCaretRight className="icon" />
                Reservation
              </a>
            </li>
          </ul>
        </div>
        <div className="footer--content">
          <h3 className="footer--title">Qpening Hours</h3>
          <div className="footer--opening-hour">
            <ul className="opening--hour-list">
              <li className="opening--hour-item">
                <span>Saturday:</span>
                <span>9AM -6PM</span>
              </li>
              <li className="opening--hour-item">
                <span>Sunday:</span>
                <span>9AM -6PM</span>
              </li>
              <li className="opening--hour-item">
                <span>Monday:</span>
                <span>9AM -6PM</span>
              </li>
              <li className="opening--hour-item">
                <span>Tuesday:</span>
                <span>9AM -6PM</span>
              </li>
              <li className="opening--hour-item">
                <span>Wednesday:</span>
                <span>9AM -6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer--content">
          <h3 className="footer--title">Newsletter</h3>
          <p className="footer--des">
            subscribe to out newsletter to get latest update and news
          </p>
          <form action="" className="sub--form">
            <input
              className="form--input sub--input"
              placeholder="Email"
              type="email"
            />
            <button className="btn btn-flex sub--btn">
              <FaRegEnvelope />
              Subscribe Now
            </button>
          </form>

          <div className="footer--socials">
            <h3 className="footer--social-follow">Follow Us:</h3>
            <div className="footer--social-links">
              <a href="/" className="footer--social-link">
                <FaFacebookF />
              </a>
              <a href="/" className="footer--social-link">
                <FaTwitter />
              </a>
              <a href="/" className="footer--social-link">
                <FaLinkedinIn />
              </a>
              <a href="/" className="footer--social-link">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="copyright--text">
        &copy; Copyright 2023 <span>Caffero </span>All Rights Reserved.
      </p>
    </footer>
  )
}
