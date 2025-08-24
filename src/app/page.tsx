"use client";
import AwesomeLoader from "@/components/Banner/awesome-loader";
import Banner from "@/components/Banner/Banner";
import PreloaderOverlay from "@/components/Loader/PreloaderOverlay";
import Navbar from "@/components/Navbar/Navbar";
import Projects from "@/components/Projects";
import GSAPHoverButton from "@/components/ui/gsap-hover-button";
import SmoothScroll from "@/components/ui/smooth-scroll.tsx";
import TrustedIndustries from "@/components/ui/TrustedIndustries";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => setShow(false), 2100); // keep it short
    return () => clearTimeout(id);
  }, []);

  if (show)
    return (
      <div
        //   aria-hidden="true"
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      >
        <AwesomeLoader />
      </div>
    );

  return (
    <div className="font-bricolage_grotesque mb-40">
      {/* <PreloaderOverlay /> */}
      <Navbar />
      <Banner />
      <TrustedIndustries />
      <Projects />
      <GSAPHoverButton
        className="bg-white text-black px-7 py-3 border-black hover:text-black"
        onClick={() => console.log("Custom button clicked")}
      >
        Custom Style Button
      </GSAPHoverButton>
    </div>
  );
};

export default Page;
