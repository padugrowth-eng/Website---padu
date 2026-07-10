import React, { useEffect, useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Lightbulb,
  BarChart3,
  Target
} from 'lucide-react';

import { useLanguage } from '@/contexts/LanguageContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AnimatedCard from '@/components/AnimatedCard.jsx';

const API_URL =
  "https://script.google.com/macros/s/AKfycbz7VNkFv8jp2szJ1-fYfrzJm-BayuPhPh2XAE0VOd0dldSbddLG96p6_lH4YzvSK-ui/exec";

const InsightsPage = () => {
  const { t, language } = useLanguage();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const icons = [
    TrendingUp,
    Lightbulb,
    BarChart3,
    Target
  ];

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {

    const sorted = [...data].sort(
        (a, b) => new Date(b.date) - new Date(a.date)
    );

    setArticles(sorted);

    setLoading(false);

    })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Insights - PADU Growth</title>
        <meta
          name="description"
          content="Insights, fundraising strategy, investment trends and growth stories from PADU Growth."
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {t('insights.title')}
              </h1>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('insights.subtitle')}
              </p>
              <div className="max-w-2xl mx-auto mt-10">

                <input
                    type="text"
                    placeholder={
                      language === "en"
                        ? "Search articles..."
                        : "Cari artikel..."
                }
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card px-5 py-4"
          />

            </div>
            </motion.div>

            {loading ? (

              <div className="text-center py-20">
                Loading articles...
              </div>

            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {articles.map((article, index) => {

                  const Icon = icons[index % icons.length];

                  return (
                    <AnimatedCard
                      key={article.slug}
                      delay={index * 0.1}
                    >

                      <div className="flex flex-col h-full">

                       <div className="mb-4">

  {article.image ? (
    <img
      src={article.image}
      alt={
        language === "en"
          ? article.title_en
          : article.title_id
      }
      className="w-full h-56 object-cover rounded-xl"
    />
  ) : (
    <div className="w-full h-56 rounded-xl bg-primary/10 flex items-center justify-center">
      <Icon
        className="text-primary"
        size={48}
      />
    </div>
  )}

</div>

<span className="text-sm font-medium text-primary uppercase">
  {language === "en"
    ? article.category_en
    : article.category_id}
</span>

                        <h2 className="text-2xl font-bold mb-3">
                          {language === 'en'
                            ? article.title_en
                            : article.title_id}
                        </h2>

                        <p className="text-muted-foreground mb-4 flex-1">
                          {language === 'en'
                            ? article.excerpt_en
                            : article.excerpt_id}
                        </p>

                        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">

                          <span className="text-sm text-muted-foreground">
                            {article.date
                              ? new Date(article.date).toLocaleDateString('id-ID', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })
                              : '-'}
                          </span>

                          <a
                            href={`/insights/${article.slug}`}
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            {t('insights.readMore')}
                          </a>

                        </div>

                      </div>

                    </AnimatedCard>
                  );
                })}

              </div>

            )}

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
};

export default InsightsPage;
