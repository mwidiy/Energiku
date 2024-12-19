import React from "react";
import Image from "../assets/news1.png";
import Image1 from "../assets/news2.png";
import Image2 from "../assets/news3.png";
import Image3 from "../assets/news4.png";
import Image4 from "../assets/news5.png";
import Image5 from "../assets/yt-logo.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Variants for animations
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const News = () => {
  const newsCategories = [
    {
      id: 1,
      imageUrl: Image,
      width: "600px",
      height: "650px",
      link: "/Detailberita2",
    },
    {
      id: 2,
      imageUrl: Image1,
      width: "600px",
      height: "300px",
      link: "/Detailberita",
    },
    {
      id: 3,
      imageUrl: Image2,
      width: "600px",
      height: "315px",
      link: "/Detailberita3",
    },
    {
      id: 4,
      imageUrl: Image3,
      width: "600px",
      height: "310px",
      link: "/Detailberita4",
    },
    {
      id: 5,
      imageUrl: Image4,
      width: "600px",
      height: "310px",
      link: "/Detailberita5",
    },
  ];

  const videoSections = [
    {
      title: "Energi Terbarukan",
      videos: [
        { title: "ENERGI BIOMASSA", url: "https://youtu.be/QWaqWD-brKs" },
        {
          title: "KENALAN DENGAN BIOENERGI",
          url: "https://youtu.be/f3xMVRqBsSo",
        },
        {
          title: "Energi Air - PLTA CIRATA",
          url: "https://youtu.be/x-NPJYcrt84",
        },
      ],
    },
    {
      title: "Proses",
      videos: [
        {
          title: "Mengolah Kotoran Sapi Menjadi Biogas",
          url: "https://youtu.be/4LHToVN9m_o",
        },
        {
          title: "PLTBm (Tenaga Biomassa)",
          url: "https://youtu.be/mEzqsXGvpKs",
        },
        { title: "BIOGAS DIGESTER", url: "https://youtu.be/LRbMQPp0yP4" },
      ],
    },
    {
      title: "Kisah Penghasil Limbah",
      videos: [
        {
          title: "Peluang Berkah dari Limbah Pelepah",
          url: "https://youtu.be/LWSfxHUgec4",
        },
        {
          title: "Pupuk Bio Organik dari Limbah",
          url: "https://youtu.be/kbi3J3kJekw",
        },
        {
          title: "Guru Ubah Limbah Tahu Jadi Pupuk",
          url: "https://youtu.be/712Q_uSAp8g",
        },
      ],
    },
  ];

  const getVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
    <div className="rounded-lg mx-4 sm:mx-[50px] md:mx-[150px] mt-[200px]">
      {/* Temukan Berita dan Artikel */}
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
        Semua Artikel dan Berita Situs Telah Diperbarui Hari Ini dan Anda Dapat
        Menemukan Artikel dan Berita Anda dengan Cepat dan Tanpa Masalah
      </motion.p>

      {/* News Categories */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        <div className="flex flex-col items-center">
          {newsCategories.slice(0, 2).map((category, index) => (
            <motion.div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              {category.link ? (
                <Link to={category.link}>
                  <img
                    src={category.imageUrl}
                    alt={`Category ${category.id}`}
                    className="w-full sm:w-3/4 md:w-full h-auto object-cover rounded-lg"
                  />
                </Link>
              ) : (
                <img
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  className="w-full sm:w-3/4 md:w-full h-auto object-cover rounded-lg"
                />
              )}
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {newsCategories.slice(2).map((category, index) => (
            <motion.div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: (index + 2) * 0.3 }}
            >
              {category.link ? (
                <Link to={category.link}>
                  <img
                    src={category.imageUrl}
                    alt={`Category ${category.id}`}
                    className="w-full sm:w-3/4 md:w-full h-auto object-cover rounded-lg"
                  />
                </Link>
              ) : (
                <img
                  src={category.imageUrl}
                  alt={`Category ${category.id}`}
                  className="w-full sm:w-3/4 md:w-full h-auto object-cover rounded-lg"
                />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.a
        href="/semuaberita"
        className="mb-4 text-center text-[#EE9F26] cursor-pointer mx-auto block"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        Selengkapnya
      </motion.a>

      {/* Video Edukasi */}
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

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {videoSections.flatMap((section) =>
            section.videos.map((video, index) => (
              <motion.div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md"
                variants={slideInFromBottom}
                transition={{ duration: 2, delay: index * 0.3 }}
              >
                <iframe
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mb-4 rounded-lg"
                />
                <div className="flex items-center gap-4">
                  <img src={Image5} alt="YouTube Logo" className="w-12 h-12" />
                  <p className="text-gray-800 font-semibold">{video.title}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
