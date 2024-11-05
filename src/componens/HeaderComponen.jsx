import React from 'react';
import Image from '../assets/home1.png';
import Image1 from '../assets/bioe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

function HeaderComponent() {
  return (
    <div>
      {/* Top Section with Background Image and Gradient Overlay */}
      <div
        className="relative bg-cover bg-center text-black p-12 rounded-lg shadow-lg"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(238, 159, 38, 0.5), rgba(238, 159, 38, 0.1)), url(${Image})`,
          height: '600px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start p-8 ml-10">
          <h1 className="text-5xl font-extrabold mb-2">EnergiKu Kini</h1>
          <h1 className="text-5xl font-extrabold mb-5">EnergiKu Nanti</h1>
          <p className="text-lg">Maksimalkan Potensi Energi Bersih</p>
          <p className="text-lg">dan Ramah Lingkungan dengan EnergiKu</p>
          <p className="text-lg mb-10">dengan EnergiKu</p>
          <button
            className="text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300 flex items-center gap-2"
            style={{ backgroundColor: '#EE9F26' }}
          >
            Selanjutnya
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
      
      {/* Bio Energi Section */}
      <div className="bg-gray-100 p-6 md:p-12 rounded-lg shadow-lg grid md:grid-cols-2 gap-8 mt-8">
        {/* Left Side - Image and Ton Information */}
        <div className="flex flex-col items-center">
          <div className="relative bg-cover bg-center w-64 h-64 rounded-lg overflow-hidden">
            <img src={Image1} alt="Bio Energi" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-[#EE9F26] text-white px-4 py-2 rounded-lg font-extrabold text-2xl">
              631,37 Ton
            </div>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#EE9F26' }}>Bio Energi</h2>
          <p className="text-gray-600 mb-4">
            Energi yang dihasilkan dari bahan organik yang berasal dari makhluk hidup seperti Hewan, Tumbuhan dan Mikroorganisme.
          </p>

          {/* Grid Layout for Information Boxes */}
          <div className="grid grid-cols-1 gap-4">
            <div className="p-4 rounded-lg shadow" style={{ backgroundColor: '#FCE1BF' }}>
              <p className="text-gray-700">
                40+ ribu ton limbah Tanaman pangan 174+ ribu ton limbah Perkebunan 17+ ribu ton limbah Peternakan
              </p>
            </div>
            <div className="p-4 rounded-lg shadow" style={{ backgroundColor: '#FCE1BF' }}>
              <p className="text-gray-700">
                10-15% dari total limbah pertanian diolah menjadi pupuk Kompos atau pupuk Organik
              </p>
            </div>
            <div className="p-4 rounded-lg shadow" style={{ backgroundColor: '#FCE1BF' }}>
              <p className="text-gray-700">
                Ekstrasi limbah di lakukan untuk menjaga pemperaman lingkungan serta menghasilkan uang dengan pupuk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
