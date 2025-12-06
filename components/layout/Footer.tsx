// components/layout/Footer.tsx
import React from "react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-800 bg-zinc-950/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-zinc-400 text-sm mb-2">推し活履歴書ビルダー</p>
          <p className="text-zinc-600 text-xs">© 2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
