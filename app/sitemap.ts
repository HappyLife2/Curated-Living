import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const u = (path: string) => `${site.url}${path}`;

  return [
    { url: u("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: u("/packages"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: u("/process"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/work"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/partners"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: u("/about"), lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: u("/contact"), lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
