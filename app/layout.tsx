import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import BackgroundFx from "@/components/ui/BackgroundFx";
import CustomCursor from "@/components/ui/CustomCursor";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beornb.com"),
  title: "Beorn Bishop | Engineering Leader",
  description: "Portfolio and CV of Beorn Bishop - Engineering Leader combining strong traditional development principles with AI augmentation to deliver scalable, solid solutions.",
  openGraph: {
    title: "Beorn Bishop | Engineering Leader",
    description: "Portfolio and CV of Beorn Bishop - Engineering Leader combining strong traditional development principles with AI augmentation to deliver scalable, solid solutions.",
    url: "https://beornb.com",
    siteName: "Beorn Bishop Portfolio",
    images: [
      {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Beorn Bishop - Engineering Leader Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beorn Bishop | Engineering Leader",
    description: "Portfolio and CV of Beorn Bishop - Engineering Leader combining strong traditional development principles with AI augmentation to deliver scalable, solid solutions.",
    images: ["/images/og_image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative selection:bg-[var(--color-bright-purple)] selection:text-black cursor-default`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <CustomCursor />
          <BackgroundFx />
          <Navbar />
          <main className="relative z-10 w-full">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
