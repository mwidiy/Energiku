import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Tambahkan axios untuk HTTP request
import bniIcon from '../assets/bni.png';
import bcaIcon from '../assets/bca.png';
import shopeePayIcon from '../assets/shope.png';
import ovoIcon from '../assets/ovo.png';
import linkAjaIcon from '../assets/linkaja.png';
import danaIcon from '../assets/dana.png';
import goPayIcon from '../assets/gopay.png';

import maskot from "../assets/maskot4.png"; // Gambar maskot error
import maskot1 from "../assets/maskot1.png"; // Gambar maskot error
import suksestf from "../assets/maskot7.png"; // Gambar maskot sukses

const paymentMethods = [
  { id: 'bni', label: 'BNI', icon: bniIcon },
  { id: 'bca', label: 'BCA', icon: bcaIcon },
  { id: 'shopeePay', label: 'ShopeePay', icon: shopeePayIcon },
  { id: 'ovo', label: 'OVO', icon: ovoIcon },
  { id: 'linkAja', label: 'LinkAja', icon: linkAjaIcon },
  { id: 'dana', label: 'DANA', icon: danaIcon },
  { id: 'goPay', label: 'GoPay', icon: goPayIcon },
];

function CoinTradeComponent() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    pekerjaan: '',
    noHp: '',
    alamat: '',
    jeniskelamin: '',
    tanggalLahir: '',
    poin: '',
  });

  const [showPopup, setShowPopup] = useState(false); // State untuk popup
  const [popupText, setPopupText] = useState(''); // Teks untuk popup
  const [imageUrl, setImageUrl] = useState(''); // URL gambar maskot

  useEffect(() => {
    const fetchData = async () => {
      const userId = localStorage.getItem('id'); // Ambil userId dari localStorage
      try {
        const response = await fetch(`http://localhost:5000/api/users/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setProfile((prevProfile) => ({
            ...prevProfile,
            ...data,
            avatar: data.gambar
              ? `http://localhost:5000/asset/${data.gambar}`
              : '',
          }));
        } else {
          console.error('Gagal memuat data pengguna');
        }
      } catch (error) {
        console.error('Kesalahan saat memuat data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSelect = (method) => {
    setSelectedMethod(method);
    setIsOpen(false);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (parseInt(value, 10) > parseInt(profile.poin, 10)) {
      // Menampilkan popup ketika jumlah poin melebihi yang dimiliki
      setPopupText('Jumlah poin tidak boleh melebihi poin yang Anda miliki');
      setImageUrl(maskot); // Ganti dengan URL gambar maskot error
      setShowPopup(true);
      return;
    }
    setAmount(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi input
    if (!selectedMethod || !accountNumber || !amount) {
      setPopupText('Mohon lengkapi semua field');
      setImageUrl(maskot1); // Gambar maskot error
      setShowPopup(true);
      return;
    }

    // Validasi jumlah poin
    if (parseInt(amount, 10) > parseInt(profile.poin, 10)) {
      setPopupText('Jumlah poin tidak boleh melebihi poin yang Anda miliki');
      setImageUrl(maskot); // Gambar maskot error
      setShowPopup(true);
      return;
    }

    try {
      // Kirim data ke backend
      const userId = localStorage.getItem('id');
      const response = await axios.post('http://localhost:5000/api/transactions', {
        userId,
        amount: parseInt(amount, 10),
        paymentMethod: selectedMethod.id,
        accountNumber,
      });

      // Update poin pengguna secara dinamis
      const updatedPoin = profile.poin - parseInt(amount, 10);
      setProfile((prevProfile) => ({
        ...prevProfile,
        poin: updatedPoin,
      }));

      setPopupText('Transaksi berhasil dibuat');
      setImageUrl(suksestf); // Gambar maskot sukses
      setShowPopup(true);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error saat mengirim data:', error);
      setPopupText('Terjadi kesalahan saat membuat transaksi');
      setImageUrl(maskot); // Gambar maskot error
      setShowPopup(true);
      alert('Terjadi kesalahan saat membuat transaksi');
    }
  };

    // Menutup popup
    const closePopup = () => {
      setShowPopup(false);
    };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto my-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Penukaran Poin</h1>
      <p className="text-center mb-4">Poin Anda: <span className="font-bold">{profile.poin}</span></p>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Metode</label>
          <div className="relative w-3/4">
            <div
              className="form-input border border-gray-300 rounded-lg p-2 bg-[#D9D9D9] flex justify-between items-center cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedMethod ? (
                <div className="flex items-center space-x-2">
                  <img
                    src={selectedMethod.icon}
                    alt={selectedMethod.label}
                    className="w-15 h-6"
                  />
                  <span>{selectedMethod.label}</span>
                </div>
              ) : (
                <span className="text-gray-500">Pilih Metode</span>
              )}
              <i
                className={`fas fa-chevron-${isOpen ? 'up' : 'down'} text-gray-600`}
              ></i>
            </div>
            {isOpen && (
              <div className="absolute z-10 w-full bg-white shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="flex items-center space-x-2 p-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(method)}
                  >
                    <img
                      src={method.icon}
                      alt={method.label}
                      className="w-15 h-6"
                    />
                    <span>{method.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Nomer Rekening</label>
          <input
            type="text"
            className="form-input w-3/4 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]"
            placeholder="Masukan Nomer Rekening Tujuan"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Jumlah</label>
          <input
            type="number"
            className="form-input w-3/4 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]"
            placeholder="0"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#EE9F26] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Tukar
          </button>
        </div>
      </form>
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
  );
}

export default CoinTradeComponent;
