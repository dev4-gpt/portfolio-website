import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grain" />
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-text"
          >
            <p className="footer-quote">
              "At the intersection of deep tech, generative AI, and digital culture"
            </p>
            <p className="footer-copyright">
              © {new Date().getFullYear()} Aryaman Singh Dev. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;