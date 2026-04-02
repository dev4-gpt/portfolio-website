import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'SymphonyAI',
    role: 'Data Scientist Intern',
    location: 'Bengaluru, India',
    period: 'Jan 2024 – Jul 2024',
    achievements: [
      'EDA and time-series analysis on multivariate sensor data → +4% product throughput',
      'Predictive maintenance models (TensorFlow, Scikit-learn) → -25% unplanned downtime, +3% energy efficiency',
      'YOLOv7 asset classification → +30% accuracy, -25% false positives in anomaly detection',
    ],
  },
  {
    company: 'Biocube Matrics / Bioqube.ai',
    role: 'AI Intern',
    location: 'Delhi NCR, India',
    period: 'Jul 2023 – Aug 2023',
    achievements: [
      'YOLOv7 real-time violence detection system → 75% accuracy',
      'Large-scale video data pipelines processing 500,000+ hours → +20% model accuracy, -30% false positives',
      'FastAPI REST services deployment → -40% system response time',
    ],
  },
  {
    company: 'National University of Singapore',
    role: 'Research Assistant',
    location: 'Singapore',
    period: 'Jun 2023 – Jul 2023',
    achievements: [
      'Conv-LSTM and Bi-LSTM models for pose estimation → 95% accuracy, -30% response time',
      'Dataset quality improvements → +15% prediction accuracy',
      'Deep learning architecture optimization → -20% false positives',
    ],
  },
  {
    company: 'Research Assistantship',
    role: 'AI Safety & Proxy-Based Architectures',
    location: 'Philadelphia, PA',
    period: 'Present',
    achievements: [
      'Researched proxy-based architectures for safety-critical AI systems and surrogate objective impact',
      'Designed experimental setups measuring failure modes and misalignment risks under distribution shifts',
      'Empirical robustness analysis; contributed to interpretability and reliability frameworks for high-stakes AI',
    ],
  },
];

const WorkExperience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container" id="experience">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building AI systems from research to production across continents
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                display: 'flex',
                gap: '24px',
                padding: '32px',
                background: 'rgba(26, 24, 20, 0.4)',
                border: '1px solid rgba(201, 169, 110, 0.2)',
                borderRadius: '16px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                borderColor: 'rgba(201, 169, 110, 0.4)',
                transform: 'translateY(-4px)',
                boxShadow: '0 20px 60px rgba(201, 169, 110, 0.1)',
              }}
            >
              <motion.div
                style={{
                  flexShrink: 0,
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #C9A96E 0%, #A67C52 100%)',
                  color: '#0D0C0B',
                  borderRadius: '12px',
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Briefcase size={24} />
              </motion.div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#F0EDE8', marginBottom: '4px' }}>{exp.company}</h3>
                    <h4 style={{ fontSize: '18px', color: '#C9A96E', fontWeight: '600' }}>{exp.role}</h4>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '14px', color: 'rgba(240, 237, 232, 0.6)' }}>
                    <div>{exp.location}</div>
                    <div>{exp.period}</div>
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      style={{
                        paddingLeft: '24px',
                        position: 'relative',
                        color: 'rgba(240, 237, 232, 0.8)',
                        lineHeight: '1.6',
                      }}
                    >
                      <span style={{ position: 'absolute', left: '0', color: '#C9A96E', fontWeight: '700' }}>→</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
