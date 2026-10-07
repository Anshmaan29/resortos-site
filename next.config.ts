import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — deployable to Cloudflare Pages with no server.
  output: "export",
  // Cloudflare Pages serves directories best with trailing slashes.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
