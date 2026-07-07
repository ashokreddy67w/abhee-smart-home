import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/blog-data";
import { SITE } from "@/lib/site-config";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { faqSchema, breadcrumbSchema, speakableSchema } from "@/lib/schema";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = getArticleBySlug(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `${SITE.url}/blog/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: [article.heroImage],
    datePublished: article.publishedAt,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
  };

  return (
    <>
      <JsonLd
        data={[
          articleSchema,
          faqSchema(article.qa),
          breadcrumbSchema([
            { name: "Home", url: SITE.url },
            { name: "Journal", url: `${SITE.url}/blog` },
            { name: article.title, url: `${SITE.url}/blog/${article.slug}` },
          ]),
          speakableSchema(["#article-headline"]),
        ]}
      />
      <section className="relative flex min-h-[55svh] flex-col justify-end overflow-hidden px-6 pb-12 pt-32 sm:px-10">
        <Image src={article.heroImage} alt={article.heroImageAlt} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
        <div className="relative mx-auto w-full max-w-3xl">
          <h1 id="article-headline" className="font-serif text-[32px] font-light leading-tight sm:text-[46px]">
            {article.title}
          </h1>
        </div>
      </section>
      <section className="px-6 py-16 sm:px-10">
        <div className="mx-auto max-w-3xl divide-y divide-white/[0.06]">
          {article.qa.map((item) => (
            <Reveal key={item.q} className="py-6">
              <h2 className="font-serif text-[20px] font-light">{item.q}</h2>
       <p className="mt-2 text-[15px] leading-relaxed text-white/65">
  {item.a}
</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
