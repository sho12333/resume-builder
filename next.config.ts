import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  // Required for Cloudflare Pages deployment
  skipMiddlewareUrlNormalize: true,
  skipTrailingSlashRedirect: true,
};

export default withNextIntl(nextConfig);
