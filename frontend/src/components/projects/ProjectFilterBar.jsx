import { motion } from 'framer-motion';

const ProjectFilterBar = ({ filters, activeFilter, onFilterChange }) => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
      {filters.map((filter) => (
        <motion.button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: '12px 24px',
            borderRadius: '30px',
            border: activeFilter === filter ? '1px solid #C9A96E' : '1px solid rgba(240, 237, 232, 0.1)',
            background: activeFilter === filter ? 'rgba(201, 169, 110, 0.1)' : 'rgba(13, 12, 11, 0.5)',
            color: activeFilter === filter ? '#C9A96E' : '#F0EDE8',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease',
          }}
        >
          {filter}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilterBar;
