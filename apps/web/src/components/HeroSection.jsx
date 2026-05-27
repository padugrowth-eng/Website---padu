
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-balance tracking-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed">
            {t('home.hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200"
            >
              {t('home.hero.cta1')}
            </Link>
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold hover:bg-secondary/80 active:scale-[0.98] transition-all duration-200"
            >
              {t('home.hero.cta2')}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
