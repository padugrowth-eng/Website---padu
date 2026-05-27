
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Rocket, DollarSign, Users, BarChart3 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import ServiceCard from './ServiceCard.jsx';

const WhatWeDoSection = () => {
  const { t } = useLanguage();

  const services = [
    { icon: Zap, titleKey: 'services.items.0.title', descKey: 'services.items.0.description' },
    { icon: Rocket, titleKey: 'services.items.1.title', descKey: 'services.items.1.description' },
    { icon: DollarSign, titleKey: 'services.items.2.title', descKey: 'services.items.2.description' },
    { icon: Users, titleKey: 'services.items.3.title', descKey: 'services.items.3.description' },
    { icon: BarChart3, titleKey: 'services.items.4.title', descKey: 'services.items.4.description' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t('home.whatWeDo.title')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('home.whatWeDo.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              delay={index * 0.1}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
          {services.slice(3, 5).map((service, index) => (
            <ServiceCard
              key={index + 3}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descKey)}
              delay={(index + 3) * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
