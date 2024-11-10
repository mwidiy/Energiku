import React from "react";
import { motion } from "framer-motion";
import Image from "../assets/home1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function HeaderbgComponen() {
  return (
    <div className="relative">
      {/* Background Image with Gradient Overlay */}
      <div
        className="bg-cover bg-center p-12 rounded-lg shadow-lg h-[960px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(238, 159, 38, 0.5), rgba(238, 159, 38, 0.1)), url(${Image})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-start p-12 lg:px-32">
          <motion.h1
            className="text-5xl font-extrabold mb-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          >
            EnergiKu Kini
          </motion.h1>
          <motion.h1
            className="text-5xl font-extrabold mb-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.5,
            }}
          >
            EnergiKu Nanti
          </motion.h1>
          <motion.p
            className="text-lg"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1,
            }}
          >
            Maksimalkan Potensi Energi Bersih
          </motion.p>
          <motion.p
            className="text-lg mb-20"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 1.5,
            }}
          >
            dan Ramah Lingkungan dengan EnergiKu
          </motion.p>

          <motion.button
            className="text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300 flex items-center gap-2"
            style={{ backgroundColor: "#EE9F26" }}
            whileHover={{ rotate: 10 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            Selengkapnya
            <FontAwesomeIcon icon={faAngleRight} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default HeaderbgComponen;
