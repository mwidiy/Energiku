import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import forgotPasswordImage from '../assets/desain.png';
import notificationIcon from '../assets/circle-check.png';

function ForgotPasswordPage() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [showNotification, setShowNotification] = useState(false);
    const navigate = useNavigate();

    // Fungsi untuk menampilkan notifikasi
    const handleNotification = (message) => {
        setShowNotification(message);
        setTimeout(() => setShowNotification(false), 3000);
    };

    // Fungsi untuk langkah pengiriman email
    const handleEmailSubmit = () => {
        if (!email) {
            handleNotification("Mohon masukkan email Anda.");
            return;
        }
        setStep(2);
        handleNotification("Kode OTP telah dikirim ke email Anda.");
    };

    // Fungsi untuk verifikasi OTP
    const handleOtpSubmit = () => {
        if (!otp) {
            handleNotification("Mohon masukkan kode OTP.");
            return;
        }
        setStep(3);
        handleNotification("OTP berhasil diverifikasi, silakan reset kata sandi Anda.");
    };

    // Fungsi untuk reset password
    const handleResetPasswordSubmit = () => {
        if (!password) {
            handleNotification("Mohon masukkan kata sandi baru.");
            return;
        }
        handleNotification("Kata sandi berhasil diubah!");
        setTimeout(() => {
            navigate('/Energiku/Login');
        }, 2000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg max-w-6xl w-full flex flex-col lg:flex-row relative">

                {/* Notifikasi */}
                {showNotification && (
                    <div className="absolute top-4 right-4 flex items-center bg-yellow-500 text-white p-3 rounded-lg shadow-lg">
                        <img src={notificationIcon} alt="Notifikasi" className="w-6 h-6 mr-2" />
                        <span className="text-sm">{showNotification}</span>
                    </div>
                )}

                {/* Bagian Kiri - Formulir */}
                <div className="basis-2/3 p-16 flex flex-col justify-center items-center">
                    <div>
                        {step === 1 && (
                            <>
                                <div className="flex justify-center items-center mb-6">
                                    <h1 className="text-4xl font-bold text-center">Lupa Kata Sandi</h1>
                                </div>

                                <div className="flex justify-center items-center mb-6">
                                    <span className="text-base text-center">Masukkan email Anda untuk menerima kode OTP</span>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                            Alamat Email
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="email"
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Masukkan Email"
                                        />
                                    </div>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                                        type="button"
                                        onClick={handleEmailSubmit}
                                    >
                                        Kirim Kode OTP
                                    </button>
                                </form>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <div className="flex justify-center items-center mb-6">
                                    <h1 className="text-4xl font-bold text-center">Verifikasi OTP</h1>
                                </div>

                                <div className="flex justify-center items-center mb-6">
                                    <span className="text-base text-center">Masukkan kode OTP yang telah dikirim ke email Anda</span>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="otp">
                                            Kode OTP
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="otp"
                                            type="text"
                                            value={otp}
                                            onChange={(e) => setOtp(e.target.value)}
                                            placeholder="Masukkan Kode OTP"
                                        />
                                    </div>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                                        type="button"
                                        onClick={handleOtpSubmit}
                                    >
                                        Verifikasi OTP
                                    </button>
                                </form>
                            </>
                        )}

                        {step === 3 && (
                            <>
                                <div className="flex justify-center items-center mb-6">
                                    <h1 className="text-4xl font-bold text-center">Reset Kata Sandi</h1>
                                </div>

                                <div className="flex justify-center items-center mb-6">
                                    <span className="text-base text-center">Masukkan kata sandi baru Anda</span>
                                </div>

                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
                                            Kata Sandi Baru
                                        </label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Masukkan Kata Sandi Baru"
                                        />
                                    </div>
                                    <button
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded w-full mb-4"
                                        type="button"
                                        onClick={handleResetPasswordSubmit}
                                    >
                                        Reset Kata Sandi
                                    </button>
                                </form>
                            </>
                        )}

                        {/* Tombol Kembali ke Login */}
                        {(step === 2 || step === 3) && (
                            <div className="text-center mt-4">
                                <span className="text-sm text-gray-600">Sudah punya akun? </span>
                                <button
                                    className="text-yellow-500 hover:text-yellow-600 text-sm font-semibold"
                                    onClick={() => navigate('/Energiku/Login')}
                                >
                                    Kembali ke Login
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bagian Kanan - Gambar */}
                <div className="basis-3/4 flex items-center justify-center p-0 h-full">
                    <img src={forgotPasswordImage} alt="Ilustrasi Forgot Password" className="object-cover h-full w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
