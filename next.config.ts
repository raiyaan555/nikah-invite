import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const repositoryBase = "/nikah-invite";

const nextConfig: NextConfig = {
  images: githubPages
    ? { unoptimized: true }
    : {
        formats: ["image/avif", "image/webp"],
      },
  serverExternalPackages: ["exceljs"],
  ...(githubPages
    ? {
        output: "export" as const,
        basePath: repositoryBase,
        assetPrefix: `${repositoryBase}/`,
        trailingSlash: true,
        // Static export is written here instead of `out` when distDir is custom.
        distDir: "dist",
      }
    : {}),
};

export default nextConfig;
