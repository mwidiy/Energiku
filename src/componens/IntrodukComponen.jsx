import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    src: 'https://via.placeholder.com/300',
    alt: 'Gambar 1',
    description: 'Deskripsi Gambar 1',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'Gambar 2',
    description: 'Deskripsi Gambar 2',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'Gambar 3',
    description: 'Deskripsi Gambar 3',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'Gambar 4',
    description: 'Deskripsi Gambar 4',
  },
];

const IntroduceComponent = () => {
  return (
    <div className="min-h-[60vh] bg-[#EE9F26] flex flex-col justify-center items-center py-4 px-6">
      <h1 className="text-3xl font-bold mb-8 bg-white p-1 text-[#EE9F26]">Judul Besar</h1>
      <div className="flex flex-row justify-center items-center gap-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={image.src}
              alt={image.alt}
              className="w-32 h-32 object-cover rounded-lg mb-2"
            />
            <div className="flex flex-row items-center">
              <p className="text-lg font-semibold mr-2">{image.description}</p>
              {index !== 3 && (
                <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default IntroduceComponent;
