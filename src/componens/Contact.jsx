import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import Image0 from "../assets/contact0.png";
import Image1 from "../assets/contact1.png";
import Image4 from "../assets/contact4.png";
import Image5 from "../assets/contact2.png";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideInFromBottom = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim email menggunakan EmailJS
    emailjs
      .send(
        "service_vsqeo3u",  // Ganti dengan Service ID Anda
        "template_dktm1r6",  // Ganti dengan Template ID Anda
        formData,
        "SXLcsFcj6D5cwYofq"  // Ganti dengan User ID Anda
      )
      .then(
        (response) => {
          console.log("Pesan berhasil dikirim:", response);
          alert("Pesan Anda berhasil dikirim!");
          setFormData({ name: "", phone: "", email: "", subject: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Gagal mengirim pesan:", error);
          alert("Terjadi kesalahan, coba lagi nanti.");
        }
      );
  };

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
      <motion.div
        className="flex flex-col sm:flex-row justify-center sm:space-x-14 space-y-6 sm:space-y-0 mb-12 px-4"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        {/* Email Section */}
        <motion.div
          className="flex flex-col p-6 bg-[#FAF0E6] rounded-lg shadow-md w-full sm:w-96 relative"
          variants={slideInFromBottom}
          transition={{ duration: 2, delay: 0.3 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#EE9F26] p-3 rounded-full flex items-center justify-center">
              <FaEnvelope className="text-2xl sm:text-3xl text-white" />
            </div>
            <h4 className="text-md sm:text-lg font-semibold ml-4 relative pb-1 after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[2px] after:bg-[#BEB3B3] after:content-['']">
              Email
            </h4>
          </div>
          <div className="text-sm sm:text-base space-y-2">
            <p>muhammadwidi72@gmail.com</p>
            <p>Energiku.Official@gmail.com</p>
          </div>
          <div className="absolute bottom-2 right-2">
            <img
              src={Image5}
              alt="Arrow Icon"
              className="w-6 sm:w-8 h-6 sm:h-8"
            />
          </div>
        </motion.div>

        {/* Phone Section */}
        <motion.div
          className="flex flex-col p-6 bg-[#FAF0E6] rounded-lg shadow-md w-full sm:w-96 relative"
          variants={slideInFromBottom}
          transition={{ duration: 2, delay: 0.6 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#EE9F26] p-3 rounded-full flex items-center justify-center">
              <FaPhone className="text-2xl sm:text-3xl text-white" />
            </div>
            <h4 className="text-md sm:text-lg font-semibold ml-4 relative pb-1 after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[2px] after:bg-[#BEB3B3] after:content-['']">
              Telepon
            </h4>
          </div>
          <div className="text-sm sm:text-base space-y-2">
            <p>0895 3672 94477</p>
            <p>0822 4624 8114</p>
          </div>
          <div className="absolute bottom-2 right-2">
            <img
              src={Image5}
              alt="Arrow Icon"
              className="w-6 sm:w-8 h-6 sm:h-8"
            />
          </div>
        </motion.div>

        {/* Location Section */}
        <motion.div
          className="flex flex-col p-6 bg-[#FAF0E6] rounded-lg shadow-md w-full sm:w-96 relative"
          variants={slideInFromBottom}
          transition={{ duration: 2, delay: 0.9 }}
        >
          <div className="flex items-center mb-5">
            <div className="bg-[#EE9F26] p-3 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-2xl sm:text-3xl text-white" />
            </div>
            <h4 className="text-md sm:text-lg font-semibold ml-4 relative pb-1 after:absolute after:left-0 after:right-0 after:bottom-[-10px] after:h-[2px] after:bg-[#BEB3B3] after:content-['']">
              Lokasi
            </h4>
          </div>
          <div className="text-sm sm:text-base space-y-2">
            <p>Jawa Tengah</p>
            <p>Indonesia</p>
          </div>
          <div className="absolute bottom-2 right-2">
            <img
              src={Image5}
              alt="Arrow Icon"
              className="w-6 sm:w-8 h-6 sm:h-8"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Question Form Section */}
      <motion.div
        className="flex justify-center mb-28 mt-28"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="relative w-full sm:w-[1100px] h-[500px] bg-cover bg-center rounded-lg shadow-lg p-8 flex"
          style={{
            backgroundImage: `url(${Image4})`,
          }}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          {/* Image Section */}
          <motion.div
            className="w-full sm:w-1/3"
            variants={slideInFromLeft}
            transition={{ duration: 2 }}
          >
            <img
              src={Image1}
              alt="Farmer"
              className="w-full h-full object-cover rounded-l-lg"
            />
          </motion.div>

          {/* Form Section */}
          <motion.div
            className="flex-grow p-4 sm:p-8 bg-[#FFFFFF] bg-opacity-50 rounded-lg sm:rounded-r-lg"
            variants={slideInFromRight}
            transition={{ duration: 2 }}
          >
            <h4 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">
              Apakah Kamu Mempunyai Pertanyaan?
            </h4>
            <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
              {/* Nama dan No. Telepon */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nama"
                  className="w-full p-2 sm:p-3 border border-black rounded-md placeholder-[#EE9F26] text-black bg-white bg-opacity-20 text-sm sm:text-base"
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="No. Telepon"
                  className="w-full p-2 sm:p-3 border border-black rounded-md placeholder-[#EE9F26] text-black bg-white bg-opacity-20 text-sm sm:text-base"
                />
              </div>

              {/* Email dan Subjek */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Alamat Email"
                  className="w-full p-2 sm:p-3 border border-black rounded-md placeholder-[#EE9F26] text-black bg-white bg-opacity-20 text-sm sm:text-base"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subjek"
                  className="w-full p-2 sm:p-3 border border-black rounded-md placeholder-[#EE9F26] text-black bg-white bg-opacity-20 text-sm sm:text-base"
                />
              </div>

              {/* Komentar */}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Komentar"
                className="w-full p-2 sm:p-3 border border-black rounded-md h-20 sm:h-24 placeholder-[#EE9F26] text-black bg-white bg-opacity-20 text-sm sm:text-base"
              ></textarea>

              {/* Button */}
              <div className="flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="w-full max-w-[140px] py-2 sm:py-2 bg-[#EE9F26] text-white font-semibold rounded-md text-sm sm:text-base text-center"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex justify-center mb-[100px]">
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
