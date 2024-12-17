import React from 'react';
import HeaderComponen from '../componens/HeaderComponen';
import Navbar from '../componens/NavbarComponen';
import Header from '../componens/HeaderbgComponen';
import Footer from '../componens/FooterComponen'
import TesHome from '../componens/TesHome'




const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      {/* <TesHome /> */}
      <HeaderComponen />
      <Footer />
    </div>
  );
}

export default Homepage;
