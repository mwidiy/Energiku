import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image0 from "../assets/about0.png";
import Image1 from "../assets/about1.png";
import Image2 from "../assets/about2.png";
import Image3 from "../assets/about3.png";

// Sample team member images - replace with actual paths
import TeamMember1 from "../assets/team1.jpg";
import TeamMember2 from "../assets/team2.jpg";
import TeamMember3 from "../assets/team3.jpg";
import TeamMember4 from "../assets/team4.jpg";
import TeamMember5 from "../assets/team5.jpg";
import TeamMember6 from "../assets/team6.jpg";

export const About = () => {
  return (
    <div>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="bg-cover bg-center p-12 rounded-lg shadow-lg h-[500px]"
          style={{
            backgroundImage: `url(${Image0})`,
          }}
        ></div>

        {/* Heading Section */}
        <div className="text-center mt-24 mb-1">
          <p className="text-2xl font-semibold inline-block relative pb-1">
            Tentang Kami
            <span className="absolute left-1/4 right-1/4 pb-3 block border-b-2 border-yellow-500"></span>
          </p>
        </div>

        {/* Introduction Section */}
        <div className="flex justify-center items-center min-h-[450px] lg:px-32">
          <div className="w-[1200px] h-[300px] bg-[#FAF0E6] flex justify-center items-center py-5 px-10 mb-1 rounded-[50px] space-x-40">
            {/* Image Section */}
            <div className="w-60 flex justify-center items-center">
              <img
                src={Image1}
                alt="Introduction"
                className="max-w-full max-h-full"
              />
            </div>

            {/* Text Section */}
            <div className="w-1/2">
              <p className="font-medium  text-justify text-[18px]">
                Platform kami hadir sebagai solusi inovatif untuk menghubungkan
                para penghasil limbah organik dengan pengusaha pengembangan
                energi terbarukan. Melalui platform ini, pengguna dapat dengan
                mudah mendonasikan limbah organik mereka menjadi bioenergy.
                Platform ini berperan aktif dalam pengurangan jumlah limbah yang
                berakhir di TPA sekaligus meningkatkan produksi sumber energi
                terbarukan.
              </p>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="p-1 md:p-12 lg:px-32 rounded-lg grid md:grid-cols-2 gap-32">
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-5xl font-bold mb-5 text-[#EE9F26] text-[60px]">VISI</h2>
            <p className="text-gray-900 mb-10 font-normal text-[23px]">
              Menjadi platform terkemuka dalam pengelolaan limbah pertanian yang berkelanjutan,
               menghubungkan rumah tangga dan petani untuk menciptakan bioenergi yang ramah lingkungan
                dan mendorong ketahanan energi nasional.
            </p>
          </div>
          <div className="flex items-start w-full">
            <img
              src={Image2}
              alt="Bio Energi"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="p-1 md:p-12 lg:px-32 rounded-lg grid md:grid-cols-2 gap-32 mt-24">
          <div className="flex items-start w-full">
            <img
              src={Image3}
              alt="Bio Energi"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col justify-center w-full">
            <h2 className="text-5xl font-bold mb-5 text-[#EE9F26] text-[60px]">MISI</h2>
            <p className="text-gray-900 mb-10 font-normal text-[23px]">
              Misi bio energi ini mencakup beberapa aspek penting, yaitu
              membangun jaringan edukasi dan kesadaran untuk meningkatkan
              pemahaman masyarakat tentang manfaat energi terbarukan dan
              pentingnya penggunaan energi yang ramah lingkungan.
            </p>
          </div>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-10">
          <button
            className="text-white px-5 py-2 rounded-full shadow-lg hover:opacity-90 transition duration-300 flex items-center gap-2 mb-28"
            style={{ backgroundColor: "#EE9F26" }}
          >
            Selengkapnya
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
        <div>
          <p className="flex text-[#EE9F26] justify-center mb-10 font-la-belle-aurore text-2xl">
            Team Creatif
          </p>
        </div>

        <div className="text-center mt-10">
          <h2 className="text-3xl font-bold mb-20">Tokoh Utama di EnergiKu</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-40 px-20 md:px-32 pb-10">
            {/* Team Members */}
            {[
              {
                name: "Shelynda Trifebriani Nursalam",
                role: "Project Manager",
                img: TeamMember1,
              },
              {
                name: "Jamas Bayu Widiyantoro",
                role: "Scrum Master",
                img: TeamMember2,
              },
              { name: "Mutiara Sukma", role: "Hipster", img: TeamMember3 },
              {
                name: "Hanifa Khairunnisa’ Nasry",
                role: "Hipster",
                img: TeamMember4,
              },
              { name: "Muhammad Widiyanto", role: "Hacker", img: TeamMember5 },
              { name: "Renaldi Hardiansah", role: "Hacker", img: TeamMember6 },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[450px] object-cover rounded-lg mb-10 shadow-2xl shadow-black" // Increased shadow for a more pronounced effect
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-20">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
