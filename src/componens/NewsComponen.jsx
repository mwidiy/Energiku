import React from 'react';
import Image from '../assets/news1.png';
import Image1 from '../assets/news2.png';
import Image2 from '../assets/news3.png';
import Image3 from '../assets/news4.png';
import Image4 from '../assets/news5.png';
import Image5 from '../assets/yt-logo.png';

const NewsComponent = () => {
  const newsCategories = [
    { id: 1, imageUrl: Image, width: '600px', height: '650px' },
    { id: 2, imageUrl: Image1, width: '600px', height: '300px' },
    { id: 3, imageUrl: Image2, width: '600px', height: '315px' },
    { id: 4, imageUrl: Image3, width: '600px', height: '310px' },
    { id: 5, imageUrl: Image4, width: '600px', height: '310px' },
  ];

  const videoSections = [
    {
      title: 'Energi Terbarukan',
      videos: [
        { title: 'ENERGI BIOMASSA', url: 'https://youtu.be/QWaqWD-brKs?si=jg1D1d5J5QgHEu8K' },
        { title: 'KENALAN DENGAN BIOENERGI', url: 'https://youtu.be/f3xMVRqBsSo?si=HW2Vvoob4MXE3K3-' },
        { title: 'Energi Air - PLTA CIRATA', url: 'https://youtu.be/x-NPJYcrt84?si=LmsaeUonOGd-cesv' },
      ],
    },
    {
      title: 'Proses',
      videos: [
        { title: 'Mengolah Kotoran Sapi Menjadi Biogas', url: 'https://youtu.be/4LHToVN9m_o?si=e2Za5R5q8witj_aP' },
        { title: 'PLTBm (Tenaga Biomassa)', url: 'https://youtu.be/mEzqsXGvpKs?si=Gkq7rfsrQ32Ul2nR' },
        { title: 'BIOGAS DIGESTER', url: 'https://youtu.be/LRbMQPp0yP4?si=3NLEsz2qscQiV4I1' },
      ],
    },
    {
      title: 'Kisah Penghasil Limbah',
      videos: [
        { title: 'Peluang Berkah dari Limbah Pelepah', url: 'https://youtu.be/LWSfxHUgec4?si=qfSQ-lUp7QCZuKeK' },
        { title: 'Pupuk Bio Organik dari Limbah', url: 'https://youtu.be/kbi3J3kJekw?si=6IjvIMzhtQq1cPXw' },
        { title: 'Guru Ubah Limbah Tahu Jadi Pupuk', url: 'https://youtu.be/712Q_uSAp8g?si=ZT0ZY3HyvWjJOly5' },
      ],
    },
  ];

  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <div className="rounded-lg mx-[150px] mt-[200px]">
      <h2 className="text-2xl font-semibold mb-4 text-[#EE9F26]">Temukan Berita dan Artikel seputar Bio Energi disini</h2>
      <p className="text-gray-600 mb-4">
        Semua Artikel dan Berita Situs Telah Diperbarui Hari Ini dan Anda Dapat Menemukan Artikel dan Berita Anda dengan Cepat dan Tanpa Masalah
      </p>
      <div className="grid grid-cols-2 gap-2 justify-items-center">
        <div className="flex flex-col items-center">
          {newsCategories.slice(0, 2).map((category) => (
            <div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
            >
              <img
                src={category.imageUrl}
                alt={`Category ${category.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center">
          {newsCategories.slice(2).map((category) => (
            <div
              key={category.id}
              className="hover:opacity-80 rounded-lg p-2 cursor-pointer mb-4"
              style={{ width: category.width, height: category.height }}
            >
              <img
                src={category.imageUrl}
                alt={`Category ${category.id}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <a
        href="https://example.com"
        className="mb-4 text-center text-[#EE9F26] cursor-pointer mx-auto block"
        >
        Selengkapnya
      </a>



      <div className="p-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-yellow-500">Video Edukasi</h2>
        <p className="text-gray-600 mb-6">Kumpulan Video yang membahas tentang Bio Energi</p>
        {videoSections.map((section, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {section.videos.map((video, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:opacity-90 flex flex-col items-center"
                >
                  <iframe
                    width="100%"
                    height="200px"
                    src={`https://www.youtube.com/embed/${getVideoId(video.url)}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                  <div className="p-4 w-full">
                    <p className="text-black mb-2">{video.title}</p>
                    <img
                      src={Image5} // Logo YouTube
                      alt="YouTube logo"
                      className="w-12 h-12"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
