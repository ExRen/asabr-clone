import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ContactCenter = () => {
  const contacts = [
    { 
      type: 'Call Center Utama', 
      number: '15000-43', 
      icon: <FaPhone className="text-2xl" />,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      type: 'WhatsApp 1', 
      number: '0812-8237-1516', 
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      type: 'WhatsApp 2', 
      number: '0812-8237-1519', 
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      type: 'WhatsApp 3', 
      number: '0811-7422-133', 
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      type: 'WhatsApp 4', 
      number: '021-1971-0801', 
      icon: <FaWhatsapp className="text-2xl" />,
      color: 'from-green-500 to-green-600'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-asabri-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-asabri-blue via-asabri-navy to-asabri-dark rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side */}
            <div className="p-8 md:p-12 text-white relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="inline-block bg-asabri-gold text-asabri-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  📞 Hubungi Kami
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Contact Center
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Kami siap melayani Anda 24/7 untuk memberikan informasi dan bantuan terbaik
                </p>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <FaClock className="text-2xl text-asabri-gold" />
                    <div>
                      <p className="font-semibold">Jam Operasional</p>
                      <p className="text-sm text-gray-300">24 Jam / 7 Hari</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                    <FaMapMarkerAlt className="text-2xl text-asabri-gold" />
                    <div>
                      <p className="font-semibold">Kantor Pusat</p>
                      <p className="text-sm text-gray-300">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="mt-8 flex justify-center">
                  <div className="text-8xl opacity-20">
                    📱
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Contact Numbers */}
            <div className="p-8 md:p-12 bg-white/5 backdrop-blur-sm">
              <div className="space-y-4">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-white rounded-xl p-5 flex items-center space-x-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${contact.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                      {contact.icon}
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm text-gray-600 font-medium">{contact.type}</p>
                      <p className="text-xl font-bold text-asabri-blue">{contact.number}</p>
                    </div>
                    <div className="text-gray-400">
                      →
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-6 p-4 bg-asabri-gold/10 border border-asabri-gold/30 rounded-xl"
              >
                <p className="text-white text-sm text-center">
                  💡 <strong>Tips:</strong> Siapkan nomor peserta Anda untuk pelayanan lebih cepat
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCenter;