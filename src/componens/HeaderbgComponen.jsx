import React from "react";
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
          <h1 className="text-5xl font-extrabold mb-2">EnergiKu Kini</h1>
          <h1 className="text-5xl font-extrabold mb-8">EnergiKu Nanti</h1>
          <p className="text-lg">Maksimalkan Potensi Energi Bersih</p>
          <p className="text-lg mb-20">dan Ramah Lingkungan dengan EnergiKu</p>

          <button
            className="text-white px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300 flex items-center gap-2"
            style={{ backgroundColor: "#EE9F26" }}
          >
            Selengkapnya
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderbgComponen;
