/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imgur.com', 'i.imgur.com', 'github.com'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*?)',
        headers: [
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
