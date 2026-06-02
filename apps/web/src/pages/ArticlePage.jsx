import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { articles } from '@/data/articles.js';

const ArticlePage = () => {
  const { slug } = useParams();

  const article = articles.find(
    (item) =>
      item.title
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('?', '')
        .replaceAll(',', '') === slug
  );

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <h1>Article Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="mb-4 text-primary">
            {article.category}
          </div>

          <h1 className="text-5xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="text-muted-foreground mb-10">
            {article.date}
          </div>

          <div className="prose prose-invert max-w-none text-lg leading-8">
            {article.content.split('\n').map((paragraph, index) => (
              paragraph.trim() ? (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
            ) : null
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
};

export default ArticlePage;
