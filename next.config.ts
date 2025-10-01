import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ['pg'],
  env: {
    PORT: '9999'
  }
};

export default nextConfig;
