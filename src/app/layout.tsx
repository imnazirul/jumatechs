"use client";
import type { Metadata } from "next";
import { Bricolage_Grotesque, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import AwesomeLoader from "@/components/Banner/awesome-loader";

const bricolage_grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage_grotesque",
  subsets: ["latin", "latin-ext", "vietnamese"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair_display",
  subsets: ["cyrillic", "latin", "latin-ext", "vietnamese"],
});

// export const metadata: Metadata = {
//   title: "Jumatechs",
//   description:
//     "We design and deploy custom AI solutions that automate repetitive tasks, optimize workflows, and unlock predictive insights—helping your team move faster",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  if (isLoading) {
    return (
      <html lang="en">
        <body>
          <div className="h-screen flex z-[99999999999] items-center justify-center w-full bg-white">
            <AwesomeLoader />
          </div>
        </body>
      </html>
    );
  }
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
