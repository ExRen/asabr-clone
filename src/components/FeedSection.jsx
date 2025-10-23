import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const FeedSection = () => {
  const feeds = [
    {
      platform: 'Facebook',
      icon: <FaFacebook className="text-3xl" />,
      color: 'from-blue-600 to-blue-700',
      content: 'Update terbaru kegiatan ASABRI',
      followers: '50K+'
    },
    {
      platform: 'Twitter',
      icon: <FaTwitter className="text-3xl" />,
      color: 'from-sky-500 to-sky-600',
      content: 'Informasi real-time untuk Anda',
      followers: '30K+'
    },
    {
      platform: 'Instagram',
      icon: <FaInstagram className="text-3xl" />,
      color: 'from-pink-600 to-purple-600',
      content: 'Galeri foto dan video aktivitas',
      followers: '75K+'
    },
    {
      platform: 'YouTube',
      icon: <FaYoutube className="text-3xl" />,
      color: 'from-red-600 to-red-700',
      content: 'Video tutorial dan edukasi',
      followers: '25K+'
    }
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
          <h2 className="text-4xl font-bold text-asabri-navy mb-4">Feed Sosial Media</h2>
          <p className="text-gray-600 text-lg">Ikuti kami untuk update terbaru</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeds.map((feed, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${feed.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full`}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform">
                    {feed.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feed.platform}</h3>
                  <p className="text-sm text-white/90 mb-3">{feed.content}</p>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold">
                    {feed.followers} Followers
                  </div>
                  
                  {/* Placeholder for feed content */}
                  <div className="mt-4 w-full h-32 bg-white/10 rounded-lg flex items-center justify-center">
                    <span className="text-4xl opacity-50">📸</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedSection;