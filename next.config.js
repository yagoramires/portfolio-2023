/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imgur.com', 'i.imgur.com', 'github.com'],
  },
};

module.exports = nextConfig;
