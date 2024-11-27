import React, { useState } from 'react';
import bniIcon from '../assets/bni.png';
import bcaIcon from '../assets/bca.png';
import shopeePayIcon from '../assets/shope.png';
import ovoIcon from '../assets/ovo.png';
import linkAjaIcon from '../assets/linkaja.png';
import danaIcon from '../assets/dana.png';
import goPayIcon from '../assets/gopay.png';

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
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (method) => {
    setSelectedMethod(method);
    setIsOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto my-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Penukaran Poin</h1>
      <form className="space-y-6">
        {/* Dropdown Kustom */}
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
                    className="w-6 h-6"
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
                      className="w-6 h-6"
                    />
                    <span>{method.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Input Nomer Rekening */}
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Nomer Rekening</label>
          <input
            type="text"
            className="form-input w-3/4 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]"
            placeholder="Masukan Nomer Rekening Tujuan"
          />
        </div>

        {/* Input Jumlah */}
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Jumlah</label>
          <div className="w-3/4 flex space-x-4">
            <input
              type="number"
              className="w-1/2 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]"
              placeholder="0"
            />
            <input
              type="text"
              className="w-1/2 border border-gray-300 rounded-lg p-2 opacity-50 bg-[#D9D9D9]"
              placeholder="Rp0"
              readOnly
            />
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#EE9F26] text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Tukar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CoinTradeComponent;
