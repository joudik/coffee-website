import React from 'react'
import './Reserve.css'
import { FaRegBookmark } from 'react-icons/fa'
import shapeTwo from '../../assets/images/shape-2.png'
import shapeThree from '../../assets/images/shape-3.png'
const Reserve = () => {
  return (
    <section className="reserve container" id="reserve">
      <h2 className="section--title" data-title="Reservations">
        Book a Table
      </h2>
      <form className="reserve--form grid">
        <div className="form--input-div">
          <input type="text" placeholder="Your name " className="form--input" />
        </div>
        <div className="form--input-div">
          <input type="email" placeholder="Email " className="form--input" />
        </div>
        <div className="form--input-div">
          <input
            type="text"
            placeholder="Your phone "
            className="form--input"
          />
        </div>
        <div className="form--input-div">
          <input type="text" placeholder="Date" className="form--input" />
        </div>
        <div className="form--input-div">
          <input type="text" placeholder="Time" className="form--input" />
        </div>
        <div className="form--input-div">
          <input
            type="text"
            placeholder="Number of people"
            className="form--input"
          />
        </div>
        <div className="form--input-textarea">
          <textarea
            placeholder="Your message"
            className="form--input"
          ></textarea>
        </div>
        <button className="btn btn-flex reserve--btn">
          <FaRegBookmark />
          Book a table
        </button>
      </form>
      <img src={shapeTwo} className="shape-two" />
      <img src={shapeThree} className="shape-three" />
    </section>
  )
}

export default Reserve
