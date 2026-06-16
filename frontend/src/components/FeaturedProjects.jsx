import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'NemoClaw + Hostinger Integration',
    category: 'Web Development',
    description: 'Full-stack web application with custom domain integration and deployment pipeline',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
  },
  {
    title: 'AgentOS',
    category: 'AI Infrastructure',
    description: 'Machine-readable tool layer for autonomous AI agents with semantic discovery, OAuth2 flows, and MCP server',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
  },
  {
    title: 'ResearchOS',
    category: 'AI Research Platform',
    description: 'Self-hosted AI-native research operating system with multi-agent orchestration and reproducible benchmarks',
    image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0',
  },
  {
    title: 'Adversarial Attacks on Deep Vision Models',
    category: 'AI Research',
    description: 'Research at NYU: reduced ResNet-34 Top-1 accuracy from 70.4% → 0% using PGD attacks',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
  },
  {
    title: 'LLM-Assisted Customer Support',
    category: 'NLP / Production AI',
    description: 'FastAPI service for intelligent support triage with multi-intent classification and quality monitoring',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7',
  },
  {
    title: 'MarketMind',
    category: 'FinTech / Multi-Agent AI',
    description: 'Parallel multi-agent financial analyst delivering stock/crypto verdicts in under 5 seconds using LangGraph',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
  },
];

const ProjectCard = ({ project }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-overlay" />
      <div className="project-category">{project.category}</div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
      </div>
    </motion.div>
  );
};

const FeaturedProjects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container featured-projects" id="projects">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle" style={{ fontStyle: 'italic' }}>
          A selection of work at the intersection of AI, automation, and deep learning
        </p>
      </motion.div>

      <div className="projects-grid">
        <div className="project-row full">
          <ProjectCard project={projects[0]} />
        </div>
        <div className="project-row split">
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
        </div>
        <div className="project-row full">
          <ProjectCard project={projects[3]} />
        </div>
        <div className="project-row split">
          <ProjectCard project={projects[4]} />
          <ProjectCard project={projects[5]} />
        </div>
      </div>

      <Link to="/projects" className="browse-all">
        Browse All Projects <ArrowRight size={16} />
      </Link>
    </section>
  );
};

export default FeaturedProjects;