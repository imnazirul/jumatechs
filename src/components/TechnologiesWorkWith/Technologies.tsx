import React from "react";
import TechShowcase from "./TopPart";
import Image from "next/image";

import { motion } from "framer-motion";

const logos = [
  // First row logos
  { name: "UIUX Design", text: "UIUX Design" },
  { name: "Bot Development", text: "Bot Development" },
  { name: "Development", text: "Development" },
  { name: "UIUX Design", text: "UIUX Design" },
  { name: "Bot Development", text: "Bot Development" },
  { name: "Development", text: "Development" },
];

const secondRowLogos = [
  { name: "UIUX Design", text: "UIUX Design" },
  { name: "Bot Development", text: "Bot Development" },
  { name: "Development", text: "Development" },
  { name: "UIUX Design", text: "UIUX Design" },
  { name: "Bot Development", text: "Bot Development" },
  { name: "Development", text: "Development" },
];

const mockupImages = [
  { src: "/images/01 Free Macbook Pro Mockup On Bricks 1.svg" },
  { src: "/images/image (2).svg" },
  { src: "/images/02 Free Macbook Pro Mockup 1.svg" },
  { src: "/images/01 Free Macbook Pro Mockup On Bricks 1.svg" },
  { src: "/images/image (2).svg" },
  { src: "/images/02 Free Macbook Pro Mockup 1.svg" },
  { src: "/images/01 Free Macbook Pro Mockup On Bricks 1.svg" },
  { src: "/images/image (2).svg" },
  { src: "/images/02 Free Macbook Pro Mockup 1.svg" },
];

function TopMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-7">
      {/* Animated gradient border container */}
      <div className="relative">
        {/* Content container with dark background */}
        <div className="relative rounded-2xl md:p-8">
          {/* First row - moving left to right */}
          <div className="mb-8">
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{
                animation: "marqueeLeftToRight 30s linear infinite",
              }}
            >
              {/* Duplicate the logos array to create seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center gap-2 justify-center text-[#060018] text-5xl font-semibold  text-nowrap min-w-fit px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M12.5 0L15.7411 8.75891L24.5 12L15.7411 15.2411L12.5 24L9.25891 15.2411L0.5 12L9.25891 8.75891L12.5 0Z"
                      fill="#1C59FF"
                    />
                  </svg>
                  {logo.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeLeftToRight {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
}
function BottomMarquee() {
  return (
    <div className="relative w-full overflow-hidden  ">
      {/* Animated gradient border container */}
      <div className="relative">
        {/* Content container with dark background */}
        <div className="relative rounded-2xl md:p-8">
          {/* Second row - moving right to left */}
          <div>
            <div
              className="flex gap-12 whitespace-nowrap"
              style={{
                animation: "marqueeRightToLeft 35s linear infinite",
              }}
            >
              {/* Duplicate the logos array to create seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map(
                (logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex items-center gap-2 justify-center text-[#060018] text-5xl font-semibold  text-nowrap min-w-fit px-4"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M12.5 0L15.7411 8.75891L24.5 12L15.7411 15.2411L12.5 24L9.25891 15.2411L0.5 12L9.25891 8.75891L12.5 0Z"
                        fill="#1C59FF"
                      />
                    </svg>
                    {logo.text}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marqueeRightToLeft {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

function ImageMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-7">
      {/* Animated gradient border container */}
      <div className="relative">
        {/* Animated gradient border */}

        {/* Content container with dark background */}
        <div className="relative rounded-2xl  md:p-8">
          {/* Gradient overlays */}
  
          {/* First row - moving left to right */}
          <div className="mb-8">
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the logos array to create seamless loop */}
              {[...mockupImages, ...mockupImages, ...mockupImages].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center text-white/80 text-lg font-medium min-w-fit h-[450px] rounded-xl  overflow-hidden px-4"
                  >
                    <Image
                      src={logo.src}
                      alt="image"
                      width={720}
                      height={1080}
                      className="rounded-xl overflow-hidden object-contain h-full w-auto"
                    />
                  </div>
                )
              )}
            </motion.div>
          </div>

       
        </div>
      </div>
    </div>
  );
}

const Technologies = () => {
  return (
    <div className="rounded-[64px] bg-[#F5F5F5] py-12">
      <div className="max-w-screen-2xl  px-4 mx-auto">
        <TechShowcase />
      </div>
      <TopMarquee />
      <ImageMarquee />
      <BottomMarquee />
    </div>
  );
};

export default Technologies;
