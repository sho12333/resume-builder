"use client";

import { useLocale, useTranslations } from "next-intl";
import { locales, LOCALE_COOKIE_NAME } from "@/i18n-config";

export function LocaleSwitcher() {
  const t = useTranslations("locale");
  const locale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    // Save locale to cookie (expires in 1 year)
    document.cookie = `${LOCALE_COOKIE_NAME}=${newLocale};path=/;max-age=${60 * 60 * 24 * 365}`;
    // Reload page to apply new locale
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => handleLocaleChange(loc)}
          className={`
            px-3 py-1.5 rounded-lg text-sm font-medium transition-all
            ${
              locale === loc
                ? "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-300"
            }
          `}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
