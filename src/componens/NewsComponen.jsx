import React from 'react';
import Image from '../assets/news1.png';
import Image1 from '../assets/news2.png';
import Image2 from '../assets/news3.png';
import Image3 from '../assets/news4.png';
import Image4 from '../assets/news5.png';
import Image5 from '../assets/yt-logo.png';
import { motion } from "framer-motion";

// Variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const NewsComponent = () => {
  // News categories with their respective images and dimensions
  const newsCategories = [
    { id: 1, imageUrl: Image, width: '600px', height: '650px', link: '/Energiku/detailnews2' },
    { id: 2, imageUrl: Image1, width: '600px', height: '300px', link: '/Energiku/detailnews' },
    { id: 3, imageUrl: Image2, width: '600px', height: '315px', link: '/Energiku/detailnews3' },
    { id: 4, imageUrl: Image3, width: '600px', height: '310px', link: '/Energiku/detailnews4' },
    { id: 5, imageUrl: Image4, width: '600px', height: '310px', link: '/Energiku/detailnews5' },
  ];

  // Video sections for educational content
  const videoSections = [
    {
      title: 'Energi Terbarukan',
      videos: [
        { title: 'ENERGI BIOMASSA', url: 'https://youtu.be/QWaqWD-brKs?si=jg1D1d5J5QgHEu8K' },
        { title: 'KENALAN DENGAN BIOENERGI', url: 'https://youtu.be/f3xMVRqBsSo?si=HW2Vvoob4MXE3K3-' },
        { title: 'Energi Air - PLTA CIRATA', url: 'https://youtu.be/x-NPJYcrt84?si=LmsaeUonOGd-cesv' },
      ],
    },
    {
      title: 'Proses',
      videos: [
        { title: 'Mengolah Kotoran Sapi Menjadi Biogas', url: 'https://youtu.be/4LHToVN9m_o?si=e2Za5R5q8witj_aP' },
        { title: 'PLTBm (Tenaga Biomassa)', url: 'https://youtu.be/mEzqsXGvpKs?si=Gkq7rfsrQ32Ul2nR' },
        { title: 'BIOGAS DIGESTER', url: 'https://youtu.be/LRbMQPp0yP4?si=3NLEsz2qscQiV4I1' },
      ],
    },
    {
      title: 'Kisah Penghasil Limbah',
      videos: [
        { title: 'Peluang Berkah dari Limbah Pelepah', url: 'https://youtu.be/LWSfxHUgec4?si=qfSQ-lUp7QCZuKeK' },
        { title: 'Pupuk Bio Organik dari Limbah', url: 'https://youtu.be/kbi3J3kJekw?si=6IjvIMzhtQq1cPXw' },
        { title: 'Guru Ubah Limbah Tahu Jadi Pupuk', url: 'https://youtu.be/712Q_uSAp8g?si=ZT0ZY3HyvWjJOly5' },
      ],
    },
  ];

  // Helper function to extract YouTube video ID from URL
  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div className="rounded-lg mx-[150px] mt-[200px]">

      {/* News Section Header */}
      <motion.h2
        className="text-2xl font-semibold mb-4 text-[#EE9F26]"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Temukan Berita dan Artikel seputar Bio Energi disini
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Semua Artikel dan Berita Situs Telah Diperbarui Hari Ini dan Anda Dapat Menemukan Artikel dan Berita Anda dengan Cepat dan Tanpa Masalah
      </motion.p>

      {/* News Categories Grid */}
      <motion.div
        className="grid grid-cols-2 gap-2 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        {/* First Column */}
        <div className="flex flex-col items-center">
          {newsCategories.slice(0, 2).map((category, index) => (
            <motion.div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <a href={category.link}>
                <img
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Second Column */}
        <div className="flex flex-col items-center">
          {newsCategories.slice(2).map((category, index) => (
            <motion.div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: (index + 2) * 0.3 }}
            >
              <a href={category.link}>
                <img
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  className="w-full h-full object-cover"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Link to More */}
      <motion.a
        href="https://example.com"
        className="mb-4 text-center text-[#EE9F26] cursor-pointer mx-auto block"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Selengkapnya
      </motion.a>

      {/* Educational Video Section */}
      <div className="p-6 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold mb-2 text-yellow-500"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          Video Edukasi
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          Kumpulan Video yang membahas tentang Bio Energi
        </motion.p>

        {videoSections.map((section, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            <motion.h3
              className="text-xl font-semibold mb-4"
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              {section.title}
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.videos.map((video, videoIndex) => (
                <motion.div
                  key={videoIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:opacity-90 flex flex-col items-center"
                  variants={slideInFromBottom}
                  transition={{ duration: 2, delay: (videoIndex + 1) * 0.3 }}
                >
                  <iframe
                    width="100%"
                    height="200px"
                    src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>

                  <div className="p-4 w-full">
                    <p className="text-black mb-2">{video.title}</p>
                    <img src={Image5} alt="YouTube logo" className="w-12 h-12" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default NewsComponent;
