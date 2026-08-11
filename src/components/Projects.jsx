import "../styles/Project.css";

import doc_to_rag from "../assets/rag.webp";

const projects = [
  {
  title: "MultiModal RAG",

  description:
    "An AI-powered multimodal RAG application designed to provide intelligent responses through semantic search, conversational AI, voice interaction, and image rendering. The application combines document processing, vector search, and generative AI to deliver an interactive knowledge-based experience.",

  demoLink: "https://www.linkedin.com/posts/naveenkumar-arulraja_ai-rag-linkedin-ugcPost-7427648215593918464-yN5q/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQXu1UB99l0s0GInHYbs_Tk0VrPUxgObeo",

  codeLink: "https://github.com/naveen-the-coder/rag-chatbot",

  techStack: [
    "React.js",
    "Python",
    "FastAPI",
    "Sentence Transformers",
    "FAISS",
    "Google Gemini ADK",
    "Generative AI",
    "RAG",
    "Voice Interaction",
    "Image Rendering"
  ],

  bannerImage: doc_to_rag,
},
  {
  title: "RAG boilerplate",

  description:
    "A reusable Retrieval-Augmented Generation (RAG) foundation for building AI applications with document ingestion, text chunking, embeddings, vector search, retrieval pipelines, and LLM-powered response generation. Designed with a modular and scalable architecture that can be extended for different knowledge bases and AI use cases.",

  isInProgress: true,

  techStack: [
    "React.js",
    "Python",
    "FastAPI",
    "Sentence Transformers",
    "FAISS",
    "Google Gemini ADK",
    "Generative AI",
    "RAG",
    "Voice Interaction",
    "Image Rendering"
  ],

  bannerImage: doc_to_rag,
}
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
                {project.isInProgress ? (
                  <span className="project-button demo cursor-target">In progress</span>
                ) : (
                  <>
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="project-button demo cursor-target">
                      Demo
                    </a>
                    <a href={project.codeLink} target="_blank" rel="noreferrer" className="project-button code cursor-target">
                      Code
                    </a>
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
