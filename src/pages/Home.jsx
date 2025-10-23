import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
import NewsSection from '../components/NewsSection';
import FeedSection from '../components/FeedSection';
import StakeholderSection from '../components/StakeholderSection';
import PartnerSection from '../components/PartnerSection';
import ContactCenter from '../components/ContactCenter';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServiceCards />
      <NewsSection />
      <FeedSection />
      <StakeholderSection />
      <PartnerSection />
      <ContactCenter />
    </div>
  );
};

export default Home;