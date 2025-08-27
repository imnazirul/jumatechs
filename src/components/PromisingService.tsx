"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const CardButton = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <motion.div
        className=" min-w-full h-32 p-1 rounded-2xl cursor-pointer transition-all duration-1000 "
        style={{
          background: `conic-gradient(from var(--border-angle, 0deg), #ffffff1a 0%, #5160A51c 10%, #5160A51a 10%, #5160A5 100%)`,
        }}
        animate={{
          "--border-angle": "360deg",
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
        }}

        // whileHover={{
        //   scale: 1.03,
        // }}
      >
        <div className="bg-[#060018] w-full h-full rounded-[15px]">
          <div
            style={{
              background:
                "radial-gradient(919.65% 298.3% at 171.93% 305.67%, rgba(255, 255, 255, 0.36) 0%, rgba(255, 255, 255, 0.00) 100%), rgba(81, 96, 165, 0.11)",
            }}
            className="overflow-hidden flex-col rounded-[13px] p-4 hover:bg-blue-700 transition-all  flex items-start justify-center bg-[#1C59FF]  h-full border-neutral-800 "
          >
            <p className="text-center text-white text-2xl mb-2 font-semibold">
              {title}
            </p>
            {description && (
              <p className="text-left max-w-md text-[#D3D3D3] text-sm font-light">
                {description}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function PromisingService() {
  return (
    <div className=" flex my-12 items-center justify-center p-4">
      <motion.div
        className="relative max-w-screen-2xl w-full"
        initial={{ opacity: 0, y: 20 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Border Container */}
        <motion.div
          className="p-[5px] rounded-3xl cursor-pointer"
          style={{
            background: `conic-gradient(from var(--border-angle, 0deg), 
              rgba(59, 130, 246, 0) 0%, 
              rgba(255, 255, 255, 0.8) 25%, 
              rgba(147, 51, 234, 0.8) 50%, 
              rgba(59, 130, 246, 0.8) 75%, 
              rgba(59, 130, 246, 0) 100%)`,
          }}
          animate={{
            "--border-angle": "360deg",
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {/* Outer Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 blur-xl" />

          {/* Main Card */}
          <div className="relative  bg-[#060018]  backdrop-blur-xl rounded-3xl p-8 md:p-16">
            {/* Services Badge */}
            <motion.div
              className="flex items-center justify-center gap-2 mb-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.66142 11.9999L0 9.30643L3.43573 3.35755L8.09987 6.04637L8.1025 0.664062H14.974L14.9767 6.04637L19.6408 3.35755L23.0765 9.30643L18.4151 11.9999L23.0765 14.6934L19.6408 20.6423L14.9767 17.9535L14.974 23.3358H8.1025L8.09987 17.9535L3.43573 20.6423L0 14.6934L4.66142 11.9999Z"
                  fill="url(#paint0_linear_2284_18967)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2284_18967"
                    x1="23.0765"
                    y1="22.7352"
                    x2="-4.60123"
                    y2="11.3175"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#7C99EA" />
                    <stop offset="1" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="bg-gradient-to-r from-[#fff]  to-[#7C99EA] bg-clip-text text-transparent text-[22px]  font-medium tracking-wider uppercase">
                Services
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-5xl text-center font-bold text-white mb-12 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Promising High{" "}
              <span className="bg-gradient-to-r italic font-playfair_display text-[#A1B2FF]">
                Valuable <br /> Services
              </span>
            </motion.h1>

            <div className="grid md:grid-cols-2 gap-7 items-start">
              {/* Phone Mockup */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Image
                  src={"/images/Feedback (1).svg"}
                  alt="image"
                  width={700}
                  height={1100}
                  className="h-full w-full object-contain"
                />
              </motion.div>

              {/* Services List */}
              <div className="space-y-7">
                {[
                  { name: "Web Design", delay: 0.5 },
                  {
                    name: "Mobile App Design",
                    description:
                      "Developing intuitive and engaging mobile app designs that elevate user engagement and satisfaction.",
                    delay: 0.6,
                    highlighted: true,
                  },
                  { name: "Marketing", delay: 0.7 },
                  { name: "Development", delay: 0.8 },
                  { name: "AI & Automation", delay: 0.9 },
                ].map((service, index) => (
                  <CardButton
                    description={service.description || ""}
                    title={service.name}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
