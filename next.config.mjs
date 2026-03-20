/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/privacy', destination: '/polityka-prywatnosci', permanent: true },
      { source: '/regulamin', destination: '/polityka-prywatnosci', permanent: true },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
