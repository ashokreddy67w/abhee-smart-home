export type GalleryCategory = {
  slug: string;
  name: string;
  images: { src: string; alt: string }[];
};

function categoryImages(slug: string, name: string, count: number): { src: string; alt: string }[] {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/gallery/${slug}/${i + 1}.jpg`,
    alt: `${name} installation by ABHEE Smart Liv — photo ${i + 1}`,
  }));
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { slug: "home-theatre", name: "Home Theatre", images: categoryImages("home-theatre", "Home theatre", 6) },
  { slug: "automation", name: "Automation", images: categoryImages("automation", "Home automation", 6) },
  { slug: "cctv", name: "CCTV", images: categoryImages("cctv", "CCTV surveillance", 6) },
  { slug: "smart-locks", name: "Smart Locks", images: categoryImages("smart-locks", "Smart door lock", 6) },
  { slug: "lighting", name: "Lighting", images: categoryImages("lighting", "Smart lighting", 6) },
  { slug: "curtains", name: "Curtains", images: categoryImages("curtains", "Motorized curtains", 6) },
  { slug: "video-door-phone", name: "Video Door Phone", images: categoryImages("video-door-phone", "Video door phone", 6) },
  { slug: "boom-barrier", name: "Boom Barrier", images: categoryImages("boom-barrier", "Boom barrier", 6) },
  { slug: "wooden-flooring", name: "Wooden Flooring", images: categoryImages("wooden-flooring", "Wooden flooring", 6) },
  { slug: "artificial-lawn", name: "Artificial Lawn", images: categoryImages("artificial-lawn", "Artificial lawn", 6) },
  { slug: "commercial", name: "Commercial", images: categoryImages("commercial", "Commercial installation", 6) },
  { slug: "residential", name: "Residential", images: categoryImages("residential", "Residential installation", 6) },
];

export function getGalleryCategoryBySlug(slug: string) {
  return GALLERY_CATEGORIES.find((c) => c.slug === slug);
}
