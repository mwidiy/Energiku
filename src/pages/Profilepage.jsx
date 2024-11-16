import React from 'react'
import ProfileComponen from '../componens/ProfileComponen'
import Navbar from '../componens/NavbarComponen';
import Footer from '../componens/FooterComponen'

function Profilepage() {
  return (
    <div>
      <Navbar />
      <ProfileComponen />
      <Footer />
    </div>
  )
}

export default Profilepage