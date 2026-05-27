
import React from 'react';
import { motion } from 'framer-motion';

const TimelineStep = ({ number, title, isLast = false, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center flex-1 w-full group"
    >
      {/* Desktop connecting line (Horizontal) */}
      {!isLast && (
        <div className="hidden lg:block absolute left-[50%] top-[31px] w-full h-0.5 bg-border group-hover:bg-primary/50 transition-colors duration-300 z-0" />
      )}

      {/* Mobile connecting line (Vertical) */}
      {!isLast && (
        <div className="absolute lg:hidden top-[31px] left-[50%] -translate-x-1/2 h-[calc(100%+3rem)] w-0.5 bg-border group-hover:bg-primary/50 transition-colors duration-300 z-0" />
      )}

      {/* Circle */}
      <div className="relative z-10 w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center text-muted-foreground font-bold text-xl transition-all duration-300 group-hover:border-primary group-hover:text-primary group-hover:shadow-[var(--shadow-glow)] group-hover:scale-110 shrink-0">
        {number}
      </div>

      {/* Title Container - Fixed height ensures perfect vertical alignment for all steps */}
      <div className="mt-6 flex items-start justify-center text-center h-14 w-full px-2">
        <h3 className="text-xl font-bold text-card-foreground transition-colors duration-300 group-hover:text-primary text-balance">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

export default TimelineStep;
