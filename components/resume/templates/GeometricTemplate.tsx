// components/resume/templates/GeometricTemplate.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { TemplateProps } from "@/types/resume";

export function GeometricTemplate({ formData }: TemplateProps) {
  const t = useTranslations("resume");

  return (
    <div
      className="relative min-h-[600px]"
      style={{
        background:
          "linear-gradient(to bottom right, rgb(248, 250, 252), rgb(250, 250, 250))",
      }}
    >
      {/* 幾何学背景 */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="geometric-pattern"
              x="0"
              y="0"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="40"
                height="40"
                fill="none"
                stroke="#3f3f46"
                strokeWidth="1"
              />
              <rect
                x="40"
                y="40"
                width="40"
                height="40"
                fill="none"
                stroke="#3f3f46"
                strokeWidth="1"
              />
              <circle
                cx="40"
                cy="40"
                r="15"
                fill="none"
                stroke="#71717a"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="0"
                x2="80"
                y2="80"
                stroke="#52525b"
                strokeWidth="0.5"
              />
              <line
                x1="80"
                y1="0"
                x2="0"
                y2="80"
                stroke="#52525b"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#geometric-pattern)" />
        </svg>
      </div>

      <div className="relative p-10">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-zinc-900 flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-zinc-400 flex items-center justify-center">
                    <div className="w-8 h-8 bg-zinc-400"></div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-zinc-900 tracking-wider uppercase border-b-4 border-zinc-900 pb-2">
                  {t("title")}
                </h1>
              </div>
            </div>
            {formData.photo && (
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute -inset-2 border-2 border-zinc-400"></div>
                  <div className="relative w-28 h-28 overflow-hidden">
                    <img
                      src={formData.photo}
                      alt={t("fields.photoAlt")}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {formData.name && (
          <div className="mb-8 border-l-4 border-zinc-900 pl-4">
            <div className="flex gap-4">
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider min-w-[100px]">
                {t("fields.name")}
              </span>
              <span className="text-sm text-zinc-900 font-medium break-words">
                {formData.name}
              </span>
            </div>
          </div>
        )}

        {formData.oshiName && (
          <div className="mb-8">
            <div className="bg-zinc-900 text-white px-4 py-2 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("sections.oshiInfo")}
              </h3>
            </div>
            <div className="space-y-3 pl-4">
              <div className="flex gap-4 border-l-2 border-zinc-300 pl-4">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider min-w-[100px]">
                  {t("fields.oshiName")}
                </span>
                <span className="text-sm text-zinc-900">
                  {formData.oshiName}
                </span>
              </div>
              {formData.fanName && (
                <div className="flex gap-4 border-l-2 border-zinc-300 pl-4">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider min-w-[100px]">
                    {t("fields.fanName")}
                  </span>
                  <span className="text-sm text-zinc-900">
                    {formData.fanName}
                  </span>
                </div>
              )}
              {formData.startDate && (
                <div className="flex gap-4 border-l-2 border-zinc-300 pl-4">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider min-w-[100px]">
                    {t("fields.startDate")}
                  </span>
                  <span className="text-sm text-zinc-900">
                    {formData.startDate}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {formData.favoriteWork && (
          <div className="mb-8">
            <div className="bg-zinc-900 text-white px-4 py-2 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("sections.favoriteWork")}
              </h3>
            </div>
            <div className="border-l-4 border-zinc-300 pl-4">
              <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                {formData.favoriteWork}
              </p>
            </div>
          </div>
        )}

        {formData.favoriteScene && (
          <div className="mb-8">
            <div className="bg-zinc-900 text-white px-4 py-2 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("sections.favoriteScene")}
              </h3>
            </div>
            <div className="border-l-4 border-zinc-300 pl-4">
              <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                {formData.favoriteScene}
              </p>
            </div>
          </div>
        )}

        {formData.appealPoint && (
          <div className="mb-8">
            <div className="bg-zinc-900 text-white px-4 py-2 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("sections.appealPoint")}
              </h3>
            </div>
            <div className="border-l-4 border-zinc-300 pl-4">
              <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                {formData.appealPoint}
              </p>
            </div>
          </div>
        )}

        {formData.future && (
          <div className="mb-8">
            <div className="bg-zinc-900 text-white px-4 py-2 mb-4">
              <h3 className="text-sm font-bold uppercase tracking-widest">
                {t("sections.future")}
              </h3>
            </div>
            <div className="border-l-4 border-zinc-300 pl-4">
              <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
                {formData.future}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
