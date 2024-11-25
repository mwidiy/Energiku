import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const NavbarComponen = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  // Cek scroll untuk menambahkan efek navbar
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

  // Cek status login dari LocalStorage
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
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

  // Logout: hapus status dari LocalStorage
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail'); // Opsional
    setIsLoggedIn(false);
    setDropdownOpen(false);
    alert("You have successfully logged out!");
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
                {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/Energiku/Profile"
                      className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Detail Profile
                    </NavLink>
                    <button
                      className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-b-lg"
                      onClick={handleLogout}
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
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
      </div>
    </>
  );
};

export default NavbarComponen;
