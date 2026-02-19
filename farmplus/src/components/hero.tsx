import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>Smart Farming. Simple Decisions</h1>

        <div className="search-box">
          <input
            type="text"
            placeholder="Enter your location for personalized insights"
          />
          <button>Search</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
    