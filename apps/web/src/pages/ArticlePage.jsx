import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  Linkedin,
  MessageCircle,
  Link as LinkIcon
} from "lucide-react";

import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import { useLanguage } from "@/contexts/LanguageContext.jsx";

const API_URL =
"https://script.google.com/macros/s/AKfycbz7VNkFv8jp2szJ1-fYfrzJm-BayuPhPh2XAE0VOd0dldSbddLG96p6_lH4YzvSK-ui/exec";

function ArticlePage() {
const { slug } = useParams();
const { language } = useLanguage();

const [article, setArticle] = useState(null);
const [loading, setLoading] = useState(true);
const [relatedArticles, setRelatedArticles] = useState([]);


useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then((data) => {

  const found = data.find(
    (item) => item.slug === slug
  );

  setArticle(found || null);

  if (found) {
    const related = data
      .filter(
        (item) =>
          item.slug !== slug &&
          (
            language === "en"
              ? item.category_en === found.category_en
              : item.category_id === found.category_id
          )
      )
      .slice(0, 3);

    setRelatedArticles(related);
  }

  setLoading(false);
})
  .catch((err) => {
    console.error(err);
    setLoading(false);
  });


}, [slug]);

if (loading) {
return (
<> <Header /> <div className="min-h-screen flex items-center justify-center">
Loading... </div> <Footer />
</>
);
}

if (!article) {
return (
<> <Header /> <div className="min-h-screen flex items-center justify-center">
Article Not Found </div> <Footer />
</>
);
}

const title =
language === "en"
? article.title_en
: article.title_id;

const category =
language === "en"
? article.category_en
: article.category_id;

const content =
language === "en"
? article.content_en
: article.content_id;

const readingTime = Math.ceil(
  content
    .replace(/<[^>]*>/g, "")
    .split(/\s+/)
    .length / 200
);
  
const articleUrl =
  `https://padu.id/insights/${article.slug}`;
  
return (
<> <Helmet>

  <title>
    {language === "en"
      ? article.meta_title_en
      : article.meta_title_id}
  </title>

  <meta
    name="description"
    content={
      language === "en"
        ? article.meta_description_en
        : article.meta_description_id
    }
  />

  <meta
    property="og:title"
    content={
      language === "en"
        ? article.meta_title_en
        : article.meta_title_id
    }
  />

  <meta
    property="og:description"
    content={
      language === "en"
        ? article.meta_description_en
        : article.meta_description_id
    }
  />

  <meta
    property="og:image"
    content={article.image}
  />

  <meta
    property="og:type"
    content="article"
  />

  <meta
    property="og:url"
    content={articleUrl}
  />

  <meta
    property="og:site_name"
    content="PADU Growth"
  />

</Helmet>

  <Header />

  <main className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">

      <div className="mb-4 text-primary font-medium">
        {category}
      </div>

      {article.image && (
        <img
          src={article.image}
          alt={title}
          className="w-full h-[400px] object-cover rounded-2xl mb-10"
        />
      )}

      <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
        {title}
      </h1>

     <div className="text-muted-foreground mb-10">

  <div className="flex flex-wrap items-center gap-2">

    <span>
      {article.date
        ? new Date(article.date).toLocaleDateString(
            language === "en" ? "en-US" : "id-ID",
            {
              year: "numeric",
              month: "long",
              day: "numeric"
            }
          )
        : "-"}
    </span>

    <span>•</span>

    <span>{readingTime} min read</span>

  </div>

  <div className="mt-2">
    By {article.author}
  </div>

  <div className="flex items-center gap-3 mt-6">

    <a
      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-card border border-border hover:border-primary transition"
    >
      <Linkedin size={18} />
    </a>

    <a
      href={`https://wa.me/?text=${encodeURIComponent(title + " " + articleUrl)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-xl bg-card border border-border hover:border-primary transition"
    >
      <MessageCircle size={18} />
    </a>

    <button
      onClick={() => {
        navigator.clipboard.writeText(articleUrl);
        alert("Link copied!");
      }}
      className="p-3 rounded-xl bg-card border border-border hover:border-primary transition"
    >
      <LinkIcon size={18} />
    </button>

  </div>

</div>

<div
  className="max-w-none text-lg leading-8 article-content"
  dangerouslySetInnerHTML={{
    __html: content
  }}
/>

{/* CTA PADU */}
<div className="mt-12 p-8 rounded-2xl border border-border bg-card">

  <h3 className="text-2xl font-bold mb-3">
    Apakah Bisnis Anda Siap Bertumbuh?
  </h3>

  <p className="text-muted-foreground mb-6">
    Diskusikan kebutuhan pendanaan, strategic partnership,
    valuasi bisnis, atau ekspansi perusahaan bersama tim PADU Growth.
  </p>

  <div className="flex flex-wrap gap-4">

    <a
      href="/contact"
      className="inline-flex items-center px-6 py-3 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
    >
      Jadwalkan Konsultasi
    </a>

    <a
      href="https://wa.me/628XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 rounded-xl border border-primary text-primary font-medium hover:bg-primary hover:text-white transition"
    >
      Hubungi via WhatsApp
    </a>

  </div>

</div>

      {relatedArticles.length > 0 && (

        <section className="mt-20 pt-12 border-t border-border">

          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            {language === "en"
              ? "Related Articles"
              : "Artikel Terkait"}
          </h2>

          <div className="space-y-5">

            {relatedArticles.map((item) => (

              <Link
                key={item.slug}
                to={`/insights/${item.slug}`}
                className="flex flex-col md:flex-row bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300"
              >

                {item.image && (
                  <img
                    src={item.image}
                    alt={
                      language === "en"
                        ? item.title_en
                        : item.title_id
                    }
                    className="w-full md:w-64 h-44 object-cover"
                  />
                )}

                <div className="p-6 flex flex-col justify-center">

                  <div className="text-primary text-xs uppercase tracking-wider mb-2">
                    {language === "en"
                      ? item.category_en
                      : item.category_id}
                  </div>

                  <h3 className="text-xl font-bold mb-3 leading-snug hover:text-primary transition-colors">
                    {language === "en"
                      ? item.title_en
                      : item.title_id}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {language === "en"
                      ? item.excerpt_en
                      : item.excerpt_id}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>

      )}

    </div> {/* PENUTUP max-w-4xl mx-auto px-6 */}

  </main>

  <Footer />
</>

);
}
