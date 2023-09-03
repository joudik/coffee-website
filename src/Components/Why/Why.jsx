import React from 'react'
import './Why.css'
import chooseImg from '../../assets/images/choose.jpg'
import coffeeMug from '../../assets/images/coffee-mug.svg'
import coffeeBeans2 from '../../assets/images/coffee-beans-2.svg'
import coffeeBeans3 from '../../assets/images/coffee-beans-3.svg'

const Why = () => {
  return (
    <section className="why section" id="why">
      <div className="why--grid container grid ">
        <div className="why--content">
          <h2 className="section--title title-left" data-title="Why Choose Us">
            Coffero Most Out Of Your Favorite & Tasty Coffee House
          </h2>

          <p className="why--des">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="why--details grid">
            <div className="why--details-item">
              <div className="why--details-img-wrapper">
                <img src={coffeeMug} alt="" className="why--details-img" />
              </div>
              <div>
                <h3 className="why--details-title"> Awesome Aroma</h3>
                <p className="why--details-des">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking
                </p>
              </div>
            </div>
            <div className="why--details-item">
              <div className="why--details-img-wrapper">
                <img src={coffeeBeans2} alt="" className="why--details-img" />
              </div>
              <div>
                <h3 className="why--details-title"> Pure Garden</h3>
                <p className="why--details-des">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking
                </p>
              </div>
            </div>
            <div className="why--details-item">
              <div className="why--details-img-wrapper">
                <img src={coffeeBeans3} alt="" className="why--details-img" />
              </div>
              <div>
                <h3 className="why--details-title"> Healthy Coffee</h3>
                <p className="why--details-des">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src={chooseImg} alt="" className="why--img" />
      </div>
    </section>
  )
}

export default Why
