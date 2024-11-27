import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import beritaImage1 from "../assets/biogas.jpg";
import beritaImage2 from "../assets/pipagas.jpg";
import beritaLain1 from "../assets/detail_berita3.png";
import beritaLain2 from "../assets/detail_berita1.png";
import beritaLain3 from "../assets/detail_berita5.png";
import logokembali from "../assets/leftarrow.png";

function DetailBerita4() {
  const navigate = useNavigate(); // Hook untuk navigasi kembali
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu responsif

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  mt-[100px]">
  

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
          Pengembangan Bioenergi Masih Berjalan Lambat, Apa Penyebabnya?
          </h2>
          <p className="text-sm text-gray-500 mb-6">15 September 2023</p>
          <img
            src={beritaImage1}
            alt="Berita Utama"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 mb-6 leading-relaxed">
          Direktur Bioenergi Kementerian ESDM Andriah Feby Misna mengatakan bahwa pengembangan bioenergi memiliki potensi yang cukup besar, tetapi pengembangannya masih menemui sejumlah tantangan sehingga belum cukup melaju perkembangannya. "Tantangan baik dari sisi data potensi yang memang perlu kami update berkala lebih terperinci, kemudian tingginya biaya investasi, dan keberlanjutan dari bahan baku. Jadi tantangan tersendiri bagaimana menjamin feed stock tercukupi dalam waktu yang panjang dan harganya bisa stabil," ujarnya dalam sebuah webinar, Kamis (19/11/2020)
          </p>
          <img
            src={beritaImage2}
            alt="Fuel Grade"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 leading-relaxed">
          Hingga akhir 2019, kapasitas terpasang pembangkit berbasis bioenergi baru mencapai 1.889,50 megawatt (MW). Capaian ini masih jauh dari target Rencana umum energi nasional (RUEN) pada 2025 yang ditargetkan sebesar 5,50 GW. Untuk program pengembangan biogas pada 2019 telah mencapai 26,28 juta meter kubik, sedangkan RUEN menargetkan pada 2025 dapat mencapai 489,80 juta meter kubik.
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
            <h4 className="mt-4 font-semibold">ESDM Sebut Hanya 2 dari 13 Industri Bioetanol yang Penuhi Kriteria Fuel Grade </h4>
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

export default DetailBerita4;
