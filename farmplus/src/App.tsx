import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import MarketTrends from './components/MarketTrends';
import KnowledgeHub from './components/KnowledgeHub';
import CTABanner from './components/CTABanner';
import MarketDashboard from './pages/MarketDashboard';
import GovernmentSchemes from './pages/GovernmentSchemes';

const Home = () => (
  <>
    <HeroSection />
    <div className="page-body">
      <Features />
      <MarketTrends />
      <KnowledgeHub />
    </div>
    <CTABanner />
    <div className="bottom-band" />
  </>
);

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketDashboard />} />
        <Route path="/government-schemes" element={<GovernmentSchemes />} />
      </Routes>
    </div>
  );
}

export default App;