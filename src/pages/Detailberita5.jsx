import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import beritaImage1 from "../assets/detail_berita5.png";
import beritaImage2 from "../assets/gambard5.jpg";
import beritaLain1 from "../assets/detail_berita1.png";
import beritaLain2 from "../assets/detail_berita2.png";
import beritaLain3 from "../assets/detail_berita5.png";
import logokembali from "../assets/leftarrow.png";

function DetailBerita5() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center  mt-[100px]">
      

      {/* Tombol Kembali */}
      {!isMenuOpen && (
        <button
          className="absolute top-36 left-16 text-orange-500 text-2xl hover:text-orange-600"
          onClick={() => navigate(-1)}
        >
          <img src={logokembali} alt="Kembali" className="w-10 h-10 text-orange-400" />
        </button>
      )}

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-lg mt-8 p-6 w-4/5">
        <article>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-snug">
          Biomassa Jadi Jembatan Penting Menuju Percepatan Transisi Energi
          </h2>
          <p className="text-sm text-gray-500 mb-6">15 September 2023</p>
          <img
            src={beritaImage1}
            alt="Berita Utama"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 mb-6 leading-relaxed">
          JAKARTA, KOMPAS.com - Biofuel sebagai alternatif bahan bakar terbarukan yang berasal dari sumber daya hayati, menjadi aktor penting dalam proses transisi energi. Hal itu disampaikan oleh Pakar Bioenergi Institut Teknologi Bandung (ITB), Tatang Hernas Soerawidjaja. Ia mengatakan bahwa biomassa adalah satu-satunya sumber energi terbarukan yang berkarakter bahan bakar. Sehingga, kehadirannya dapat membantu mengurangi ketergantungan pada bahan bakar fosil.
          </p>
          <img
            src={beritaImage2}
            alt="Fuel Grade"
            className="rounded-lg w-full mb-6 object-cover"
          />
          <p className="text-gray-700 leading-relaxed">
          Green Energy Development Director Tripatra, Ananto Wardono mengatakan, pihaknya mempunyai visi membangun solusi berkelanjutan dalam mengaplikasikan efisiensi energi dan transisi dari bahan bakar fosil ke energi terbarukan. “Tripatra telah menginvestasikan sumber daya yang signifikan untuk mengembangkan teknologi dan infrastruktur yang diperlukan dalam ekosistem biofuel, salah satunya dalam memproduksi biofuel generasi kedua secara massal,” terang Ananto. Biofuel generasi kedua, kata dia, adalah jenis bahan bakar nabati yang dihasilkan dari proses pengolahan bahan baku yang lebih kompleks dibandingkan dengan biofuel generasi pertama. Jika biofuel generasi pertama umumnya menggunakan bahan pangan, maka biofuel generasi kedua memanfaatkan bahan baku non-pangan, yakni bahan baku non-pangan seperti limbah pertanian, biomassa lignocellulose (kayu, serbuk gergaji), dan alga.
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
            <h4 className="mt-4 font-semibold"> ESDM Sebut Hanya 2 dari 13 Industri Bioetanol yang Penuhi Kriteria Fuel Grade</h4>
            <p className="text-gray-500 text-sm">Singkat deskripsi berita.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={beritaLain2}
              alt="Berita Lain 2"
              className="w-full rounded-md object-cover"
            />
            <h4 className="mt-4 font-semibold">Dorong biomassa di Indonesia Dengan memanfaatkan potensi biofuel</h4>
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

export default DetailBerita5;
