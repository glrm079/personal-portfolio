import type { Metadata } from "next";
import { ThemeProvider } from "@/components/portfolio/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Guilherme Oliveira — Creative developer",
    template: "%s — Guilherme Oliveira",
  },
  description: "Portfolio of Guilherme Oliveira, creative developer.",
  metadataBase: new URL("http://exploreguilherme.space/"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
