import React from 'react';
import Image2 from '../assets/icon.ico'; // Sesuaikan path gambar loading

const LoadingAnimation = ({ size = '200px', bgColor = '#fffbfb' }) => {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={Image2}
        alt="Loading"
        style={{
          width: size,
          height: size,
          animation: 'blink 1.5s infinite', // Animasi berkedip
        }}
      />
    </div>
  );
};

export default LoadingAnimation;
