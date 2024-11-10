import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const NavbarComponen = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown menu

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="absolute w-full z-10">
        <div
          className={`flex justify-between p-8 lg:px-32 px-10 items-center fixed top-0 left-0 w-full transition-all duration-300 ${
            scrolling ? "bg-white shadow-lg" : "bg-transparent"
          }`}
        >
          <div className="w-[210px] h-[50px] cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>
          
          <nav className="hidden md:flex gap-x-3 text-lg font-medium">
            <NavLink
              to="/Energiku"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
              end
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

          {/* Profile Icon with Dropdown */}
          <div className="relative text-[35px] hover:text-[#EE9F26] hidden lg:flex cursor-pointer ">
            <VscAccount onClick={toggleDropdown} />
            {dropdownOpen && (
              <div className="text-xl absolute right-0 mt-10 w-50 bg-white bg-opacity-50 rounded-lg shadow-lg z-10 p-5 ">
                <NavLink
                  to="/Energiku/Login"
                  className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                  onClick={() => setDropdownOpen(false)}
                >
                  Masuk
                </NavLink>
                <NavLink
                  to="/Energiku/Register"
                  className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-b-lg"
                  onClick={() => setDropdownOpen(false)}
                >
                  Daftar
                </NavLink>
              </div>
            )}
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
            end
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
