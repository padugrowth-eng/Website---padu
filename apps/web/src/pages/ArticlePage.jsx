import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

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

useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then((data) => {
const found = data.find(
(item) => item.slug === slug
);


    setArticle(found || null);
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

return (
<> <Helmet> <title>
{language === "en"
? article.meta_title_en
: article.meta_title_id} </title>


    <meta
      name="description"
      content={
        language === "en"
          ? article.meta_description_en
          : article.meta_description_id
      }
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
        <div>
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
        </div>

        <div className="mt-2">
          By {article.author}
        </div>
      </div>

      <div
  className="max-w-none text-lg leading-8 article-content"
  dangerouslySetInnerHTML={{
    __html: content
  }}
/>

    </div>
  </main>

  <Footer />
</>

);
}

export default ArticlePage;
