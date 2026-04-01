import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight, Linkedin, Instagram, FileText, Github } from 'lucide-react';

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/aryamandev/' },
    { icon: () => <span style={{ fontSize: '20px', fontWeight: 'bold' }}>𝕏</span>, url: 'https://x.com/artamandev' },
    { icon: Instagram, url: 'https://www.instagram.com/aryamandev/' },
    { icon: FileText, url: 'https://substack.com/@aryamandev' },
    { icon: FileText, url: 'https://medium.com/@aryamandev.college' },
    { icon: Github, url: 'https://github.com/dev4-gpt' },
    { icon: Github, url: 'https://github.com/dev-aryaman' },
  ];

  return (
    <section className="section-container" id="contact">
      <motion.div
        ref={ref}
        className="contact-section"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-image-wrapper">
          <div className="contact-image">
            <img 
              src="https://customer-assets.emergentagent.com/job_interactive-aryaman/artifacts/qoejdt71_linkedin_pic.jpeg" 
              alt="Aryaman Singh Dev"
            />
            <motion.div
              className="hi-pill"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring' }}
            >
              Hi 👋
            </motion.div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Let's build something</h2>
          <p>Interested in collaboration, research opportunities, or just want to chat about AI and tech?</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="project">What are you building?</label>
              <input
                type="text"
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
                placeholder="Your project or idea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me more..."
                required
              />
            </div>

            <button type="submit" className="submit-btn">
              Send it <ArrowRight size={16} />
            </button>
          </form>

          <div className="social-links-footer">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  {typeof Icon === 'function' && Icon.name === '' ? <Icon /> : <Icon size={20} />}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;