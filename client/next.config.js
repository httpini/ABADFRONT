const path = require('path')
require('dotenv').config({
  path: path.resolve(__dirname, `../.env`),
})

const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images: {
    domains: ["storage.googleapis.com", "lh3.googleusercontent.com"],
    unoptimized: true 
  },
  env: {
    PORT: process.env.PORT.toString() || '8020',
    URL: process.env.URL || 'http://localhost:8020',
    URLFRONT: process.env.URLFRONT || 'http://localhost:3500'
  },
  
  distDir: "build",
}

module.exports = nextConfig
