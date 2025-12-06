// components/layout/Header.tsx
import React from "react";

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-zinc-100 tracking-tight">
                推し活履歴書ビルダー
              </h1>
              <p className="text-sm text-zinc-500">
                あなたの推し活を素敵な履歴書に
              </p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs text-zinc-500">無料で作成</p>
              <p className="text-xs text-zinc-600">登録不要</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
