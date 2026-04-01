import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { Linkedin, Instagram, FileText, Github } from 'lucide-react';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const platforms = [
  {
    name: 'Substack',
    handle: '@aryamandev',
    url: 'https://substack.com/@aryamandev',
    description: 'Essays on AI & ideas',
    icon: FileText,
  },
  {
    name: 'Medium',
    handle: '@aryamandev.college',
    url: 'https://medium.com/@aryamandev.college',
    description: 'Tech deep dives',
    icon: FileText,
  },
  {
    name: 'LinkedIn',
    handle: '/in/aryamandev',
    url: 'https://www.linkedin.com/in/aryamandev/',
    description: 'Professional network',
    icon: Linkedin,
  },
  {
    name: '𝕏',
    handle: '@artamandev',
    url: 'https://x.com/artamandev',
    description: 'Hot takes on AI',
    icon: () => <span style={{ fontSize: '24px', fontWeight: 'bold' }}>𝕏</span>,
  },
  {
    name: 'Instagram',
    handle: '@aryamandev',
    url: 'https://www.instagram.com/aryamandev/',
    description: 'Life + building',
    icon: Instagram,
  },
  {
    name: 'GitHub',
    handle: 'dev4-gpt',
    url: 'https://github.com/dev4-gpt',
    description: 'Open source work',
    icon: Github,
  },
];

const PlatformCards = () => {
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
          <h2 className="section-title">Where I Show Up</h2>
          <p className="section-subtitle">
            From writing to building — here's where I share ideas and ship projects
          </p>
        </div>

        <div className="platform-cards">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <motion.a
                key={index}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="platform-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="platform-icon">
                  {typeof Icon === 'function' && Icon.name === '' ? <Icon /> : <Icon size={24} />}
                </div>
                <div className="platform-name">{platform.name}</div>
                <div className="platform-handle">{platform.handle}</div>
                <div className="platform-desc">{platform.description}</div>
              </motion.a>
            );
          })}
        </div>

        <div className="platform-stats">
          <div className="platform-stat-item">
            <span className="platform-stat-number"><CountUp end={6} /></span>
            <span className="platform-stat-label">Platforms</span>
          </div>
          <div className="platform-stat-item">
            <span className="platform-stat-number"><CountUp end={3} /></span>
            <span className="platform-stat-label">Countries</span>
          </div>
          <div className="platform-stat-item">
            <span className="platform-stat-number"><CountUp end={6} /></span>
            <span className="platform-stat-label">Projects Shipped</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlatformCards;