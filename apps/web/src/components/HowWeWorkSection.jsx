
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import TimelineStep from '@/components/TimelineStep.jsx';

const HowWeWorkSection = () => {
  const { t } = useLanguage();

  const steps = [0, 1, 2, 3, 4];

  return (
    <section className="py-24 bg-card text-card-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            {t('home.howWeWork.title')}
          </h2>
          <p className="text-xl text-card-foreground/80 leading-relaxed">
            {t('home.howWeWork.subtitle')}
          </p>
        </motion.div>

        <div className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0 w-full">
            {steps.map((index) => (
              <TimelineStep
                key={index}
                number={`0${index + 1}`}
                title={t(`howWeWorkPage.stages.${index}.title`)}
                isLast={index === 4}
                delay={index * 0.15}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
