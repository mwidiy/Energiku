import React from 'react';
import HeaderComponen from '../componens/HeaderComponen';
import Navbar from '../componens/NavbarComponen';
import Header from '../componens/HeaderbgComponen';
import Footer from '../componens/FooterComponen'
import TesHome from '../componens/TesHome'
import Home from '../componens/Aku';
// import Navbar from '../componens/TesNavbar';



const Homepage = () => {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      {/* <TesHome /> */}
      {/* <HeaderComponen /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default Homepage;
