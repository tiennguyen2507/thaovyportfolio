import type { MetadataRoute } from "next";

const BASE_URL = "https://hoangphamthuyanh.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/about-me", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/experience", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/testimonies", priority: 0.8, changeFrequency: "monthly" as const },

    // Hobbies
    { path: "/drawing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/photography", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/speaking-and-singing", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/writing", priority: 0.7, changeFrequency: "monthly" as const },

    // Project & Event Details
    { path: "/grand-opening-starbucks-quang-trung", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/starbucks-100th-store-open-celebration", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/starbucks-fansipan-mountain-opening", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/3x3-hooptopia-uprising-2025", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/3x3-hooptopia-vietnamfinance-2025", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/5x5-hooptopia-season-i-2026", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/dewey-university-fair-2023", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/drama-show---dinh-bo-linh-the-reed-flag-hero", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/edufit-summer-intern-program", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/family-day", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/gladia-by-the-water-event-in-hanoi", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/mount-vernon-school-visit-2024", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/prom", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/tet-market", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
