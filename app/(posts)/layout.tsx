import { Undo2 } from "lucide-react";
import type { Metadata } from "next";
import NextLink from "next/link";

export const metadata: Metadata = {
  title: {
    template: "%s | Jeffrey Yao",
    default: "Jeffrey Yao",
  },
};

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="lg:absolute left-24">
        <NextLink
          className="text-neutral-400 hover:text-neutral-500 transition flex items-center gap-1"
          href="/"
        >
          <Undo2 size={16} />
          <span className=" ">Home</span>
        </NextLink>
      </aside>
      {children}
    </>
  );
}
