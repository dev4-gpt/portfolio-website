import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-100, 0, 100]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -10]);

  return (
    <section ref={ref} className="about-section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-label">Get to know me</span>
          <h2 className="section-title">About</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div 
            className="about-image-wrapper"
            style={{ x, rotateY }}
          >
            <motion.div
              whileInView={{ scale: 1, opacity: 1 }}
              initial={{ scale: 0.8, opacity: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="about-image"
            >
              <div className="image-grain" />
              <img 
                src="https://images.unsplash.com/photo-1622564045913-6241fcce67e4" 
                alt="Aryaman Singh Dev"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-content"
          >
            <p className="about-text">
              I'm <span className="highlight">Aryaman Singh Dev</span> — an AI engineer and builder obsessed with making technology feel alive.
            </p>
            <p className="about-text">
              From training adversarial models at NYU to shipping AI automation pipelines and immersive 3D web experiences, I live at the edge of what's technically possible and culturally resonant.
            </p>
            <p className="about-text">
              Currently pursuing my MS in AI at Penn State — building things that matter, and writing about the ones that will.
            </p>
            
            <div className="about-stats">
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="stat-number">5+</span>
                <span className="stat-label">Major Projects</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="stat-number">3</span>
                <span className="stat-label">Research Papers</span>
              </motion.div>
              <motion.div 
                className="stat-item"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="stat-number">2+</span>
                <span className="stat-label">Years Experience</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;