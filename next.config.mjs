/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV !== 'production'    

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  assetPrefix: isDevelopment ? '' : '/sample/', //dev時は''、prod時は'/sample/'をプレフィックスに付与
  reactStrictMode: true
}

export default nextConfig