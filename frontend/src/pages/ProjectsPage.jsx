import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const projects = [
  {
    title: 'NemoClaw + Hostinger Integration',
    category: 'Web Development',
    description: 'Full-stack web application with custom domain integration and deployment pipeline',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['Web Development'],
  },
  {
    title: 'AI Job Application Automation',
    category: 'AI Automation',
    description: 'n8n + Claude Code pipeline cutting application time by 60% with intelligent screening',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    tags: ['AI Engineering', 'Automation'],
  },
  {
    title: 'Autonomous Legal Document Analyzer',
    category: 'GenAI / NLP',
    description: 'RAG + LangChain + LangGraph system for contract analysis and risk assessment',
    image: 'https://images.unsplash.com/photo-1757466762489-52fea38071ad',
    tags: ['AI Engineering'],
  },
  {
    title: 'Adversarial Attacks on Deep Vision Models',
    category: 'AI Research',
    description: 'Research at NYU: reduced ResNet-34 Top-1 accuracy from 70.4% → 0% using PGD attacks',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    tags: ['Research', 'Computer Vision'],
  },
  {
    title: 'AI Financial Automation Platform',
    category: 'AI + FinTech',
    description: 'Live dashboard with anomaly detection, automated summaries, and rule-based financial workflows',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['AI Engineering'],
  },
  {
    title: 'Predictive Maintenance @ SymphonyAI',
    category: 'Industrial AI',
    description: 'TensorFlow/YOLO models reducing downtime by 25% and improving asset classification by 30%',
    image: 'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png',
    tags: ['Computer Vision'],
  },
  {
    title: 'AgentOS',
    category: 'AI Infrastructure',
    description: 'Machine-readable tool layer for autonomous AI agents with semantic discovery, OAuth2 flows, and MCP server. Production-deployed registry API bridging Claude, GPT, and custom agents to 5+ SaaS integrations with real-time tool execution proxy.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['AI Engineering', 'Research'],
    link: 'https://github.com/dev4-gpt/agentos',
  },
  {
    title: 'ResearchOS',
    category: 'AI Research Platform',
    description: 'Self-hosted AI-native research operating system combining agent operations, task ledger (Paperclip), and multi-agent orchestration. Features research repository, Open WebUI cockpit, MCPO tool exposure, Hermes memory experiments, and reproducible benchmark scaffolds for computer-use agent reliability policies.',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0',
    tags: ['AI Engineering', 'Research', 'Automation'],
    links: [
      { label: 'Veloce Research OS', url: 'https://github.com/dev4-gpt/veloce-research-os' },
      { label: 'ResearchOS', url: 'https://github.com/dev4-gpt/ResearchOS' }
    ],
  },
  {
    title: 'LLM-Assisted Customer Support',
    category: 'NLP / Production AI',
    description: 'FastAPI service for intelligent support triage using configurable LLMs (OpenRouter/NVIDIA). Features multi-intent classification, quality monitoring with policy grounding, RAG retrieval, and hybrid baseline hints. Includes golden-set evaluation, confusion matrices, and production metrics via Prometheus.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
    tags: ['AI Engineering', 'Automation'],
    link: 'https://github.com/dev4-gpt/llm-assisted-customer-support',
  },
  {
    title: 'MarketMind',
    category: 'FinTech / Multi-Agent AI',
    description: 'Parallel multi-agent financial analyst delivering stock/crypto verdicts in under 5 seconds. Uses LangGraph fan-out architecture with Groq Llama-3.3-70B, analyzing price action, sentiment, on-chain metrics, macro indicators, and risk simultaneously before synthesis into BUY/HOLD/SELL recommendations.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['AI Engineering', 'Research'],
    link: 'https://github.com/dev4-gpt/MultiAgent-stock-crypto-analyst',
  },
];

const filters = ['All', 'AI Engineering', 'Computer Vision', 'Automation', 'Research', 'Creative'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(activeFilter));

  return (
    <div className="projects-page" style={{ paddingTop: '120px' }}>
      <section className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h1 className="section-title" style={{ fontSize: 'clamp(48px, 8vw, 80px)' }}>All Projects</h1>
            <p className="section-subtitle">
              A collection of work spanning AI research, automation, and creative applications
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '60px' }}>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  padding: '10px 24px',
                  background: activeFilter === filter ? '#C9A96E' : 'rgba(26, 24, 20, 0.6)',
                  border: `1px solid ${activeFilter === filter ? '#C9A96E' : 'rgba(201, 169, 110, 0.2)'}`,
                  borderRadius: '8px',
                  color: activeFilter === filter ? '#0D0C0B' : '#F0EDE8',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {filter}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '32px' }}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ height: '450px', cursor: project.link || project.links ? 'pointer' : 'default' }}
                onClick={() => {
                  if (project.link) {
                    window.open(project.link, '_blank', 'noopener,noreferrer');
                  }
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-overlay" />
                <div className="project-category">{project.category}</div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div style={{ marginTop: '16px', opacity: 0, transform: 'translateY(20px)', transition: 'all 0.4s ease' }} className="project-description">
                    {project.links ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {project.links.map((link, i) => (
                          <a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: '#C9A96E', fontWeight: '600', textDecoration: 'none' }}
                          >
                            {link.label} →
                          </a>
                        ))}
                      </div>
                    ) : project.link ? (
                      <span style={{ color: '#C9A96E', fontWeight: '600' }}>View Project →</span>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div>© 2025 Aryaman Singh Dev</div>
        <div>Built with intention</div>
      </footer>
    </div>
  );
};

export default ProjectsPage;