import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  /* config options here */
};

export default nextConfig;
