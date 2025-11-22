/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'via.placeholder.com'],
    unoptimized: true, // For Netlify deployment
  },
}

module.exports = nextConfig

