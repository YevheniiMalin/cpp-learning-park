import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES_BUILD === "true";
const repositoryBasePath = "/cpp-learning-park";

const nextConfig: NextConfig = {
  ...(isGitHubPagesBuild ? {
    output: "export" as const,
    basePath: repositoryBasePath,
    assetPrefix: repositoryBasePath,
    trailingSlash: true,
  } : {}),
  images: {
    unoptimized: isGitHubPagesBuild,
  },
  typescript: {
    tsconfigPath: isGitHubPagesBuild ? "tsconfig.github.json" : "tsconfig.json",
  },
};

export default nextConfig;
