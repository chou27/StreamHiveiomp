/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["@clerk/clerk-sdk-node"],
  },
  images: {
    domains: [
      "utfs.io",  // for uploadthing
      "img.clerk.com"  // for clerk avatars
    ]
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      path: require.resolve('path-browserify'),
      url: require.resolve('url'),
    };
    return config;
  },
};

module.exports = nextConfig;