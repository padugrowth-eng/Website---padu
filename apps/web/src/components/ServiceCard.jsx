
import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative bg-card border border-border rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-[var(--shadow-glow)] hover:border-primary/30"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/50">
        <Icon className="text-primary transition-transform duration-300 group-hover:scale-110" size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-card-foreground text-balance transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
    </motion.div>
  );
};

export default ServiceCard;
