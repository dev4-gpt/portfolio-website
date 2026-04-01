import { motion } from 'framer-motion';
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
      'Collaborated on reproducible experimentation pipelines for AI system safety evaluation',
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-label">Professional Journey</span>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="experience-card"
            >
              <motion.div 
                className="experience-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Briefcase size={24} />
              </motion.div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <h4 className="experience-role">{exp.role}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-location">{exp.location}</span>
                    <span className="experience-period">{exp.period}</span>
                  </div>
                </div>
                
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;