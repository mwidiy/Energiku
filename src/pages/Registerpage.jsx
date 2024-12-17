import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import registerImage from '../assets/desain.png';
import googleIcon from '../assets/google.png';
import xIcon from '../assets/x.png';
import { motion } from "framer-motion";
import axios from 'axios';

import maskot from "../assets/maskot4.png"; // Gambar maskot error
import maskot1 from "../assets/maskot1.png"; // Gambar maskot error
import suksestf from "../assets/maskot7.png"; // Gambar maskot sukses





function RegisterPage() {
    const [isAgreed, setIsAgreed] = useState(false);
    const [showPopup, setShowPopup] = useState(false); // State untuk popup
    const [popupText, setPopupText] = useState(''); // Teks untuk popup
    const [imageUrl, setImageUrl] = useState(''); // URL gambar maskot
    const navigate = useNavigate();

    // Fungsi untuk langsung navigasi ke halaman login
    const handleRegister = async () => {
        if (!isAgreed) {
            setPopupText('Silakan setujui persyaratan dan kebijakan terlebih dahulu.');
            setImageUrl(maskot); // Gambar maskot error
            setShowPopup(true);
            return;
        }

        // Ambil data dari input
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;


        if (!nama || !email || !password) {
            setPopupText('Mohon lengkapi semua field');
            setImageUrl(maskot); // Gambar maskot error
            setShowPopup(true);
            return;
        }

        try {
            // Kirim data ke backend
            const response = await axios.post('http://localhost:5000/api/register', {
                nama,
                email,
                password,
            });

            if (response.status === 201) {
                setPopupText('Registrasi berhasil!');
                setImageUrl(maskot1); // Gambar maskot error
                setShowPopup(true);
                navigate('/Energiku/Login');
            }
        } catch (error) {
            console.error(error);
            setPopupText('Registrasi berhasil!');
            setImageUrl(maskot); // Gambar maskot error
            setShowPopup(true);
        }
    };

    // Menutup popup
    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col lg:flex-row relative">

                {/* Bagian Kiri - Formulir */}
                <div className="basis-2/3 p-16 flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center mb-6">
                        <h1 className="text-4xl font-bold text-center">Mulai Sekarang</h1>
                    </div>
                    <p className="text-base text-center mb-6">Buat akun Anda untuk mengakses layanan kami</p>

                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="nama">
                                Nama
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nama"
                                type="text"
                                placeholder="Masukkan Nama"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                Alamat Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Masukkan Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                Kata Sandi
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Masukkan Kata Sandi"
                                required
                            />
                        </div>
                        <div className="mb-4 flex items-center">
                            <input
                                type="checkbox"
                                className="form-checkbox text-indigo-600"
                                checked={isAgreed}
                                onChange={() => setIsAgreed(!isAgreed)}
                            />
                            <span className="ml-2 text-sm">Saya menyetujui persyaratan & kebijakan</span>
                        </div>
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                            type="button"
                            onClick={handleRegister}
                        >
                            Daftar
                        </button>
                        {/*
                        <div className="flex items-center justify-between mb-4">
                            <hr className="w-full border-gray-300" />
                            <span className="px-2 text-gray-500 text-sm">atau</span>
                            <hr className="w-full border-gray-300" />
                        </div>
                        <div className="flex space-x-4">
                            <button
                                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center w-5/8"
                                type="button"
                            >
                                <img src={googleIcon} alt="Google Icon" className="w-5 h-5 mr-2" />
                                <span className="text-sm">Daftar dengan Google</span>
                            </button>
                            <button
                                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center justify-center w-2/4"
                                type="button"
                            >
                                <img src={xIcon} alt="X Icon" className="w-5 h-5 mr-2" />
                                <span className="text-sm">Daftar dengan X</span>
                            </button>
                        </div>*/}
                    </form>

                    {/* Teks dan tombol "Kembali ke Halaman Login" */}
                    <div className="mt-4 flex items-center justify-center">
                        <span className="text-sm text-black">Sudah punya akun? </span>
                        <button
                            className="text-sm text-blue-500 hover:underline ml-2"
                            onClick={() => navigate('/Energiku/Login')}
                        >
                            Kembali ke Halaman Login
                        </button>
                    </div>
                </div>

                {/* Bagian Kanan - Gambar */}
                <div className="basis-3/4 flex items-center justify-center p-0 h-full">
                    <img src={registerImage} alt="Ilustrasi Register" className="object-cover h-full w-full rounded-lg" />
                </div>

                {/* Popup */}
                {showPopup && (
                    <div className="popup">
                    <div className="popup-content">
                        <img src={imageUrl} alt="Mascot" className="popup-image" />
                        <p>{popupText}</p>
                        <button onClick={closePopup}>Tutup</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default RegisterPage;
