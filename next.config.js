/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_PASSWORD: process.env.ACCESS_PASSWORD,
  },
}

module.exports = nextConfig 