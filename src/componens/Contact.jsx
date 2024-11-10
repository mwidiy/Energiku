import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image0 from "../assets/contact0.png";
import Image1 from "../assets/contact1.png"; // Farmer image
import Image4 from "../assets/contact4.png"; // Background for form section
import Image5 from "../assets/contact2.png"; // Arrow icon

const Contact = () => {
  return (
    <div>
      {/* Background Image with Gradient Overlay */}
      <div
        className="bg-cover bg-center p-12 rounded-lg shadow-lg h-[500px]"
        style={{
          backgroundImage: `url(${Image0})`,
        }}
      ></div>

      {/* Heading Section */}
      <div className="text-center mt-24 mb-8">
        <p className="text-2xl font-semibold inline-block relative pb-10">
          Kontak Kami
          <span className="absolute left-1/4 right-1/4 pb-3 block border-b-2 border-yellow-500"></span>
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="flex justify-center space-x-14 mb-12">
        {[
          {
            icon: <FaEnvelope className="text-3xl text-white" />,
            title: "Email",
            lines: ["info@kaligrafi.com", "anggi.budiyanto@gmail.com"],
          },
          {
            icon: <FaPhone className="text-3xl text-white" />,
            title: "Telepon",
            lines: ["0853 xxxx xxxx", "0812 xxxx xxxx"],
          },
          {
            icon: <FaMapMarkerAlt className="text-3xl text-white" />,
            title: "Lokasi",
            lines: ["Jawa Tengah", "Indonesia"],
          },
        ].map((contact, index) => (
          <div
            key={index}
            className="flex flex-col p-6 bg-[#FAF0E6] rounded-lg shadow-md w-96 relative pb-1"
          >
            <div className="flex items-center mb-5 w-[150px] h-[80px] p-0 rounded-lg">
              {/* Circle background for icons */}
              <div className="bg-[#EE9F26] p-3 rounded-full flex items-center justify-center">
                {contact.icon}
              </div>
              <h4 className="text-lg font-semibold ml-4 relative pb-1 after:absolute after:left-[-70px] after:right-[-190px] after:bottom-[-25px] after:h-[2px] after:bg-[#BEB3B3] after:content-['']">
                {contact.title}
              </h4>
            </div>
            <div className="mt-auto text-left space-y-1">
              {contact.lines.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="relative pb-1 after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[1px] after:bg-gray-400"
                >
                  {line}
                </p>
              ))}
            </div>
            <div className="absolute bottom-2 right-2">
              {/* Circle background for Image2 (Arrow icon) */}
              <div className="rounded-full flex items-center justify-center">
                <img
                  src={Image5} // Assuming Image2 is an SVG
                  alt="Arrow Icon"
                  className="w-8 h-8 text-white"
                  style={{ fill: "white" }} // Ensure the icon color is white if it's SVG
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Question Form Section */}
      <div className="flex justify-center mb-28 mt-28 ">
        <div
          className="relative w-[1100px] h-[500px] bg-cover bg-center rounded-lg shadow-lg p-8 flex"
          style={{
            backgroundImage: `url(${Image4})`, // Setting Image4 as the background
          }}
        >
          {/* Image section */}
          <div className="w-1/3">
            <img
              src={Image1}
              alt="Farmer"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </div>

          {/* Form Section */}
          <div className="flex-grow p-8 bg-[#FFFFFF] bg-opacity-50   rounded-r-lg">
            {" "}
            {/* Changed to transparent background */}
            <h4 className="text-xl font-semibold mb-4 text-">
              Apakah Kamu Mempunyai Pertanyaan?
            </h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full p-2 border border-black rounded-md bg-opacity-0 placeholder-gray-200 text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                />
                <input
                  type="text"
                  placeholder="No. Telepon"
                  className="w-full p-2 border border-black rounded-md bg-opacity-0 placeholder-gray-200 text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Alamat Email"
                  className="w-full p-2 border border-black rounded-md bg-opacity-0 placeholder-gray-200 text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                />
                <input
                  type="text"
                  placeholder="Subjek"
                  className="w-full p-2 border border-black rounded-md bg-opacity-0 placeholder-gray-200 text-white"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                />
              </div>

              <textarea
                placeholder="Komentar"
                className="w-full p-2 border border-black rounded-md h-24 bg-opacity-0 placeholder-gray-200 text-white"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              ></textarea>
              <button
                type="submit"
                className="w-[140px] py-2 bg-[#EE9F26] text-white font-semibold rounded-md"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map Section */}
      <div className="flex justify-center mb-12 mb-28">
        <div className="relative w-full max-w-7xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31655.6732209309!2d109.1411705!3d-6.8970148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fb77ae1f5a68b%3A0x3030bfbcaf76020!2sTegal%2C%20Jawa%20Tengah%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1671014443450!5m2!1sen!2sid"
            width="100%"
            height="500"
            className="rounded-lg shadow-md"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          {/* Nearby Locations */}
          <div className="absolute bottom-4 right-1 bg-[#EE9F26] p-4 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold mb-2 text-white">
              Lokasi Terdekat
            </h4>
            <ul className="list-disc list-inside text-white">
              <li>TPA Kerturen</li>
              <li>TPAT DLH-PS Brebes</li>
              <li>TPA Desa Juwangi</li>
              <li>TPA Ujung Kulon</li>
              <li>TPAT Tegal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
