import React from 'react'
import ProfileComponen from '../componens/ProfileComponen'
import Navbar from '../componens/NavbarComponen';
import Footer from '../componens/FooterComponen'
import Tes from '../componens/Tes'


function Profilepage() {
  return (
    <div>
      <Navbar />
      <ProfileComponen />
      {/* <Tes /> */}
      <Footer />
    </div>
  )
}

export default Profilepage