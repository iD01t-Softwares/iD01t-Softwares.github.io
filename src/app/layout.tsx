import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iD01t Softwares | Premium Digital Solutions",
  description: "Crafting high-performance, scalable, and beautifully designed digital products. Expert software development services for forward-thinking brands.",
  keywords: ["Software Development", "Web Development", "AI Integration", "Cloud Infrastructure", "Custom Software"],
  authors: [{ name: "iD01t Softwares" }],
  openGraph: {
    title: "iD01t Softwares | Premium Digital Solutions",
    description: "Building the Future Bit by Bit. Expert software development services.",
    url: "https://id01t-softwares.github.io",
    siteName: "iD01t Softwares",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iD01t Softwares | Premium Digital Solutions",
    description: "Building the Future Bit by Bit. Expert software development services.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
