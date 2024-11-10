import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Image from '../assets/bgmitra.png'; // Ganti dengan path gambar Anda
import Image1 from '../assets/mitra.png'; // Ganti dengan path gambar Anda
import Image2 from '../assets/ptsemen.png'; // Ganti dengan path gambar Anda
import Image3 from '../assets/joinimg.png'; // Ganti dengan path gambar Anda
import Image4 from '../assets/panah.png'; // Ganti dengan path gambar Anda
import Image5 from '../assets/pt1.png'; // Ganti dengan path gambar Anda
import Image6 from '../assets/pt2.png'; // Ganti dengan path gambar Anda
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
    { name: 'PT. SATYA NUSANTARA', logo: Image5 },
    { name: 'PT. SEMEN TONASA', logo: Image2 },
    { name: 'PT. PLN NUSANTARA', logo: Image6 },
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
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 ">
        {/* Header */}
        <h2 className="text-4xl font-bold mt-[100px]">PROFIL MITRA</h2>
        <div className="w-[200px] h-1 bg-[#EE9F26] mx-auto mb-10 mt-5 "></div>
        <div className="bg-white border-2 border-[#EE9F26] rounded-lg p-6 md:p-12 max-w-4xl relative shadow-[-10px_10px_0_#EE9F26]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-4xl font-semibold mb-4 md:mb-0 md:w-1/2">
              <p>Mari berkontribusi terhadap isu lingkungan kita dengan bergabung bersama kami.</p>
            </div>
            <div className="flex flex-col items-center md:items-end md:w-1/2">
                <img src={Image3} alt="join" />
            </div>
          </div>
                <img className='panah' src={Image4} alt="panah" />
        </div>
        
        {/* Slider Section */}
        <div className="max-w-screen-lg mx-auto p-6 my-[200px] relative">
          {/* Garis Horizontal dan Heading */}
          <div className="w-[400px] h-1 bg-[#EE9F26] mx-auto mb-8"></div>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Perusahaan-perusahaan yang telah mempercayakan dan bekerjasama dengan kami
          </h2>
          
          {/* Card 1: Background Image */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Image1} alt="Partners" className="w-full h-[300px] object-cover" />
          </div>

          {/* Card 2: Slider, Mengambang di Atas Card 1 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-20   rounded-lg p-4 w-[120%] " style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
            <Slider {...settings} slidesToShow={2} slidesToScroll={2}>
              {partners.map((partner, index) => (
                <div key={index} >
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center w-[500px] h-[200px] ">
                    <img src={partner.logo} alt={partner.name} className="h-16 mb-4" />
                    <h3 className="text-lg font-semibold">{partner.name}</h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </>
  );
};

export default MitraComponent;
