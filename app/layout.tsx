import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jeffrey Yao",
  description:
    "Technical co-founder @ stealth AI startup. Based in Sydney, Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body>
        <article className="flex justify-center p-8 py-12 md:p-16">
          <main className="w-full max-w-2xl space-y-6">{children}</main>
        </article>
      </body>
      <Analytics />
    </html>
  );
}
