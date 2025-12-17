import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import {
  locales,
  defaultLocale,
  LOCALE_COOKIE_NAME,
  type Locale,
} from "./i18n-config";

// Re-export for backward compatibility
export { locales, defaultLocale, LOCALE_COOKIE_NAME, type Locale } from "./i18n-config";

export default getRequestConfig(async () => {
  // Read locale from cookie
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get(LOCALE_COOKIE_NAME)?.value;

  // Use cookie value if valid, otherwise default
  const locale: Locale =
    cookieLocale && locales.includes(cookieLocale as Locale)
      ? (cookieLocale as Locale)
      : defaultLocale;

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
