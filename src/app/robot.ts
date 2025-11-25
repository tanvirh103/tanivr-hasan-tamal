import { MetadataRoute } from "next";

export const BASE_URL = "https://tanvirh103.github.io/tanivr-hasan-tamal";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
