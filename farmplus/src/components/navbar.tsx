import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Farm+</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Soil Health</li>
        <li>Bidding</li>
        <li>Government Schemes</li>
        <li>Knowledge Hub</li>
      </ul>

      <div className="auth">
        <span>Login</span>
        <span>Sign Up</span>
      </div>
    </nav>
  );
}

export default Navbar;
