import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';

// Assets
import Image0 from "../assets/about0.png";
import Image1 from "../assets/about1.png";
import Image2 from "../assets/about2.png";
import Image3 from "../assets/about3.png";

// Team Member Images
import TeamMember1 from "../assets/team1.jpg";
import TeamMember2 from "../assets/team2.jpg";
import TeamMember3 from "../assets/team3.jpg";
import TeamMember4 from "../assets/team4.jpg";
import TeamMember5 from "../assets/team5.jpg";
import TeamMember6 from "../assets/team6.jpg";

// Animation Variants
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

const teamMembers = [
  { name: "Shelynda Trifebriani Nursalam", role: "Project Manager", img: TeamMember1 },
  { name: "Jamas Bayu Widiyantoro", role: "Scrum Master", img: TeamMember2 },
  { name: "Mutiara Sukma", role: "Hipster", img: TeamMember3 },
  { name: "Hanifa Khairunnisa’ Nasry", role: "Hipster", img: TeamMember4 },
  { name: "Muhammad Widiyanto", role: "Hacker", img: TeamMember5 },
  { name: "Renaldi Hardiansah", role: "Hacker", img: TeamMember6 },
];

const About = () => {
  return (
    <div>
      {/* Background Image Section */}
      <div className="relative">
        <div
          className="bg-cover bg-center p-12 rounded-lg shadow-lg h-[500px]"
          style={{ backgroundImage: `url(${Image0})` }}
        ></div>

        {/* Heading Section */}
        <motion.div
          className="text-center mt-24 mb-1"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <motion.p
            className="text-2xl font-semibold inline-block relative pb-1"
            variants={slideInFromBottom}
            transition={{ duration: 2 }}
          >
            Tentang Kami
            <motion.span
              className="absolute left-1/4 right-1/4 pb-3 block border-b-2 border-yellow-500"
              variants={fadeIn}
              transition={{ duration: 2 }}
            ></motion.span>
          </motion.p>
        </motion.div>

        {/* Introduction Section */}
        <div className="flex justify-center items-center min-h-[450px] lg:px-32">
          <motion.div
            className="w-[1200px] h-[300px] bg-[#FAF0E6] flex justify-center items-center py-5 px-10 mb-1 rounded-[50px] space-x-40"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            {/* Image Section */}
            <motion.div
              className="w-60 flex justify-center items-center"
              variants={slideInFromLeft}
              transition={{ duration: 2 }}
            >
              <img src={Image1} alt="Introduction" className="max-w-full max-h-full" />
            </motion.div>

            {/* Text Section */}
            <motion.div
              className="w-1/2"
              variants={slideInFromRight}
              transition={{ duration: 2 }}
            >
              <p className="font-medium text-justify text-[18px]">
                Platform kami hadir sebagai solusi inovatif untuk menghubungkan para penghasil limbah organik dengan pengusaha pengembangan energi terbarukan.
                Melalui platform ini, pengguna dapat dengan mudah mendonasikan limbah organik mereka menjadi bioenergy. Platform ini berperan aktif dalam pengurangan jumlah
                limbah yang berakhir di TPA sekaligus meningkatkan produksi sumber energi terbarukan.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          className="p-1 md:p-12 lg:px-32 rounded-lg grid md:grid-cols-2 gap-32"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="flex flex-col justify-center w-full"
            variants={slideInFromRight}
            transition={{ duration: 2 }}
          >
            <h2 className="text-5xl font-bold mb-5 text-[#EE9F26] text-[60px]">VISI</h2>
            <p className="text-gray-900 mb-10 font-normal text-[23px]">
              Menjadi platform terkemuka dalam pengelolaan limbah pertanian yang berkelanjutan,
              menghubungkan rumah tangga dan petani untuk menciptakan bioenergi yang ramah lingkungan
              dan mendorong ketahanan energi nasional.
            </p>
          </motion.div>

          <motion.div
            className="flex items-start w-full"
            variants={slideInFromLeft}
            transition={{ duration: 2 }}
          >
            <img
              src={Image2}
              alt="Bio Energi"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </motion.div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          className="p-1 md:p-12 lg:px-32 rounded-lg grid md:grid-cols-2 gap-32 mt-24"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <motion.div
            className="flex items-start w-full"
            variants={slideInFromRight}
            transition={{ duration: 2 }}
          >
            <img
              src={Image3}
              alt="Bio Energi"
              className="w-full h-[450px] object-cover rounded-3xl"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center w-full"
            variants={slideInFromLeft}
            transition={{ duration: 2 }}
          >
            <h2 className="text-5xl font-bold mb-5 text-[#EE9F26] text-[60px]">MISI</h2>
            <p className="text-gray-900 mb-10 font-normal text-[23px]">
              Misi bio energi ini mencakup beberapa aspek penting, yaitu membangun jaringan edukasi
              dan kesadaran untuk meningkatkan pemahaman masyarakat tentang manfaat energi terbarukan
              dan pentingnya penggunaan energi yang ramah lingkungan.
            </p>
          </motion.div>
        </motion.div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-10">
          <NavLink 
            to="/Energiku/detailabout">
            <button
              className="text-white px-5 py-2 rounded-full shadow-lg hover:opacity-90 transition duration-300 flex items-center gap-2 mb-28"
              style={{ backgroundColor: "#EE9F26" }}
            >
              Selengkapnya
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </NavLink>
        </div>

        {/* Team Section */}
        <motion.div
          className="flex text-[#EE9F26] justify-center mb-10 font-la-belle-aurore text-2xl"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          Team Creatif
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 2 }}
        >
          <motion.h2
            className="text-3xl font-bold mb-20"
            variants={slideInFromBottom}
            transition={{ duration: 2 }}
          >
            Tokoh Utama di EnergiKu
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-40 px-20 md:px-32 pb-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 2 }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={slideInFromBottom}
                transition={{ duration: 2, delay: index * 0.3 }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-[450px] object-cover rounded-lg mb-10 shadow-2xl shadow-black"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-500 mb-20">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
