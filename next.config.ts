import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // Intentionally did not set @faker-js/faker in transpilePackages since it is only a dev dependency
  // transpilePackages: ["@faker-js/faker"],
};

export default nextConfig;
