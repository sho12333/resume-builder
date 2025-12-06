// components/resume/templates/SimpleTemplate.tsx
import React from "react";
import { TemplateProps } from "@/types/resume";

export function SimpleTemplate({ formData }: TemplateProps) {
  return (
    <div className="p-10">
      <div className="text-center border-b-2 border-zinc-200 pb-8 mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 mb-6 tracking-tight">
          推し活履歴書
        </h1>
      </div>

      {/* 氏名と写真を横並びに */}
      <div className="mb-8 flex items-start justify-between gap-6">
        <div className="flex-1">
          {formData.name && (
            <div className="flex gap-3">
              <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                氏名
              </span>
              <span className="text-sm text-zinc-900 break-words">
                {formData.name}
              </span>
            </div>
          )}
        </div>
        {formData.photo && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-zinc-200">
              <img
                src={formData.photo}
                alt="推しの写真"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {formData.oshiName && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
            推し情報
          </h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                推しの名前
              </span>
              <span className="text-sm text-zinc-900">{formData.oshiName}</span>
            </div>
            {formData.fanName && (
              <div className="flex gap-3">
                <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                  ファン名
                </span>
                <span className="text-sm text-zinc-900">
                  {formData.fanName}
                </span>
              </div>
            )}
            {formData.startDate && (
              <div className="flex gap-3">
                <span className="text-sm font-semibold text-zinc-500 min-w-[100px]">
                  推し活開始
                </span>
                <span className="text-sm text-zinc-900">
                  {formData.startDate}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {formData.favoriteWork && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
            好きな作品・楽曲
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
            {formData.favoriteWork}
          </p>
        </div>
      )}

      {formData.favoriteScene && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
            忘れられないエピソード
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
            {formData.favoriteScene}
          </p>
        </div>
      )}

      {formData.appealPoint && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
            推しの魅力
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
            {formData.appealPoint}
          </p>
        </div>
      )}

      {formData.future && (
        <div className="mb-8">
          <h3 className="text-lg font-bold text-zinc-900 mb-4 pb-2 border-b border-zinc-200">
            今後の目標
          </h3>
          <p className="text-sm text-zinc-700 leading-relaxed whitespace-pre-wrap break-words overflow-wrap-anywhere">
            {formData.future}
          </p>
        </div>
      )}
    </div>
  );
}
