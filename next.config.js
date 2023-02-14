/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "www.cazoo.co.uk"],
  },
};

module.exports = nextConfig;
