/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/taipapa' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taipapa/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.technews.tw',
      },
    ],
  },
};

export default nextConfig;
