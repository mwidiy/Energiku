import React, { useState } from 'react';
import loginImage from '../assets/desain.png'; // Path to login image
import googleIcon from '../assets/google.png'; // Path to Google icon
import xIcon from '../assets/x.png'; // Path to X icon
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loginpage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  // Fungsi untuk menangani login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        // Jika login berhasil, arahkan ke halaman utama
        navigate('/Energiku');
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('nama',response.data.user.nama);
        localStorage.setItem('email',response.data.user.email); // Ganti dengan field email dari API
        localStorage.setItem('id',response.data.user.idlogin_user); // Ganti dengan field email dari API
        localStorage.setItem('password',response.data.user.password); // Ganti dengan field email dari API
        console.log('idlogin_user',response.data.user.password);
        
      }
    } catch (error) {
      // Tangani error
      setErrorMessage(
        error.response?.data?.message || 'Email atau kata Sandi salah , coba lagi.'
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col lg:flex-row">
        {/* Left Section - Form */}
        <div className="lg:w-2/3 p-16 flex flex-col justify-center items-center">
          <div>
            {/* Header */}
            <div className="flex justify-center items-center mb-4">
              <h1 className="text-4xl font-bold">Halo!</h1>
            </div>
            <p className="text-base text-center mb-6">
              Masukkan kredensial Anda untuk mengakses akun Anda
            </p>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Alamat Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Masukkan email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  Kata Sandi
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Masukkan Kata Sandi"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Link
                  to="/Energiku/ForgotPassword"
                  className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 mt-2"
                >
                  Lupa Kata Sandi?
                </Link>
              </div>
              {errorMessage && (
                <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
              )}
              <div className="mb-4 flex items-center">
                <input type="checkbox" className="form-checkbox text-indigo-600" />
                <span className="ml-2 text-sm">Ingat saya</span>
              </div>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                type="submit"
              >
                Masuk
              </button>
              
              {/*
                <div className="flex items-center justify-between mb-4">
                  <hr className="w-full border-gray-300" />
                  <span className="px-2 text-gray-500 text-sm">atau</span>
                  <hr className="w-full border-gray-300" />
                </div>
                <div className="flex space-x-4">
                  <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center w-1/2"
                    type="button"
                  >
                    <img
                      src={googleIcon}
                      alt="Google Icon"
                      className="w-5 h-5 mr-2"
                    />
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center w-1/2"
                    type="button"
                  >
                    <img 
                      src={xIcon} 
                      alt="X Icon" 
                      className="w-5 h-5 mr-2" 
                    />
                    <span className="text-sm">X</span>
                  </button>
                </div>
                */}

            </form>
          </div>
          <p className="text-center text-sm mt-6">
            Belum punya akun?{' '}
            <Link
              to="/Energiku/Register"
              className="text-blue-500 hover:text-blue-800"
            >
              Daftar disini
            </Link>
          </p>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-3/4 h-full flex items-center justify-center overflow-hidden">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
