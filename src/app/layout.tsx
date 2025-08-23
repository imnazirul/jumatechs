import type { Metadata } from "next";
import { Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const bricolage_grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage_grotesque",
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair_display",
});

export const metadata: Metadata = {
  title: "Jumatechs",
  description:
    "We design and deploy custom AI solutions that automate repetitive tasks, optimize workflows, and unlock predictive insights—helping your team move faster",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolage_grotesque.variable} ${playfair_display.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
