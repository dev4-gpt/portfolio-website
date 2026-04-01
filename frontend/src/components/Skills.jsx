import { motion } from 'framer-motion';

const skills = [
  { category: 'Generative AI & LLM Systems', items: ['LangChain', 'RAG Pipelines', 'OpenAI', 'Claude', 'LangGraph'] },
  { category: 'Computer Vision', items: ['YOLO', 'OpenCV', 'TensorFlow', 'PyTorch', 'Object Detection'] },
  { category: 'MLOps & Automation', items: ['n8n', 'Docker', 'FastAPI', 'CI/CD', 'DigitalOcean'] },
  { category: 'Deep Learning', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Neural Networks', 'Model Optimization'] },
  { category: 'Creative & Web', items: ['React', 'Framer Motion', '3D Design', 'UI/UX', 'Storytelling'] },
  { category: 'AI Product Thinking', items: ['System Design', 'Product Strategy', 'User Research', 'Prototyping'] },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="section-header"
        >
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skillSet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="skill-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <h3 className="skill-category">{skillSet.category}</h3>
              <div className="skill-items">
                {skillSet.items.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(201, 169, 110, 0.2)' }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;