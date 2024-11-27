import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/bgmitra.png';
import Image1 from '../assets/mitra.png';
import Image2 from '../assets/ptsemen.png';
import Image3 from '../assets/joinimg.png';
import Image4 from '../assets/panah.png';
import Image5 from '../assets/pt1.png';
import Image6 from '../assets/pt2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// MitraComponent
const MitraComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <FontAwesomeIcon icon={faChevronRight} />,
    prevArrow: <FontAwesomeIcon icon={faChevronLeft} />,
  };

  const partners = [
    { name: 'PT. SATYA NUSANTARA', logo: Image5 },
    { name: 'PT. SEMEN TONASA', logo: Image2 },
    { name: 'PT. PLN NUSANTARA', logo: Image6 },
    // Add more partners if needed
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <div
        className="relative bg-cover bg-center text-black p-12 rounded-lg shadow-lg"
        style={{ backgroundImage: `url(${Image})`, height: '500px' }}
      ></div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
        
        {/* Header */}
        <motion.h2
          className="text-4xl font-bold mt-[100px]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          PROFIL MITRA
        </motion.h2>

        <motion.div
          className="w-[200px] h-1 bg-[#EE9F26] mx-auto mb-10 mt-5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Main Content Box */}
        <motion.div
          className="bg-white border-2 border-[#EE9F26] rounded-lg p-6 md:p-12 max-w-4xl relative shadow-[-10px_10px_0_#EE9F26]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <a href="/Energiku/detailpartner">
          {/* Content Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            {/* Text Section */}
            <motion.div
              className="text-4xl font-semibold mb-4 md:mb-0 md:w-1/2"
              variants={slideInFromLeft}
              transition={{ duration: 2 }}
            >
              <p>Mari berkontribusi terhadap isu lingkungan kita dengan bergabung bersama kami.</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex flex-col items-center md:items-end md:w-1/2"
              variants={slideInFromRight}
              transition={{ duration: 2 }}
            >
              <img src={Image3} alt="join" />
            </motion.div>
          </motion.div>

          {/* Arrow Image */}
          <img className="panah" src={Image4} alt="panah" />
          </a>
        </motion.div>
        

        {/* Slider Section */}
        <motion.div
          className="max-w-screen-lg mx-auto p-6 my-[200px] relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          {/* Horizontal Line and Heading */}
          <motion.div
            className="w-[400px] h-1 bg-[#EE9F26] mx-auto mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          ></motion.div>

          <motion.h2
            className="text-2xl font-bold mb-4 text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            Perusahaan-perusahaan yang telah mempercayakan dan bekerjasama dengan kami
          </motion.h2>

          {/* Card 1: Background Image */}
          <motion.div
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            <img src={Image1} alt="Partners" className="w-full h-[300px] object-cover" />
          </motion.div>

          {/* Card 2: Slider (Floating on Top of Card 1) */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-20 rounded-lg p-4 w-[120%]"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            <Slider {...settings} slidesToShow={2} slidesToScroll={2}>
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-[500px] h-[200px]"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 2, delay: index * 0.3 }}
                >
                  <img src={partner.logo} alt={partner.name} className="h-16 mb-4" />
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                </motion.div>
              ))}
            </Slider>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default MitraComponent;
