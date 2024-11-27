import React from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"; // Import ikon chevron-left
import Image from "../assets/home1.png";
import Image1 from "../assets/logo.png";

function Detailhome() {
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
          <FontAwesomeIcon icon={faChevronLeft}  />
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
          EnergiKu Kini
          <br />
          EnergiKu Nanti
        </h1>

        {/* Paragraf Konten */}
        <p className="text-gray-700 mt-4 leading-relaxed text-justify text-xl">
          EnergiKu adalah sebuah website yang hadir sebagai solusi dalam
          memanfaatkan limbah organik dari sektor pertanian, peternakan, dan
          perkebunan untuk menciptakan energi terbarukan. Dengan motto{" "}
          <strong>"EnergiKu Kini, EnergiKu Nanti"</strong>, EnergiKu menegaskan
          komitmennya terhadap keberlanjutan dan keberpihakan kepada lingkungan.
        </p>

        {/* Gambar Logo */}
        <div className="flex justify-center mt-6">
          <img
            src={Image1}
            alt="Logo"
            className="w-[400px] h-[120px] object-contain"
          />
        </div>

        {/* Paragraf Konten Setelah Logo */}
        <p className="text-gray-700 mt-6 leading-relaxed text-justify text-xl">
          Platform ini didesain untuk mengumpulkan berbagai jenis limbah organik
          dari petani, peternak, dan petembak, yang kemudian diolah menjadi
          produk bio energi seperti biogas, biodiesel, dan biofuel. Melalui
          proses daur ulang yang modern dan efisien, EnergiKu berperan penting
          dalam mengurangi emisi gas rumah kaca, mengurangi ketergantungan pada
          energi fosil, serta meningkatkan taraf hidup masyarakat yang terlibat
          dalam rantai pengumpulan dan produksi.
        </p>
        <p className="text-gray-700 mt-4 leading-relaxed text-justify text-xl mb-9">
          EnergiKu juga berkomitmen untuk memberikan edukasi kepada masyarakat
          mengenai pentingnya bio energi, mengajak semua kalangan untuk
          berpartisipasi dalam usaha menjaga keberlanjutan energi dan bumi kita.
          Website ini bukan hanya sebagai platform, tetapi juga sebagai gerakan
          kolektif untuk membangun masa depan yang lebih hijau dan
          berkelanjutan.
        </p>
      </div>
    </div>
  );
}

export default Detailhome;
