const path = require("path");

const projectRoot = path.resolve(__dirname);

// Upstream URL of the webapp (e.g. https://wedding-xxxx.vercel.app).
// Set in Vercel env vars to enable /app/* proxy. Falls back to no proxy so
// local dev of the marketing site works without the webapp running.
const WEBAPP_UPSTREAM_URL = process.env.WEBAPP_UPSTREAM_URL;

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
    const appRewrites = WEBAPP_UPSTREAM_URL
      ? [
          {
            source: "/app",
            destination: `${WEBAPP_UPSTREAM_URL}/app`,
          },
          {
            source: "/app/:path*",
            destination: `${WEBAPP_UPSTREAM_URL}/app/:path*`,
          },
        ]
      : [];
    return [
      ...appRewrites,
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
