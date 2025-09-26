import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Set outputFileTracingRoot dynamically based on the environment
  outputFileTracingRoot: process.env.VERCEL
    ? "/vercel/path0"
    : path.resolve(__dirname),
};

export default nextConfig;