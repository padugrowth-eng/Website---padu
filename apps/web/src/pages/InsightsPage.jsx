
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { TrendingUp, Lightbulb, BarChart3, Target } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedCard from '@/components/AnimatedCard.jsx';

const InsightsPage = () => {
  const { t } = useLanguage();
  
  const insightIcons = [TrendingUp, Lightbulb, BarChart3, Target];
  const dates = ['2026-05-15', '2026-05-10', '2026-05-05', '2026-04-28'];

  return (
    <>
      <Helmet>
        <title>Insights - PADU Growth</title>
        <meta
          name="description"
          content="Expert insights on fundraising strategy, investment trends, growth case studies, and market analysis from PADU Growth's team."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t('insights.title')}</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('insights.subtitle')}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[0, 1, 2, 3].map((index) => {
                const Icon = insightIcons[index];
                return (
                  <AnimatedCard key={index} delay={index * 0.1}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <span className="text-sm font-medium text-primary tracking-wide uppercase">
                          {t(`insights.items.${index}.category`)}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 text-balance">
                        {t(`insights.items.${index}.title`)}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                        {t(`insights.items.${index}.excerpt`)}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                        <span className="text-sm text-muted-foreground">
                          {new Date(dates[index]).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </span>
                        <button className="text-sm font-medium text-primary hover:underline transition-all duration-200">
                          {t('insights.readMore')}
                        </button>
                      </div>
                    </div>
                  </AnimatedCard>
                );
              })}
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
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t('insights.stayInformed')}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {t('insights.subscribeDesc')}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder={t('insights.placeholder')}
                  className="flex-1 px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                >
                  {t('insights.subscribe')}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default InsightsPage;
