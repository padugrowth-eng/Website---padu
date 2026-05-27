
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import StageCard from '@/components/StageCard.jsx';

export default function HowWeWorkPage() {
  const { t, language, toggleLanguage } = useLanguage();
  const [expandedStage, setExpandedStage] = useState(0);

  const stages = [0, 1, 2, 3, 4];

  return (
    <>
      <Helmet>
        <title>{t('howWeWorkPage.title')} - PADU Growth</title>
        <meta name="description" content={t('howWeWorkPage.subtitle')} />
      </Helmet>

      <Header />

      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground text-balance">
                {t('howWeWorkPage.title')}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('howWeWorkPage.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="shrink-0"
            >
              <button 
                onClick={toggleLanguage} 
                className="px-6 py-2.5 rounded-full border border-border hover:border-primary text-sm font-medium transition-all duration-300 bg-card hover:bg-secondary text-foreground flex items-center gap-2"
                aria-label="Toggle Language"
              >
                <span className={language === 'en' ? 'text-primary' : 'text-muted-foreground'}>EN</span>
                <span className="text-border">/</span>
                <span className={language === 'id' ? 'text-primary' : 'text-muted-foreground'}>ID</span>
              </button>
            </motion.div>
          </div>

          {/* Stages List */}
          <div className="space-y-6">
            {stages.map((index) => {
              // Safely access arrays from translations
              const processList = t(`howWeWorkPage.stages.${index}.process`);
              const outputList = t(`howWeWorkPage.stages.${index}.output`);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <StageCard
                    stageNumber={`0${index + 1}`}
                    title={t(`howWeWorkPage.stages.${index}.title`)}
                    description={t(`howWeWorkPage.stages.${index}.description`)}
                    processList={Array.isArray(processList) ? processList : []}
                    outputList={Array.isArray(outputList) ? outputList : []}
                    isExpanded={expandedStage === index}
                    onToggle={() => setExpandedStage(expandedStage === index ? null : index)}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
