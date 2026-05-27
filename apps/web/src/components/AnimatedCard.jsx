import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className={`bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:card-glow-hover ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;