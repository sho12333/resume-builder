// components/forms/BasicInfoForm.tsx
"use client";

import React, { useRef } from "react";
import { ResumeFormData, InputChangeHandler } from "@/types/resume";

interface BasicInfoFormProps {
  formData: ResumeFormData;
  onInputChange: InputChangeHandler;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function BasicInfoForm({
  formData,
  onInputChange,
  onImageUpload,
}: BasicInfoFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
          <span className="text-xl">👤</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-100">基本情報</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            氏名 (ペンネーム可)
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onInputChange}
            placeholder="例: 推し活太郎"
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            推しの写真
          </label>
          <div className="flex items-start gap-4">
            {formData.photo ? (
              <div className="relative group">
                <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-zinc-700">
                  <img
                    src={formData.photo}
                    alt="アップロードされた写真"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleImageClick}
                  className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-sm font-medium"
                >
                  変更
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={handleImageClick}
                className="w-32 h-32 rounded-2xl border-2 border-dashed border-zinc-700 hover:border-blue-500 flex flex-col items-center justify-center gap-2 transition-colors group"
              >
                <svg
                  className="w-8 h-8 text-zinc-600 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span className="text-xs text-zinc-600 group-hover:text-blue-500 transition-colors">
                  画像を選択
                </span>
              </button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={onImageUpload}
              className="hidden"
            />
            <div className="flex-1">
              <p className="text-sm text-zinc-500 leading-relaxed">
                推しの写真やイラストをアップロードしてください
                <br />
                <span className="text-xs text-zinc-600">
                  (JPEG、PNG、WebP / 最大5MB)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
