import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ParallaxHero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effect: back image slower, front image faster
  const backY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const frontY = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={ref} className="parallax-hero">
      {/* Back portrait image */}
      <motion.div 
        className="hero-image-back"
        style={{ y: backY, opacity }}
      >
        <img 
          src="https://images.unsplash.com/photo-1622564045913-6241fcce67e4" 
          alt="Back view"
        />
      </motion.div>

      {/* Front portrait image */}
      <motion.div 
        className="hero-image-front"
        style={{ y: frontY, opacity }}
      >
        <img 
          src="https://customer-assets.emergentagent.com/job_interactive-aryaman/artifacts/qoejdt71_linkedin_pic.jpeg" 
          alt="Aryaman Singh Dev"
        />
        {/* Floating Hi pill */}
        <motion.div
          className="hi-pill"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 15, 
            delay: 1 
          }}
        >
          Hi
        </motion.div>
      </motion.div>

      {/* Hero text content */}
      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Aryaman Singh Dev
        </motion.div>

        <div className="hero-title-stack">
          <motion.h1
            className="hero-title-line1"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            AI
          </motion.h1>
          <motion.h1
            className="hero-title-line2"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Engineer
          </motion.h1>
        </div>

        <motion.p
          className="hero-subtitle"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I'm a Penn State MS AI student building at the intersection of deep tech, generative AI, and digital culture
        </motion.p>
      </div>
    </section>
  );
};

export default ParallaxHero;