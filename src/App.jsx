import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Formulir from './pages/Formulir';
import ProfilPerusahaan from './pages/ProfilPerusahaan';
import Publikasi from './pages/Publikasi';
import FAQ from './pages/FAQ';
import Pengaduan from './pages/Pengaduan';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulir" element={<Formulir />} />
            <Route path="/profil" element={<ProfilPerusahaan />} />
            <Route path="/publikasi" element={<Publikasi />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/pengaduan" element={<Pengaduan />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;