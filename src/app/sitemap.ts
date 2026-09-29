import type { MetadataRoute } from "next";
import { clinic } from "@/lib/clinic";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return clinic.siteUrl
    ? [{ url: clinic.siteUrl, changeFrequency: "monthly", priority: 1 }]
    : [];
}
