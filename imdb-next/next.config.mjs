/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_API_KEY: process.env.API_KEY,
    },
    images: {
      domains: ['res.cloudinary.com'],
      remotePatterns: [
        {
          protocol: "https",
          hostname: "image.tmdb.org",
          pathname:'**',
        },
      ],
    }
  };
  
  export default nextConfig;
  