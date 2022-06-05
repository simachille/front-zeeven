/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    outputStandalone: true,
  },
  env: {
    API_URL: process.env.API_URL,
  }
}

module.exports = nextConfig
