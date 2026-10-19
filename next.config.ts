import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      {
        source: "/technologies",
        destination: "/stack",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
