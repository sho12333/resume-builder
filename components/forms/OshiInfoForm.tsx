// components/forms/OshiInfoForm.tsx
"use client";

import React from "react";
import { ResumeFormData, InputChangeHandler } from "@/types/resume";

interface OshiInfoFormProps {
  formData: ResumeFormData;
  onInputChange: InputChangeHandler;
}

export function OshiInfoForm({ formData, onInputChange }: OshiInfoFormProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
          <span className="text-xl">💝</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-100">推し情報</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            推しの名前 <span className="text-pink-500">*</span>
          </label>
          <input
            type="text"
            name="oshiName"
            value={formData.oshiName}
            onChange={onInputChange}
            placeholder="例: 推しアイドル"
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            ファン名・ファンダム名
          </label>
          <input
            type="text"
            name="fanName"
            value={formData.fanName}
            onChange={onInputChange}
            placeholder="例: 〇〇担、△△ファン"
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            推し活開始日
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={onInputChange}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
          />
          <p className="mt-2 text-xs text-zinc-600">
            推しを好きになった日、ファンになった日を選択してください
          </p>
        </div>
      </div>
    </div>
  );
}
