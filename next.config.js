/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['imgur.com', 'res.cloudinary.com'],
  },
}

module.exports = nextConfig
