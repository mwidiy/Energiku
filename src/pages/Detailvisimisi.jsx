import React from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"; // Import ikon chevron-left
import Image from "../assets/bgvisi.png";


function Detailvisimisi() {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div className="mt-[100px] flex flex-col items-center">
      {/* Bagian Header Gambar */}
      <div className="relative w-full flex justify-center ">
        {/* Button Back */}
        <button
          onClick={() => navigate(-1)} // Kembali ke halaman sebelumnya
          className="absolute top-2 left-2 text-[#EE9F26] text-3xl hover:text-[#e57d2b] transition duration-300 w-[260px] "
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Gambar Utama */}
        <img
          src={Image}
          alt="Header"
          className="w-full max-w-[1150px] rounded-3xl"
        />
      </div>

      {/* Bingkai Konten */}
      <div className="mt-8 mb-8 border-4 border-[#E34A2B] px-8 py-6 w-full max-w-[1150px] rounded-3xl">
        {/* Judul */}
        <h1 className="text-[#EE9F26] text-5xl font-bold text-left mt-9">
          VISI
        </h1>

        {/* Paragraf Konten */}
        <p className="text-gray-700 mt-4 leading-relaxed text-justify text-xl">
          Menjadi platform terkemuka dalam pengelolaan limbah pertanian yang
          berkelanjutan, menghubungkan rumah tangga dan petani untuk menciptakan
          bioenergi yang ramah lingkungan dan mendorong ketahanan energi
          nasional
        </p>

        <h1 className="text-[#EE9F26] text-5xl font-bold text-left mt-9 mb-5  ">
          MISI
        </h1>

        {/* Paragraf Konten Setelah Logo */}
        <strong className="text-gray-700  leading-relaxed text-justify text-xl">
          1. Membangun Jaringan:
        </strong>
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl mb-5">
          Platform ini didesain untuk mengumpulkan berbagai jenis limbah organik
          dari petani, peternak, dan petembak, yang kemudian diolah menjadi
          produk bio energi seperti biogas, biodiesel, dan biofuel. Melalui
          proses daur ulang yang modern dan efisien, EnergiKu berperan penting
          dalam mengurangi emisi gas rumah kaca, mengurangi ketergantungan pada
          energi fosil, serta meningkatkan taraf hidup masyarakat yang terlibat
          dalam rantai pengumpulan dan produksi.
        </p>

        <strong className="text-gray-700 mt- leading-relaxed text-justify text-xl ">
          2. Edukasi dan Kesadaran:
        </strong>
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl mb-5">
          Meningkatkan kesadaran masyarakat tentang pentingnya pengelolaan
          limbah pertanian dan manfaat bioenergi bagi lingkungan dan ekonomi.
        </p>

        <strong className="text-gray-700 mt- leading-relaxed text-justify text-xl ">
          3. Pemberdayaan Petani:
        </strong>
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl mb-5">
          Memberikan dukungan dan pelatihan kepada petani untuk mengelola limbah
          pertanian mereka secara efektif dan berkontribusi pada produksi energi
          terbarukan.
        </p>

        <strong className="text-gray-700 mt- leading-relaxed text-justify text-xl ">
          4. Dukungan Inovasi:
        </strong>
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl mb-5">
          Mendukung riset dan pengembangan teknologi pengolahan limbah menjadi
          bioenergi yang lebih efisien dan ramah lingkungan.
        </p>

        <strong className="text-gray-700 mt- leading-relaxed text-justify text-xl ">
          5. Kontribusi Terhadap Lingkungan
        </strong>
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl ">
          Mengurangi dampak negatif limbah pertanian terhadap lingkungan melalui
          pemanfaatan yang berkelanjutan dan mendukung praktik pertanian yang
          ramah lingkungan.
        </p>
      </div>
    </div>
  );
}

export default Detailvisimisi;
