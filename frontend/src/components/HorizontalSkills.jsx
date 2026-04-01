import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  {
    number: '01',
    title: 'AI Engineering',
    items: [
      'LLM Systems & Fine-tuning',
      'RAG Pipeline Architecture',
      'Model Deployment & Serving',
      'Prompt Engineering & Optimization',
      'AI Product Development',
    ],
  },
  {
    number: '02',
    title: 'Computer Vision',
    items: [
      'YOLO Object Detection',
      'OpenCV & Image Processing',
      'Pose Estimation Models',
      'Anomaly Detection Systems',
      'Video Analytics Pipelines',
    ],
  },
  {
    number: '03',
    title: 'Automation & MLOps',
    items: [
      'n8n Workflow Automation',
      'Docker & Containerization',
      'FastAPI & REST Services',
      'CI/CD for ML Models',
      'Cloud Infrastructure (AWS, GCP, DigitalOcean)',
    ],
  },
  {
    number: '04',
    title: 'ML & Data Science',
    items: [
      'PyTorch & TensorFlow',
      'Statistics & Probability',
      'NumPy, Pandas, Matplotlib',
      'Scikit-learn & Classical ML',
      'Time Series Analysis',
    ],
  },
];

const SkillCard = ({ skill, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const rotateX = isHovering ? (mousePosition.y / 20) * -1 : 0;
  const rotateY = isHovering ? mousePosition.x / 20 : 0;

  return (
    <motion.div
      ref={cardRef}
      className="skill-card"
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      <div className="skill-number">{skill.number}</div>
      <h3 className="skill-title">{skill.title}</h3>
      <ul className="skill-list">
        {skill.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

const HorizontalSkills = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-25%']);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={containerRef} className="horizontal-skills" id="skills">
      <motion.div
        ref={ref}
        className="section-header"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h2 className="section-title">what I can do</h2>
        <p className="section-subtitle">
          From training models to building AI-native products — here's where I operate.
        </p>
      </motion.div>

      <motion.div className="skills-scroll-container" style={{ x }}>
        <div className="skills-track">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HorizontalSkills;