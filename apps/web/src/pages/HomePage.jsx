
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Cpu, Heart, ShoppingBag, Sprout, Palette, Leaf, Factory, Users2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import HeroSection from '@/components/HeroSection.jsx';
import PhilosophySection from '@/components/PhilosophySection.jsx';
import WhatWeDoSection from '@/components/WhatWeDoSection.jsx';
import HowWeWorkSection from '@/components/HowWeWorkSection.jsx';
import AnimatedCard from '@/components/AnimatedCard.jsx';
import AnimatedCounter from '@/components/AnimatedCounter.jsx';

const HomePage = () => {
  const { t } = useLanguage();

  const sectors = [
    { icon: Cpu, name: t('home.focus.sectors.tech'), color: 'text-blue-400' },
    { icon: Heart, name: t('home.focus.sectors.health'), color: 'text-red-400' },
    { icon: ShoppingBag, name: t('home.focus.sectors.consumer'), color: 'text-purple-400' },
    { icon: Sprout, name: t('home.focus.sectors.agritech'), color: 'text-green-400' },
    { icon: Palette, name: t('home.focus.sectors.creative'), color: 'text-pink-400' },
    { icon: Leaf, name: t('home.focus.sectors.sustainability'), color: 'text-emerald-400' },
    { icon: Factory, name: t('home.focus.sectors.manufacturing'), color: 'text-orange-400' },
    { icon: Users2, name: t('home.focus.sectors.social'), color: 'text-cyan-400' },
  ];

  return (
    <>
      <Helmet>
        <title>PADU Growth - Connecting Capital. Creating Growth.</title>
        <meta
          name="description"
          content="PADU Growth connects capital with growth opportunities across Indonesia's most promising sectors. Investment connection, growth advisory, and strategic partnerships."
        />
      </Helmet>

      <Header />

      <main>
        <HeroSection />
        <PhilosophySection />
        <WhatWeDoSection />
        <HowWeWorkSection />

        <section className="py-24 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t('home.focus.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('home.focus.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {sectors.map((sector, index) => (
                <AnimatedCard key={index} delay={index * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <sector.icon className={`${sector.color} mb-4`} size={40} />
                    <h3 className="text-lg font-semibold text-balance">{sector.name}</h3>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t('home.why.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('home.why.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[0, 1, 2, 3].map((index) => (
                <AnimatedCard key={index} delay={index * 0.15}>
                  <h3 className="text-2xl font-semibold mb-3 text-balance">
                    {t(`home.why.items.${index}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`home.why.items.${index}.description`)}
                  </p>
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
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{t('home.partners.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t('home.partners.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <AnimatedCounter target={50} suffix="+" />
                <p className="text-xl font-medium mt-4">{t('home.partners.investors')}</p>
                <p className="text-muted-foreground mt-2">{t('home.partners.investorsDesc')}</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={100} suffix="+" />
                <p className="text-xl font-medium mt-4">{t('home.partners.strategic')}</p>
                <p className="text-muted-foreground mt-2">{t('home.partners.strategicDesc')}</p>
              </div>
              <div className="text-center">
                <AnimatedCounter target={20} suffix="+" />
                <p className="text-xl font-medium mt-4">{t('home.partners.ecosystem')}</p>
                <p className="text-muted-foreground mt-2">{t('home.partners.ecosystemDesc')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
