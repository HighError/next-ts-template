import { fileURLToPath } from 'node:url';

import withSerwistInit from '@serwist/next';
import createJiti from 'jiti';

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti('./src/env');

const withSerwist = withSerwistInit({
  swSrc: 'src/app/sw.ts',
  swDest: 'public/sw.js',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: 'top-right',
  },
};

export default withSerwist(nextConfig);
