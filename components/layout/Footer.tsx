// components/layout/Footer.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-zinc-400 text-sm mb-2">{t("appName")}</p>
          <p className="text-zinc-600 text-xs">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
