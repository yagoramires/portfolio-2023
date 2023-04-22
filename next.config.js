/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.colliers.com'],
  },
};

module.exports = nextConfig;
