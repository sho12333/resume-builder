// components/modals/AdModal.tsx
import React from "react";

export function AdModal() {
  return (
    <dialog id="ad_modal" className="modal backdrop-blur-sm">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-2xl w-full shadow-2xl">
        <h3 className="text-xl font-semibold text-zinc-100 mb-6">
          広告を表示しています
        </h3>

        <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-12 text-center min-h-[250px] flex items-center justify-center mb-6">
          <div>
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-zinc-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <p className="text-zinc-300 font-medium mb-2">
              Google AdSense 広告エリア
            </p>
            <p className="text-zinc-500 text-sm">
              実装時はここに広告コードを配置
            </p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-zinc-400 text-sm mb-3">
            5秒後にPDFのダウンロードが開始されます
          </p>
          <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-zinc-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
