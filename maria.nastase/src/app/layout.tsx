import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maria Nastase",
  description: "Personal Website",
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
        <div className="flex min-h-screen flex-col bg-white/30 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg p-6">
          <div className="flex-grow">
            {children}
            <Analytics />
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html>
    
  );
}
