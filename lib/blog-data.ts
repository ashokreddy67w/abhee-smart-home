export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  publishedAt: string;
  metaTitle: string;
  metaDescription: string;
  qa: { q: string; a: string }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "how-much-does-smart-home-automation-cost-in-india",
    title: "How Much Does Smart Home Automation Cost in India?",
    excerpt: "A straight answer on budgets, from a single smart lock to a full villa build.",
    heroImage: "https://picsum.photos/seed/abhee-blog-cost/1800/1000",
    heroImageAlt: "Smart home automation control panel in an Indian villa",
    publishedAt: "2026-06-15",
    metaTitle: "How Much Does Smart Home Automation Cost in India? | ABHEE Smart Liv",
    metaDescription:
      "Smart home automation in India typically ranges from ₹2 lakh for basic control to ₹15 lakh+ for a full villa build. See what drives the price.",
    qa: [
      {
        q: "What is the starting cost of smart home automation in India?",
        a: "Entry-level automation covering lighting and one or two rooms typically starts around ₹2,00,000, depending on the number of switches and devices involved.",
      },
      {
        q: "What does a full villa automation package cost?",
        a: "A complete villa build — automation, security, home theatre and lighting — usually ranges from ₹10,00,000 to ₹25,00,000 depending on size and finish level.",
      },
      {
        q: "Does automation cost more in a retrofit than new construction?",
        a: "Retrofits can cost slightly more per point due to concealed wiring work, though most modern automation is designed to avoid breaking walls.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
