import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only add basePath if your repo name is different from your GitHub username
  // basePath: '/tevin-morake.github.io',
  // assetPrefix: '/tevin-morake.github.io/',
};

export default nextConfig;
