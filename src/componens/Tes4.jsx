import React, { useEffect, useState } from 'react';
import Image from '../assets/keqing.webp';
import Image2 from '../assets/icon.ico';


function ProfileComponent() {
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
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
              : '/default-avatar.png',
          }));
        }
      } catch (error) {
        console.error('Kesalahan saat memuat data pengguna:', error);
      }
    };

    const fetchTransactions = async () => {
      const userId = localStorage.getItem('id');
      try {
        const response = await fetch(`http://localhost:5000/api/transactions/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setTransactions(data.data);
        }
      } catch (error) {
        console.error('Kesalahan saat memuat riwayat transaksi:', error);
      }
    };

    const simulateLoading = () =>
      new Promise((resolve) => setTimeout(resolve, 5000)); // Loading delay 2 detik

    const loadAllData = async () => {
      await Promise.all([fetchData(), fetchTransactions(), simulateLoading()]);
      setIsLoading(false);
    };

    loadAllData();
  }, []);

  // Animasi loading dengan gambar berkedip
  const LoadingAnimation = () => (
    <div className="flex justify-center items-center h-screen bg-[#fffbfb]">
      <img
        src={Image2} // Path gambar berkedip
        alt="Loading"
        className="w-200 h-200 animate-blink" // Gunakan animasi 'animate-blink'
      />
    </div>
  );

  return (
    <div>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div className="bg-[#D9D9D9] p-6 min-h-screen w-full flex flex-col items-center mt-24">
          <div className="w-full max-w-5xl">
            <h1 className="text-2xl font-bold mb-4 text-center">Detail Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={profile.avatar}
                alt="Profile Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h2 className="text-lg font-semibold text-center">{profile.nama}</h2>
              <p className="text-center text-gray-700">{profile.email}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-lg font-semibold mb-2 text-center">Riwayat Ekstraksi</h2>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="px-2 py-2">ID</th>
                    <th className="px-2 py-2">Waktu</th>
                    <th className="px-2 py-2">Jumlah</th>
                    <th className="px-2 py-2">Metode Pembayaran</th>
                    <th className="px-2 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.length > 0 ? (
                    transactions.map((txn) => (
                      <tr key={txn.id}>
                        <td className="px-4 py-2">{txn.id}</td>
                        <td className="px-4 py-2">
                          {new Date(txn.transaction_time).toLocaleString()}
                        </td>
                        <td className="px-4 py-2">{txn.amount}</td>
                        <td className="px-4 py-2">{txn.payment_method}</td>
                        <td className="px-4 py-2">{txn.transaction_status}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-4">
                        Tidak ada riwayat transaksi.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileComponent;
