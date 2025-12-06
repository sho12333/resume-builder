import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale } from "next-intl/server";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: `${messages.app.name} | ${messages.app.title}`,
    description: messages.app.description,
    keywords: ["oshi", "resume", "fan activity", "PDF", "idol", "推し活", "履歴書"],
    authors: [{ name: messages.app.name }],
    openGraph: {
      title: messages.app.title,
      description: messages.app.subtitle,
      type: "website",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} data-theme="oshiTheme">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="font-sans antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
