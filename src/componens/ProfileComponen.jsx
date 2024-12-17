import React, { useEffect, useState } from 'react';
import icon1 from '../assets/ppemail.png';
import icon2 from '../assets/ppkelamin.png';
import icon3 from '../assets/ppulang.png';
import coin from '../assets/coin.png';


import CoinTradeComponen from './CoinTradeComponen';
import bniIcon from '../assets/bni.png';
import bcaIcon from '../assets/bca.png';
import shopeePayIcon from '../assets/shope.png';
import ovoIcon from '../assets/ovo.png';
import linkAjaIcon from '../assets/linkaja.png';
import danaIcon from '../assets/dana.png';
import goPayIcon from '../assets/gopay.png';

import Image from '../assets/Profile_icon.png';

import NavbarComponen from './NavbarComponen';
import Footer from './FooterComponen';
import LoadingAnimation from './LoadingAnimation';


  

function ProfileComponen() {
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
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [transactions, setTransactions] = useState([]); // State untuk riwayat transaksi
  const [isLoading, setIsLoading] = useState(true); // State untuk loading



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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleEditClick = () => setIsEditing(true);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch(
          `http://localhost:5000/api/upload-avatar/${localStorage.getItem('id')}`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`Gagal mengunggah avatar: ${response.statusText}`);
        }

        const data = await response.json();
        setProfile((prevProfile) => ({
          ...prevProfile,
          avatar: data.avatarUrl,
        }));
        localStorage.setItem('avatar', data.avatarUrl);
      } catch (error) {
        console.error('Error uploading avatar:', error.message);
      }
    }
  };


  const handleSaveClick = async () => {
    setIsEditing(false);
    try {
      const response = await fetch(
        `http://localhost:5000/api/books/${localStorage.getItem('id')}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(profile),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Gagal menyimpan data: ${response.status} ${response.statusText}`
        );
      }

      console.log('Data berhasil disimpan');
      Object.entries(profile).forEach(([key, value]) => {
        localStorage.setItem(key, value);
      });
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(profile.alamat);
  };

  const handleImageClick = () => {
    setIsModalOpen(true); // Membuka modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Menutup modal
  };



  const handleTransaction = async (amount) => {
    if (amount > profile.poin) {
      alert('Poin tidak cukup untuk melakukan transaksi.');
      return;
    }
  
    const updatedPoin = profile.poin - amount;
  
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${localStorage.getItem('id')}`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ poin: updatedPoin }),
        }
      );
  
      if (!response.ok) {
        throw new Error('Gagal mengupdate poin pengguna');
      }
  
      // Jika berhasil, perbarui state profile
      setProfile((prevProfile) => ({
        ...prevProfile,
        poin: updatedPoin,
      }));
  
      alert(`Transaksi berhasil! Poin Anda sekarang: ${updatedPoin}`);
    } catch (error) {
      console.error('Kesalahan saat melakukan transaksi:', error);
      alert('Terjadi kesalahan saat melakukan transaksi.');
    }
  };

    // logika poin
    let poin = profile.poin;
    let nilaiRupiah = poin * 1000;
    console.log(profile.poin)

     // Refresh poin setiap detik
  useEffect(() => {
    const interval = setInterval(() => {
      const fetchPoin = async () => {
        const userId = localStorage.getItem('id');
        try {
          const response = await fetch(`http://localhost:5000/api/users/${userId}`);
          if (response.ok) {
            const data = await response.json();
            setProfile((prevProfile) => ({
              ...prevProfile,
              poin: data.poin,
            }));
            setNilaiRupiah(data.poin * 1000); // Perbarui nilai konversi Rupiah
          } else {
            console.error('Gagal memuat poin');
          }
        } catch (error) {
          console.error('Kesalahan saat memuat poin:', error);
        }
      };
      fetchPoin();
    }, 1000);

    return () => clearInterval(interval); // Membersihkan interval saat komponen dilepas
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 2 detik

    return () => clearTimeout(timer);
  }, []);




  return (
    <div>
    {isLoading ? (
      <LoadingAnimation size="150px" bgColor="#f0f0f0" />
    ) : (    
    <>
    <NavbarComponen />
    <div className="bg-[#D9D9D9] p-6 min-h-screen w-full flex flex-col items-center mt-24">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Detail Profile</h1>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Profile Card */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
          <label htmlFor="avatarUpload" className="cursor-pointer">
              <img
                src={profile.avatar || '/default-avatar.png'} // Pastikan jika avatar kosong, menggunakan gambar default
                alt="Profile"
                className="w-16 h-16 rounded-full mb-4"
                onClick={handleImageClick}
              />
            </label>

            {isEditing && (
              <input
                id="avatarUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            )}
            <div className="text-center">
              <div className="text-xl font-bold">{profile.nama}</div>
              <div className="text-gray-600">{profile.pekerjaan}</div>
            </div>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={closeModal} // Menutup modal ketika klik di luar gambar
            >
              <div
                className="bg-white p-4 rounded-lg relative"
                onClick={(e) => e.stopPropagation()} // Mencegah event klik pada modal menutup modal
              >
                <img
                  src={profile.avatar || avatarPlaceholder}
                  alt="Profile Full"
                  className="max-w-full max-h-[80vh] rounded-lg"
                />
                <button
                  className="absolute top-2 right-2 text-red-500 text-xl"
                  onClick={closeModal}
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Editable Details */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <div className="flex justify-between mb-2">
                <strong>Nama Lengkap:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    name="nama"
                    value={profile.nama}
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  <span>{profile.nama}</span>
                )}
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-between mb-2">
                <strong>Pekerjaan:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    name="pekerjaan"
                    value={profile.pekerjaan} 
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  <span>{profile.pekerjaan}</span>
                )}
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-between mb-2">
                <strong>No HP:</strong>
                {isEditing ? (
                  <input
                    type="number"
                    name="noHp"
                    value={profile.noHp} 
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  <span>{profile.noHp}</span>
                )}
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-between mb-2">
                <strong>Alamat:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    name="alamat"
                    value={profile.alamat} 
                    onChange={handleInputChange}
                    className="border px-2 py-1"
                  />
                ) : (
                  <span>{profile.alamat}</span>
                )}
              </div>
              <hr className="my-2 border-gray-300" />
              <div className="flex justify-end">
                {isEditing ? (
                  <button
                    className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={handleSaveClick}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handleEditClick}
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Personal Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div>
              <div className="flex items-center mb-5">
                <img src={icon1} alt="Email Icon" className="w-5 h-5 mr-2" />
                <strong>Email:</strong>
                <span className="ml-3">{profile.email}</span>
              </div>
              <div className="flex items-center mb-5">
                <img src={icon2} alt="Gender Icon" className="w-5 h-5 mr-2" />
                <strong>Kelamin:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    name="jeniskelamin"
                    value={profile.jeniskelamin} 
                    onChange={handleInputChange}
                    className="border px-0.5 py-1"
                  />
                ) : (
                  <span className="ml-3">{profile.jeniskelamin}</span>
                )}
              </div>
              <div className="flex items-center mb-5">
                <img src={icon3} alt="Birthdate Icon" className="w-5 h-5 mr-2" />
                <strong>Tanggal Lahir:</strong>
                {isEditing ? (
                  <input
                    type="text"
                    name="tanggalLahir"
                    value={profile.tanggalLahir} 
                    onChange={handleInputChange}
                    className="border px-0.5 py-1"
                  />
                ) : (
                  <span className="ml-2">{profile.tanggalLahir}</span>
                )}
              </div>
            </div>
          </div>

          {/* Extraction History */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2 text-center">
              Riwayat Ekstraksi
            </h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-2 py-2">ID</th>
                  <th className="px-2 py-2">Waktu</th>
                  <th className="px-2 py-2">Poin</th>
                  <th className="px-2 py-2">Hasil</th>
                </tr>
              </thead>
              <tbody>
                 {transactions.length > 0 ? (
                  transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="px-2 py-2 border">{transaction.id}</td>
                      <td className="px-2 py-2 border">
                        {new Date(transaction.transaction_time).toLocaleString()}
                      </td>
                      <td className="px-2 py-2 border">{transaction.amount}</td>
                      <td className="px-2 py-2 border">{transaction.transaction_status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-2 border text-center" colSpan="4">
                      Tidak ada riwayat transaksi
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Points */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="flex flex-col items-center">
                <img src={coin} alt="Coin Icon" className="w-10 h-10 mb-2" />
                <h2 className="text-lg font-semibold mb-2">Poin Anda</h2>
            </div>
            
            <div className="text-center">
                <span>{profile.poin || 0}</span> = <span className="opacity-50">Rp{nilaiRupiah}</span>
            </div>
          </div>
        </div>

        <CoinTradeComponen />

        {/* Exchange Section */}
        <div className="mt-8 bg-gray-100 p-10 max-w-6xl w-full rounded-lg mb-20">
          <h2 className="text-xl font-bold mb-4 text-center">Penukaran</h2>
          <div className="grid grid-cols-4 gap-4">
            <img src={bniIcon} alt="BNI" className="w-26 h-16 mx-auto" />
            <img src={bcaIcon} alt="BCA" className="w-26 h-16 mx-auto" />
            <img src={shopeePayIcon} alt="ShopeePay" className="w-26 h-16 mx-auto" />
            <img src={ovoIcon} alt="OVO" className="w-26 h-16 mx-auto" />
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10">
            <img src={linkAjaIcon} alt="LinkAja" className="w-26 h-16 mx-auto" />
            <img src={danaIcon} alt="DANA" className="w-26 h-16 mx-auto" />
            <img src={goPayIcon} alt="GoPay" className="w-26 h-16 mx-auto" />
          </div>
        </div>

      </div>
    </div>
    <Footer />
    </>
    )}
    </div>
  );
}

export default ProfileComponen;

