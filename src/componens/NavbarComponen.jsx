import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom"; // Menggunakan NavLink untuk mendeteksi link aktif
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const NavbarComponen = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false); // State untuk melacak scroll

  // Fungsi untuk menangani perubahan scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // Jika scroll lebih dari 50px, ubah state menjadi true
    } else {
      setScrolling(false); // Jika scroll kurang dari 50px, tetap false
    }
  };

  // Menambahkan event listener untuk scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up event listener
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      {/* Navbar Container */}
      <div className="absolute w-full z-10">
        <div
          className={`flex justify-between p-8 lg:px-32 px-10 items-center fixed top-0 left-0 w-full transition-all duration-300 ${
            scrolling ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <div className="w-[210px] h-[50px] cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>
          {/* Navbar Links */}
          <nav className="hidden md:flex gap-x-3 text-lg font-medium">
            <NavLink
              to="/Energiku"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
              end // Ensure it only matches the root path
            >
              Beranda
            </NavLink>
            <NavLink
              to="/Energiku/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Tentang Kami
            </NavLink>
            <NavLink
              to="/Energiku/partner"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Mitra
            </NavLink>
            <NavLink
              to="/Energiku/news"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Berita & Edukasi
            </NavLink>
            <NavLink
              to="/Energiku/contak"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Kontak
            </NavLink>
          </nav>
          <div className="text-[35px] hover:text-[#EE9F26] hidden lg:flex cursor-pointer">
            <VscAccount />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center cursor-pointer">
            {menu ? (
              <AiOutlineClose className="text-white" size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-0 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {/* Close Icon inside the Mobile Menu */}
          <div className="absolute top-4 right-4 cursor-pointer">
            <AiOutlineClose className="text-white" size={25} onClick={closeMenu} />
          </div>
          <NavLink
            to="/Energiku"
            className={({ isActive }) =>
              isActive
                ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
            }
            onClick={closeMenu}
            end // Ensure it only matches the root path
          >
            Beranda
          </NavLink>
          <NavLink
            to="/Energiku/about"
            className={({ isActive }) =>
              isActive
                ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
            }
            onClick={closeMenu}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to="/Energiku/partner"
            className={({ isActive }) =>
              isActive
                ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
            }
            onClick={closeMenu}
          >
            Mitra
          </NavLink>
          <NavLink
            to="/Energiku/news"
            className={({ isActive }) =>
              isActive
                ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
            }
            onClick={closeMenu}
          >
            Berita & Edukasi
          </NavLink>
          <NavLink
            to="/Energiku/contak"
            className={({ isActive }) =>
              isActive
                ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
            }
            onClick={closeMenu}
          >
            Kontak
          </NavLink>
          <button
            className="px-4 py-2 mx-auto w-1/2 border bg-[#EE9F26] hover:bg-white hover:text-black transition-all rounded-full cursor-pointer"
            onClick={() => alert("Login clicked!")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarComponen;
