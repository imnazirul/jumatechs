"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  // First row logos
  { name: "anybox", text: "anybox" },
  { name: "Onethread", text: "Onethread" },
  { name: "Rabfy", text: "Rabfy" },
  { name: "Ontik Technology", text: "Ontik Technology" },
  { name: "Ostad", text: "Ostad" },
  { name: "Oter", text: "Oter" },
  { name: "Sift", text: "Sift" },
  { name: "SKILLOPIA", text: "SKILLOPIA" },
];

const secondRowLogos = [
  { name: "xiata", text: "xiata" },
  { name: "GUARDIAN", text: "GUARDIAN" },
  { name: "crantech", text: "crantech*" },
  { name: "CRE Guard", text: "CRE Guard" },
  { name: "MEDEASE", text: "MEDEASE" },
  { name: "Basafeer", text: "Basafeer" },
  { name: "AMI SHIPPING", text: "AMI SHIPPING LINE LIMITED" },
];

function Marquee() {
  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Animated gradient border container */}
      <div className="relative">
        {/* Animated gradient border */}

        {/* Content container with dark background */}
        <div className="relative rounded-2xl  p-8">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#060018] to-transparent pointer-events-none rounded-l-2xl" />
          <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#060018] to-transparent pointer-events-none rounded-r-2xl" />

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
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the logos array to create seamless loop */}
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center justify-center text-white/80 text-lg font-medium min-w-fit px-4"
                >
                  {logo.text}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second row - moving right to left */}
          <div>
            <motion.div
              className="flex gap-12 whitespace-nowrap"
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 35,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate the logos array to create seamless loop */}
              {[...secondRowLogos, ...secondRowLogos, ...secondRowLogos].map(
                (logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    className="flex items-center justify-center text-white/80 text-lg font-medium min-w-fit px-4"
                  >
                    {logo.text}
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

export default function GradientBorderCard() {
  return (
    <div className="h-screen my-24 w-full max-w-screen-2xl mx-auto ">
      <motion.div
        className="w-full max-w-screen-2xl h-[700px] p-1 rounded-4xl cursor-pointer transition-all duration-1000 ease-out"
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), rgba(0, 45, 247, 0.00) 0%, #1E1242 10%, #0010F7 20%, #FFF 100%)`,
        }}
        animate={{
          "--border-angle": "360deg",
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        // whileHover={{
        //   scale: 1.03,
        // }}
      >
        <div
          style={{}}
          className="overflow-hidden  rounded-4xl text-white/50 bg-neutral-900  h-full border-neutral-800 text-center text-xs"
        >
          {/* <Image
            src={"https://images.unsplash.com/photo-1536485255710-1bedfeea2d52?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt="image"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          /> */}
          <iframe
            // width="560"
            // height="315"
            src="https://www.youtube.com/embed/AW1yfBKRMKc?si=WNe6saR1xleM2m1m"
            title="YouTube video player"
            frameBorder="0"
            className="h-full w-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </motion.div>
      <Marquee />
    </div>
  );
}
