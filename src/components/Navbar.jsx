import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="navbar">
      <Link to="/" className="logo cursor-target">நவீன்குமார்</Link>

      <div className="nav-right">

        <a href="https://www.linkedin.com/in/naveenkumar-arulraja/" target="_blank" rel="noreferrer noopener" className="cursor-target social-link social-link--linkedin">IN</a>
        <a href="https://github.com/naveen-the-coder" target="_blank" rel="noreferrer noopener" className="cursor-target social-link social-link--github">GH</a>
        <a href="https://x.com/__NAVEEN__007__" target="_blank" rel="noreferrer noopener" className="cursor-target social-link social-link--twitter">X</a>
        <a href="https://www.instagram.com/juzt_naveen/" target="_blank" rel="noreferrer noopener" className="cursor-target social-link social-link--instagram">IG</a>

        <a
          href="/Saravanan_S_AI-Engg_Resume.pdf"
          target="_blank"
          className="resume-btn cursor-target"
          onMouseEnter={() => setHovered('resume')}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === 'resume' ? 'சுயவிவரம்' : 'Resume'}
        </a>

        <Link
          to="/contact"
          className="contact-btn cursor-target"
          onMouseEnter={() => setHovered('contact')}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === 'contact' ? 'தொடர்பு' : 'Contact'}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;