// app/page.tsx
"use client";

import { useState } from "react";
import { TemplateType } from "@/types/resume";
import { useResumeForm } from "@/hooks/useResumeForm";
import { usePDFExport } from "@/hooks/usePDFExport";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BasicInfoForm } from "@/components/forms/BasicInfoForm";
import { OshiInfoForm } from "@/components/forms/OshiInfoForm";
import { ActivityRecordForm } from "@/components/forms/ActivityRecordForm";
import { ResumePreview } from "@/components/resume/ResumePreview";
import { AdModal } from "@/components/modals/AdModal";

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>("simple");

  const { formData, handleInputChange, handleImageUpload } = useResumeForm();
  const { exportToPDF } = usePDFExport(selectedTemplate);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900">
      <Header />

      <main className="container mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Panel - Input Forms */}
          <div className="space-y-6">
            <BasicInfoForm
              formData={formData}
              onInputChange={handleInputChange}
              onImageUpload={handleImageUpload}
            />

            <OshiInfoForm
              formData={formData}
              onInputChange={handleInputChange}
            />

            <ActivityRecordForm
              formData={formData}
              onInputChange={handleInputChange}
            />
          </div>

          {/* Right Panel - Preview */}
          <ResumePreview
            formData={formData}
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
            onExport={exportToPDF}
          />
        </div>
      </main>

      <AdModal />
      <Footer />
    </div>
  );
}
