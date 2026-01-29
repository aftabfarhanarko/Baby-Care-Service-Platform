import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://baby-sitting-app.vercel.app"), // Replace with your actual domain
  title: {
    default: "Care.xyz - Professional Care Services",
    template: "%s | Care.xyz",
  },
  description: "Find trusted babysitters, nannies, and care providers near you. Professional and verified caregivers for your peace of mind.",
  keywords: ["babysitter", "nanny", "childcare", "elder care", "pet sitting", "home care", "professional caregivers"],
  authors: [{ name: "Care.xyz Team" }],
  creator: "Care.xyz",
  publisher: "Care.xyz",
  openGraph: {
    title: "Care.xyz - Professional Care Services",
    description: "Find trusted babysitters, nannies, and care providers near you.",
    url: "https://baby-sitting-app.vercel.app",
    siteName: "Care.xyz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ibb.co.com/tPDGq5bs", // Ensure you have an image at public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Care.xyz - Professional Care Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Care.xyz - Professional Care Services",
    description: "Find trusted babysitters, nannies, and care providers near you.",
    creator: "@carexyz", // Replace with actual handle
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
