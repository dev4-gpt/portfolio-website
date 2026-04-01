import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: 'What kind of AI projects do you take on?',
    answer: 'I work on end-to-end AI systems — from LLM-based applications and RAG pipelines to computer vision solutions and ML automation. My sweet spot is building AI products that solve real problems, whether that\'s automating workflows, analyzing complex data, or creating intelligent interfaces. I\'m especially interested in projects that push the boundaries of what\'s technically possible while remaining practical and deployable.',
  },
  {
    question: 'What\'s your current focus / what are you building?',
    answer: 'Currently pursuing my MS in AI at Penn State while working on AI safety research focused on proxy-based architectures and alignment. On the side, I\'m building AI-native tools for automation and creative web experiences. I\'m also actively writing about AI research, product thinking, and the cultural implications of generative AI on Substack and Medium.',
  },
  {
    question: 'What tools and stack do you use?',
    answer: 'My core stack includes Python (PyTorch, TensorFlow, LangChain), modern web frameworks (React, FastAPI), and MLOps tools (Docker, n8n, AWS/GCP). For computer vision, I work extensively with YOLO and OpenCV. For data work, NumPy, Pandas, and Matplotlib are my go-tos. I believe in using the right tool for the problem — not being dogmatic about tech choices.',
  },
  {
    question: 'Are you open to collaborations or internships?',
    answer: 'Yes! I\'m always interested in working on ambitious AI projects, especially in research, product development, or creative applications of ML. I\'m open to internships, research assistantships, and collaborations with teams building the future of AI. If you\'re working on something interesting, let\'s talk.',
  },
  {
    question: 'Where can I read your writing?',
    answer: 'I publish regularly on Substack (@aryamandev) and Medium (@aryamandev.college). My writing covers AI research breakdowns, product thinking, automation workflows, and the cultural side of technology. I try to make complex technical concepts accessible while staying rigorous about the details.',
  },
  {
    question: 'How do I get in touch?',
    answer: 'The best way is LinkedIn (linkedin.com/in/aryamandev) or email me through the contact form below. I typically respond within 24-48 hours. For quick questions or casual conversations, you can also find me on X/Twitter (@artamandev) or Instagram (@aryamandev).',
  },
];

const FAQItem = ({ faq, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={`faq-item ${isOpen ? 'open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05 }}
    >
      <button
        className="faq-question"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          <span className="faq-number">{index + 1}.</span>
          {faq.question}
        </span>
        <Plus className="faq-icon" size={24} />
      </button>
      <div className="faq-answer">
        <div className="faq-answer-content">
          {faq.answer}
        </div>
      </div>
    </motion.div>
  );
};

const FAQ = () => {
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
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;