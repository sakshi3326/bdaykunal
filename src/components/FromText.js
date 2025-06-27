import './FromText.css';
import { motion } from 'framer-motion';

const FromText = () => {
  return (
    <motion.div 
      className="from-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 6, duration: 1 }}
    >
      From your innuendo 🤗
    </motion.div>
  );
};

export default FromText;