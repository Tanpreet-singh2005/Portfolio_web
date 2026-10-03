import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["@fluentui/react-icons"],
  },
};

export default nextConfig;
