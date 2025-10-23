import { motion } from 'framer-motion';

const Formulir = () => {
  const forms = [
    { name: 'Form Pengajuan', icon: '📝', path: '/form-pengajuan' },
    { name: 'Keterangan Kejandaan', icon: '👤', path: '/keterangan-kejandaan' },
    { name: 'Riwayat Hidup Singkat', icon: '📋', path: '/riwayat-hidup' },
    { name: 'Form Biaya Pengangkutan', icon: '💰', path: '/biaya-pengangkutan' },
    { name: 'Keterangan Anak Tidak/Belum Menikah', icon: '👨‍👩‍👧', path: '/keterangan-anak' },
    { name: 'Keterangan Ahli Waris', icon: '📄', path: '/keterangan-ahli-waris' },
    { name: 'Laporan Kecelakaan Kerja', icon: '⚠️', path: '/laporan-kecelakaan' },
    { name: 'Keterangan Medis', icon: '🏥', path: '/keterangan-medis' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-asabri-light to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-asabri-navy mb-4">Formulir</h1>
          <p className="text-gray-600 text-lg">
            Asabri / Formulir / <span className="text-asabri-gold font-semibold">Formulir Pelayanan</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {forms.map((form, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-asabri-navy text-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{form.icon}</div>
              <h3 className="text-lg font-semibold">{form.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Formulir;