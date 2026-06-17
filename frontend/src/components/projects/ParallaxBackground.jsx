import { motion } from 'framer-motion';

const ParallaxBackground = ({ y1, y3 }) => {
  return (
    <>
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 169, 110, 0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          y: y1,
          zIndex: 0,
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201, 169, 110, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          y: y3,
          zIndex: 0,
        }}
      />
    </>
  );
};

export default ParallaxBackground;
