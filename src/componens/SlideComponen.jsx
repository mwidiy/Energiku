import React, { useState, useEffect } from 'react';
import Image from '../assets/way.png';
import Image1 from '../assets/Diana Rahmadhani.png';
import Image2 from '../assets/Haris Juananda.png';
import Image3 from '../assets/saraswati.png';
import Image4 from '../assets/zainal derwantoro.png';

const SlideComponent = () => {
  const testimonials = [
    {
      image: Image,
      name: 'Dian Ahsana Mastway',
      role: 'Petani Bawang',
      quote: '"Layanan konsultasi di website ini sangat membantu saya memahami cara terbaik untuk mengelola limbah di rumah. Terima kasih!"',
    },
    {
      image: Image1,
      name: 'Diana Rahmadhani',
      role: 'Anak Kos',
      quote: '"Website ini benar-benar menjadi solusi baru bagi saya yang ingin berkontribusi dalam menjaga lingkungan."',
    },
    {
      image: Image2,
      name: 'Haris Juanda',
      role: 'Petani Cabe',
      quote: '"Sangat puas dengan produk dari website ini! Saya bisa mengurangi limbah dan mendapatkan energi alternatif."',
    },
    {
      image: Image3,
      name: 'Saraswati',
      role: 'Ibu Rumah Tangga',
      quote: '"Tidak menyangka bisa mengelola limbah rumah tangga dengan mudah berkat website ini!"',
    },
    {
      image: Image4,
      name: 'Budi Setiawan',
      role: 'Petani Sayur',
      quote: '"Website ini memberikan banyak informasi bermanfaat bagi petani seperti saya. Sangat membantu!"',
    },
    {
      image: Image3,
      name: 'Citra Dewi',
      role: 'Pemilik Kafe',
      quote: '"Solusi untuk pengelolaan limbah sangat berguna untuk usaha kecil seperti kafe saya!"',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk berpindah slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Fungsi untuk pindah ke slide berikutnya
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Fungsi untuk pindah ke slide sebelumnya
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Mengambil testimonial yang akan ditampilkan berdasarkan indeks saat ini
  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full px-4 py-24 mt-5">
      <h2 className="text-2xl font-semibold text-center text-red-600 mb-2">Apa Yang Orang Katakan</h2>
      <p className="text-center text-gray-700 mb-10">
        Temukan apa yang pelanggan kami yang puas katakan tentang pengalaman mereka dengan produk atau layanan kami.
      </p>

      {/* Wrapper Carousel */}
      <div className="relative flex justify-center items-center w-full max-w-6xl mx-auto overflow-hidden">
        {/* Tombol Previous */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          &#10094;
        </button>

        {/* Kartu Testimonial */}
        <div
          className="flex transition-transform duration-700 ease-in-out gap-8 px-4"
          style={{
            transform: `translateX(-${(currentIndex % testimonials.length) * (100 / 3)}%)`,
          }}
        >
          {/* Menampilkan testimonial yang sama untuk seluruh kartu */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 bg-[#EE9F26] text-white rounded-lg w-1/3 flex-shrink-0 transition-all duration-500 ease-in-out shadow-lg"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-bold text-center">{testimonial.name}</h3>
              <p className="text-center text-sm italic mb-2">{testimonial.role}</p>
              <p className="text-center">{testimonial.quote}</p>
            </div>
          ))}
        </div>

        {/* Tombol Next */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full z-10"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default SlideComponent;
