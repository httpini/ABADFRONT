/** @type {import('next').NextConfig} */

// require('dotenv').config({ path: __dirname + '/../.env' })
// console.log(__dirname + '/../.env');
// const { parsed: myEnv } = require("dotenv").config({
//   path: "./env/local",
// });
// console.log('port env', myEnv);
const path = require('path')
const { parsed: localEnv } = require('dotenv').config({
  path: path.resolve(__dirname, `../.env`),
})

const nextConfig = {
  reactStrictMode: true,
  output:'export',
    images: {
    domains: ["storage.googleapis.com", "lh3.googleusercontent.com"],
    unoptimized: true 
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ]
  },
  env: {
    PORT: process.env.PORT || 8020,
    URL: process.env.URL || 'http://localhost:8020',
    URLFRONT: process.env.URLFRONT || 'http://localhost:3500'
  },
  distDir: "build",
}

module.exports = nextConfig
