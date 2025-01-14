const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: `${basePath}/`,
  publicRuntimeConfig: { basePath },
  images: { unoptimized: true },
};

module.exports = nextConfig;
