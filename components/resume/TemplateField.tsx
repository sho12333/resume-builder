// components/resume/TemplateField.tsx
import React from "react";

interface TemplateFieldProps {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  valueClassName?: string;
}

/**
 * Reusable field component for templates
 */
export function TemplateField({
  label,
  value,
  className = "",
  labelClassName = "",
  valueClassName = "",
}: TemplateFieldProps) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <span
        className={`text-sm font-semibold text-zinc-500 min-w-[100px] ${labelClassName}`}
      >
        {label}
      </span>
      <span className={`text-sm text-zinc-900 break-words ${valueClassName}`}>
        {value}
      </span>
    </div>
  );
}

interface TemplateTextAreaProps {
  content: string;
  className?: string;
}

/**
 * Reusable textarea content component for templates
 */
export function TemplateTextArea({
  content,
  className = "",
}: TemplateTextAreaProps) {
  return (
    <p
      className={`text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere ${className}`}
    >
      {content}
    </p>
  );
}
