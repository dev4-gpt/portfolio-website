import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const writings = [
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
                key={index}
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