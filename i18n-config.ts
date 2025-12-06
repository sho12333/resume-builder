// Shared i18n configuration (can be imported from both client and server)
export const locales = ["ja", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ja";
export const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
