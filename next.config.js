/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'imgur.com',
      'i.imgur.com',
      'github.com',
      'www.imgur.com',
      'www.i.imgur.com',
      'www.github.com',
    ],
    unoptimized: true,
  },
};

module.exports = nextConfig;
