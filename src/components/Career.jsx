import "../styles/Career.css";
import sentinix_logo from "../assets/sentinix_logo.webp";
import intwhizz_logo from "../assets/intwhizz_logo.webp";
import vyastics_logo from "../assets/vyastics_logo.webp";

const experiences = [
  
  {
    company: "IntWhizz Business Solutions",
    logo: intwhizz_logo,
    role: "Frontend Developer",
    period: "Aug 2025 — Mar 2026",
    location : "Tirunelveli, Tamil Nadu",
    summary:
      "Worked across MERN and Java full-stack projects, contributing to and leading custom product development both as part of cross-functional teams and independently. Delivered end-to-end solutions — from UI and API design to deployment and production support — for business applications including billing systems and KOT solutions.",
    bullets: [
      "Developed full-stack features using both MERN and Java/Spring Boot stacks, owning modules end-to-end",
      "Built custom products (billing, KOT) as a team member and single-handedly delivered smaller products",
      "Designed database schemas and transactional APIs optimized for performance and data integrity",
      "Integrated external services (payment gateways, thermal printers) and third-party APIs",
      "Implemented real-time order flows and notifications using WebSockets/Socket.IO",
      "Containerized services with Docker and introduced CI/CD pipelines for reliable deployments",
      "Authored unit and integration tests; improved observability and production monitoring",
      "Collaborated with product, QA, and operations and mentored junior developers",
    ],
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Java",
      "Spring Boot",
      "Maven",
      "PostgreSQL",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "Jira",
    ],
    website: "https://intwhizz.in/",
  },
  {
    company: "Sentinix Tech Solutions",
    logo: sentinix_logo,
    role: "Frontend Developer",
    period: "Mar 2025 — jul 2025",
    location: "Tirunelveli, Tamil Nadu",
    summary:
      "Contributed to MERN-stack product development as part of a cross-functional team building custom products such as billing systems and KOT (Kitchen Order Ticket) solutions. Implemented end-to-end features from UI to backend, real-time order flows, external integrations, and production deployments.",
    bullets: [
      "Developed MERN-stack features and modules for custom products (Billing, KOT)",
      "Implemented real-time order and notification flows using Socket.IO",
      "Integrated payment gateways, thermal printers, and external APIs",
      "Designed and implemented RESTful APIs and database schemas for transactional workloads",
      "Built admin dashboards and reporting tools for operations and billing",
      "Authored unit and integration tests, and improved reliability with CI/CD pipelines",
      "Containerized services with Docker and managed deployments to staging/production",
    ],
    techStack: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Material UI",
      "Git",
      "Jira",
    ],
    website: "https://www.sentinixtechsolutions.com/",
  },
  {
    company: "Smackcoders Inc",
    logo: vyastics_logo,
    role: "Intern | React developer",
    period: "Jun 2026 — Present",
    location: "Tirunelveli, Tamil Nadu",
    summary:
      "Working as a full-stack engineer on python django projects, contributing to custom product development and leading modules end-to-end. Involved in UI and API design, database schema design, external integrations, and production deployments.",
    bullets: [
      "Developed full-stack features using Python Django and React, owning modules end-to-end",
      "Designed database schemas and transactional APIs optimized for performance and data integrity",
      "Integrated external services (AWS Cloud Services) and third-party APIs",
      "Implemented real-time order flows and notifications using WebSockets",
      "Containerized services with Docker and introduced CI/CD pipelines for reliable deployments",
      "Authored unit and integration tests; improved observability and production monitoring",
      "Collaborated with product, QA, and operations and mentored junior developers",
    ],
    techStack: [
      "Python",
      "Django",
      "FastAPI",
      "React",
      "MySQL",
      "Git Version Control",
      "Docker",
      "CI/CD Pipelines",
      "AWS Cloud Services",
    ],
    website: "https://www.smackcoders.com/",
  }
];

const Career = () => {
  return (
    <section id="career" className="section career-section">
      <h2 className="section-title">Career Journey / தொழில் வாழ்க்கைப்பயணம்</h2>

      <div className="career-list">
        {experiences.map((exp, idx) => (
          <article className="career-item" key={`career-${idx}`}>
            <a
              href={exp.website}
              className="company-logo"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={exp.logo} alt={exp.company} className="logo-image cursor-target" />
            </a>

            <div className="career-content">
              <div className="career-head">
                <div>
                  <h3 className="company-name">{exp.company}</h3>
                  {exp.location && <span className="location">{exp.location}</span>}
                </div>
                <span className="period">{exp.period}</span>
              </div>

              <h4 className="role">{exp.role}</h4>

              <p className="summary">{exp.summary}</p>

              <ul className="highlights">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Career;