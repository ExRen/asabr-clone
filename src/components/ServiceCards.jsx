import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaFileInvoice, FaBell } from 'react-icons/fa';

const ServiceCards = () => {
  const services = [
    {
      title: 'Formulir Pelayanan',
      description: 'Akses berbagai formulir untuk keperluan administrasi',
      icon: <FaFileAlt className="text-5xl" />,
      color: 'from-blue-600 to-blue-700',
      link: '/formulir',
      count: '8+ Formulir'
    },
    {
      title: 'Formulir Pajak',
      description: 'Download formulir perpajakan dengan mudah',
      icon: <FaFileInvoice className="text-5xl" />,
      color: 'from-blue-700 to-blue-800',
      link: '/formulir-pajak',
      count: 'Tersedia'
    },
    {
      title: 'Pengaduan Pelanggan',
      description: 'Sampaikan keluhan atau saran Anda kepada kami',
      icon: <FaBell className="text-5xl" />,
      color: 'from-blue-800 to-asabri-navy',
      link: '/pengaduan',
      count: 'Respon Cepat'
    }
  ];

  return (
    <section className="py-20 bg-asabri-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-asabri-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-asabri-navy rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-asabri-navy mb-4">Layanan Kami</h2>
          <p className="text-gray-600 text-lg">Kemudahan akses untuk semua kebutuhan Anda</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Link
                to={service.link}
                className={`block bg-gradient-to-br ${service.color} rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full -ml-12 -mb-12"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Badge */}
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold mb-4">
                    {service.count}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-100 mb-4">{service.description}</p>

                  {/* Arrow */}
                  <div className="flex items-center space-x-2 text-asabri-gold font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Akses Sekarang</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;