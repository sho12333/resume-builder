"use client";

import { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTheme } from "@/providers/ThemeProvider";

type Template = "simple" | "geometric" | "floral" | "pop";

interface ResumeData {
  name: string;
  furigana: string;
  genre: string;
  since: string;
  favoritePoints: string;
  memories: string;
  message: string;
  image: string | null;
}

const templateStyles: Record<
  Template,
  { bg: string; border: string; accent: string; pattern: string }
> = {
  simple: {
    bg: "bg-white",
    border: "border-gray-700",
    accent: "text-gray-900",
    pattern: "",
  },
  geometric: {
    bg: "bg-gradient-to-br from-indigo-50 to-purple-50",
    border: "border-gray-700",
    accent: "text-gray-900",
    pattern: "geometric-pattern",
  },
  floral: {
    bg: "bg-gradient-to-br from-pink-50 to-rose-50",
    border: "border-gray-700",
    accent: "text-gray-900",
    pattern: "floral-pattern",
  },
  pop: {
    bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
    border: "border-gray-700",
    accent: "text-gray-900",
    pattern: "pop-pattern",
  },
};

const templateNames: Record<Template, string> = {
  simple: "シンプル",
  geometric: "幾何学模様",
  floral: "花柄",
  pop: "ポップ",
};

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [template, setTemplate] = useState<Template>("simple");
  const [formData, setFormData] = useState<ResumeData>({
    name: "",
    furigana: "",
    genre: "",
    since: "",
    favoritePoints: "",
    memories: "",
    message: "",
    image: null,
  });
  const [isExporting, setIsExporting] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const exportToPDF = async () => {
    if (!previewRef.current) return;

    setIsExporting(true);

    try {
      // oncloneを使用して、キャプチャ用のクローンDOMにのみライトモードを適用
      // これにより元の画面は変更されず、ちらつきが発生しない
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        onclone: (clonedDoc) => {
          // クローンされたドキュメントにライトモードを適用
          clonedDoc.documentElement.setAttribute("data-theme", "light");
        },
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save(`推しレジュメ_${formData.name || "無題"}.pdf`);
    } catch (error) {
      console.error("PDF export failed:", error);
      alert("PDF出力に失敗しました");
    } finally {
      setIsExporting(false);
    }
  };

  const style = templateStyles[template];

  return (
    <div className="min-h-screen bg-page-bg transition-colors duration-300">
      {/* パターン用CSS */}
      <style jsx global>{`
        .geometric-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .floral-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20S0 28.954 0 40s8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .pop-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
      `}</style>

      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4 relative">
          <button
            onClick={toggleTheme}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={
              theme === "light"
                ? "ダークモードに切り替え"
                : "ライトモードに切り替え"
            }
          >
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <h1 className="text-3xl font-bold text-center">
            推しレジュメ
            <span className="text-lg ml-2 opacity-80">oshiresume</span>
          </h1>
          <p className="text-center mt-2 opacity-90">
            あなたの推しを履歴書形式で表現しよう！
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左側: 入力フォーム */}
          <div className="bg-card-bg rounded-xl shadow-lg p-6 transition-colors duration-300">
            <h2 className="text-xl font-bold text-foreground mb-6 pb-2 border-b-2 border-pink-300">
              推し情報入力
            </h2>

            {/* テンプレート選択 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-muted mb-2">
                テンプレート
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(Object.keys(templateNames) as Template[]).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTemplate(t)}
                    className={`px-4 py-2 rounded-lg border-2 transition-all ${
                      template === t
                        ? "border-purple-500 bg-purple-500/10 text-purple-500"
                        : "border-card-border text-foreground hover:border-purple-300"
                    }`}
                  >
                    {templateNames[t]}
                  </button>
                ))}
              </div>
            </div>

            {/* 画像アップロード */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-muted mb-2">
                推しの画像
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              />
            </div>

            {/* 基本情報 */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  推しの名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="例: 山田太郎"
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  ふりがな
                </label>
                <input
                  type="text"
                  name="furigana"
                  value={formData.furigana}
                  onChange={handleInputChange}
                  placeholder="例: やまだ たろう"
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  推しジャンル
                </label>
                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="">選択してください</option>
                  <option value="アイドル">アイドル</option>
                  <option value="声優">声優</option>
                  <option value="アニメキャラ">アニメキャラ</option>
                  <option value="俳優・女優">俳優・女優</option>
                  <option value="アーティスト">アーティスト</option>
                  <option value="Vtuber">Vtuber</option>
                  <option value="スポーツ選手">スポーツ選手</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  推し歴（いつから）
                </label>
                <input
                  type="text"
                  name="since"
                  value={formData.since}
                  onChange={handleInputChange}
                  placeholder="例: 2020年4月〜"
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  好きなところ
                </label>
                <textarea
                  name="favoritePoints"
                  value={formData.favoritePoints}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="例: 笑顔が素敵、歌がうまい、努力家..."
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  推しとの思い出
                </label>
                <textarea
                  name="memories"
                  value={formData.memories}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="例: 初めてライブに行った日、握手会で話した時..."
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-muted mb-1">
                  推しへのメッセージ
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="例: いつも元気をもらっています！これからも応援しています！"
                  className="w-full px-4 py-2 border border-input-border bg-input-bg text-foreground rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                />
              </div>
            </div>

            {/* PDF出力ボタン */}
            <button
              onClick={exportToPDF}
              disabled={isExporting || !formData.name}
              className="w-full mt-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-2 py-3 px-6 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {isExporting ? "PDF作成中..." : "PDFで出力する"}
            </button>
          </div>

          {/* 右側: プレビュー */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            <h2 className="text-xl font-bold text-foreground mb-4 flex items-center justify-between">
              <span>プレビュー</span>
              <span className="text-sm font-normal text-muted">
                リアルタイム反映
              </span>
            </h2>

            <div
              ref={previewRef}
              className={`${style.bg} ${style.pattern} rounded-xl shadow-lg p-6 border-4 ${style.border} text-gray-900`}
            >
              {/* 履歴書ヘッダー */}
              <div className="text-center mb-6">
                <h3
                  className={`text-2xl font-bold ${style.accent} border-b-2 ${style.border} pb-2 inline-block px-4`}
                >
                  推 し 履 歴 書
                </h3>
              </div>

              {/* 写真と基本情報 */}
              <div className="flex gap-4 mb-6">
                {/* 写真枠 */}
                <div
                  className={`w-32 h-40 border-2 ${style.border} flex items-center justify-center overflow-hidden flex-shrink-0 bg-white`}
                >
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="推しの写真"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-400 text-sm text-center px-2">
                      写真
                    </span>
                  )}
                </div>

                {/* 名前と基本情報 */}
                <div className="flex-1">
                  <div className={`border-b ${style.border} pb-1 mb-2`}>
                    <p className="text-xs text-gray-500">ふりがな</p>
                    <p className="text-sm">{formData.furigana || "　"}</p>
                  </div>
                  <div className={`border-b ${style.border} pb-2 mb-2`}>
                    <p className="text-xs text-gray-500">推しの名前</p>
                    <p className={`text-xl font-bold ${style.accent}`}>
                      {formData.name || "未入力"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">ジャンル</p>
                      <p className="text-sm font-medium">
                        {formData.genre || "−"}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">推し歴</p>
                      <p className="text-sm font-medium">
                        {formData.since || "−"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 詳細情報 */}
              <div className="space-y-4">
                <div>
                  <h4
                    className={`font-bold ${style.accent} mb-1 flex items-center gap-2`}
                  >
                    <span className="text-pink-500">♥</span>
                    好きなところ
                  </h4>
                  <div
                    className={`bg-white/50 p-3 rounded border ${style.border} min-h-[60px]`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {formData.favoritePoints || "まだ入力されていません"}
                    </p>
                  </div>
                </div>

                <div>
                  <h4
                    className={`font-bold ${style.accent} mb-1 flex items-center gap-2`}
                  >
                    <span className="text-yellow-500">★</span>
                    推しとの思い出
                  </h4>
                  <div
                    className={`bg-white/50 p-3 rounded border ${style.border} min-h-[60px]`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {formData.memories || "まだ入力されていません"}
                    </p>
                  </div>
                </div>

                <div>
                  <h4
                    className={`font-bold ${style.accent} mb-1 flex items-center gap-2`}
                  >
                    <span className="text-blue-500">✉</span>
                    推しへのメッセージ
                  </h4>
                  <div
                    className={`bg-white/50 p-3 rounded border ${style.border} min-h-[60px]`}
                  >
                    <p className="text-sm whitespace-pre-wrap break-words">
                      {formData.message || "まだ入力されていません"}
                    </p>
                  </div>
                </div>
              </div>

              {/* フッター */}
              <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                <p className="text-xs text-gray-400">
                  作成日: {new Date().toLocaleDateString("ja-JP")} | oshiresume
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-4 mt-12 transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 oshiresume - 推し活をもっと楽しく
          </p>
        </div>
      </footer>
    </div>
  );
}
