import React, { useState } from 'react';
import { motion } from 'framer-motion';
import sketch from '../assets/img/sketch1.png'

function CardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  };

  return (
    <div className="flex items-center justify-center cursor-pointer m-auto mb-10">
      <div
        className="flip-card w-[250px] h-[260px] rounded-md"
        onMouseEnter={handleFlip} 
        onMouseLeave={handleFlip} 
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${sketch})` }}
          >
            <h1 className="text-2xl font-bold">Sky</h1>
            <p>Live on top of the world</p>
          </div>
          <div
            className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
            style={{ backgroundImage: `url(${sketch})` }}
          >
            <h1 className="text-2xl font-bold">Earth</h1>
            <p>Or in the maze of the city</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default CardFlip;