import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const writings = [
  {
    title: 'Democratizing Alpha: Why Parallel Multi-Agent Systems are the Future of Open-Source Finance',
    platform: 'Substack',
    date: 'May 2026',
    excerpt: 'Why combining LangGraph\'s fan-out architecture with Groq\'s Llama-3.3 is rendering sequential AI chains obsolete. Building MarketMind with parallel agent orchestration.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    url: 'https://open.substack.com/pub/aryamandev/p/democratizing-alpha-why-parallel?r=q7npe&utm_campaign=post-expanded-share&utm_medium=post%20viewer',
    category: 'AI',
  },
  {
    title: 'Building a Real-Time Multi-Agent Financial Analyst with LangGraph and Llama 3',
    platform: 'Medium',
    date: 'May 2026',
    excerpt: 'From monolithic prompts to multi-agent microservices. How parallel execution and fan-out/fan-in patterns enable institutional-grade analysis in under 5 seconds.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    url: 'https://medium.com/@aryamandev.college/building-a-real-time-multi-agent-financial-analyst-with-langgraph-and-llama-3-92591f7525ca',
    category: 'AI',
  },
  {
    title: 'How I Built an AI-Powered Job Application Machine and Saved 30 Hours Per Week',
    platform: 'Medium',
    date: 'Apr 2026',
    excerpt: 'End-to-end n8n automation pipeline that screens 847 jobs, filters 72% automatically, and generates tailored applications. From data ingestion to smart deduplication.',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    url: 'https://medium.com/@aryamandev.college/how-i-built-an-ai-powered-job-application-machine-and-saved-30-hours-per-week-1db7021e56c2',
    category: 'Product',
  },
  {
    title: 'Applying Statistical NLP Concepts to Video-Based Threat Detection',
    platform: 'Medium',
    date: 'Apr 2026',
    excerpt: 'Treating video frames as word sequences. How Conv-LSTM and Bi-LSTM architectures enable temporal modeling for real-time threat detection through sequence modeling.',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    url: 'https://medium.com/@aryamandev.college/applying-statistical-nlp-concepts-to-video-based-threat-detection-6e51f655b3af',
    category: 'Research',
  },
  {
    title: 'The Future of AI Safety: Proxy-Based Architectures',
    platform: 'Substack',
    date: 'Apr 2025',
    excerpt: 'Exploring how proxy-based systems can help us build safer AI by separating objectives from execution. A deep dive into alignment challenges and potential solutions.',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    url: 'https://substack.com/@aryamandev',
    category: 'Research',
  },
  {
    title: 'Building AI Automation Pipelines: n8n + Claude',
    platform: 'Medium',
    date: 'Mar 2025',
    excerpt: 'A technical deep dive into creating end-to-end automation workflows that cut manual work by 60%. From design to deployment.',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    url: 'https://medium.com/@aryamandev.college',
    category: 'Product',
  },
  {
    title: 'Adversarial ML: Breaking Neural Networks',
    platform: 'Substack',
    date: 'Feb 2025',
    excerpt: 'What I learned from reducing ResNet-34 accuracy to 0% using PGD attacks. Implications for AI security and robustness.',
    image: 'https://images.unsplash.com/photo-1757466762489-52fea38071ad',
    url: 'https://substack.com/@aryamandev',
    category: 'AI',
  },
  {
    title: 'The Culture of AI: Beyond the Hype',
    platform: 'Medium',
    date: 'Jan 2025',
    excerpt: 'Moving past buzzwords to understand how AI is reshaping culture, creativity, and human expression in unexpected ways.',
    image: 'https://images.pexels.com/photos/14240656/pexels-photo-14240656.jpeg',
    url: 'https://medium.com/@aryamandev.college',
    category: 'Culture',
  },
];

const filters = ['All', 'AI', 'Culture', 'Research', 'Product'];

const WritingPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredWritings = activeFilter === 'All'
    ? writings
    : writings.filter(w => w.category === activeFilter);

  return (
    <div className="writing-page" style={{ paddingTop: '120px' }}>
      <section className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h1 className="section-title" style={{ fontSize: 'clamp(48px, 8vw, 80px)' }}>Writing & Ideas</h1>
            <p className="section-subtitle">
              Essays on AI, technology, and culture — making complex ideas accessible
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

          <div className="writing-grid">
            {filteredWritings.map((writing, index) => (
              <motion.a
                key={writing.url}
                href={writing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="writing-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="writing-image">
                  <img src={writing.image} alt={writing.title} />
                </div>
                <div className="writing-content">
                  <div className="writing-meta">
                    <span className="platform-badge">{writing.platform}</span>
                    <span className="writing-date">{writing.date}</span>
                  </div>
                  <h3 className="writing-title">{writing.title}</h3>
                  <p className="writing-excerpt">{writing.excerpt}</p>
                </div>
              </motion.a>
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

export default WritingPage;