const path = require("path");

const projectRoot = path.resolve(__dirname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: projectRoot,
  },
  webpack: (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.modules = [projectRoot, "node_modules", ...(config.resolve.modules ?? [])];
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "all.accor.com" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/cdn-images/:path*",
        destination: "https://res.cloudinary.com/dctn3ike2/image/upload/:path*",
      },
      {
        source: "/cdn-unsplash/:path*",
        destination: "https://images.unsplash.com/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
