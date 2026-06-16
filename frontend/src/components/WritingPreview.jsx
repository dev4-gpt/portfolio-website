import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const writings = [
  {
    title: 'Democratizing Alpha: Why Parallel Multi-Agent Systems are the Future of Open-Source Finance',
    platform: 'Substack',
    date: 'May 2026',
    excerpt: 'Why combining LangGraph&apos;s fan-out architecture with Groq&apos;s Llama-3.3 is rendering sequential AI chains obsolete...',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    url: 'https://open.substack.com/pub/aryamandev/p/democratizing-alpha-why-parallel?r=q7npe&utm_campaign=post-expanded-share&utm_medium=post%20viewer',
  },
  {
    title: 'How I Built an AI-Powered Job Application Machine and Saved 30 Hours Per Week',
    platform: 'Medium',
    date: 'Apr 2026',
    excerpt: 'End-to-end n8n automation pipeline that screens 847 jobs and filters 72% automatically...',
    image: 'https://images.unsplash.com/photo-1770486036751-e55247238964',
    url: 'https://medium.com/@aryamandev.college/how-i-built-an-ai-powered-job-application-machine-and-saved-30-hours-per-week-1db7021e56c2',
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
              key={writing.url}
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