import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "15px", color: "#fff" }}>
      <ul style={{ listStyle: "none", display: "flex", gap: "20px" }}>
        <li><Link to="/" style={{ color: "#fff" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "#fff" }}>About</Link></li>
        <li><Link to="/services" style={{ color: "#fff" }}>Services</Link></li>
        <li><Link to="/contact" style={{ color: "#fff" }}>Contact</Link></li>
      </ul>
    </nav>
  );
}