import React from 'react'

import './App.css'
import Header from './Components/Header/Header'
import { Home } from './Components/Home/Home'
import About from './Components/About/About'
import Features from './Components/Features/Features'
import Menu from './Components/Menu/Menu'
import Why from './Components/Why/Why'
import Stats from './Components/Stats/Stats'
import Gallery from './Components/Gallery/Gallery'
import Offer from './Components/Offer/Offer'
import Team from './Components/Team/Team'
import Reserve from './Components/Reserve/Reserve'
import Test from './Components/Test/Test'
import { Footer } from './Components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Why />
      <Stats />
      <Gallery />
      <Offer />
      <Team />
      <Reserve />
      <Test />
      <Footer />
    </>
  )
}

export default App
