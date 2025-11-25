import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tanvirh103.github.io",
        pathname:"/tanvir-hasan-tamal/**",
      },
    ],
    localPatterns:[
      {
        pathname: '/images/**',
      },
    ],
  },
};
export default nextConfig;
