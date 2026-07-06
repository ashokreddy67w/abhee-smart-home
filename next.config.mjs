/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
    // Swap picsum for your real CDN/domain before launch, then remove picsum above.
  },
};

export default nextConfig;
