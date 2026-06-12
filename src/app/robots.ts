import type { MetadataRoute } from "next";
import { contact } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${contact.domain}/sitemap.xml`,
  };
}
