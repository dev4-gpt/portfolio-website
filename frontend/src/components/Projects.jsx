import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI Job Application Automation',
    category: 'AI Automation / MLOps',
    description: 'End-to-end pipeline using n8n, Claude Code & DigitalOcean that cut application time by 60% and manual screening by 70%.',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    tags: ['n8n', 'Claude', 'DigitalOcean', 'Automation'],
  },
  {
    title: 'Autonomous Legal Document Analyzer',
    category: 'Generative AI / NLP',
    description: 'GenAI + RAG system using LangChain, FAISS & LangGraph for contract analysis and risk assessment.',
    image: 'https://images.unsplash.com/photo-1757466762489-52fea38071ad',
    tags: ['LangChain', 'FAISS', 'LangGraph', 'RAG'],
  },
  {
    title: 'Adversarial Attacks on Deep Vision Models',
    category: 'AI Research / Deep Learning',
    description: 'Research at NYU: reduced ResNet-34 Top-1 accuracy from 70.4% → 0% using PGD attacks.',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    tags: ['PyTorch', 'ResNet', 'PGD', 'Research'],
  },
  {
    title: 'AI Financial Automation Platform',
    category: 'AI + FinTech',
    description: 'Live dashboard with anomaly detection, automated summaries, and rule-based financial workflows.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['FastAPI', 'ML', 'Dashboard', 'Anomaly Detection'],
  },
  {
    title: 'Predictive Maintenance @ SymphonyAI',
    category: 'Industrial AI / Computer Vision',
    description: 'Deployed TensorFlow/YOLO models reducing downtime by 25% and improving asset classification by 30%.',
    image: 'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png',
    tags: ['TensorFlow', 'YOLOv7', 'Computer Vision', 'IoT'],
  },
];

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="project-card-wrapper"
    >
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.02, y: -10 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <motion.div 
          className="project-image"
          style={{ y: index % 2 === 0 ? y : undefined }}
        >
          <div className="image-overlay" />
          <img src={project.image} alt={project.title} />
          <div className="project-category-badge">{project.category}</div>
        </motion.div>
        
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          
          <div className="project-tags">
            {project.tags.map((tag, i) => (
              <span key={i} className="project-tag">{tag}</span>
            ))}
          </div>
          
          <div className="project-links">
            <motion.a
              href="#"
              className="project-link"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              <span>View Project</span>
              <ExternalLink size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-label">Featured Work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A selection of projects at the intersection of AI, automation, and deep learning
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;