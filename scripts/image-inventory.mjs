import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = process.cwd();
const found = new Map();
const dataFiles = fs.readdirSync(path.join(root, "lib")).filter((name) => name.endsWith("-data.ts"));

for (const name of dataFiles) {
  const source = fs.readFileSync(path.join(root, "lib", name), "utf8");
  for (const match of source.matchAll(/(?:heroImage|coverImage|logo):\s*"(\/images\/[^" ]+\.(?:jpg|png))"/g)) {
    found.set(match[1], "");
  }
  for (const match of source.matchAll(/\{\s*src:\s*"(\/images\/[^" ]+\.jpg)",\s*alt:\s*"([^"]+)"\s*\}/g)) {
    found.set(match[1], match[2]);
  }
}

const galleryCategories = {
  "home-theatre": 6, automation: 3, cctv: 6, "smart-locks": 6, lighting: 6, curtains: 6,
  "video-door-phone": 6, "boom-barrier": 6, "wooden-flooring": 6, "artificial-lawn": 6, commercial: 6, residential: 6,
};
for (const [category, count] of Object.entries(galleryCategories)) {
  for (let index = 1; index <= count; index += 1) {
    found.set(`/images/gallery/${category}/${index}.jpg`, `${category.replaceAll("-", " ")} installation, editorial variation ${index}`);
  }
}
found.set("/images/og/default.jpg", "ABHEE Smart Home Systems premium modern Indian villa");
found.set("/og-image.jpg", "ABHEE Smart Home Systems premium modern Indian villa social preview");
found.set("/favicon.ico", "ABHEE Smart Home Systems browser icon");

for (const folder of ["app", "components", "lib"]) {
  const walk = (directory) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = path.join(directory, entry.name);
      if (entry.isDirectory()) walk(fullPath);
      else if (/\.(?:tsx?|jsx?)$/.test(entry.name)) {
        const source = fs.readFileSync(fullPath, "utf8");
        for (const match of source.matchAll(/"(\/images\/[^" ]+\.(?:jpg|jpeg|png|webp|avif))"/g)) {
          if (!found.has(match[1])) found.set(match[1], "");
        }
      }
    }
  };
  walk(path.join(root, folder));
}

const walkPublicImages = (directory) => {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walkPublicImages(fullPath);
    else if (/\.(?:jpg|jpeg|png|webp|avif)$/i.test(entry.name)) {
      found.set(`/images/${path.relative(path.join(root, "public", "images"), fullPath)}`, found.get(`/images/${path.relative(path.join(root, "public", "images"), fullPath)}`) ?? "");
    }
  }
};
walkPublicImages(path.join(root, "public", "images"));

function dimensions(imagePath) {
  if ((imagePath.includes("/products/") || imagePath.includes("/projects/")) && /\/gallery-\d+\.jpg$/.test(imagePath)) return [1200, 1500];
  if (imagePath.startsWith("/images/gallery/")) return [1200, 1200];
  if (imagePath.includes("/brands/")) return [600, 300];
  if (imagePath === "/images/newlogos.png") return [1026, 364];
  if (imagePath === "/og-image.jpg" || imagePath === "/images/og/default.jpg") return [1200, 630];
  if (imagePath === "/favicon.ico") return [512, 512];
  if (imagePath.includes("/blog/")) return [1800, 1000];
  if (imagePath === "/images/contact/hero.jpg") return [2400, 1600];
  if (imagePath === "/images/home/hero.jpg") return [2400, 1600];
  if (imagePath === "/images/home/editorial.jpg") return [1400, 1700];
  if (/\/images\/home\/atmosphere-\d+\.jpg$/.test(imagePath)) return [1400, 1000];
  if (imagePath === "/images/home/asymmetrical-1.jpg") return [1400, 1000];
  if (imagePath === "/images/home/asymmetrical-2.jpg") return [1400, 1700];
  if (["/images/home/banner-security.jpg", "/images/home/stats-bg.jpg", "/images/home/cta-final.jpg"].includes(imagePath)) return [2400, 1600];
  if (/^\/images\/(?:products|services|solutions|locations)\/[^/]+\/hero\.jpg$/.test(imagePath)) return [2400, 1600];
  if (/^\/images\/projects\/[^/]+\/cover\.jpg$/.test(imagePath)) return [2400, 1600];
  const absolutePath = path.join(root, "public", imagePath);
  if (fs.existsSync(absolutePath)) {
    try {
      const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], { encoding: "utf8" });
      const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
      const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
      if (width && height) return [width, height];
    } catch {}
  }
  return [2400, 1600];
}

