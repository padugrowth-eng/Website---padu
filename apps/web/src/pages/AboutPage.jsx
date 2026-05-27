
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedCard from '@/components/AnimatedCard.jsx';

const AboutPage = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      title: t('about.features.0.title'),
      description: t('about.features.0.description'),
    },
    {
      icon: TrendingUp,
      title: t('about.features.1.title'),
      description: t('about.features.1.description'),
    },
    {
      icon: Target,
      title: t('about.features.2.title'),
      description: t('about.features.2.description'),
    },
    {
      icon: Zap,
      title: t('about.features.3.title'),
      description: t('about.features.3.description'),
    },
  ];

  return (
    <>
      <Helmet>
        <title>{t('about.title')} - PADU Growth</title>
        <meta
          name="description"
          content={t('about.subtitle')}
        />
      </Helmet>

      <Header />

      <main className="pt-20">
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t('about.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('about.subtitle')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto mb-20"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-balance">{t('about.mission.title')}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.mission.p1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.mission.p2')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.mission.p3')}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                      <feature.icon className="text-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-balance">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t('about.values.title')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                {t('about.values.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {[0, 1, 2].map((index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-semibold mb-3 text-primary text-balance">
                      {t(`about.values.items.${index}.title`)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {t(`about.values.items.${index}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
