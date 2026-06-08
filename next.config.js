const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },

  reactStrictMode: true,

  poweredByHeader: false,
};

module.exports = nextConfig;
