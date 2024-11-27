import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import beritaImage1 from "../assets/detail_berita1.png";
import beritaImage2 from "../assets/detail_berita2.png";
import beritaLain1 from "../assets/detail_berita3.png";
import beritaLain2 from "../assets/detail_berita4.png";
import beritaLain3 from "../assets/detail_berita5.png";
import logokembali from "../assets/leftarrow.png";

function DetailBerita() {
  const navigate = useNavigate(); // Hook untuk navigasi kembali
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu responsif

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center mt-[100px]">

      {/* Tombol Kembali */}
      {!isMenuOpen && ( // Tombol kembali hanya muncul jika isMenuOpen false
      <button
        className="absolute top-36 left-16 text-orange-500 text-2xl hover:text-orange-600"
        onClick={() => navigate(-1)} // Navigasi kembali ke halaman sebelumnya
      >
      <img src={logokembali} alt="Kembali" className="w-10 h-10 text-orange-400" />
      </button>
)}

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-lg mt-8 p-6 w-4/5">
        <article>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
            ESDM Sebut Hanya 2 dari 13 Industri Bioetanol yang Penuhi Kriteria Fuel Grade
          </h2>
          <p className="text-sm text-gray-500 mb-6">15 September 2023</p>
          <img
            src={beritaImage1}
            alt="Berita Utama"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 mb-6 leading-relaxed">
            Kementerian Energi dan Sumber Daya Mineral (ESDM) menyatakan bahwa hanya dua
            dari 13 industri bioetanol di Indonesia yang memenuhi kriteria fuel grade.
            Industri ini penting untuk mendukung pencampuran energi terbarukan.
          </p>
          <img
            src={beritaImage2}
            alt="Fuel Grade"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 leading-relaxed">
            Bioetanol fuel grade merupakan salah satu komponen bahan bakar nabati
            yang dapat dicampur dengan bahan bakar fosil untuk mengurangi emisi karbon.
            Pemerintah berencana meningkatkan kapasitas industri bioetanol ini untuk
            mendukung kebutuhan energi berkelanjutan.
          </p>
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-6 text-gray-500">
              <button className="hover:text-orange-600">✉️ Share</button>
              <button className="hover:text-orange-600">❤️ Suka</button>
            </div>
            <p className="text-sm text-gray-500">Komentar: 5</p>
          </div>
        </article>
      </main>

      {/* Postingan Lainnya */}
      <section className="mt-12 w-4/5">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Postingan Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain1}
              alt="Berita Lain 1"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold"> Potensi Bioenergi Indonesia Melimpah, Sumber Alternatif Pembangkit Listrik</h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain2}
              alt="Berita Lain 2"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold">MEBI: Pemanfaatan Biomassa di Indonesia </h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain3}
              alt="Berita Lain 3"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold">Biomassa Jadi Jembatan Penting Menuju Percepatan Transisi Energi</h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 mt-12 w-full flex justify-center">
        <div className="text-center">
          <p>&copy; 2024 Energiku. Semua Hak Dilindungi.</p>
          <p>Email: support@energiku.com</p>
        </div>
      </footer>
    </div>
  );
}

export default DetailBerita;
