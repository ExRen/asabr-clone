import { motion } from 'framer-motion';

const PartnerSection = () => {
  const partners = [
    { name: 'Bank Mandiri', logo: '🏦' },
    { name: 'BRI', logo: '🏧' },
    { name: 'BNI', logo: '💳' },
    { name: 'BTN', logo: '🏠' },
    { name: 'Bank Syariah', logo: '🕌' },
    { name: 'Asuransi', logo: '🛡️' },
    { name: 'Rumah Sakit', logo: '🏥' },
    { name: 'Universitas', logo: '🎓' },
    { name: 'Vendor IT', logo: '💻' },
    { name: 'Konsultan', logo: '📊' },
    { name: 'Developer', logo: '🏗️' },
    { name: 'Media Partner', logo: '📺' },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-asabri-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-asabri-navy mb-4">Mitra Kerja Pembayaran</h2>
          <p className="text-gray-600 text-lg">Bekerja sama dengan institusi terpercaya</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <div className="text-4xl mb-2 group-hover:scale-125 transition-transform">
                {partner.logo}
              </div>
              <p className="text-xs font-semibold text-gray-700 text-center">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;