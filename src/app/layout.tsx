import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const exo = Exo({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fresh Cart",
  description: "A modern e-commerce template built with Next.js, Tailwind CSS, and TypeScript.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={cn("min-h-full flex flex-col", exo.className)}>
        {children}
      </body>
    </html>
  );
}
