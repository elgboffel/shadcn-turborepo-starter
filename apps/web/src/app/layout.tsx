import { Metadata, Viewport } from "next";
import { cn } from "@project/common";
import "@project/ui/styles/shared-globals.css";
import { Analytics } from "@vercel/analytics/react";
import { display, inter } from "@/styles/fonts";
import { Providers } from "./providers";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.variable, display.variable)} suppressHydrationWarning>
        <Providers>
          <Analytics />
          {children}
        </Providers>
      </body>
    </html>
  );
}
