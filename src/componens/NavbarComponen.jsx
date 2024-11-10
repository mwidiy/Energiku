import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const NavbarComponen = () => {
  const [menu, setMenu] = useState(false);

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
        <div className="flex justify-between p-8 lg:px-32 px-10 items-center">
          {/* Logo */}
          <div className="w-[210px] h-[50px] cursor-pointer">
            <img src={logo} alt="Logo" />
          </div>
          {/* Navbar Links */}
          <nav className="hidden md:flex gap-x-3 text-lg font-medium">
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-white hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            >
              Beranda
            </Link>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-white hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            >
              Tentang Kami
            </Link>
            <Link
              to="Client"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-white hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            >
              Mitra
            </Link>
            <Link
              to="News"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-white hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            >
              Berita & Edukasi
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-white hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            >
              Kontak
            </Link>
          </nav>
          <div className="text-[35px] hover:text-[#EE9F26] hidden lg:flex cursor-pointer">
            <VscAccount />
          </div>
          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center cursor-pointer">
            {menu ? (
              <AiOutlineClose
                className="text-white"
                size={25}
                onClick={handleChange}
              />
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
            <AiOutlineClose
              className="text-white"
              size={25}
              onClick={closeMenu}
            />
          </div>
          <Link
            to="Home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-white mx-auto w-1/2 hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            onClick={closeMenu}
          >
            Beranda
          </Link>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-white mx-auto w-1/2 hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            onClick={closeMenu}
          >
            Tentang Kami
          </Link>
          <Link
            to="Client"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-white mx-auto w-1/2 hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            onClick={closeMenu}
          >
            Mitra
          </Link>
          <Link
            to="News"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-white mx-auto w-1/2 hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            onClick={closeMenu}
          >
            Berita & Edukasi
          </Link>
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-white mx-auto w-1/2 hover:bg-[#EE9F26] rounded-full p-2 cursor-pointer"
            onClick={closeMenu}
          >
            Kontak
          </Link>
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
