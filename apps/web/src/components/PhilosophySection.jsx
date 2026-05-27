
import React from 'react';
import { motion } from 'framer-motion';
import { Network, HeartHandshake as Handshake, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';

const PhilosophySection = () => {
  const { t } = useLanguage();

  const cards = [
    { icon: Network, titleKey: 'home.philosophy.cards.0.title', descKey: 'home.philosophy.cards.0.desc' },
    { icon: Handshake, titleKey: 'home.philosophy.cards.1.title', descKey: 'home.philosophy.cards.1.desc' },
    { icon: TrendingUp, titleKey: 'home.philosophy.cards.2.title', descKey: 'home.philosophy.cards.2.desc' },
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(132,255,97,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t('home.philosophy.title')}
          </h2>
          <p className="text-xl text-secondary-foreground/80 leading-relaxed">
            {t('home.philosophy.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className="premium-gradient-border p-8 flex flex-col items-center text-center group hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="w-16 h-16 rounded-full bg-secondary border border-primary/30 flex items-center justify-center mb-6 shadow-[var(--shadow-glow)] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-card-foreground">
                  {t(card.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(card.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
