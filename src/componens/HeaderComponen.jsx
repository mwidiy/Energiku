import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing images (Ensure your image paths are correct)
import Image from "../assets/bioe.png";
import Image1 from "../assets/limbah.png";
import Image2 from "../assets/diana.png";
import Image3 from "../assets/haris.png";
import Image4 from "../assets/way.png";
import Image5 from "../assets/saras.png";
import Image6 from "../assets/zainal.png";
import Image7 from "../assets/iconhome1.png";
import Image8 from "../assets/iconhome2.png";
import Image9 from "../assets/iconhome3.png";
import Image10 from "../assets/iconhome4.png";
import Image11 from "../assets/support1.png";
import Image12 from "../assets/support2.png";
import Image13 from "../assets/support3.jpg";
import Image14 from "../assets/support4.png";
import Image15 from "../assets/support5.png";
import Image16 from "../assets/support6.png";
import Image17 from "../assets/support7.png";
import Image18 from "../assets/support8.png";
import Image19 from "../assets/support9.jpeg";



function App() {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: "Diana Rahmadhani",
      img: Image2,
      review:
        "“Website ini benar-benar menjadi solusi baru bagi kami yang ingin berkontribusi dalam menjaga lingkungan. Produk energinya bagus dan tahan lama. Sangat direkomendasikan untuk semua!”.",
    },
    {
      name: "Haris Juananda",
      img: Image3,
      review:
        "“Sangat puas dengan produk dari website ini! Saya bisa mengurangi limbah dan mendapat energi alternatif yang efisien. Pelayanan juga ramah dan cepat tanggap.”",
    },
    {
      name: "Saraswati",
      img: Image5,
      review:
        "“Tidak menyangka limbah dapur saya bisa berubah menjadi energi bersih! Website ini benar-benar mengubah pandangan saya tentang limbah – kini setiap sisa organik punya nilai!.”",
    },
    {
      name: "Dian Ahsana Mastway",
      img: Image4,
      review:
        "“Layanan konsultasi di website ini sangat membantu saya memahami cara terbaik untuk mengelola limbah di rumah. Tidak hanya hemat biaya, tetapi juga ramah lingkungan. Terima kasih, Energiku!”",
    },
    {
      name: "Zainal Derwantoro",
      img: Image6,
      review:
        "“Website ini luar biasa! Saya bisa mengubah limbah sayuran sawi menjadi bio energi yang bermanfaat, mengurangi limbah, sekaligus menambah nilai pada hasil panen.”",
    },
  ];

  const images = [
    { img: Image7, description: "Kumpulan Limbah" },
    {
      img: Image8,
      description:
        "Salurkan Limbah ke tempat ekstraksi yang sudah di tentukan di map",
    },
    { img: Image9, description: "Dapatkan Point" },
    { img: Image10, description: "Tukarkan Point dengan uang" },
  ];

  const supporters = [
    { id: 1, img: Image11, alt: "" },
    { id: 2, img: Image12, alt: "" },
    { id: 3, img: Image13, alt: "" },
    { id: 4, img: Image14, alt: "" },
    { id: 5, img: Image15, alt: "" },
    { id: 6, img: Image16, alt: "" },
    { id: 7, img: Image17, alt: "" },
    { id: 8, img: Image18, alt: "" },
    { id: 9, img: Image19, alt: "" },
  ];

  return (
    <div>
      <div className="p-1 md:p-12 lg:px-32 rounded-lg grid md:grid-cols-2 gap-32 mt-24">
        {/* Left Side - Image and Ton Information */}
        <div className="flex flex-col items-start w-full">
          <div className="relative bg-cover bg-right w-full h-auto rounded-lg overflow-hidden">
            <img
              src={Image}
              alt="Bio Energi"
              className="w-full h-[450px] object-cover rounded-lg pb-10 pr-16"
            />
            <div className="absolute bottom-0 w-auto h-[180px] right-0 bg-[#EE9F26] text-white px-4  py-6  rounded-md font-semibold text-5xl border-[11px] border-white rounded-"
            style=
            {{
              borderTopLeftRadius: 20,
              borderBottomRightRadius: 20
            
            }}
            >
              <p>631,37</p>
              <p>Ton</p>
            </div>
          </div>
        </div>

        {/* Right Side - Text Section */}
        <div className="flex flex-col justify-center w-full">
          <h2 className="text-5xl font-bold mb-5">Bio Energi</h2>
          <p className="text-gray-900 mb-10 font-normal">
            Energi yang dihasilkan dari bahan organik yang berasal dari makhluk
            hidup seperti Hewan, Tumbuhan dan Mikroorganisme.
          </p>
        </div>
      </div>

      {/* Additional Information Section */}
      <div className="p-6 md:p-12 lg:px-32 rounded-lg shadow-lg grid md:grid-cols-2 gap-8 mt-8">
        {/* Informasi Teks dengan Kotak Oranye */}
        <div className="flex flex-col justify-center space-y-10 text-lg ">
          {[
            "40+ ribu ton limbah Tanaman pangan\n174+ ribu ton limbah Perkebunan\n17+ ribu ton limbah Peternakan",
            "10-15% dari total limbah pertanian diolah menjadi pupuk Kompos atau pupuk Organik",
            "Ekstraksi limbah dilakukan untuk menjaga pemperaman lingkungan serta menghasilkan uang dengan pupuk",
          ].map((text, index) => (
            <div
              key={index}
              className="bg-[#EE9F26] text-white px-4 py-2 rounded-3xl font-semibold text-center w-auto h-32 flex items-center justify-center"
            >
              {text}
            </div>
          ))}
        </div>

        {/* Gambar Melingkar */}
        <div className="flex flex-col items-center space-y-4">
          <img src={Image1} alt="limbah" className="w-auto h-full" />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full px-4 py-24 mt-5">
        <h2 className="text-2xl font-semibold text-center text-red mb-2">
          Apa Yang Orang Katakan
        </h2>
        <p className="text-center text-gray-700 mb-10">
          Temukan apa yang pelanggan kami katakan tentang pengalaman dan mereka
          dengan produk atau layanan kami.
        </p>
        <div className="w-11/12 mx-auto">
          <div className="mt-20">
            <Slider {...settings}>
              {data.map((d, index) => (
                <div
                  key={index}
                  className="bg-[#EE9F26] h-[450px] text-white rounded-xl "
                >
                  <div className="h-56 bg-[#EE9F26] flex justify-center items-center rounded-t-xl">
                    <img
                      src={d.img}
                      alt={`${d.name}'s review`}
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-4 p-4">
                    <p className="text-xl font-semibold">{d.name}</p>
                    <p className="text-center">{d.review}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Bottom Section with Icons */}
      <div className="min-h-[60vh] bg-[#FAF0E6] flex flex-col justify-center items-center py-8 px-6">
        <h1 className="text-3xl font-bold mb-12 bg-white px-4 py-2 text-[#EE9F26] rounded-lg">
          Cara Ekstraksi Limbah
        </h1>
        <div className="flex flex-row justify-center items-center gap-20 p-16">
          {images.map((i, index) => (
            <div key={index} className="flex flex-col items-center relative">
              <img
                src={i.img}
                alt={i.description}
                className="w-30 object-cover rounded-lg"
              />
              <p className="font-semibold text-center">{i.description}</p>

              {/* Centered Arrow Icon */}
              {index !== images.length - 1 && (
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="text-[#EE9F26] text-5xl absolute top-1/2 right-[-50px] transform -translate-y-1/2"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Supporting Companies Section */}
      <div className="min-h-screen  flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-40">Perusahaan Pendukung</h1>
        <div className="flex flex-wrap justify-center items-center gap-20 mb-20">
          {supporters.slice(0, 5).map((supporter) => (
            <div key={supporter.id} className="w-auto  h-28">
              <img
                src={supporter.img}
                alt={supporter.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-4">
          {supporters.slice(5).map((supporter) => (
            <div key={supporter.id} className="w-auto h-16">
              <img
                src={supporter.img}
                alt={supporter.alt}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
