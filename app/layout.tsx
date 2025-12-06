import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "推し活履歴書ビルダー | あなたの推し活を素敵な履歴書に",
  description:
    "推し活の歴史を美しい履歴書にまとめて、PDFでダウンロードできるWebアプリケーション",
  keywords: ["推し活", "履歴書", "ファン活動", "PDF", "アイドル"],
  authors: [{ name: "推し活履歴書ビルダー" }],
  openGraph: {
    title: "推し活履歴書ビルダー",
    description: "あなたの推し活の歴史を素敵な履歴書に",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-theme="oshiTheme">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
