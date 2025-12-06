// lib/constants.ts

import { TemplateConfig, ResumeFormData } from "@/types/resume";

/**
 * Template configurations
 */
export const TEMPLATE_CONFIGS: TemplateConfig[] = [
  {
    id: "simple",
    name: "シンプル",
    description: "清潔感のあるシンプルなデザイン",
    icon: "📄",
  },
  {
    id: "magic",
    name: "マジカル",
    description: "カラフルで華やかなデザイン",
    icon: "✨",
  },
  {
    id: "geometric",
    name: "ジオメトリック",
    description: "モダンな幾何学デザイン",
    icon: "🔷",
  },
];

/**
 * Initial form data state
 */
export const INITIAL_FORM_DATA: ResumeFormData = {
  name: "",
  photo: "",
  oshiName: "",
  fanName: "",
  startDate: "",
  favoriteWork: "",
  favoriteScene: "",
  appealPoint: "",
  future: "",
};

/**
 * PDF export configuration
 */
export const PDF_CONFIG = {
  format: "a4" as const,
  orientation: "portrait" as const,
  unit: "mm" as const,
  margin: 0,
  fileName: "推し活履歴書.pdf",
} as const;

/**
 * Ad modal display duration (milliseconds)
 */
export const AD_MODAL_DURATION = 5000;

/**
 * Maximum file size for image upload (5MB)
 */
export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;

/**
 * Allowed image types
 */
export const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
