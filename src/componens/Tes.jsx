import React, { useEffect, useState, useRef } from 'react';
import avatar from '../assets/keqing.webp';
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

function ProfileComponen() {
  const [profile, setProfile] = useState({ nama: '', email: '', avatar: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(avatar);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const nama = localStorage.getItem('nama') || 'Guest';
    const email = localStorage.getItem('email') || 'email@example.com';
    const avatarPath = localStorage.getItem('avatar') || '';
    setProfile({ nama, email, avatar: avatarPath });

    if (avatarPath) {
      setSelectedImage(`http://localhost:5000${avatarPath}`);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleEditClick = () => setIsEditing(true);

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
        throw new Error(`Failed to save data: ${response.status} ${response.statusText}`);
      }

      console.log('Data saved successfully');
      localStorage.setItem('nama', profile.nama);
      localStorage.setItem('email', profile.email);
      localStorage.setItem('avatar', profile.avatar);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload image');
        }

        const data = await response.json();
        const imageUrl = `http://localhost:5000/${data.filepath}`;
        setSelectedImage(imageUrl);
        setProfile((prevProfile) => ({ ...prevProfile, avatar: data.filepath }));
      } catch (error) {
        console.error('Error:', error.message);
        console.log(data.filepath)
      }
    }
  };

  return (
    <div className="bg-[#D9D9D9] p-6 min-h-screen w-full flex flex-col items-center mt-24">
      <div className="w-full max-w-5xl">
        <h1 className="text-2xl font-bold mb-4 text-center">Detail Profile</h1>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Profile Card */}
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src={selectedImage}
              alt="Profile"
              className="w-16 h-16 rounded-full mb-4 cursor-pointer"
              onClick={handleImageClick}
            />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <div className="text-center">
              <div className="text-xl font-bold">{profile.nama}</div>
              <div className="text-gray-600">Petani Bawang</div>
            </div>
          </div>

          {/* Editable Details */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            {['Nama Lengkap', 'Pekerjaan', 'No HP', 'Alamat'].map((label, idx) => (
              <React.Fragment key={label}>
                <div className="flex justify-between mb-2">
                  <strong>{label}:</strong>
                  {idx === 0 && isEditing ? (
                    <input
                      type="text"
                      name="nama"
                      value={profile.nama}
                      onChange={handleInputChange}
                      className="border px-2 py-1"
                    />
                  ) : (
                    <span>{idx === 0 ? profile.nama : '—'}</span>
                  )}
                </div>
                <hr className="my-2 border-gray-300" />
              </React.Fragment>
            ))}
            <div className="flex justify-end">
              {isEditing ? (
                <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={handleEditClick}>
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Personal Info */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {[icon1, icon2, icon3].map((icon, idx) => (
              <div className="flex items-center mb-5" key={idx}>
                <img src={icon} alt="Icon" className="w-5 h-5 mr-2" />
                <span>Detail Info</span>
              </div>
            ))}
          </div>

          {/* Extraction History */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-2 text-center">Riwayat Ekstraksi</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="px-2 py-2">ID</th>
                  <th className="px-2 py-2">Waktu</th>
                  <th className="px-2 py-2">Jumlah</th>
                  <th className="px-2 py-2">Poin</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">1B3</td>
                  <td className="px-4 py-2">26-11-2024 19:11:12</td>
                  <td className="px-4 py-2">1000 kg</td>
                  <td className="px-4 py-2">1000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Points */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src={coin} alt="Coin Icon" className="w-10 h-10 mb-2" />
            <h2 className="text-lg font-semibold mb-2">Poin Anda</h2>
          </div>
        </div>

        <CoinTradeComponen />

        {/* Exchange Section */}
        <div className="mt-8 bg-gray-100 p-10 max-w-6xl w-full rounded-lg mb-20">
          <h2 className="text-xl font-bold mb-4 text-center">Penukaran</h2>
          {[bniIcon, bcaIcon, shopeePayIcon, ovoIcon, linkAjaIcon, danaIcon, goPayIcon].map((icon, idx) => (
            <img key={idx} src={icon} alt={`Option ${idx}`} className="w-26 h-16 mx-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileComponen;
