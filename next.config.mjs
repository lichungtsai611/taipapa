/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/taipapa' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/taipapa/' : '',
  trailingSlash: true,
};

export default nextConfig;
