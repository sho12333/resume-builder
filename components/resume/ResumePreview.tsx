// components/resume/ResumePreview.tsx
"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { ResumeFormData, TemplateType } from "@/types/resume";
import { SimpleTemplate } from "./templates/SimpleTemplate";
import { MagicTemplate } from "./templates/MagicTemplate";
import { GeometricTemplate } from "./templates/GeometricTemplate";

interface ResumePreviewProps {
  formData: ResumeFormData;
  selectedTemplate: TemplateType;
  onTemplateChange: (template: TemplateType) => void;
  onExport: () => void;
}

export function ResumePreview({
  formData,
  selectedTemplate,
  onTemplateChange,
  onExport,
}: ResumePreviewProps) {
  const t = useTranslations();
  const tPreview = useTranslations("preview");
  const tTemplates = useTranslations("templates");

  const TEMPLATE_CONFIGS = [
    {
      id: "simple" as TemplateType,
      name: tTemplates("simple.name"),
      description: tTemplates("simple.description"),
      icon: "📄",
    },
    {
      id: "magic" as TemplateType,
      name: tTemplates("magic.name"),
      description: tTemplates("magic.description"),
      icon: "✨",
    },
    {
      id: "geometric" as TemplateType,
      name: tTemplates("geometric.name"),
      description: tTemplates("geometric.description"),
      icon: "🔷",
    },
  ];

  const renderTemplate = () => {
    const props = { formData };

    switch (selectedTemplate) {
      case "simple":
        return <SimpleTemplate {...props} />;
      case "magic":
        return <MagicTemplate {...props} />;
      case "geometric":
        return <GeometricTemplate {...props} />;
      default:
        return <SimpleTemplate {...props} />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Template Selector */}
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">
          {tPreview("selectTemplate")}
        </h2>
        <div className="grid grid-cols-3 gap-4">
          {TEMPLATE_CONFIGS.map((template) => (
            <button
              key={template.id}
              onClick={() => onTemplateChange(template.id)}
              className={`
                p-4 rounded-xl border-2 transition-all text-center
                ${
                  selectedTemplate === template.id
                    ? "border-purple-500 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                    : "border-zinc-800 bg-zinc-950/50 hover:border-zinc-700"
                }
              `}
            >
              <div className="text-3xl mb-2">{template.icon}</div>
              <div
                className={`text-sm font-medium mb-1 ${
                  selectedTemplate === template.id
                    ? "text-purple-400"
                    : "text-zinc-300"
                }`}
              >
                {template.name}
              </div>
              <div className="text-xs text-zinc-600">
                {template.description}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-zinc-100">{tPreview("preview")}</h2>
          <button
            onClick={onExport}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105 active:scale-95"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              {tPreview("saveAsPdf")}
            </span>
          </button>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-2xl">
          <div id={`resume-${selectedTemplate}`} className="w-full">
            {renderTemplate()}
          </div>
        </div>

        <p className="mt-4 text-center text-sm text-zinc-500">
          {tPreview("help")}
        </p>
      </div>
    </div>
  );
}
