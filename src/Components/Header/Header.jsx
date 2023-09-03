import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from '../../assets/images/logo.png'
import { links } from '../../Data'
import { FaStream } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { animateScroll } from 'react-scroll'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrollHeader, setScrollHeader] = useState(false)
  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true)
    } else {
      setScrollHeader(false)
    }
  }
  const scrollTop = () => {
    animateScroll.scrollToTop()
  }
  useEffect(() => {
    window.addEventListener('scroll', changeHeader)
  }, [])
  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className="nav container">
        <Link to="/" onClick={scrollTop} className="nav--logo">
          <img src={logo} alt="" className="nav--logo-img" />
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav--menu`}>
          <ul className="nav--list">
            {links.map(({ name, path }, index) => {
              return (
                <li className="nav--item" key={index}>
                  <Link
                    spy={true}
                    smooth={true}
                    offset={-60}
                    hashSpy={true}
                    duration={500}
                    to={path}
                    className="nav--link"
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="nav--toggle" onClick={() => setShowMenu(!showMenu)}>
          <FaStream />
        </div>
      </nav>
    </header>
  )
}

export default Header
