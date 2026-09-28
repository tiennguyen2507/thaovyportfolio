import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/_assets/:path*",
        destination: "/api/assets/:path*",
      },
    ];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hoangphamthuyanh.com",
      },
    ],
  },
};

export default nextConfig;
