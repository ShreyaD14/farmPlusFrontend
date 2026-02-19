import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import MarketTrends from './components/MarketTrends';
import KnowledgeHub from './components/KnowledgeHub';
import CTABanner from './components/CTABanner';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <HeroSection />
      <div className="page-body">
        <Features />
        <MarketTrends />
        <KnowledgeHub />
      </div>
      <CTABanner />
      <div className="bottom-band" />
    </div>
  );
}

export default App;