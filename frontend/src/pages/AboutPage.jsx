import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';
import HorizontalSkills from '../components/HorizontalSkills';

const timeline = [
  {
    role: 'Data Scientist Intern',
    company: 'SymphonyAI',
    location: 'Bengaluru, India',
    period: 'Jan 2024 – Jul 2024',
    achievements: [
      'EDA and time-series analysis on multivariate sensor data → +4% product throughput',
      'Predictive maintenance models (TensorFlow, Scikit-learn) → -25% unplanned downtime, +3% energy efficiency',
      'YOLOv7 asset classification → +30% accuracy, -25% false positives in anomaly detection',
    ],
  },
  {
    role: 'AI Intern',
    company: 'Biocube Matrics / Bioqube.ai',
    location: 'Delhi NCR, India',
    period: 'Jul 2023 – Aug 2023',
    achievements: [
      'YOLOv7 real-time violence detection system → 75% accuracy',
      'Large-scale video data pipelines processing 500,000+ hours → +20% model accuracy, -30% false positives',
      'FastAPI REST services deployment → -40% system response time',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'National University of Singapore',
    location: 'Singapore',
    period: 'Jun 2023 – Jul 2023',
    achievements: [
      'Conv-LSTM and Bi-LSTM models for pose estimation → 95% accuracy, -30% response time',
      'Dataset quality improvements → +15% prediction accuracy',
      'Deep learning architecture optimization → -20% false positives',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'AI Safety & Proxy-Based Architectures',
    location: 'Philadelphia, PA',
    period: 'Present',
    achievements: [
      'Researched proxy-based architectures for safety-critical AI systems and surrogate objective impact',
      'Designed experimental setups measuring failure modes and misalignment risks under distribution shifts',
      'Empirical robustness analysis; contributed to interpretability and reliability frameworks for high-stakes AI',
    ],
  },
];

const techStack = [
  'Python', 'PyTorch', 'TensorFlow', 'LangChain', 'FAISS', 'Docker', 'FastAPI',
  'n8n', 'OpenCV', 'HuggingFace', 'AWS', 'GCP', 'Streamlit', 'NumPy', 'Pandas',
  'Matplotlib', 'Scikit-learn', 'Statistics', 'Probability', 'Machine Learning',
];

const process = [
  { number: '01', title: 'Research & Framing', description: 'Problem definition and research' },
  { number: '02', title: 'Build & Prototype', description: 'Fast prototyping and iteration' },
  { number: '03', title: 'Refine & Evaluate', description: 'Testing and optimization' },
  { number: '04', title: 'Ship & Deploy', description: 'Production deployment' },
  { number: '05', title: 'Write & Document', description: 'Public documentation and learnings' },
];

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [stackRef, stackInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="about-page" style={{ paddingTop: '100px' }}>
      <section className="section-container">
        <motion.div
          ref={heroRef}
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title" style={{ fontSize: 'clamp(48px, 8vw, 80px)', marginBottom: '32px' }}>About me</h1>
          <div style={{ fontSize: '18px', lineHeight: '1.8', color: 'rgba(240, 237, 232, 0.8)', maxWidth: '800px' }}>
            <p style={{ marginBottom: '24px' }}>
              I'm Aryaman Singh Dev — an AI engineer and builder obsessed with making technology feel alive. From training adversarial models at NYU to shipping AI automation pipelines and immersive 3D web experiences, I live at the edge of what's technically possible and culturally resonant.
            </p>
            <p>
              Currently pursuing my MS in AI at Penn State — building things that matter, and writing about the ones that will. My work spans from deep research in AI safety to shipping production ML systems that solve real-world problems.
            </p>
          </div>
        </motion.div>
      </section>

      <HorizontalSkills />

      <section className="section-container">
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0, y: 50 }}
          animate={timelineInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">My Journey</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', borderLeft: '2px solid #C9A96E', paddingLeft: '40px' }}>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ position: 'relative' }}
              >
                <div style={{ position: 'absolute', left: '-52px', width: '20px', height: '20px', background: '#C9A96E', borderRadius: '50%', border: '4px solid #0D0C0B' }} />
                <div style={{ marginBottom: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#F0EDE8', marginBottom: '4px' }}>{item.company}</h3>
                    <div style={{ fontSize: '18px', color: '#C9A96E', fontWeight: '600' }}>{item.role}</div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '14px', color: 'rgba(240, 237, 232, 0.6)' }}>
                    <div>{item.location}</div>
                    <div>{item.period}</div>
                  </div>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
                  {item.achievements.map((achievement, i) => (
                    <li key={i} style={{ paddingLeft: '20px', position: 'relative', color: 'rgba(240, 237, 232, 0.8)' }}>
                      <span style={{ position: 'absolute', left: '0', color: '#C9A96E', fontWeight: '700' }}>→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-container">
        <motion.div
          ref={stackRef}
          initial={{ opacity: 0, y: 50 }}
          animate={stackInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">My Stack</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, y: -4 }}
                style={{
                  padding: '20px',
                  background: 'rgba(26, 24, 20, 0.6)',
                  border: '1px solid rgba(201, 169, 110, 0.2)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  fontWeight: '600',
                  color: '#F0EDE8',
                  transition: 'all 0.3s ease',
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="section-container">
        <motion.div
          ref={processRef}
          initial={{ opacity: 0, y: 50 }}
          animate={processInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="section-header">
            <h2 className="section-title">How I Work</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  padding: '32px',
                  background: 'rgba(26, 24, 20, 0.4)',
                  borderLeft: '4px solid #C9A96E',
                  borderRadius: '8px',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#C9A96E', minWidth: '60px' }}>{step.number}</div>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#F0EDE8', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ color: 'rgba(240, 237, 232, 0.7)' }}>{step.description}</p>
                </div>
              </motion.div>
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

export default AboutPage;