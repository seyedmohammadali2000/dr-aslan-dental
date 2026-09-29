import type { NextConfig } from "next";
const staticExport = process.env.STATIC_EXPORT === "true";
const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export", trailingSlash: true } : {}),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  poweredByHeader: false,
  turbopack: { root: process.cwd() },
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: staticExport,
  },
};
export default nextConfig;
