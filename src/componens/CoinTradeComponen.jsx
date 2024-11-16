import React from 'react';


function CoinTradeComponen() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto my-20">
      <h1 className="text-2xl font-bold mb-6 text-center">Penukaran Poin</h1>
      <form className="space-y-6">
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Metode</label>
          <select className="w-3/4 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]" placeholder="Pilih Metode">
            <option value="">Pilih Metode</option>
            <option value="metode1">Metode 1</option>
            <option value="metode2">Metode 2</option>
            <option value="metode3">Metode 3</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-4">
          <label className="w-1/4 text-gray-700 font-bold">Nomer Rekening</label>
          <input
            type="text"
            className="w-3/4 border border-gray-300 rounded-lg p-2 bg-[#D9D9D9]"
            placeholder="Masukan Nomer Rekening Tujuan"
          />
        </div>
        
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

export default CoinTradeComponen;
