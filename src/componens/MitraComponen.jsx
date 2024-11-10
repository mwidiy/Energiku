import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/bgmitra.png'; // Ganti dengan path gambar Anda
import Image1 from '../assets/mitra.png'; // Ganti dengan path gambar Anda
import Image2 from '../assets/ptsemen.png'; // Ganti dengan path gambar Anda
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Menggabungkan Komponen Mitra dengan Slider
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
    { name: 'PT. SATYA NUSANTARA', logo: Image2 },
    { name: 'PT. SEMEN TONASA', logo: Image2 },
    { name: 'PT. PLN NUSANTARA', logo: Image2 },
    // Tambahkan lebih banyak mitra jika diperlukan
  ];

  return (
    <>
      <div
      className="relative bg-cover bg-center text-black p-12 rounded-lg shadow-lg"
      style={{
        backgroundImage: `url(${Image})`,
        height: '600px',
      }}
      ></div>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6">
        {/* Header */}
        <h2 className="text-4xl font-bold mb-8">PROFIL MITRA</h2>
        <div className="bg-white border-2 border-orange-500 rounded-lg p-6 md:p-12 shadow-lg max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl mb-4 md:mb-0 md:w-1/2">
              <p>Mari berkontribusi terhadap isu lingkungan kita dengan bergabung bersama kami.</p>
            </div>
            <div className="flex flex-col items-center md:items-end md:w-1/2">
              <div className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold text-lg mb-4">
                Ingin Bergabung Menjadi MITRA Kami?
              </div>
              <FontAwesomeIcon icon={faQuestionCircle} className="text-orange-500 text-5xl mb-6" />
              <FontAwesomeIcon icon={faArrowRight} className="text-orange-500 text-6xl" />
            </div>
          </div>
        </div>
        
        {/* Slider Section */}
        <div className="max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Perusahaan-perusahaan yang telah mempercayakan dan bekerjasama dengan kami
          </h2>
          <img src={Image1} alt="Partners" className="w-full mb-6 rounded-lg" />
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="p-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center">
                  <img src={partner.logo} alt={partner.name} className="h-16 mb-4" />
                  <h3 className="text-lg font-semibold">{partner.name}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MitraComponent;
