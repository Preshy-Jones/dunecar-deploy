/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.cloudinary.com",
      "www.cazoo.co.uk",
      "dunecar.s3.eu-west-2.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
