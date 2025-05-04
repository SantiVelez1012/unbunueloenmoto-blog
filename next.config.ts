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
    ],
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "Content-Security-Policy",
          value:"  frame-src 'self' https://www.youtube.com; script-src 'unsafe-inline' 'self' https://www.youtube.com https://apis.google.com; style-src 'unsafe-inline' 'self';",
        },
      ],
    },
  ],
  /* config options here */
};

export default nextConfig;
