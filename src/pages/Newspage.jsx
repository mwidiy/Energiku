import React from 'react'
import NewsComponen from '../componens/NewsComponen'
import NavbarComponen from '../componens/NavbarComponen'
import FooterComponen from '../componens/FooterComponen'

const Newspage = () => {
  return (
    <div>
      <NavbarComponen />
      <NewsComponen />
      <FooterComponen />
    </div>
  )
}

export default Newspage