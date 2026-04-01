import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/writing' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0 }}
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img 
            src="https://customer-assets.emergentagent.com/job_interactive-aryaman/artifacts/qoejdt71_linkedin_pic.jpeg" 
            alt="Aryaman Singh Dev"
            className="nav-avatar"
          />
          <span className="nav-name">Aryaman Singh Dev</span>
        </Link>

        <div className="nav-links">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="nav-badge">
          <span className="status-dot"></span>
          <span>Available for work</span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;