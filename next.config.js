/** @type {import('next').NextConfig} */

    const withPWA = require('next-pwa')({
      dest: 'public',
      register: true,
      sw: '/sw.js',
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development'
    })

const nextConfig = withPWA({})

module.exports = nextConfig
