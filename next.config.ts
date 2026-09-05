import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        // AVIF first: typically 20-30% smaller than WebP on photographic content.
        // Next falls back to WebP, then the original, based on the Accept header.
        formats: ['image/avif', 'image/webp'],
        // Optimized variants are content-hashed by URL, so they can cache hard.
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
