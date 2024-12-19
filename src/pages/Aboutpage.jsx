import React from 'react'
import About from '../componens/About'
import NavbarComponen from '../componens/NavbarComponen'
// import NavbarComponen from '../componens/TesNavbar'
import FooterComponen from '../componens/FooterComponen'


const Aboutpage = () => {
  return (
    <div>
      <NavbarComponen />
      <About />
      <FooterComponen />
    </div>
  )
}

export default Aboutpage