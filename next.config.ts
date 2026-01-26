import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [40, 75], // Allow quality 40 as requested
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  compress: true, // Enable Gzip/Brotli compression
  reactStrictMode: true,
};

export default nextConfig;
