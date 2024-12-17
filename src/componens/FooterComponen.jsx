import React from "react";
import logo from "../assets/logo1.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const sections = [
  {
    title: "Informasi",
    items: ["Beranda", "Tentang Kami", "Mitra", "Berita & Edukasi", "Kontak"],
  },
  {
    title: "Kontak Kami",
    items: [
      { icon: FaPhone, text: "+62 123 456 789" },
      { icon: FaEnvelope, text: "Energiku.Official@gmail.com" },
    ],
  },
];

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" },
  { name: "Github", icon: FaGithub, link: "https://github.com/" },
  { name: "Whatsapp", icon: FaWhatsapp, link: "https://whatsapp.com/" },
];

const Footer = () => {
  return (
    <div className="w-full bg-[#275A53] text-gray-300 px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center lg:px-20 py-10 border-b-2 border-white">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start mb-8 md:mb-0">
          <img src={logo} alt="logo" className="h-12 md:h-16 w-auto" />
        </div>

        {/* Information, Contact Us, and Social Media Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full md:max-w-4xl text-center md:text-left">
          {/* Information Section */}
          {sections.map((section, index) => (
            <div key={index}>
              <h6 className="font-bold uppercase text-white hover:text-[#EE9F26] pb-4">
                {section.title}
              </h6>
              <ul>
                {section.items.map((item, i) =>
                  typeof item === "string" ? (
                    <li
                      key={i}
                      className="text-white py-1 hover:text-[#EE9F26]"
                    >
                      {item}
                    </li>
                  ) : (
                    <li
                      key={i}
                      className="text-white py-1 hover:text-[#EE9F26] flex items-center justify-center md:justify-start gap-2"
                    >
                      <item.icon className="text-white hover:text-[#EE9F26]" />
                      {item.text}
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}

          {/* Social Media Section */}
          <div>
            <h6 className="font-bold uppercase text-white hover:text-[#EE9F26] pb-4">
              Ikuti Lebih Banyak
            </h6>
            <div className="flex justify-center md:justify-start items-center gap-2 md:gap-4 text-2xl text-white">
              {items.map((x, index) => (
                <a
                  href={x.link}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#EE9F26]"
                >
                  <x.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="flex flex-col md:flex-row justify-center items-center py-4 text-center text-white gap-2 md:gap-4">
        <p>&copy; 2024 All rights reserved</p>
        <span>|</span>
        <p>Design By Lensa</p>
      </div>
    </div>
  );
};

export default Footer;
