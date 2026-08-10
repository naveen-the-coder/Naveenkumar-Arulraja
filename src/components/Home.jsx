import "../styles/Home.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import profileImage from "../assets/Naveen-photo.jpg";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <section 
      className="home section"
      style={{
        backgroundImage: `url(${profileImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        filter: 'grayscale(100%)'
      }}
    >

      <div className="intro card btext">
        <h1>NAVEENKUMAR</h1>
        <h1>ARULRAJA</h1>
        <p>
          An Emerging Software Developer
        </p>

        <Link to="/about" className="cursor-target">
          → About Me / மேலும் அறிய
        </Link>
      </div>

      <div className="quick-box btext">
        <button
          className={`box ${open ? "open" : ""} cursor-target`}
          onClick={() => setOpen(prev => !prev)}
          aria-expanded={open}
          aria-label={open ? "Close quick links" : "Open quick links"}
        >
          <span className="box-icon" />
          
        </button>

        {!open && <div className="box-label">Open Quick Links</div>}

        <div className={`links ${open ? "open" : ""}`}>
          <Link to="/career" className="cursor-target">Career / தொழில் வாழ்க்கை</Link>
          <Link to="/projects" className="cursor-target">Projects / செயல் திட்டங்கள்</Link>
          <Link to="/skills" className="cursor-target">Skill Set / திறன் தொகுப்பு</Link>
        </div>
      </div>

    </section>
  );
};

export default Home;