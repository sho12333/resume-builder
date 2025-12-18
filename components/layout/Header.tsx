// components/layout/Header.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">
                {t("title")}
              </h1>
              <p className="text-sm text-zinc-500">{t("subtitle")}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <LocaleSwitcher />
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-zinc-500">{t("free")}</p>
                <p className="text-xs text-zinc-600">{t("noRegistration")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
