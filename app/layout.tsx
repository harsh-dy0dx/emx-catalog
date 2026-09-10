import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "../components/AnimatedCursor";
import FloatingActionButtons from "../components/FloatingActionButtons";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: "EMX Motor Necessities LLP | Wholesale Car AC Parts India",
  description: "India's largest wholesaler and retailer of premium car AC parts. Genuine & aftermarket compressors, condensers, blowers, and valves. PAN India Delivery.",
  keywords: [
    "Car AC Parts Wholesale", "Subros Compressor", "Denso AC Parts", 
    "Sanden Compressor", "Valeo Evaporator", "Car AC Condenser Delhi",
    "Auto Air Conditioning Parts India", "EMX Motors", "Aftermarket AC Parts",
    "Wholesale Car Parts NCR"
  ],
  authors: [{ name: "EMX Motor Necessities LLP" }],
  openGraph: {
    title: "EMX Motor Necessities | Premium Car AC Parts",
    description: "Authorised dealer for 23+ brands. Wholesale car AC parts with PAN India courier and delivery.",
    url: "https://emx.co.in", // Replace with your actual domain when live
    siteName: "EMX Motor Necessities LLP",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.variable} ${jakarta.variable} font-sans antialiased`}>
        
        {/* Secured Background Layer */}
        <div className="bg-layer">
          <div className="animated-bg"></div>
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        {/* Custom Cursor (Hidden on Mobile) */}
        <div className="hidden md:block">
          <AnimatedCursor />
        </div>
        
        {/* Main Content & Floating Buttons - ONLY ONE {children} HERE */}
        <div className="relative z-10">
          <FloatingActionButtons />
          {children}
        </div>

      </body>
    </html>
  );
}