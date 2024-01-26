import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { METADATA } from "@/common/constant/metadata.";
import NextTopLoader from "nextjs-toploader";

const dm = DM_Sans({ subsets: ["latin"], weight: ["400", "700", "500", "600"] });

export const metadata: Metadata = {
  title: METADATA.description,

  description: METADATA.description,
  creator: METADATA.creator,
  keywords: METADATA.keyword,

  authors: {
    name: METADATA.creator,
  },

  icons: {
    icon: METADATA.icons.icon,
    shortcut: METADATA.icons.shortcut,
    apple: METADATA.icons.apple,

    other: {
      rel: METADATA.icons.other.rel,
      url: METADATA.icons.other.url,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm.className}>
        <NextTopLoader color="#ED5700" speed={200} crawlSpeed={200} easing="ease" />
        {children}
      </body>
    </html>
  );
}
