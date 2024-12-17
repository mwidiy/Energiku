import React from 'react'
import ProfileComponen from '../componens/ProfileComponen'
import Navbar from '../componens/NavbarComponen';
import Footer from '../componens/FooterComponen'
import Tes from '../componens/Tes'
import Tes2 from '../componens/Tes2'
import Tes3 from '../componens/Tes3'
import Tes4 from '../componens/Tes4'
import TesHome from '../componens/TesHome';



function Profilepage() {
  return (
    <div>
      <Navbar />
      {/* <Tes4 /> */}
      <Tes2 />
      {/* <TesHome /> */}
      {/* <Tes3 /> */}
      <Footer />
    </div>
  )
}

export default Profilepage