import { ThemeProvider } from "@/components/portfolio/theme-provider";
import { siteUrl } from "@/lib/portfolio-metadata";
import { DM_Mono, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Guilherme Oliveira — Full Stack Developer",
    template: "%s — Guilherme Oliveira",
  },
  description: "Portfolio of Guilherme Oliveira, Full Stack Developer.",
  metadataBase: new URL(siteUrl),
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const requestHeaders = await headers();
  const documentLanguage =
    requestHeaders.get("x-portfolio-document-language") ?? "pt-BR";

  return (
    <html
      lang={documentLanguage}
      className={`${manrope.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-ML8NK4N2');`}
        </Script>
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-ML8NK4N2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
