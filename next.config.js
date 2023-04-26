/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imgur.com', 'i.imgur.com', 'github.com'],
  },
  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application.
  //       source: '/(.*?)',
  //       headers: [
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'no-referrer',
  //         },
  //         {
  //           key: 'Cache-Control',
  //           value:
  //             'public, max-age=180, s-maxage=180, stale-while-revalidate=180',
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
