// components/forms/ActivityRecordForm.tsx
"use client";

import React from "react";
import { ResumeFormData, InputChangeHandler } from "@/types/resume";

interface ActivityRecordFormProps {
  formData: ResumeFormData;
  onInputChange: InputChangeHandler;
}

export function ActivityRecordForm({
  formData,
  onInputChange,
}: ActivityRecordFormProps) {
  return (
    <div className="bg-zinc-900/50 backdrop-blur-xl rounded-2xl border border-zinc-800 p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
          <span className="text-xl">📝</span>
        </div>
        <h2 className="text-xl font-bold text-zinc-100">推し活の記録</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            好きな作品・楽曲
          </label>
          <textarea
            name="favoriteWork"
            value={formData.favoriteWork}
            onChange={onInputChange}
            placeholder="推しの作品や楽曲で特に好きなものを書いてください"
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            忘れられないエピソード
          </label>
          <textarea
            name="favoriteScene"
            value={formData.favoriteScene}
            onChange={onInputChange}
            placeholder="推しとの思い出や、忘れられない出来事を書いてください"
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            推しの魅力
          </label>
          <textarea
            name="appealPoint"
            value={formData.appealPoint}
            onChange={onInputChange}
            placeholder="推しのどんなところが好きですか？魅力を存分に語ってください"
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-300 mb-2">
            今後の目標
          </label>
          <textarea
            name="future"
            value={formData.future}
            onChange={onInputChange}
            placeholder="これからの推し活で達成したいこと、やりたいことを書いてください"
            rows={4}
            className="w-full px-4 py-3 bg-zinc-950/50 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          />
        </div>
      </div>
    </div>
  );
}
