// app/(site)/layout.tsx
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/_components/Navbar";
import Footer from "@/app/_components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoogleAnalytics } from "@next/third-parties/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "400", "600", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: "italic",
  variable: "--font-playfair",
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title:
    "Manual Treatment and Physical Medicine Clinic | Pain Relief, Recovery, and Wellness",
  description:
    "Experience personalized manual therapy and physical medicine for effective pain relief, improved mobility, and optimal well-being. Our expert practitioners specialize in treating a wide range of conditions, including back pain, neck pain, sports injuries, and more.",
  keywords:
    "manual therapy, physical medicine, pain relief, osteopathy, sports injuries, back pain, neck pain, arthritis, rehabilitation, wellness",
};

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <GoogleAnalytics gaId="G-31M39NLFPP" />
    </div>
  )
}