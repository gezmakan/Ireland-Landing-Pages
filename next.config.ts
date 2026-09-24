import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "us-wbe-img2.gr-cdn.com" },
      { protocol: "https", hostname: "us-ms.gr-cdn.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "s3-eu-west-1.amazonaws.com" },
    ],
  },
};

export default nextConfig;
