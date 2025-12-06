// hooks/useResumeForm.ts
"use client";

import { useState, useCallback } from "react";
import { ResumeFormData, InputChangeHandler } from "@/types/resume";
import { INITIAL_FORM_DATA } from "@/lib/constants";
import { validateImageFile, fileToDataURL } from "@/lib/utils";

/**
 * Custom hook for managing resume form state
 */
export function useResumeForm() {
  const [formData, setFormData] = useState<ResumeFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof ResumeFormData, string>>>({});

  /**
   * Handles input changes for text fields
   */
  const handleInputChange: InputChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof ResumeFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  }, [errors]);

  /**
   * Handles image upload with validation
   */
  const handleImageUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;

      const validation = validateImageFile(file);
      if (!validation.valid) {
        setErrors((prev) => ({
          ...prev,
          photo: validation.error,
        }));
        return;
      }

      try {
        const dataURL = await fileToDataURL(file);
        setFormData((prev) => ({
          ...prev,
          photo: dataURL,
        }));
        setErrors((prev) => ({
          ...prev,
          photo: undefined,
        }));
      } catch (error) {
        setErrors((prev) => ({
          ...prev,
          photo: error instanceof Error ? error.message : "画像のアップロードに失敗しました",
        }));
      }
    },
    []
  );

  /**
   * Removes the uploaded photo
   */
  const removePhoto = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      photo: "",
    }));
    setErrors((prev) => ({
      ...prev,
      photo: undefined,
    }));
  }, []);

  /**
   * Resets the entire form
   */
  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  }, []);

  /**
   * Validates a specific field
   */
  const validateField = useCallback((name: keyof ResumeFormData, value: string): string | undefined => {
    // Add custom validation rules here if needed
    if (name === "name" && value.length > 100) {
      return "氏名は100文字以内で入力してください";
    }
    if (name === "oshiName" && value.length > 100) {
      return "推しの名前は100文字以内で入力してください";
    }
    return undefined;
  }, []);

  return {
    formData,
    errors,
    handleInputChange,
    handleImageUpload,
    removePhoto,
    resetForm,
    validateField,
  };
}
