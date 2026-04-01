import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, FileText, Mail } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aryamandev/', icon: Linkedin },
  { name: 'Instagram', url: 'https://www.instagram.com/aryamandev/', icon: Instagram },
  { name: 'Twitter', url: 'https://x.com/artamandev', icon: Twitter },
  { name: 'Substack', url: 'https://substack.com/@aryamandev', icon: FileText },
  { name: 'Medium', url: 'https://medium.com/@aryamandev.college', icon: FileText },
];

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="contact-content"
        >
          <span className="section-label">Let's Connect</span>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Interested in collaboration, research opportunities, or just want to chat about AI and tech? 
            <br />Let's build something extraordinary together.
          </p>

          <motion.div
            className="social-links"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  <Icon size={24} />
                  <span>{link.name}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <a href="mailto:aryamandev.college@gmail.com" className="btn-primary-large">
              <Mail size={20} />
              <span>Send me an email</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;