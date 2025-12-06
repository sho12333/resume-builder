import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";

export default getRequestConfig(async () => {
  // Always use the default locale (no path-based routing)
  const locale = defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
