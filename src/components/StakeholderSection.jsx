import { motion } from 'framer-motion';

const StakeholderSection = () => {
  const stakeholders = [
    { name: 'TNI AD', logo: '🎖️' },
    { name: 'TNI AL', logo: '⚓' },
    { name: 'TNI AU', logo: '✈️' },
    { name: 'POLRI', logo: '👮' },
    { name: 'Kemhan', logo: '🏛️' },
    { name: 'Veteran', logo: '🎗️' },
    { name: 'Kemenhan', logo: '🏢' },
    { name: 'BIN', logo: '🔒' },
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
          <h2 className="text-4xl font-bold text-asabri-navy mb-4">Stakeholder</h2>
          <p className="text-gray-600 text-lg">Mitra dan Pemangku Kepentingan ASABRI</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-asabri-light rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer group"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {stakeholder.logo}
              </div>
              <p className="text-sm font-semibold text-asabri-navy text-center">
                {stakeholder.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StakeholderSection;