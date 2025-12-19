import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  // Required for OpenNext/Cloudflare Workers deployment
  output: "standalone",
  images: {
    unoptimized: true,
  },

  serverExternalPackages: ["@resvg/resvg-js"],
};

export default withNextIntl(nextConfig);
