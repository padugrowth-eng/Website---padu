import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";

const API_URL =
"https://script.google.com/macros/s/AKfycbz7VNkFv8jp2szJ1-fYfrzJm-BayuPhPh2XAE0VOd0dldSbddLG96p6_lH4YzvSK-ui/exec";

function ArticlePage() {
const { slug } = useParams();

const [article, setArticle] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
fetch(API_URL)
.then((res) => res.json())
.then((data) => {
const found = data.find((item) => item.slug === slug);
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

return (
<> <Header />

```
  <main className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">

      <div className="mb-4 text-primary">
        {article.category}
      </div>

      <h1 className="text-5xl font-bold mb-8">
        {article.title}
      </h1>

      <div className="text-muted-foreground mb-8">
        {article.date}
      </div>

      <div className="prose prose-invert max-w-none">
        {article.content &&
          article.content.split("\n").map((paragraph, index) =>
            paragraph.trim() ? (
              <p key={index}>{paragraph}</p>
            ) : null
          )}
      </div>

    </div>
  </main>

  <Footer />
</>
```

);
}

export default ArticlePage;
