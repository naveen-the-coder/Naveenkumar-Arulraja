import "../styles/About.css";
import profileImage from "../assets/photo.jpg";

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="about-intro">
        <div className="about-copy">
          <span className="eyebrow">About Me / நான்</span>
          <h2 className="section-title">A boy from the Porunai river bank/பொருநை ஆற்றங்கரை discovering the manhood</h2>
          <p className="about-text">
            I possess a strong ability to quickly learn and adapt to new tasks. My passion lies
in exploring and exploiting opportunities, and I am eagerly awaiting a valuable
chance that not only aligns with my growth but also contributes significantly to the
success of the organization.
          </p>
        </div>

        <div className="about-highlights">
          <article className="highlight-card">
            <h3>Experience</h3>
            <p>1+ years designing, building, and shipping full-stack web applications.</p>
          </article>
          <article className="highlight-card">
            <h3>Specialty</h3>
            <p>RAG systems, AI agents, automation pipelines, and robust SaaS backends.</p>
          </article>
          <article className="highlight-card">
            <h3>Approach</h3>
            <p>Clean architecture, responsive UI, performance-first thinking, and scalable delivery.</p>
          </article>
        </div>
      </div>

      <div className="about-panel" style={{ backgroundImage: `url(${profileImage})` }}>
        <div className="profile-card">
          <div className="profile-details">
            <p className="profile-title">AI Product Engineer</p>
            <p className="profile-description">
              I design elegant interfaces and build backend systems that support modern AI workflows, from data ingestion to conversational applications.
            </p>
            <div className="profile-meta">
              <div>
                <strong>Interests</strong>
                <span>AI, Machine Learning, Neural Networks, Computer Vision</span>
              </div>
              <div>
                <strong>Hobbies</strong>
                <span>Traveling, Photography, Music</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about-details">
          <article>
            <h3>What I build</h3>
            <p>
              Modern web experiences with a focus on stability, speed, and intelligent automation. I build applications that feel responsive, work reliably, and support real user needs.
            </p>
          </article>
          <article>
            <h3>Why it matters</h3>
            <p>
              Great software combines strong UX with solid engineering. I aim for products that are enjoyable to use and built for long-term maintainability.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;