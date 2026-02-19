import { FaSeedling, FaChartLine, FaBell } from "react-icons/fa";
import { GiCow } from "react-icons/gi";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="card">
      <span className="icon"><FaSeedling size={50} /></span>
        <h3>Crop Intelligence</h3>
        <p>Real-time weather updates.</p>
      </div>

      <div className="card">
       <span className="icon"><GiCow size={50} /></span>
        <h3>Livestock Health</h3>
        <p>Status: Healthy (AI-Assisted)</p>
        <p>Preventive Care: Calcium Boost</p>
      </div>

      <div className="card">
       <span className="icon"><FaChartLine size={50} /></span>
        <h3>Market Trends</h3>
        <p>Track live prices.</p>
        <p>Trend: Stable - Calcium Boost</p>
      </div>

      <div className="card">
     <span className="icon"><FaBell size={50} /></span>
        <h3>Alerts & Decisions</h3>
        <p>Consult Vet for Cow #B45</p>
      </div>
    </section>
  );
};

export default Features;
