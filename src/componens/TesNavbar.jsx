import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    pekerjaan: '',
    noHp: '',
    alamat: '',
    jeniskelamin: '',
    tanggalLahir: '',
    poin: '',
    avatar: '/default-avatar.png',
  });

  useEffect(() => {
    // Handle scroll event to change navbar style
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Fetch login status and profile data on initial load
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);

    const fetchUserProfile = async () => {
      const userId = localStorage.getItem('id');
      try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfile((prevProfile) => ({
            ...prevProfile,
            ...data,
            avatar: data.gambar
              ? `http://localhost:5000/asset/${data.gambar}`
              : '/default-avatar.png',
          }));
        } else {
          console.error('Failed to load user data');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleMenuToggle = () => setMenu(!menu);
  const handleCloseMenu = () => setMenu(false);
  const handleDropdownToggle = () => setDropdownOpen(!dropdownOpen);
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    setDropdownOpen(false);
    alert("You have successfully logged out!");
  };

  return (
    <div className="absolute w-full z-10">
      <div
        className={`flex justify-between items-center p-4 lg:px-32 fixed top-0 left-0 w-full transition-all duration-300 ${scrolling ? "bg-white shadow-lg" : "bg-transparent"}`}
      >
        {/* Logo */}
        <div className="w-[160px] md:w-[210px] h-auto cursor-pointer">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-x-3 text-sm lg:text-lg font-medium">
          {['/Energiku', '/Energiku/about', '/Energiku/client', '/Energiku/news', '/Energiku/contact'].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2"
              }
              end
            >
              {path.split('/').pop().replace(/([A-Z])/g, ' $1').toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* Profile Icon and Dropdown */}
        <div className="relative text-[30px] md:text-[25px] hidden lg:flex cursor-pointer">
          <img
            src={profile.avatar}
            alt="Profile"
            onClick={handleDropdownToggle}
            className="w-[35px] h-[35px] rounded-full cursor-pointer"
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-10 w-50 bg-white bg-opacity-50 rounded-lg shadow-lg z-10 p-5">
              {isLoggedIn ? (
                <>
                  <NavLink
                    to="/Energiku/detailprofile"
                    className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Detail Profil
                  </NavLink>
                  <button
                    className="block w-full bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-b-lg"
                    onClick={handleLogout}
                  >
                    Keluar
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to="/Energiku/login"
                    className="block bg-[#D9D9D9] px-4 py-1 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Masuk
                  </NavLink>
                  <NavLink
                    to="/Energiku/register"
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

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center cursor-pointer">
          {menu ? (
            <AiOutlineClose className="text-black" size={25} onClick={handleMenuToggle} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleMenuToggle} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden flex flex-col bg-slate-700 text-white fixed left-0 top-0 w-full h-screen overflow-y-auto transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="absolute top-4 right-4 cursor-pointer">
          <AiOutlineClose className="text-white" size={25} onClick={handleCloseMenu} />
        </div>
        {['/Energiku', '/Energiku/about', '/Energiku/client', '/Energiku/news', '/Energiku/contact'].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={handleCloseMenu}
          >
            {path.split('/').pop().replace(/([A-Z])/g, ' $1').toUpperCase()}
          </NavLink>
        ))}
        <button
          className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none"
          onClick={isLoggedIn ? handleLogout : () => alert("Login functionality not implemented")}
        >
          {isLoggedIn ? "Keluar" : "Masuk"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
