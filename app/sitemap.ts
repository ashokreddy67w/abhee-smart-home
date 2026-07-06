import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site-config";
import { PRODUCTS } from "@/lib/products-data";
import { CITIES } from "@/lib/cities-data";
import { ARTICLES } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/locations`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${SITE.url}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const cityRoutes: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${SITE.url}/locations/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  const articleRoutes: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: `${SITE.url}/blog/${a.slug}`,
    lastModified: a.publishedAt,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...cityRoutes, ...articleRoutes];
}
