import React from 'react';

const SupportComponent = () => {
  const supporters = [
    { id: 1, src: 'https://via.placeholder.com/200', alt: 'Logo 1' },
    { id: 2, src: 'https://via.placeholder.com/200', alt: 'Logo 2' },
    { id: 3, src: 'https://via.placeholder.com/200', alt: 'Logo 3' },
    { id: 4, src: 'https://via.placeholder.com/200', alt: 'Logo 4' },
    { id: 5, src: 'https://via.placeholder.com/200', alt: 'Logo 5' },
    { id: 6, src: 'https://via.placeholder.com/200', alt: 'Logo 6' },
    { id: 7, src: 'https://via.placeholder.com/200', alt: 'Logo 7' },
    { id: 8, src: 'https://via.placeholder.com/200', alt: 'Logo 8' },
    { id: 9, src: 'https://via.placeholder.com/200', alt: 'Logo 9' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold mb-8">Perusahaan Pendukung</h1>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {supporters.slice(0, 5).map((supporter) => (
          <div key={supporter.id} className="w-48 h-48">
            <img
              src={supporter.src}
              alt={supporter.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
        {supporters.slice(5).map((supporter) => (
          <div key={supporter.id} className="w-48 h-48">
            <img
              src={supporter.src}
              alt={supporter.alt}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportComponent;
