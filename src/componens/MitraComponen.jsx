import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/bgmitra.png";
import Image1 from "../assets/mitra.png";
import Image2 from "../assets/ptsemen.png";
import Image3 from "../assets/joinimg.png";
import Image4 from "../assets/panah.png";
import Image5 from "../assets/pt1.png";
import Image6 from "../assets/pt2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
const Client = () => {
  const navigate = useNavigate();

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
    { name: "PT. SATYA NUSANTARA", logo: Image5 },
    { name: "PT. SEMEN TONASA", logo: Image2 },
    { name: "PT. PLN NUSANTARA", logo: Image6 },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center text-black p-8 sm:p-12 rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${Image})`,
          height: "300px",
          sm: { height: "400px" },
          lg: { height: "500px" },
        }}
      ></div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12">
        {/* Header */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-12 sm:mt-[100px]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          PROFIL MITRA
        </motion.h2>

        <motion.div
          className="w-16 sm:w-20 lg:w-[200px] h-1 bg-[#EE9F26] mx-auto mb-6 sm:mb-8 lg:mb-10 mt-3 sm:mt-5"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Main Content Box */}
        <motion.div
          className="bg-white border-2 border-[#EE9F26] rounded-lg p-4 sm:p-8 md:p-10 lg:p-12 max-w-[95%] sm:max-w-[90%] lg:max-w-[1200px] relative shadow-[-5px_5px_0_#EE9F26] sm:shadow-[-7px_7px_0_#EE9F26] lg:shadow-[-10px_10px_0_#EE9F26]"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          {/* Content Row */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            {/* Text Section */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-left md:w-1/2"
              variants={slideInFromLeft}
              transition={{ duration: 2 }}
            >
              <p>Mari berkontribusi</p>
              <p>terhadap isu</p>
              <p>lingkungan kita</p>
              <p>dengan bergabung</p>
              <p>bersama kami</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="flex flex-col items-center md:items-end md:w-[40%] mt-6 sm:mt-8 md:mt-0"
              variants={slideInFromRight}
              transition={{ duration: 2 }}
            >
              <img
                src={Image3}
                alt="join"
                className="w-[80%] sm:w-[60%] md:w-full max-h-[250px] sm:max-h-[300px] lg:max-h-[450px] object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>

          {/* Arrow Image */}
          <motion.img
            className="panah"
            src={Image4}
            alt="panah"
            style={{
              width: "50px",
              sm: { width: "70px" },
              lg: { width: "100px" },
              position: "absolute",
              right: "1%",
              bottom: "1%",
              cursor: "pointer", // Menambahkan pointer untuk indikasi bisa diklik
            }}
            onClick={() => navigate("/Energiku/detailpartner")} // Navigasi ke halaman detailmitra
          />
        </motion.div>

        {/* Slider Section - Dikomentari */}
        {/*
        <motion.div
          className="max-w-screen-lg mx-auto p-6 my-[200px] relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="w-[400px] h-1 bg-[#EE9F26] mx-auto mt-[-12 %]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          ></motion.div>

          <motion.h2
            className="text-2xl font-bold mt-[70px] text-center mb-[100px]"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            Perusahaan-perusahaan yang telah mempercayakan dan bekerjasama
            dengan kami
          </motion.h2>

          <div
            className="shadow-lg rounded-lg overflow-hidden"
            style={{ position: "relative", zIndex: -1 }}
          >
            <img
              src={Image1}
              alt="Partners"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div
            className="w-[120%] ml-[-10%] mt-[-450px] z-10"
            style={{ backgroundColor: "transparent" }}
          >
            <Slider {...settings} slidesToShow={3} slidesToScroll={1}>
              {partners.map((partner, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-[500px] h-[200px] bg-white border- border-[#EE9F26]"
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 2, delay: index * 0.3 }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 mb-4"
                  />
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                </motion.div>
              ))}
            </Slider>
          </div>
        </motion.div>
        */}
      </div>

      {/* Add custom styles for dots */}
      <style>
        {`
          .slick-dots li button:before {
            color: white; /* Change dot color to white */
          }

          .slick-dots li.slick-active button:before {
            color: #EE9F26; /* Change active dot color to match theme */
          }
        `}
      </style>
    </>
  );
};

export default Client;
