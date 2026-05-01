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
  title: "support.ai",
  description: "The AI-powered customer support platform that helps you provide better service to your customers.",
  icons:{
    icon:"/5M5XPiCdF8OO0OXrA60Zajo3bESHLm78_P6qCF1Yn6IXKvc5xWFEkroDXaVgQhWy_vx1LH_unt0s9_ZDYCQk6KvQnANHzqPMV4UoZ6-9Twa7HR3c0-hEhXZXSS50_tTdpdWI_xqw5QeLgW3UW6bUQ7py-NkyJQquFA_fWWoktWe7SdYhhGb2t4wNBOmxVR9H.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
