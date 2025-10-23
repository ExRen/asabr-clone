import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'ASABRI Raih Juara 1 Lomba Inovasi Pelayanan Publik Tahun 2024',
      excerpt: 'Prestasi membanggakan dalam meningkatkan kualitas pelayanan kepada peserta',
      date: '15 Oktober 2024',
      category: 'Penghargaan',
      image: '🏆',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      id: 2,
      title: 'Launching Aplikasi Mobile ASABRI untuk Kemudahan Peserta',
      excerpt: 'Akses layanan ASABRI kini lebih mudah melalui smartphone Anda',
      date: '10 Oktober 2024',
      category: 'Teknologi',
      image: '📱',
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Program Edukasi Literasi Keuangan untuk Keluarga TNI-Polri',
      excerpt: 'Meningkatkan pemahaman pengelolaan keuangan yang sehat dan berkelanjutan',
      date: '5 Oktober 2024',
      category: 'Program',
      image: '📚',
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
      title: 'ASABRI Gelar Sosialisasi Manfaat Pensiun di Seluruh Indonesia',
      excerpt: 'Memberikan pemahaman komprehensif tentang hak dan manfaat peserta',
      date: '1 Oktober 2024',
      category: 'Sosialisasi',
      image: '🎤',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-asabri-light px-4 py-2 rounded-full text-asabri-blue font-semibold mb-4">
            📰 Berita Terkini
          </div>
          <h2 className="text-4xl font-bold text-asabri-navy mb-4">Berita Utama</h2>
          <p className="text-gray-600 text-lg">Informasi terbaru dan terkini dari ASABRI</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ 
            delay: 5000,
            disableOnInteraction: false 
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-12"
        >
          {news.map((item, index) => (
            <SwiperSlide key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
              >
                {/* Image/Icon Header */}
                <div className={`relative h-48 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                  <div className="text-8xl">{item.image}</div>
                  <span className="absolute top-4 left-4 bg-white text-asabri-navy px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {item.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-3">
                    <FaCalendarAlt />
                    <span>{item.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-asabri-navy mb-3 line-clamp-2 min-h-[3.5rem]">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {item.excerpt}
                  </p>

                  <button className="flex items-center space-x-2 text-asabri-blue font-semibold hover:text-asabri-navy transition-colors group">
                    <span>Baca Selengkapnya</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <button className="btn-secondary">
            Lihat Semua Berita
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;