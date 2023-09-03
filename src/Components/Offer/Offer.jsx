import React from 'react'
import './Offer.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { offer } from '../../Data'
const Offer = () => {
  return (
    <section className="offer section  " id="offer">
      <h2 className="section--title" date-title="Offer">
        Special Offer For You
      </h2>
      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="container"
      >
        {offer.map(({ img, title, discount, description }, index) => {
          return (
            <SwiperSlide className="offer--item" key={index}>
              <div className="offer--img-wrapper">
                <img src={img} alt="" className="offer--img" />
              </div>
              <div className="offer--content">
                <h3 className="offer--title">{title}</h3>
                <span className="offer--discount">{discount}</span>
                <p className="offer-des">{description}</p>
                <a href="/" className="btn">
                  Order Now
                </a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Offer
