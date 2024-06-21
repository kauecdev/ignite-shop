/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

    remotePatterns: [
      {
        hostname: 'files.stripe.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