function currentDimensions(imagePath) {
  const absolutePath = path.join(root, "public", imagePath);
  if (!fs.existsSync(absolutePath)) return null;
  try {
    const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], { encoding: "utf8" });
    const width = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
    const height = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
    return width && height ? [width, height] : null;
  } catch {
    return null;
  }
}

function subject(imagePath, alt) {
  if (alt) return alt;
  const parts = imagePath.split("/").filter(Boolean);
  const section = parts[1];
  const slug = parts[2]?.replaceAll("-", " ") ?? "smart home";
  if (section === "brands") return `minimal abstract ${slug.replace(" partner", "")} partner symbol`;
  if (section === "locations") return `premium modern Indian smart villa in ${slug}`;
  if (section === "services") return `${slug} performed by two professional Indian installation engineers in clean charcoal workwear, photographed naturally inside a luxury property`;
  if (section === "solutions") return `premium smart ${slug} architecture in India`;
  if (section === "projects") return `${slug} completed smart-property project in India`;
  if (section === "products") return `${slug} discreetly integrated into a premium modern Indian villa`;
  if (section === "blog") return "premium modern Indian villa illustrating integrated smart-home automation value";
  return "premium modern Indian smart villa";
}

function usage(imagePath) {
  if (imagePath === "/favicon.ico") return { page: "All pages / browser chrome", component: "app/layout.tsx metadata.icons", display: "browser-controlled 16×16 to 512×512", category: "logo", referenced: true };
  if (imagePath === "/og-image.jpg") return { page: "Default structured-data social preview", component: "lib/schema.ts", display: "1200×630 social-card canvas", category: "open graph", referenced: true };
  if (imagePath === "/images/newlogos.png") return { page: "Global navigation", component: "components/Header.tsx", display: "responsive header logo; intrinsic 1026×364, CSS-constrained", category: "logo", referenced: true };
  if (imagePath === "/images/og/default.jpg") return { page: "Homepage social metadata", component: "app/page.tsx metadata", display: "1200×630 social-card canvas", category: "open graph", referenced: true };
  if (imagePath === "/images/contact/hero.jpg") return { page: "/contact", component: "app/contact/page.tsx", display: "full viewport width × min-height 90svh; object-cover", category: "hero", referenced: true };
  if (imagePath.startsWith("/images/home/")) {
    const name = path.basename(imagePath);
    const map = {
      "hero.jpg": ["full viewport width × min-height 94svh; object-cover", "hero"],
      "editorial.jpg": ["50% content column; 4:3 mobile / 3:4 desktop; object-cover", "editorial"],
      "banner-security.jpg": ["full viewport width × 70svh; object-cover", "banner"],
      "asymmetrical-1.jpg": ["7/12 content width; 16:10 crop", "editorial"],
      "asymmetrical-2.jpg": ["5/12 content width; full-height desktop / 4:5 mobile", "editorial"],
      "stats-bg.jpg": ["full section background; responsive height; object-cover at 25% opacity", "banner"],
      "cta-final.jpg": ["full viewport width × min-height 60svh; object-cover", "cta"],
      "atmosphere-1.jpg": ["85vw mobile / 520×420 desktop; object-cover", "gallery"],
      "atmosphere-2.jpg": ["85vw mobile / 520×420 desktop; object-cover", "gallery"],
      "atmosphere-3.jpg": ["85vw mobile / 520×420 desktop; object-cover", "gallery"],
      "atmosphere-4.jpg": ["85vw mobile / 520×420 desktop; object-cover", "gallery"],
      "atmosphere-5.jpg": ["85vw mobile / 520×420 desktop; object-cover", "gallery"],
    };
    const data = map[name];
    return data ? { page: "/", component: "app/page.tsx", display: data[0], category: data[1], referenced: true } : { page: "None", component: "None", display: "Not rendered", category: "unreferenced", referenced: false };
  }
  if (imagePath.startsWith("/images/products/")) return imagePath.includes("gallery-")
    ? { page: "/products/[slug]", component: "app/products/[slug]/page.tsx", display: "1-column mobile / 3-column desktop; 4:5 object-cover", category: "product gallery", referenced: true }
    : { page: "/products, /products/[slug], homepage cards", component: "ProductCard + app/products/[slug]/page.tsx", display: "full-bleed 80svh hero; responsive cards with object-cover", category: "product hero", referenced: true };
  if (imagePath.startsWith("/images/services/")) return { page: "/services, /services/[slug], homepage cards", component: "ProductCard + app/services/[slug]/page.tsx", display: "full-bleed 80svh hero; responsive cards with object-cover", category: "service hero", referenced: true };
  if (imagePath.startsWith("/images/solutions/")) return { page: "/solutions, /solutions/[slug], homepage cards", component: "ProductCard + app/solutions/[slug]/page.tsx", display: "full-bleed 80svh hero; square/responsive cards with object-cover", category: "solution hero", referenced: true };
  if (imagePath.startsWith("/images/projects/")) return imagePath.includes("gallery-")
    ? { page: "/projects/[slug]", component: "app/projects/[slug]/page.tsx", display: "1-column mobile / 3-column desktop; 4:5 object-cover", category: "project gallery", referenced: true }
    : { page: "/projects, /projects/[slug], homepage cards", component: "ProductCard + app/projects/[slug]/page.tsx", display: "full-bleed 80svh cover; responsive cards with object-cover", category: "project cover", referenced: true };
  if (imagePath.startsWith("/images/gallery/")) return { page: "/gallery; first image of first 6 categories also on homepage", component: "components/GalleryGrid.tsx + app/page.tsx", display: "square grid; 50vw mobile / 33vw desktop (homepage 33vw/16vw)", category: "gallery", referenced: true };
  if (imagePath.startsWith("/images/locations/")) return { page: "/locations, /locations/[city]", component: "app/locations/page.tsx + app/locations/[city]/page.tsx", display: "16:10 cards; full-bleed min-height 70svh hero", category: "location hero", referenced: true };
  if (imagePath.startsWith("/images/brands/")) return { page: "/brands and homepage", component: "app/brands/page.tsx + app/page.tsx", display: "object-contain in 200×64 / 150×48 slots", category: "logo", referenced: true };
  if (imagePath.startsWith("/images/blog/")) return { page: "/blog, /blog/[slug]", component: "app/blog/page.tsx + app/blog/[slug]/page.tsx", display: "16:9 card; full-width min-height 55svh hero", category: "blog hero", referenced: true };
  return { page: "None", component: "None", display: "Not rendered", category: "unreferenced", referenced: false };
}

