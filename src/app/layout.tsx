import Signature from "@/components/signature";
import { SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = localFont({
  src: "../assets/fonts/lexend-deca-400.subset.woff2",
  variable: "--font-lexend-deca",
  weight: "400",
  display: "swap",
  declarations: [
    { prop: "unicode-range", value: "U+41, U+43, U+45, U+49, U+4c-55" },
  ],
});

const name = "Bellwether";
const title = `${name} | Insights that help your business grow`;
const description =
  "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `The ${name} card showing 10k+ companies, 314 templates and 12M+ queries, beside the line “Get insights that help your business grow”.`,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0c1c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${lexendDeca.variable} antialiased`}
    >
      <body className="relative">
        <main className="grid min-h-dvh place-items-center px-6 py-22">
          {children}
        </main>
        <Signature />
      </body>
    </html>
  );
}
