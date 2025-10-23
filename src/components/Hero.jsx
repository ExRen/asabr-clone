import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative pt-20 bg-gradient-to-br from-asabri-blue via-asabri-navy to-asabri-dark overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-asabri-gold rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-asabri-gold to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-asabri-gold to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10"
          >
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-asabri-blue font-bold text-lg">A</span>
              </div>
              <span className="text-lg font-semibold">PT ASABRI (Persero)</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Sahabat Perjuangan Anda
              <br />
              <span className="text-asabri-gold">Sepanjang Masa</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl"
            >
              Memberikan perlindungan dan kesejahteraan terbaik untuk keluarga TNI dan Polri Indonesia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group bg-asabri-gold text-asabri-navy px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 hover:scale-105">
                <span>Kunjungi Halaman</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300">
                Pelajari Lebih Lanjut
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {[
                { value: '50+', label: 'Tahun Pengalaman' },
                { value: '1M+', label: 'Peserta Aktif' },
                { value: '24/7', label: 'Layanan' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-asabri-gold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-asabri-gold to-yellow-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-gray-200 to-gray-300">
                  {/* Placeholder untuk gambar team */}
                  <div className="flex items-center justify-center bg-gradient-to-br from-asabri-light to-white">
                    <div className="text-center p-8">
                      <div className="text-6xl mb-4">👥</div>
                      <p className="text-asabri-navy font-semibold">Tim ASABRI Profesional</p>
                      <p className="text-gray-600 text-sm mt-2">Siap Melayani Anda</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-asabri-navy/50 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-bold text-asabri-navy">Terpercaya</p>
                    <p className="text-sm text-gray-600">BUMN Terbaik 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-white/70">
          <span className="text-sm">Scroll untuk info lebih lanjut</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/70 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;