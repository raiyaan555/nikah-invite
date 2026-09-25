import type { Metadata, Viewport } from "next";
import {
  Amiri,
  Aref_Ruqaa,
  Birthstone,
  Cormorant_Garamond,
  Great_Vibes,
  Noto_Nastaliq_Urdu,
  Outfit,
} from "next/font/google";
import localFont from "next/font/local";
import { wedding } from "@/config/wedding";
import { withBasePath } from "@/lib/base-path";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const names = localFont({
  src: "../../brittany_signature/BrittanySignature.ttf",
  variable: "--font-names",
  display: "swap",
});

const birthstone = Birthstone({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-birthstone",
  display: "swap",
});

const body = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const calligraphy = Aref_Ruqaa({
  subsets: ["arabic", "latin"],
  weight: "400",
  variable: "--font-calligraphy",
  display: "swap",
  adjustFontFallback: false,
});

const bismillah = Noto_Nastaliq_Urdu({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-bismillah",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(wedding.site.url),
  title: wedding.site.title,
  description: wedding.site.description,
  applicationName: wedding.site.title,
  authors: [{ name: `${wedding.couple.person1.firstName} & ${wedding.couple.person2.firstName}` }],
  keywords: ["reception", "walima", "save the date"],
  openGraph: {
    type: "website",
    url: wedding.site.url,
    title: wedding.site.title,
    description: wedding.site.description,
    siteName: wedding.site.title,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: wedding.site.title,
    description: wedding.site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    capable: true,
    title: wedding.site.title,
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4e7d2",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme={wedding.theme}
      className={`${display.variable} ${script.variable} ${names.variable} ${birthstone.variable} ${body.variable} ${arabic.variable} ${calligraphy.variable} ${bismillah.variable}`}
      style={{ ["--envelope-cover" as string]: `url("${withBasePath("/images/backgrounds/envelope-cover.jpg")}")` }}
    >
      <body>{children}</body>
    </html>
  );
}