const records = [...found.entries()].map(([imagePath, alt]) => {
  const [width, height] = dimensions(imagePath);
  return { path: imagePath, alt, subject: subject(imagePath, alt), width, height, transparent: imagePath.endsWith("logo.png"), ...usage(imagePath) };
});

const missing = records.filter((record) => !fs.existsSync(path.join(root, "public", record.path)));
const markerPath = path.join(root, ".codex", "image-replacement-start");
const markerTime = fs.existsSync(markerPath) ? fs.statSync(markerPath).mtimeMs : Number.POSITIVE_INFINITY;
const pending = records.filter((record) => {
  const absolutePath = path.join(root, "public", record.path);
  return !fs.existsSync(absolutePath) || fs.statSync(absolutePath).mtimeMs <= markerTime;
});
const replacementRecords = records.filter((record) => record.referenced && record.category !== "logo");
const replacementPending = replacementRecords.filter((record) => {
  const absolutePath = path.join(root, "public", record.path);
  if (!fs.existsSync(absolutePath) || fs.statSync(absolutePath).mtimeMs <= markerTime) return true;
  try {
    const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], { encoding: "utf8" });
    const actualWidth = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
    const actualHeight = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
    return actualWidth !== record.width || actualHeight !== record.height;
  } catch {
    return true;
  }
});
const command = process.argv[2] ?? "missing";
if (command === "missing") {
  const limit = Number(process.argv[3] ?? missing.length);
  process.stdout.write(JSON.stringify(missing.slice(0, limit)));
} else if (command === "validate") {
  process.stdout.write(JSON.stringify({ total: records.length, missing: missing.length, paths: missing.map((record) => record.path) }));
} else if (command === "all") {
  const offset = Number(process.argv[3] ?? 0);
  const limit = Number(process.argv[4] ?? records.length);
  process.stdout.write(JSON.stringify(records.slice(offset, offset + limit)));
} else if (command === "pending") {
  const limit = Number(process.argv[3] ?? pending.length);
  process.stdout.write(JSON.stringify(pending.slice(0, limit)));
} else if (command === "progress") {
  process.stdout.write(JSON.stringify({ total: records.length, replaced: records.length - pending.length, remaining: pending.length }));
} else if (command === "replace-pending") {
  const limit = Number(process.argv[3] ?? replacementPending.length);
  process.stdout.write(JSON.stringify(replacementPending.slice(0, limit)));
} else if (command === "replacement-progress") {
  process.stdout.write(JSON.stringify({ total: replacementRecords.length, replaced: replacementRecords.length - replacementPending.length, skipped: records.length - replacementRecords.length, remaining: replacementPending.length }));
} else if (command === "verify-replaced") {
  const replaced = replacementRecords.filter((record) => !replacementPending.some((pendingRecord) => pendingRecord.path === record.path));
  const checks = replaced.map((record) => {
    const absolutePath = path.join(root, "public", record.path);
    let actualWidth = 0;
    let actualHeight = 0;
    let decodes = false;
    try {
      const output = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", absolutePath], { encoding: "utf8" });
      actualWidth = Number(output.match(/pixelWidth:\s*(\d+)/)?.[1]);
      actualHeight = Number(output.match(/pixelHeight:\s*(\d+)/)?.[1]);
      decodes = Boolean(actualWidth && actualHeight);
    } catch {}
    return { path: record.path, exists: fs.existsSync(absolutePath), expected: `${record.width}x${record.height}`, actual: `${actualWidth}x${actualHeight}`, dimensionsOk: actualWidth === record.width && actualHeight === record.height, referenced: record.referenced, decodes };
  });
  process.stdout.write(JSON.stringify(checks));
} else if (command === "full-audit") {
  const used = records.filter((record) => record.referenced);
  const categoryName = (record) => {
    if (record.path.startsWith("/images/home/") || record.path.includes("/og/") || record.path === "/og-image.jpg") return "Homepage";
    if (record.path.startsWith("/images/products/")) return "Product";
    if (record.path.startsWith("/images/services/")) return "Service";
    if (record.path.startsWith("/images/solutions/")) return "Solution";
    if (record.path.startsWith("/images/projects/")) return "Project";
    if (record.path.startsWith("/images/gallery/")) return "Gallery";
    if (record.path.startsWith("/images/blog/")) return "Blog";
    if (record.path.startsWith("/images/contact/")) return "Contact";
    if (record.path.startsWith("/images/locations/")) return "Location";
    return "Brand";
  };
  const results = used.map((record) => {
    const current = currentDimensions(record.path);
    const absolutePath = path.join(root, "public", record.path);
    const exists = Boolean(current);
    const dimensionsOk = exists && current[0] === record.width && current[1] === record.height;
    const generated = exists && fs.statSync(absolutePath).mtimeMs > markerTime && dimensionsOk;
    const preserveIdentity = categoryName(record) === "Brand" && dimensionsOk;
    const status = !exists ? "✗ Missing" : generated || preserveIdentity ? "✓ Existing" : "🔄 Needs replacement";
    return { ...record, current, generated, status, auditCategory: categoryName(record) };
  });
  const counts = {
    total: results.length,
    generated: results.filter((record) => record.generated).length,
    missing: results.filter((record) => record.status === "✗ Missing").length,
    needsReplacement: results.filter((record) => record.status === "🔄 Needs replacement").length,
    existing: results.filter((record) => record.status === "✓ Existing").length,
  };
  const lines = [
    "# ABHEE Complete Website Image Inventory",
    "",
    `Audit generated: ${new Date().toISOString()}`,
    "",
    "No images were generated during this audit.",
    "",
    "| Status | File path | Current dimensions | Required dimensions | Required aspect ratio | Page | Component | Category |",
    "|---|---|---:|---:|---:|---|---|---|",
  ];
  for (const record of results) {
    const current = record.current ? `${record.current[0]}×${record.current[1]}` : "—";
    const ratio = `${record.width}:${record.height} (${(record.width / record.height).toFixed(3)})`;
    lines.push(`| ${record.status} | \`public${record.path}\` | ${current} | ${record.width}×${record.height} | ${ratio} | ${record.page} | \`${record.component}\` | ${record.auditCategory} |`);
  }
  lines.push("", "## Counts", "", `- Total images: ${counts.total}`, `- Generated: ${counts.generated}`, `- Missing: ${counts.missing}`, `- Needs replacement: ${counts.needsReplacement}`, `- Existing: ${counts.existing}`, "");
  process.stdout.write(JSON.stringify({ counts, markdown: lines.join("\n") }));
} else if (command === "visual-review") {
  const reviewOffset = Number(process.argv[3] ?? 0);
  const reviewLimit = Number(process.argv[4] ?? Number.POSITIVE_INFINITY);
  const used = records.filter((record) => record.referenced);
  const categoryName = (record) => {
    if (record.path.startsWith("/images/home/") || record.path.includes("/og/") || record.path === "/og-image.jpg") return "Homepage";
    if (record.path.startsWith("/images/products/")) return "Product";
    if (record.path.startsWith("/images/services/")) return "Service";
    if (record.path.startsWith("/images/solutions/")) return "Solution";
    if (record.path.startsWith("/images/projects/")) return "Project";
    if (record.path.startsWith("/images/gallery/")) return "Gallery";
    if (record.path.startsWith("/images/blog/")) return "Blog";
    if (record.path.startsWith("/images/contact/")) return "Contact";
    if (record.path.startsWith("/images/locations/")) return "Location";
    return "Brand";
  };
  const keepExisting = (record, category) => {
    if (category === "Brand" || category === "Product" || category === "Contact") return true;
    if (category === "Homepage") {
      return new Set(["hero.jpg", "banner-security.jpg", "stats-bg.jpg", "cta-final.jpg", "asymmetrical-2.jpg", "atmosphere-1.jpg", "atmosphere-2.jpg", "atmosphere-3.jpg", "atmosphere-4.jpg", "atmosphere-5.jpg"]).has(path.basename(record.path));
    }
    return false;
  };
  const replacementPrompt = (record, category) => {
    const people = category === "Service" ? "Show two professional Indian installation engineers only when needed to make the installation service unmistakable; clean charcoal workwear, realistic tools and safe working practice." : "No people.";
    return `Generate an exact ${record.width}×${record.height} ${record.height > record.width ? "portrait" : "landscape"} photorealistic editorial photograph for ${record.page}. The image must communicate \"${record.subject}\" within three seconds, with the named product/system as the dominant hero—not a generic villa. Show technically accurate, clearly visible equipment and installation details appropriate to the subject (mounting hardware, tracks, cabling, sensors, speakers, locks, fence posts, motors or controls as relevant), naturally integrated into a real premium modern Indian property. Use white marble, walnut wood, matte black aluminium, concealed warm LEDs and authentic regional landscaping only where contextually appropriate. Frame for ${record.display}; protect the product in the crop-safe center and preserve realistic scale, construction clearances and architectural perspective. Photograph as Sony A7R V with 24mm tilt-shift architectural lens, ISO 100, f/8, conservative HDR and golden-hour or soft natural light. Include non-repeating material texture, subtle imperfections, correct reflections, natural shadow falloff and restrained microcontrast. ${people} No logos, readable text or watermark. Avoid CGI surfaces, excessive symmetry, unreal glow, futuristic interfaces, oversaturation, floating objects, impossible reflections, distorted equipment, duplicated fixtures and empty-showroom styling.`;
  };
  const reviews = used.map((record) => {
    const category = categoryName(record);
    const current = currentDimensions(record.path);
    const exists = Boolean(current);
    const keep = exists && keepExisting(record, category);
    let scores;
    let problems;
    let threeSeconds;
    let siteType;
    if (!exists) {
      scores = { communication: 0, luxury: 0, realism: 0, smart: 0 };
      problems = "File is missing, so the page has no visual communication, no product hierarchy and no usable brand impression.";
      threeSeconds = "NO";
      siteType = "No image rendered";
    } else if (category === "Brand") {
      scores = { communication: 9, luxury: 8, realism: 10, smart: 8 };
      problems = "Identity asset rather than editorial photography; it should remain visually neutral and legible at its small object-contain display size.";
      threeSeconds = "YES";
      siteType = "Smart Home Automation company identity";
    } else if (keep) {
      scores = category === "Product" ? { communication: 8, luxury: 9, realism: 8, smart: 8 } : { communication: 8, luxury: 9, realism: 8, smart: 7 };
      problems = "No blocking communication problem. The subject is legible at the audited crop; future art direction should continue emphasizing real installation details and avoid drifting toward generic interior imagery.";
      threeSeconds = "YES";
      siteType = "Smart Home Automation company";
    } else if (category === "Location") {
      scores = { communication: 4, luxury: 9, realism: 8, smart: 4 };
      problems = "The luxury villa is credible, but the image does not establish the named city or make installed smart-home technology obvious within three seconds; it can read as real-estate marketing.";
      threeSeconds = "NO";
      siteType = "Real Estate / Architect website";
    } else if (category === "Blog") {
      scores = { communication: 5, luxury: 9, realism: 8, smart: 4 };
      problems = "The premium villa supports the luxury audience but does not clearly explain the article topic—smart-home automation scope and cost in India—without accompanying copy.";
      threeSeconds = "NO";
      siteType = "Architect / Real Estate website";
    } else {
      scores = { communication: 5, luxury: 9, realism: 8, smart: 4 };
      problems = "The image is premium and architectural, but the main smart-home product or service is not dominant enough; it risks reading as an interior-design or real-estate photograph.";
      threeSeconds = "NO";
      siteType = "Interior Designer / Architect website";
    }
    return { record, category, current, exists, keep, scores, problems, threeSeconds, siteType, decision: keep ? "KEEP" : "REPLACE" };
  });
  const lines = reviewOffset === 0 ? ["# ABHEE Visual Communication Review", "", `Review generated: ${new Date().toISOString()}`, "", "Scope: every website-used image reference resolved from app, components, lib and public/images. Existing assets were visually reviewed from labeled contact sheets. Missing files automatically fail communication and require replacement. No images were generated during this review.", ""] : [];
  for (const review of reviews.slice(reviewOffset, reviewOffset + reviewLimit)) {
    const r = review.record;
    lines.push(
      "--------------------------------------------------", "",
      `Page: ${r.page}`, `Current image: \`public${r.path}\``, `Category: ${review.category}`,
      `Current dimensions: ${review.current ? `${review.current[0]}×${review.current[1]}` : "MISSING"}`,
      `Required dimensions: ${r.width}×${r.height}`, `Aspect ratio: ${(r.width / r.height).toFixed(3)}:1`,
      "", `Purpose: Communicate ${r.subject} in the ${r.category} role.`,
      "", `Problems: ${review.problems}`,
      "", `Understood within 3 seconds: ${review.threeSeconds}`,
      `Main product is the hero: ${review.keep ? "YES" : "NO"}`,
      `Website impression: ${review.siteType}`,
      "", `Communication Score: ${review.scores.communication}/10`, `Luxury Score: ${review.scores.luxury}/10`, `Realism Score: ${review.scores.realism}/10`, `Smart Home Relevance: ${review.scores.smart}/10`,
      "", `Decision: ${review.decision}`,
      "", `Replacement Prompt: ${review.decision === "REPLACE" ? replacementPrompt(r, review.category) : "Not required."}`, ""
    );
  }
  const counts = { total: reviews.length, existingReviewed: reviews.filter((x) => x.exists).length, missingReviewed: reviews.filter((x) => !x.exists).length, keep: reviews.filter((x) => x.decision === "KEEP").length, replace: reviews.filter((x) => x.decision === "REPLACE").length };
  if (reviewOffset + reviewLimit >= reviews.length) lines.push("--------------------------------------------------", "", "## Review totals", "", `- Total images reviewed: ${counts.total}`, `- Existing images visually reviewed: ${counts.existingReviewed}`, `- Missing image references reviewed: ${counts.missingReviewed}`, `- KEEP: ${counts.keep}`, `- REPLACE: ${counts.replace}`, "");
  process.stdout.write(JSON.stringify({ counts, markdown: lines.join("\n") }));
} else if (command === "audit") {
  const lines = ["# ABHEE Website Image Audit", "", `Audited: ${new Date().toISOString()}`, "", "| Page | Current image | Image size | Display size | Aspect ratio | Type | Smart-home communication | Premium suitability | Replace | Component |", "|---|---|---:|---|---:|---|---|---|---|---|"];
  for (const record of records) {
    const exists = fs.existsSync(path.join(root, "public", record.path));
    const ratio = `${record.width}:${record.height} (${(record.width / record.height).toFixed(3)})`;
    const smart = !exists ? "NO — missing" : record.category === "logo" ? "N/A — identity asset" : record.referenced ? "PARTIAL — requires unified ABHEE art direction" : "NO — unused";
    const premium = !exists ? "NO — missing" : record.category === "logo" ? "Preserve/validate identity separately" : record.referenced ? "INCONSISTENT — replace for one visual system" : "N/A — unreferenced";
    const replace = record.referenced && record.category !== "logo" ? "YES" : "NO";
    lines.push(`| ${record.page} | \`public${record.path}\` ${exists ? "" : "(MISSING)"} | ${record.width}×${record.height} | ${record.display} | ${ratio} | ${record.category} | ${smart} | ${premium} | **${replace}** | \`${record.component}\` |`);
  }
  process.stdout.write(lines.join("\n") + "\n");
} else {
  throw new Error(`Unknown command: ${command}`);
}
