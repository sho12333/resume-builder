import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  // Required for OpenNext/Cloudflare Workers deployment
  output: "standalone",
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
};

export default withNextIntl(nextConfig);
