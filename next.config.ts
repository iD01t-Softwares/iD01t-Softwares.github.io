import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
 feature/production-ready-app-6583233985221145918

  // Allow all hosts for live preview
  serverExternalPackages: [],
 main
};

export default nextConfig;
