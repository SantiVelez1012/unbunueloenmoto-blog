import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
        port: '',
        pathname: '/s/files/**',
      },
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value:"  frame-src 'self' https://www.youtube.com; script-src 'unsafe-inline' 'self' https://va.vercel-scripts.com https://www.youtube.com https://apis.google.com; style-src 'unsafe-inline' 'self';",
        },
      ],
    },
  ],
  /* config options here */
};

export default nextConfig;
