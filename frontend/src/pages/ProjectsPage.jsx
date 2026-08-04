import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useMemo } from 'react';
import ProjectFilterBar from '../components/projects/ProjectFilterBar';
import ProjectCard from '../components/projects/ProjectCard';
import ParallaxBackground from '../components/projects/ParallaxBackground';

const projects = [
  {
    title: 'Veloce AgenticOS',
    category: 'AI Infrastructure',
    description: 'Next-generation AI operating system enabling autonomous agents to discover, authenticate, and execute tools across multiple platforms with semantic discovery and MCP protocol integration.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    tags: ['AI Engineering', 'Research'],
    links: [
      { label: 'Product Experience', url: 'https://product-experience-five.vercel.app' },
      { label: 'Landing Page', url: 'https://veloce-agenticos-public.vercel.app/' }
    ],
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
    title: 'MarketMind',
    category: 'FinTech / Multi-Agent AI',
    description: 'Parallel multi-agent financial analyst delivering stock/crypto verdicts in under 5 seconds. Uses LangGraph fan-out architecture with Groq Llama-3.3-70B, analyzing price action, sentiment, on-chain metrics, macro indicators, and risk simultaneously before synthesis into BUY/HOLD/SELL recommendations.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    tags: ['AI Engineering', 'Research'],
    link: 'https://github.com/dev4-gpt/MultiAgent-stock-crypto-analyst',
  },
  {
    title: 'AI Job Application Automation',
    category: 'AI Automation',
    description: 'Dual-system automation combining JobReach and CareerOps X AIhawk for intelligent job matching, application tracking, and ATS optimization. n8n + Claude pipeline cutting application time by 60% with smart screening.',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    tags: ['AI Engineering', 'Automation'],
    links: [
      { label: 'JobReach', url: 'https://github.com/dev4-gpt/jobreach' },
      { label: 'CareerOps X AIhawk', url: 'https://github.com/dev4-gpt/career-ops-aihawk-bridge' }
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
    title: 'Markexis - AI CMO Platform',
    category: 'AI Marketing',
    description: 'AI-powered Chief Marketing Officer platform automating content strategy, campaign planning, and performance analytics. Intelligent marketing automation with multi-channel orchestration and ROI optimization.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    tags: ['AI Engineering', 'Automation'],
    link: 'https://github.com/dev4-gpt/markexis',
  },
  {
    title: 'The Gatekeeper',
    category: 'AI Sales Automation',
    description: 'Intelligent lead qualification system using AI to score, route, and prioritize prospects. Automated qualification workflows with intelligent screening, CRM integration, and real-time lead scoring.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692',
    tags: ['AI Engineering', 'Automation'],
    link: 'https://github.com/dev4-gpt/the-gatekeeper',
  },
  {
    title: 'Autonomous Legal Document Analyzer',
    category: 'GenAI / NLP',
    description: 'RAG + LangChain + LangGraph system for contract analysis and risk assessment. Intelligent document parsing with clause extraction, compliance checking, and automated risk scoring.',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f',
    tags: ['AI Engineering'],
    link: 'https://github.com/dev4-gpt/Autonomous-Legal-Document-Analyzer',
  },
  {
    title: 'Debugging Voice Agent',
    category: 'AI Voice / Developer Tools',
    description: 'AI-powered voice assistant for real-time debugging support. Natural language code analysis, error diagnosis, and solution suggestions through conversational interface with live code execution.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008',
    tags: ['AI Engineering', 'Automation'],
    links: [
      { label: 'GitHub Repo', url: 'https://github.com/dev4-gpt/Debugging-voice-agent' },
      { label: 'Live Demo (Replit)', url: 'https://replit.com/@aryamansdev96/Debugging-voice-agent' }
    ],
  },
  {
    title: 'Adversarial Attacks on Deep Vision Models',
    category: 'AI Research',
    description: 'Research at NYU: reduced ResNet-34 Top-1 accuracy from 70.4% → 0% using PGD attacks. Comprehensive study on adversarial robustness with white-box and black-box attack implementations.',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    tags: ['Research', 'Computer Vision'],
    link: 'https://github.com/dev4-gpt/Adversarial-attacks',
  },
  {
    title: 'Predictive Maintenance @ SymphonyAI',
    category: 'Industrial AI',
    description: 'TensorFlow/YOLO models reducing downtime by 25% and improving asset classification by 30%. Real-time anomaly detection with sensor fusion and predictive failure analysis for industrial systems.',
    image: 'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png',
    tags: ['Computer Vision', 'AI Engineering'],
    link: 'https://github.com/dev4-gpt/GenAI-and-PredAI-for-improved-industrial-processes',
  },
  {
    title: 'PEFT using LoRA',
    category: 'AI Research',
    description: 'Parameter-Efficient Fine-Tuning implementation using Low-Rank Adaptation. Efficient model adaptation with minimal parameters, achieving competitive performance with significantly reduced computational requirements.',
    image: 'https://images.unsplash.com/photo-1655393001768-d946c97d6fd1',
    tags: ['Research', 'AI Engineering'],
    link: 'https://github.com/dev4-gpt/PEFT-using-LoRA',
  },
  {
    title: 'NemoClaw + Hostinger Integration',
    category: 'Web Development',
    description: 'Full-stack web application with custom domain integration and deployment pipeline. Modern web infrastructure with CI/CD automation, custom domain management, and production monitoring.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    tags: ['Web Development'],
  },
  {
    title: 'AI Financial Automation Platform',
    category: 'AI + FinTech',
    description: 'Live dashboard with anomaly detection, automated summaries, and rule-based financial workflows. Real-time transaction monitoring with intelligent alerting and compliance automation.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938',
    tags: ['AI Engineering'],
  },
];

const filters = ['All', 'AI Engineering', 'Computer Vision', 'Automation', 'Research', 'Creative'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Create different parallax speeds for depth
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const filteredProjects = useMemo(() => {
    return activeFilter === 'All'
      ? projects
      : projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const getParallaxSpeed = (index) => {
    const speeds = [y1, y2, y3];
    return speeds[index % 3];
  };

  return (
    <div className="projects-page" style={{ paddingTop: '120px' }} ref={containerRef}>
      <section className="section-container" style={{ position: 'relative', overflow: 'hidden' }}>
        <ParallaxBackground y1={y1} y3={y3} />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1 }}
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

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', 
            gap: '40px', 
            position: 'relative', 
            zIndex: 1,
            alignItems: 'start',
          }}>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                index={index}
                parallaxY={getParallaxSpeed(index)}
              />
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;

