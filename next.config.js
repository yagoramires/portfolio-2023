/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['www.colliers.com', 'www.usnews.com'],
  },
};

module.exports = nextConfig;
