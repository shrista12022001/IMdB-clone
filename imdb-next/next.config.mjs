/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_KEY: process.env.API_KEY,
    },
  };
  
  export default nextConfig;
  