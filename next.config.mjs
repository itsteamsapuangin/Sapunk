/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2048, 3840],
        imageSizes: [280, 320],
    },
};

export default nextConfig;
