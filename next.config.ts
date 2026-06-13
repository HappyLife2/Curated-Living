import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server build for Docker / VPS deployment.
  output: "standalone",
  poweredByHeader: false,
  images: {
    // Placeholder photography is local in /public; allow Unsplash if referenced remotely later.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
