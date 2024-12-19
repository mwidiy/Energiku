import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Image from '../assets/Profile_icon1.png';

import maskot from "../assets/maskot4.png"; // Gambar maskot error
import maskot1 from "../assets/maskot1.png"; // Gambar maskot error
import suksestf from "../assets/maskot7.png"; // Gambar maskot sukses

const NavbarComponen = () => {
  const [menu, setMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State untuk status login

  const [showPopup, setShowPopup] = useState(false); // State untuk popup
  const [popupText, setPopupText] = useState(''); // Teks untuk popup
  const [imageUrl, setImageUrl] = useState(''); // URL gambar maskot

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
    setPopupText('Kamu Berhasil Logout ..');
    setImageUrl(maskot); // Gambar maskot error
    setShowPopup(true);
  };

  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    pekerjaan: '',
    noHp: '',
    alamat: '',
    jeniskelamin: '',
    tanggalLahir: '',
    poin: ''
  });

  useEffect(() => {
    const fetchData = async () => {
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
              : Image,
          }));
        } else {
          console.error('Gagal memuat data pengguna');
        }
      } catch (error) {
        console.error('Kesalahan saat memuat data:', error);
      }
    };

    const fetchTransactions = async () => {
      const userId = localStorage.getItem('id');
      try {
        const response = await fetch(`http://localhost:5000/api/transactions/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setTransactions(data.data); // Akses ke properti data
        } else {
          console.error('Gagal memuat riwayat transaksi');
        }
      } catch (error) {
        console.error('Kesalahan saat memuat riwayat transaksi:', error);
      }
    };

    fetchData();
    fetchTransactions();
  }, []);

      // Menutup popup
      const closePopup = () => {
        setShowPopup(false);
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
              to="/"
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
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Tentang Kami
            </NavLink>
            <NavLink
              to="/partner"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Mitra
            </NavLink>
            <NavLink
              to="/news"
              className={({ isActive }) =>
                isActive
                  ? "bg-[#EE9F26] text-white rounded-full p-2 cursor-pointer"
                  : "hover:bg-[#EE9F26] hover:text-white rounded-full p-2 cursor-pointer"
              }
            >
              Berita & Edukasi
            </NavLink>
            <NavLink
              to="/contak"
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
          {isLoggedIn ? (
                  <>
                  <img
                    src={profile.avatar || Image}
                    alt="Profile"
                    onClick={toggleDropdown}
                    className="w-[35px] h-[35px] rounded-full cursor-pointer"
                  />
                  </>
                ) : (
                  <>
                    <img
                      src={Image}
                      alt="Profile"
                      onClick={toggleDropdown}
                      className="w-[35px] h-[35px] rounded-full cursor-pointer"
                    />
                  </>
                )}
            {dropdownOpen && (
              <div className="text-xl absolute right-0 mt-10 w-50 bg-white bg-opacity-50 rounded-lg shadow-lg z-10 p-5 ">
                {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/Profile"
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
                      to="/Login"
                      className="block bg-[#D9D9D9] px-4 py-2 text-gray-700 hover:bg-[#EE9F26] hover:text-white rounded-t-lg"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Masuk
                    </NavLink>
                    <NavLink
                      to="/Register"
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

                  {/* Mobile Menu */}
        <div
          className={`lg:hidden flex flex-col bg-slate-700 text-white fixed left-0 top-0 w-full h-screen overflow-y-auto transition-transform duration-300 ${menu ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="absolute top-4 right-4 cursor-pointer">
            <AiOutlineClose className="text-white" size={25} onClick={closeMenu} />
          </div>
          <NavLink
            to=""
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/about"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to="/partner"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Mitra
          </NavLink>
          <NavLink
            to="/news"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Berita & Edukasi
          </NavLink>
          <NavLink
            to="/contak"
            className="p-4 border-gray-300 hover:bg-gray-200"
            onClick={closeMenu}
          >
            Kontak
          </NavLink>
          {isLoggedIn ? (
                  <>
                    <NavLink
                      to="/Profile"
                      className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Detail Profile
                    </NavLink>
                    <button
                      className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none"
                      onClick={handleLogout}
                    >
                      Keluar
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/Login"
                      className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Masuk
                    </NavLink>
                    <NavLink
                      to="/Register"
                      className="p-4 bg-[#EE9F26] hover:bg-gray-200 text-black transition rounded-full mx-4 mt-4 focus:outline-none text-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Daftar
                    </NavLink>
                  </>
                )}
        </div>

          {/* Popup */}
          {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <img src={imageUrl} alt="Mascot" className="popup-image" />
                  <p>{popupText}</p>
                  <button className='cancel' onClick={closePopup}>Tutup</button>
                </div>
              </div>
            )}
        </div>
      </div>
    </>
  );
};

export default NavbarComponen;
