import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const writings = [
  {
    title: 'The Future of AI Safety: Proxy-Based Architectures',
    platform: 'Substack',
    date: 'Apr 2025',
    excerpt: 'Exploring how proxy-based systems can help us build safer AI by separating objectives from execution...',
    image: 'https://images.unsplash.com/photo-1678845530864-18a666ca9762',
    url: 'https://substack.com/@aryamandev',
  },
  {
    title: 'Building AI Automation Pipelines: n8n + Claude',
    platform: 'Medium',
    date: 'Mar 2025',
    excerpt: 'A technical deep dive into creating end-to-end automation workflows that cut manual work by 60%...',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    url: 'https://medium.com/@aryamandev.college',
  },
];

const WritingPreview = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Writing & Ideas</h2>
          <p className="section-subtitle">
            From AI research to culture — essays that make you think.
          </p>
        </div>

        <div className="writing-grid">
          {writings.map((writing, index) => (
            <motion.a
              key={index}
              href={writing.url}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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

        <Link to="/writing" className="browse-all">
          Browse All Writing <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
};

export default WritingPreview;