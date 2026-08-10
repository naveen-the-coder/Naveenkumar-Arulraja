import "../styles/Project.css";

import doc_to_rag from "../assets/rag.webp";
import drug_graph from "../assets/drug_graph.webp";
import meet_bot from "../assets/meet_bot.webp";
import ecom_agent from "../assets/ecom_agent.webp";
import food_bot from "../assets/food_bot.webp";
import in_chat from "../assets/in_chat.webp";

const projects = [
  {
    title: "DOC-TO-RAG",
    description:
      "A production-ready Retrieval-Augmented Generation (RAG) application that enables users to create multiple knowledge corpuses, upload documents, and interact with them via an AI chat interface. Designed with clean architecture, scalability, and real-world SaaS patterns.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_linkedin-genai-rag-activity-7411661152918671360-ruuK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/doc-to-rag",
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "LLM",
      "Google ADK",
      "MongoDB vector search",
      "Uvicorn",
      "Pydantic",
    ],
    bannerImage: doc_to_rag,
  },
  {
    title: "DRUG-GRAPH",
    description:
      "An AI-powered medical knowledge graph platform that converts natural language questions into Neo4j Cypher queries, retrieves structured drug intelligence, and automatically visualizes results using interactive charts and graphs.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_linkedin-llm-ai-activity-7415354076508549120-mtMl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/drug-graph",
    techStack: [
      "React",
      "Python",
      "FastAPI",
      "Knowledge Graph",
      "Neo4j",
      "LLM",
      "Google ADK",
      "Uvicorn",
      "Pydantic",
      "NLM Datasets"
    ],
    bannerImage: drug_graph,
  },
  {
    title: "MEET-BOT",
    description:
      "An intelligent AI-powered assistant that processes Google Meet transcripts to understand meeting intent, clarify requirements, and automate actions like scheduling and email notifications.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_agenticai-ai-linkedin-activity-7419981382237544448-28ad?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/meet-bot",
    techStack: [
      "React",
      "Python",
      "Agentic AI",
      "FastAPI",
      "Google ADK",
      "LLM",
      "Uvicorn",
      "Pydantic",
      "NLP",
      "Google mail API",
      "Google Calendar API",
      "Meet Transcript Extension"
    ],
    bannerImage: meet_bot,
  },
  {
    title: "ECOM-AGENT",
    description:
      "A local e-commerce demo combining a FastAPI backend with a React + Vite frontend and a conversational voice assistant integration.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_linkedin-ai-voiceai-activity-7427914874518691842-G-dd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/ecom-agent",
    techStack: [
      "React",
      "Conversational AI",
      "ElevenLabs",
      "MCP",
      "FastAPI",
      "Python",
      "LLM",
      "Google ADK",
      "Uvicorn",
      "Pydantic",
      "SQLite",
    ],
    bannerImage: ecom_agent,
  },
  {
    title: "IN-CHAT",
    description:
      "LangChain-Rag — a LangChain-built Retrieval-Augmented Generation (RAG) demo that ingests documents, constructs a vector store, and powers contextual conversational agents.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_langchain-ai-genai-activity-7434299398911614976-YAzc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/langchain-rag",
    techStack: [
      "React",
      "Python",
      "LangChain",
      "LLM",
      "Ollama",
      "Streamlit",
      "Knowledge Graph",
      "Neo4j",
      "Hugging Face",
    ],
    bannerImage: in_chat,
  },
  {
    title: "FOOD-BOT",
    description:
      "A sophisticated Node.js application that leverages artificial intelligence to parse natural language food orders and automates the ordering process on a food website using Playwright browser automation.",
    demoLink: "https://www.linkedin.com/posts/sa-ravanan-s_rpa-automation-aidevelopment-activity-7452559015718322177-NEII?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXAE9UBWoXlUdjOq--9nIJf061Tor82PzM",
    codeLink: "https://github.com/MrBlackpen/food-bot",
    techStack: [
      "Node.js",
      "Playwright",
      "AI",
      "LLM",
      "Google ADK",
      "RPA",
      "Browser Automation",
      "Natural Language Processing",
      "CLI",
    ],
    bannerImage: food_bot,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="projects-header">
        <h2 className="section-title">Projects / செயல் திட்டங்கள்</h2>
        {/* <p className="section-subtitle">
          Technical implementations with clean interfaces and reliable architecture.
        </p> */}
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={`project-${index}`}>
            <div
              className="project-banner"
              style={
                project.bannerImage
                  ? { backgroundImage: `url(${project.bannerImage})` }
                  : undefined
              }
            >
              {/* <span>{project.title}</span> */}
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-button demo cursor-target">
                  Demo
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-button code cursor-target">
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
