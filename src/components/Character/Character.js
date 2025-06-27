import './Character.css';
import { motion } from 'framer-motion';

const Character = () => {
  return (
    <motion.div
      className="character"
      initial={{ x: '-100%' }}
      animate={{ x: '40%' }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      <div className="head">
        <div className="hair"></div>
        <div className="face">
          <div className="eye left"></div>
          <div className="eye right"></div>
          <div className="blush left"></div>
          <div className="blush right"></div>
          <div className="mouth"></div>
        </div>
        <div className="hair-decoration"></div>
      </div>
      <div className="body">
        <div className="dress"></div>
        <div className="dress-detail"></div>
      </div>
      <div className="arm left">
        <div className="sleeve"></div>
      </div>
      <div className="arm right">
        <div className="sleeve"></div>
      </div>
      <div className="leg left"></div>
      <div className="leg right"></div>
    </motion.div>
  );
};

export default Character;