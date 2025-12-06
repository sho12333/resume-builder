// components/forms/ActivityRecordForm.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ResumeFormData, InputChangeHandler } from "@/types/resume";

interface ActivityRecordFormProps {
  formData: ResumeFormData;
  onInputChange: InputChangeHandler;
}

export function ActivityRecordForm({
  formData,
  onInputChange,
}: ActivityRecordFormProps) {
  const t = useTranslations("forms.activityRecord");

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
          <span className="text-xl">📝</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-100">{t("title")}</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            {t("favoriteWork.label")}
          </label>
          <textarea
            name="favoriteWork"
            value={formData.favoriteWork}
            onChange={onInputChange}
            placeholder={t("favoriteWork.placeholder")}
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            {t("favoriteScene.label")}
          </label>
          <textarea
            name="favoriteScene"
            value={formData.favoriteScene}
            onChange={onInputChange}
            placeholder={t("favoriteScene.placeholder")}
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            {t("appealPoint.label")}
          </label>
          <textarea
            name="appealPoint"
            value={formData.appealPoint}
            onChange={onInputChange}
            placeholder={t("appealPoint.placeholder")}
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            {t("future.label")}
          </label>
          <textarea
            name="future"
            value={formData.future}
            onChange={onInputChange}
            placeholder={t("future.placeholder")}
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
}
