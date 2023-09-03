import React from 'react'
import './Test.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../../Data'
import { Pagination } from 'swiper/modules'
import { FaStar } from 'react-icons/fa'
import { VscTriangleDown } from 'react-icons/vsc'

const Test = () => {
  return (
    <section className="test container section" id="test">
      <h2 className="section--title" data-title="Testimonials">
        What Client's Say
      </h2>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map(({ img, title, service, description }, index) => {
          return (
            <SwiperSlide className="test--item" key={index}>
              <div className="test--quote">
                <p className="test--des">{description}</p>
                <VscTriangleDown className="test--icon" />
              </div>

              <div className="test--content">
                <div className="test--img-wrapper">
                  <img src={img} alt="" className="test--img" />
                </div>

                <div>
                  <h3 className="test--title">{title}</h3>
                  <p className="test--service">{service}</p>
                  <div className="test--rate">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Test
