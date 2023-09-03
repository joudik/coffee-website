import React from 'react'
import './Stats.css'
import coffeeShop from '../../assets/images/coffee-shop.svg'
import chef from '../../assets/images/chef.svg'
import coffeeCup from '../../assets/images/coffee-cup.svg'
import experience from '../../assets/images/experience.svg'
const Stats = () => {
  return (
    <section className="stats section" id="stats">
      <div className="stats--grid container grid">
        <div className="stats--item">
          <div className="stats--img-wrapper">
            <img src={coffeeShop} className="stats--img" />
          </div>
          <div>
            <p className="stats--no">1500</p>
            <h3 className="stats--title">+Total Branches</h3>
          </div>
        </div>
        <div className="stats--item">
          <div className="stats--img-wrapper">
            <img src={coffeeCup} className="stats--img" />
          </div>
          <div>
            <p className="stats--no">250</p>
            <h3 className="stats--title">+Happy Customers</h3>
          </div>
        </div>
        <div className="stats--item">
          <div className="stats--img-wrapper">
            <img src={chef} className="stats--img" />
          </div>
          <div>
            <p className="stats--no">120</p>
            <h3 className="stats--title">+Professional Chefs</h3>
          </div>
        </div>
        <div className="stats--item">
          <div className="stats--img-wrapper">
            <img src={experience} className="stats--img" />
          </div>
          <div>
            <p className="stats--no">50</p>
            <h3 className="stats--title">Years of Experience</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
