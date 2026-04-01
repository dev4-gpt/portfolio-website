import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const AboutSnapshot = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section className="section-container" id="about-snapshot">
      <motion.div
        ref={ref}
        className="about-snapshot"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="about-left">
          <h2>About me</h2>
          <p className="about-bio">
            I'm Aryaman Singh Dev — an AI engineer and builder obsessed with making technology feel alive. From training adversarial models at NYU to shipping AI automation pipelines and immersive 3D web experiences, I live at the edge of what's technically possible and culturally resonant. Currently pursuing my MS in AI at Penn State — building things that matter, and writing about the ones that will.
          </p>
          
          <div className="about-contact">
            <div className="contact-item">
              <Phone size={18} />
              <span>(484) 735-7279</span>
            </div>
            <div className="contact-item">
              <span>✉️</span>
              <a href="https://www.linkedin.com/in/aryamandev/" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A96E', textDecoration: 'none' }}>LinkedIn Contact</a>
            </div>
          </div>

          <Link to="/about" className="story-link">
            My Story <ArrowRight size={16} />
          </Link>
        </div>

        <div className="about-stats">
          <div className="stat-box">
            <span className="stat-number"><CountUp end={3} /></span>
            <span className="stat-label">Years of Building</span>
          </div>
          <div className="stat-box">
            <span className="stat-number"><CountUp end={6} /></span>
            <span className="stat-label">Projects Shipped</span>
          </div>
          <div className="stat-box">
            <span className="stat-number"><CountUp end={3} /></span>
            <span className="stat-label">Continents</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSnapshot;