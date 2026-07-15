import { motion } from 'framer-motion';

const ProjectCard = ({ project, index, parallaxY }) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    }
  };

  const renderLinks = () => {
    if (project.links) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{ color: '#C9A96E', fontWeight: '600', textDecoration: 'none' }}
            >
              {link.label} →
            </a>
          ))}
        </div>
      );
    }
    
    if (project.link) {
      return <span style={{ color: '#C9A96E', fontWeight: '600' }}>View Project →</span>;
    }
    
    return null;
  };

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{ 
        minHeight: '500px',
        height: 'auto',
        cursor: (project.link || project.links) ? 'pointer' : 'default',
        y: parallaxY,
        display: 'flex',
        flexDirection: 'column',
      }}
      onClick={handleClick}
    >
      <div className="project-image" style={{ flexShrink: 0 }}>
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-overlay" />
      <div className="project-category">{project.category}</div>
      <div className="project-content" style={{ 
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '24px',
      }}>
        <div>
          <h3 className="project-title" style={{ marginBottom: '12px' }}>{project.title}</h3>
          <p className="project-description" style={{ 
            lineHeight: '1.6',
            marginBottom: '16px',
            overflow: 'visible',
            whiteSpace: 'normal',
          }}>{project.description}</p>
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
          {renderLinks()}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
