import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import MarketTrends from './components/MarketTrends';
import KnowledgeHubHome from './components/KnowledgeHub';
import CTABanner from './components/CTABanner';
import MarketDashboard from './pages/MarketDashboard';
import GovernmentSchemes from './pages/GovernmentSchemes';
import KnowledgeHubPage from './pages/Knowledgehub';

const Home = () => (
  <>
    <HeroSection />
    <div className="page-body">
      <Features />
      <MarketTrends />
      <KnowledgeHubHome />
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
        <Route path="/knowledge-hub" element={<KnowledgeHubPage />} />
      </Routes>
    </div>
  );
}

export default App;