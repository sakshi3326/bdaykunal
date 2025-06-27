import './PartyPeople.css';
import { motion } from 'framer-motion';

const PartyPeople = () => {
  // Balloon colors
  const balloonColors = [
    '#FF5252', '#FF4081', '#E040FB', '#7C4DFF', 
    '#536DFE', '#448AFF', '#40C4FF', '#18FFFF',
    '#64FFDA', '#69F0AE', '#B2FF59', '#EEFF41',
    '#FFFF00', '#FFD740', '#FFAB40', '#FF6E40'
  ];

  // Generate random balloons
  const balloons = Array(20).fill().map((_, i) => {
    const size = Math.random() * 30 + 20;
    return {
      id: i,
      color: balloonColors[Math.floor(Math.random() * balloonColors.length)],
      size,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      sway: Math.random() * 20 - 10,
      rotation: Math.random() * 20 - 10
    };
  });

  return (
    <div className="party-people-container">
      <div className="party-people">
        {/* Existing people animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`person-${i}`}
            className={`person person${i}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div className="person-head"></div>
            <div className="person-body"></div>
            <div className="person-arm left"></div>
            <div className="person-arm right"></div>
          </motion.div>
        ))}
      </div>
      
      {/* Balloon animation - in separate container */}
      <div className="balloons-container">
        {balloons.map((balloon) => (
          <motion.div
            key={`balloon-${balloon.id}`}
            className="balloon"
            style={{
              backgroundColor: balloon.color,
              width: `${balloon.size}px`,
              height: `${balloon.size * 1.2}px`,
              left: `${balloon.left}%`,
              top: `-${balloon.size}px`,
              rotate: balloon.rotation
            }}
            initial={{ y: 0, x: 0 }}
            animate={{ 
              y: `calc(100vh + ${balloon.size}px)`,
              x: `${balloon.sway}px`,
              rotate: balloon.rotation + 5
            }}
            transition={{
              duration: balloon.duration,
              delay: balloon.delay,
              repeat: Infinity,
              repeatType: 'loop',
              ease: "linear"
            }}
          >
            <div className="balloon-string"></div>
            <div className="balloon-tie"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartyPeople;