import { SITE_URL } from "@/app/site";
import Signature from "@/components/signature";
import type { Metadata, Viewport } from "next";
import { Inter, Lexend_Deca } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const lexendDeca = Lexend_Deca({
  variable: "--font-lexend-deca",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const name = "Bellwether";
const title = `${name} | Insights that help your business grow`;
const description =
  "Discover the benefits of data analytics and make better decisions on revenue, customer experience, and overall efficiency.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: `${name} over the line “Insights that help your business grow”, beside the figures 10k+ companies, 314 templates and 12M+ queries.`,
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
      <body className="relative grid min-h-dvh place-items-center">
        <main>{children}</main>
        <Signature />
      </body>
    </html>
  );
}
