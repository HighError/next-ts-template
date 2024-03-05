import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'top-right',
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;
