/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deployable to Cloudflare Pages (no server runtime needed)
  output: 'export',
  images: {
    // next/image optimization is unavailable in static export
    unoptimized: true,
  },
};

export default nextConfig;
