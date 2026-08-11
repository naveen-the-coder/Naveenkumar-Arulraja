import "../styles/Career.css";
import sentinix_logo from "../assets/sentinix_logo.webp";
import intwhizz_logo from "../assets/intwhizz_logo.webp";
import smackcoders_logo from "../assets/smackcoders_logo.webp";

const experiences = [
  
  {
  company: "IntWhizz Business Solutions",
  logo: intwhizz_logo,
  role: "Frontend Developer",
  period: "Aug 2025 — Mar 2026",
  location: "Tirunelveli, Tamil Nadu",

  summary:
    "Worked as a Frontend Developer, building responsive and user-friendly web applications using React.js, Tailwind CSS, and Material UI. Collaborated with backend and cross-functional teams to integrate APIs, develop business features, and deliver reliable applications.",

  bullets: [
    "Developed responsive and reusable user interfaces using React.js, Tailwind CSS, and Material UI",

    "Built and maintained business applications including POS, billing, and management systems",

    "Integrated REST APIs and handled frontend data management and API interactions",

    "Implemented reusable React components, forms, tables, filters, pagination, and responsive layouts",

    "Collaborated with backend developers to integrate Node.js, APIs",

    "Worked with MongoDB and PostgreSQL for application data integration and management",

    "Used Git and GitHub for version control and collaborated with team members using Jira",

    "Participated in debugging, testing, deployment, and production support",

    "Worked closely with product and QA teams to improve application functionality and user experience"
  ],

  techStack: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "REST APIs",
    "Git",
    "GitHub",
  ],

  website: "https://intwhizz.in/",
},
  {
  company: "Sentinix Tech Solutions",
  logo: sentinix_logo,
  role: "Frontend Developer",
  period: "Mar 2025 — Jul 2025",
  location: "Tirunelveli, Tamil Nadu",

  summary:
    "Worked as a Frontend Developer on MERN-stack applications, developing responsive user interfaces and business features using React.js, Tailwind CSS, and Material UI. Collaborated with backend developers to integrate APIs and deliver reliable business solutions.",

  bullets: [
    "Developed responsive and reusable user interfaces using React.js, Tailwind CSS, and Material UI",

    "Contributed to business applications including billing and KOT (Kitchen Order Ticket) systems",

    "Integrated REST APIs and managed frontend data flow for business operations",

    "Built admin dashboards, data tables, forms, filters, and reporting interfaces",

    "Implemented real-time order updates and notifications using Socket.IO",

    "Integrated external APIs and services to support application functionality",

    "Collaborated with backend developers working with Node.js, and MongoDB",

    "Used Git and Jira for version control, task management, and team collaboration",

    "Participated in debugging, testing, deployment, and production support"
  ],

  techStack: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Material UI",
    "Node.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "GitHub",
    "Jira"
  ],

  website: "https://www.sentinixtechsolutions.com/",
},
  {
  company: "Smackcoders Inc",
  logo: smackcoders_logo,
  role: "Intern | React Developer",
  period: "Aug 2024 — Jan 2025",
  location: "Tirunelveli, Tamil Nadu",

  summary:
    "Worked as a React Developer Intern, contributing to WordPress plugin development with a focus on building responsive, scalable, and user-friendly interfaces. Collaborated with backend developers and QA teams to deliver reliable frontend features and seamless plugin functionality.",

  bullets: [
    "Developed responsive and user-friendly interfaces using React.js, JavaScript, HTML5, CSS3, and Material UI",

    "Contributed to the Backup & Restoration WordPress Plugin, enabling users to manage website backups and restoration workflows",

    "Built interactive UI components, configuration panels, dynamic forms, and data management interfaces",

    "Implemented frontend features for backup scheduling, website data management, and restoration workflows",

    "Integrated frontend components with backend functionality to ensure seamless plugin operations",

    "Collaborated with backend developers and QA teams to troubleshoot issues and improve application reliability",

    "Participated in testing, debugging, and improving the overall user experience of WordPress plugins",

    "Worked with Git for version control and collaborative development"
  ],

  techStack: [
    "React.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Material UI",
    "WordPress",
    "PHP",
    "Git",
    "GitHub"
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