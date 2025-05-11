import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  output: 'export',
  basePath: '/tanivr-hasan-tamal',
  assetPrefix: '/tanivr-hasan-tamal',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
