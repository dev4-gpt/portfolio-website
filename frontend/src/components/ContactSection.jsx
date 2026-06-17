import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ArrowRight, Linkedin, Instagram, FileText, Github, Loader2 } from 'lucide-react';

const XIcon = () => <span style={{ fontSize: '20px', fontWeight: 'bold' }}>𝕏</span>;

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const body = await response.text();
        console.error('Contact API error', response.status, body);
        throw new Error(
          body || 'Failed to deliver your message. Please try again.'
        );
      }

      setStatus({
        loading: false,
        success: 'Message sent successfully! Talk to you soon.',
        error: null,
      });

      // Clear the form fields on success
      setFormData({
        name: '',
        email: '',
        project: '',
        message: '',
      });
    } catch (err) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || 'Something went wrong. Please check your connection.',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/aryamandev/' },
    { icon: XIcon, url: 'https://x.com/artamandev' },
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
          <h2>Let&apos;s build something</h2>
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
                disabled={status.loading}
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
                disabled={status.loading}
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
                disabled={status.loading}
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
                disabled={status.loading}
              />
            </div>

            {status.success && (
              <div style={{ color: '#4ade80', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {status.success}
              </div>
            )}

            {status.error && (
              <div style={{ color: '#f87171', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {status.error}
              </div>
            )}

            <button type="submit" className="submit-btn" disabled={status.loading}>
              {status.loading ? (
                <>
                  Sending... <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  Send it <ArrowRight size={16} />
                </>
              )}
            </button>
          </form>

          <div className="social-links-footer">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.url}
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