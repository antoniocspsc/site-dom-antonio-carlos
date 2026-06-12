import type { MetadataRoute } from "next";
import { contact } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: contact.domain,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${contact.domain}/politica-de-privacidade`,
      lastModified: new Date("2026-06-12"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
