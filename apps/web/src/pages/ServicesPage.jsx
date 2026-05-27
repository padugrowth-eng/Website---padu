
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HeartHandshake as Handshake, LineChart, DollarSign, Network, Globe2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedCard from '@/components/AnimatedCard.jsx';

const ServicesPage = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const serviceIcons = [Handshake, LineChart, DollarSign, Network, Globe2];

  return (
    <>
      <Helmet>
        <title>Services - PADU Growth</title>
        <meta
          name="description"
          content="Comprehensive services for investors and businesses: Investment connection, growth advisory, capital access, strategic partnerships, and business expansion support."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t('services.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('services.subtitle')}
              </p>
            </motion.div>

            <div className="space-y-12">
              {[0, 1, 2, 3, 4].map((index) => {
                const Icon = serviceIcons[index];
                return (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                          <Icon className="text-primary" size={40} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold mb-4 text-balance">
                          {t(`services.items.${index}.title`)}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {t(`services.items.${index}.description`)}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {[0, 1, 2, 3].map((fIdx) => (
                            <div key={fIdx} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              <p className="text-muted-foreground">
                                {t(`services.items.${index}.features.${fIdx}`)}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t('services.readyTitle')}</h2>
              <p className="text-xl text-secondary-foreground/80 leading-relaxed mb-8">
                {t('services.readySubtitle')}
              </p>
              <button
                onClick={() => navigate('/contact?focus=form')}
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:brightness-110 active:scale-[0.98] transition-all duration-200"
              >
                {t('services.cta')}
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ServicesPage;
