import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import HeroSection from './components/HeroSection';
import Features from './components/features';
import MarketTrends from './components/MarketTrends';
import KnowledgeHub from './components/KnowledgeHub';
import CTABanner from './components/CTABanner';
import MarketDashboard from './pages/MarketDashboard';

// Home page layout
function Home() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/market" element={<MarketDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;