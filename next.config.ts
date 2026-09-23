import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "us-wbe-img2.gr-cdn.com" },
      { protocol: "https", hostname: "us-ms.gr-cdn.com" },
    ],
  },
};

export default nextConfig;
