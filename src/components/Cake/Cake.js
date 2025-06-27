import  { useState } from 'react';
import './Cake.css';
import { motion } from 'framer-motion';

const Cake = () => {
  const [candlesBlown, setCandlesBlown] = useState(false);

  setTimeout(() => {
    setCandlesBlown(true);
  }, 2000);

  return (
    <motion.div 
      className="cake-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="table"></div>
      <div className="cake">
        <div className="cake-top"></div>
        <div className="cake-middle"></div>
        <div className="cake-bottom"></div>
        {!candlesBlown && (
          <>
            <div className="candle candle1">
              <div className="flame"></div>
            </div>
            <div className="candle candle2">
              <div className="flame"></div>
            </div>
            <div className="candle candle3">
              <div className="flame"></div>
            </div>
          </>
        )}
        {candlesBlown && <div className="smoke"></div>}
      </div>
    </motion.div>
  );
};

export default Cake;