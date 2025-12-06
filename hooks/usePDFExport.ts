// hooks/usePDFExport.ts
"use client";

import { useCallback, useState } from "react";
import { TemplateType } from "@/types/resume";
import { PDF_CONFIG, AD_MODAL_DURATION } from "@/lib/constants";

/**
 * Custom hook for exporting resume to PDF
 */
export function usePDFExport(selectedTemplate: TemplateType) {
  const [isExporting, setIsExporting] = useState(false);
  const [exportError, setExportError] = useState<string | null>(null);

  /**
   * Shows the ad modal and waits for the duration
   */
  const showAdModal = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      const modal = document.getElementById("ad_modal") as HTMLDialogElement;
      if (modal) {
        modal.showModal();
        setTimeout(() => {
          modal.close();
          resolve();
        }, AD_MODAL_DURATION);
      } else {
        resolve();
      }
    });
  }, []);

  /**
   * Exports the resume to PDF
   */
  const exportToPDF = useCallback(async () => {
    setIsExporting(true);
    setExportError(null);

    try {
      // Show ad modal first
      await showAdModal();

      // Dynamically import libraries to reduce initial bundle size
      const html2canvas = (await import("html2canvas-pro")).default;
      const { jsPDF } = await import("jspdf");

      const element = document.getElementById(`resume-${selectedTemplate}`);
      if (!element) {
        throw new Error("Resume element not found");
      }

      // Capture the element as a canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      // Convert canvas to PDF
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: PDF_CONFIG.orientation,
        unit: PDF_CONFIG.unit,
        format: PDF_CONFIG.format,
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save(PDF_CONFIG.fileName);
    } catch (error) {
      console.error("PDF export error:", error);
      setExportError(
        error instanceof Error
          ? error.message
          : "PDFの生成に失敗しました。もう一度お試しください。"
      );
    } finally {
      setIsExporting(false);
    }
  }, [selectedTemplate, showAdModal]);

  return {
    exportToPDF,
    isExporting,
    exportError,
  };
}
