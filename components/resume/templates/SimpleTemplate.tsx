// components/resume/templates/SimpleTemplate.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { TemplateProps } from "@/types/resume";
import { TemplateField, TemplateTextArea } from "../TemplateField";

export function SimpleTemplate({ formData }: TemplateProps) {
  const t = useTranslations("resume");

  const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
        {title}
      </h3>
      {children}
    </div>
  );

  return (
    <div className="p-10">
      <div className="text-center border-b-2 border-zinc-200 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
          {t("title")}
        </h1>
      </div>

      {/* 氏名と写真 */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div className="flex-1">
          {formData.name && <TemplateField label={t("fields.name")} value={formData.name} />}
        </div>
        {formData.photo && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-zinc-200">
              <img
                src={formData.photo}
                alt={t("fields.photoAlt")}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {/* 推し情報 */}
      {formData.oshiName && (
        <Section title={t("sections.oshiInfo")}>
          <div className="space-y-3">
            <TemplateField label={t("fields.oshiName")} value={formData.oshiName} />
            {formData.fanName && <TemplateField label={t("fields.fanName")} value={formData.fanName} />}
            {formData.startDate && <TemplateField label={t("fields.startDate")} value={formData.startDate} />}
          </div>
        </Section>
      )}

      {/* その他のセクション */}
      {formData.favoriteWork && (
        <Section title={t("sections.favoriteWork")}>
          <TemplateTextArea content={formData.favoriteWork} />
        </Section>
      )}

      {formData.favoriteScene && (
        <Section title={t("sections.favoriteScene")}>
          <TemplateTextArea content={formData.favoriteScene} />
        </Section>
      )}

      {formData.appealPoint && (
        <Section title={t("sections.appealPoint")}>
          <TemplateTextArea content={formData.appealPoint} />
        </Section>
      )}

      {formData.future && (
        <Section title={t("sections.future")}>
          <TemplateTextArea content={formData.future} />
        </Section>
      )}
    </div>
  );
}
