    import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Tentang Kami': [
      { name: 'Profil Perusahaan', path: '/profil' },
      { name: 'Visi & Misi', path: '/visi-misi' },
      { name: 'Sejarah', path: '/sejarah' },
      { name: 'Struktur Organisasi', path: '/struktur' },
    ],
    'Layanan': [
      { name: 'Formulir Pelayanan', path: '/formulir' },
      { name: 'Pengaduan', path: '/pengaduan' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Contact Center', path: '/contact' },
    ],
    'Informasi': [
      { name: 'Berita', path: '/berita' },
      { name: 'Publikasi', path: '/publikasi' },
      { name: 'Produk Hukum', path: '/hukum' },
      { name: 'Tata Kelola', path: '/tata-kelola' },
    ],
  };

  const socialMedia = [
    { name: 'Facebook', icon: <FaFacebook />, url: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#', color: 'hover:text-sky-500' },
    { name: 'Instagram', icon: <FaInstagram />, url: '#', color: 'hover:text-pink-600' },
    { name: 'YouTube', icon: <FaYoutube />, url: '#', color: 'hover:text-red-600' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className="bg-gradient-to from-asabri-navy to-asabri-blue text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg font-bold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="hover:text-asabri-gold transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/30 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {socialMedia.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`text-white ${social.color} transition-colors`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="flex space-x-4 text-sm">
              <span className="flex items-center">
                <FaPhone className="mr-1" /> 15000-43
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-1" /> info@asabri.co.id
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-1" /> Jakarta, Indonesia
              </span>
            </div>
          </div>
          <p className="text-center mt-4 text-xs">
            &copy; {currentYear} PT ASABRI (Persero). All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
    