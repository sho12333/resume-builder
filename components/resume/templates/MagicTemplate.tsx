// components/resume/templates/MagicTemplate.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { TemplateProps } from "@/types/resume";

export function MagicTemplate({ formData }: TemplateProps) {
  const t = useTranslations("resume");

  return (
    <div className="relative min-h-[600px]">
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="magic-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="25" cy="25" r="2" fill="#a855f7" />
              <circle cx="75" cy="75" r="2" fill="#ec4899" />
              <circle cx="75" cy="25" r="1.5" fill="#f59e0b" />
              <circle cx="25" cy="75" r="1.5" fill="#3b82f6" />
              <path
                d="M25 25 L75 75 M75 25 L25 75"
                stroke="#a855f7"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#magic-pattern)" />
        </svg>
      </div>

      <div className="relative p-10">
        <div className="text-center mb-8">
          <div className="inline-block">
            <h1
              className="text-4xl font-bold mb-2"
              style={{
                background:
                  "linear-gradient(to right, rgb(147, 51, 234), rgb(236, 72, 153), rgb(245, 158, 11))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {t("title")}
            </h1>
            <div
              className="h-1 rounded-full"
              style={{
                background:
                  "linear-gradient(to right, rgb(147, 51, 234), rgb(236, 72, 153), rgb(245, 158, 11))",
              }}
            ></div>
          </div>
        </div>

        {/* 氏名と写真を横並びに */}
        <div className="mb-8 flex items-start justify-between gap-6">
          <div className="flex-1">
            {formData.name && (
              <div
                className="p-4 rounded-xl"
                style={{
                  background:
                    "linear-gradient(to right, rgb(250, 245, 255), rgb(252, 231, 243))",
                }}
              >
                <div className="flex gap-3">
                  <span className="text-sm font-semibold text-purple-700 min-w-[100px]">
                    {t("fields.name")}
                  </span>
                  <span className="text-sm text-zinc-900 break-words">
                    {formData.name}
                  </span>
                </div>
              </div>
            )}
          </div>
          {formData.photo && (
            <div className="flex-shrink-0">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-3xl blur-lg opacity-50"
                  style={{
                    background:
                      "linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153), rgb(249, 115, 22))",
                  }}
                ></div>
                <div className="relative w-28 h-28 rounded-3xl overflow-hidden ring-4 ring-white">
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

        {formData.oshiName && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(168, 85, 247), rgb(236, 72, 153))",
                }}
              >
                <span className="text-white text-sm">✦</span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(147, 51, 234), rgb(219, 39, 119))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("sections.oshiInfo")}
              </h3>
            </div>
            <div className="space-y-3 pl-10">
              <div className="flex gap-3">
                <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                  {t("fields.oshiName")}
                </span>
                <span className="text-sm text-zinc-900">
                  {formData.oshiName}
                </span>
              </div>
              {formData.fanName && (
                <div className="flex gap-3">
                  <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                    {t("fields.fanName")}
                  </span>
                  <span className="text-sm text-zinc-900">
                    {formData.fanName}
                  </span>
                </div>
              )}
              {formData.startDate && (
                <div className="flex gap-3">
                  <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
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
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(236, 72, 153), rgb(249, 115, 22))",
                }}
              >
                <span className="text-white text-sm">♪</span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(219, 39, 119), rgb(234, 88, 12))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("sections.favoriteWork")}
              </h3>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere pl-10">
              {formData.favoriteWork}
            </p>
          </div>
        )}

        {formData.favoriteScene && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(249, 115, 22), rgb(245, 158, 11))",
                }}
              >
                <span className="text-white text-sm">✨</span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(234, 88, 12), rgb(217, 119, 6))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("sections.favoriteScene")}
              </h3>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere pl-10">
              {formData.favoriteScene}
            </p>
          </div>
        )}

        {formData.appealPoint && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(244, 63, 94), rgb(236, 72, 153))",
                }}
              >
                <span className="text-white text-sm">♥</span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(225, 29, 72), rgb(219, 39, 119))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("sections.appealPoint")}
              </h3>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere pl-10">
              {formData.appealPoint}
            </p>
          </div>
        )}

        {formData.future && (
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgb(59, 130, 246), rgb(99, 102, 241))",
                }}
              >
                <span className="text-white text-sm">→</span>
              </div>
              <h3
                className="text-lg font-bold"
                style={{
                  background:
                    "linear-gradient(to right, rgb(37, 99, 235), rgb(79, 70, 229))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("sections.future")}
              </h3>
            </div>
            <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere pl-10">
              {formData.future}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
