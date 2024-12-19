import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavbarComponen from "../componens/NavbarComponen";
import FooterComponen from "../componens/FooterComponen";

import Image from "../assets/detail_berita4.png";
import Image1 from "../assets/detail_berita1.png";
import Image2 from "../assets/detail_berita3.png";
import Image3 from "../assets/detail_berita6.png";
import Image4 from "../assets/detail_berita5.png";
import Image6 from "../assets/news6.png";
import Image7 from "../assets/news7.png";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const NewsComponent = () => {
  const [showMore, setShowMore] = useState(false); // State to control "Selengkapnya"

  const newsCategories = [
    {
      id: 1,
      imageUrl: Image,
      title: "Pemanfaatan Biomassa di Indonesia",
      description:
        "Sumber alternatif pembangkit listrik yang ramah lingkungan.",
      link: "/Detailberita2",
      type: "utama",
    },
    {
      id: 2,
      imageUrl: Image1,
      title: "ESDM Sebut Hanya 2 dari 13 Industri Bioetanol",
      description: "Masa depan industri bioenergi di pasar internasional.",
      link: "/Detailberita",
      type: "utama",
    },
    {
      id: 3,
      imageUrl: Image2,
      title:
        "Potensi Bioenergi Indonesia Melimpah, Sumber Alternatif Pembangkit Listrik",
      description:
        "Indonesia memiliki potensi bioenergi sebagai salah satu sumber energi terbarukan yang melimpah ruah.",
      link: "/Detailberita3",
      type: "utama",
    },
    {
      id: 4,
      imageUrl: Image3,
      title: "Pengembangan Bioenergi Masih Berjalan Lambat",
      description: "Apa penyebab utama dari keterlambatan ini?",
      link: "/Detailberita4",
      type: "utama",
    },
    {
      id: 5,
      imageUrl: Image4,
      title: "Biomassa Jadi Jembatan Penting Menuju Percepatan Transisi Energi",
      description:
        "Pemenuhan energi fuel menjadi tantangan terbesar bagi Indonesia.",
      link: "/Detailberita5",
      type: "utama",
    },
    {
      id: 6,
      imageUrl: Image6,
      title: "Percepatan Sukses Ekspor Bioavtur ke Australia",
      description: "Penyaluran Bioavtur Pertama di Indonesia.",
      link: "/Detailberita6",
      type: "tambahan",
    },
    {
      id: 7,
      imageUrl: Image7,
      title:
        "Dirut BPDPKS Paparkan Keberhasilan Biodiesel Indonesia di Konferensi SVOC Rotterdam",
      description:
        "Kontribusi Biodiesel pada Pengurangan Emisi dan Kemandirian Energi.",
      link: "/Detailberita7",
      type: "tambahan",
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
    // Additional video sections if needed...
  ];

  const getVideoId = (url) => {
    const match = url.match(
      /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    return match ? match[1] : null;
  };

  return (
  <div>
    <NavbarComponen />
    <div className="rounded-lg mx-[150px] my-[200px]">
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
        className={`grid gap-4 ${
          showMore ? "grid-cols-3" : "grid-cols-2"
        } justify-items-center`}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        {newsCategories
          .slice(0, showMore ? newsCategories.length : 5) // Control how many items are shown
          .map((category, index) => (
            <motion.div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer"
              variants={slideInFromBottom}
              transition={{ duration: 2, delay: index * 0.3 }}
            >
              <Link to={category.link}>
                {/* Ensure all images are of the same size */}
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-[400px] object-cover rounded-lg" // Set consistent width and height
                />
                <h3 className="text-xl font-bold mt-2 text-gray-800">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>
            </motion.div>
          ))}
      </motion.div>
    </div>
    <FooterComponen />
    </div>
  );
};

export default NewsComponent;
