// types/resume.ts

/**
 * Form data structure for the resume builder
 */
export interface ResumeFormData {
  // Basic Information
  name: string;
  photo: string;

  // Oshi Information
  oshiName: string;
  fanName: string;
  startDate: string;

  // Activity Records
  favoriteWork: string;
  favoriteScene: string;
  appealPoint: string;
  future: string;
}

/**
 * Available template types
 */
export type TemplateType = "simple" | "magic" | "geometric";

/**
 * Props for template components
 */
export interface TemplateProps {
  formData: ResumeFormData;
}

/**
 * Input change event type
 */
export type InputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;

/**
 * Template configuration
 */
export interface TemplateConfig {
  id: TemplateType;
  name: string;
  description: string;
  icon: string;
}
