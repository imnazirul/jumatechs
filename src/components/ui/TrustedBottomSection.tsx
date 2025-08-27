"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useIntersectionObserver } from "@/helpers/use-intersection-observer";
import Image from "next/image";
import { AnimatedButton } from "../Navbar/animated-button";

export default function TrustedBottomSection() {
  const { ref: headerRef, isIntersecting: headerVisible } =
    useIntersectionObserver();

  return (
    <div className="max-w-screen-2xl mt-10 mb-12 md:mt-52 md:mb-96 mx-auto">
      <motion.div
        className="absolute w-full h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 30%, rgba(59, 130, 246, 0.1) 60%, transparent 100%)",
          filter: "blur(40px)",
        }}
        animate={{
          x: [100, 200, 100],
          y: [100, 50, 100],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        initial={{ x: 100, y: 100 }}
      />

      {/* Secondary glowing orb */}
      <motion.div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(147, 51, 234, 0.15) 40%, transparent 70%)",
          filter: "blur(30px)",
        }}
        animate={{
          x: [300, 150, 300],
          y: [200, 300, 200],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        initial={{ x: 300, y: 200 }}
      />

      {/* Tertiary subtle glow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 80%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [50, 250, 50],
          y: [300, 100, 300],
          scale: [1.1, 0.9, 1.1],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
        initial={{ x: 50, y: 300 }}
      />

      {/* Ambient particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-400/20"
          animate={{
            x: [Math.random() * 400, Math.random() * 400, Math.random() * 400],
            y: [Math.random() * 400, Math.random() * 400, Math.random() * 400],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
          initial={{
            x: Math.random() * 400,
            y: Math.random() * 400,
            opacity: 0.2,
          }}
        />
      ))}
      <div
        ref={headerRef}
        className={`text-center px-4 md:mb-16 mb-4 flex flex-col md:flex-row  md:items-center justify-between transition-all duration-1000 ease-out ${
          headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-3">
          <Image
            src={"/images/Group 1597883039.svg"}
            alt="logo"
            width={100}
            className="size-16 md:size-20 object-cover"
            height={100}
          />
          <div>
            <h1 className="text-white text-left font-semiboldt text-lg md:text-[28px]">
              Jarif Anjum
            </h1>
            <p className="text-sm md:text-lg font-medium text-[#878DA2]">
              Founder of Jumatechs
            </p>
          </div>
        </div>
        <div className="max-w-5xl flex flex-col items-start gap-7">
          <p className="text-white font-medium text-left max-md:mt-7 md:leading-16 text-2xl md:text-5xl">
            <span className="w-32 hidden md:inline-block"></span>Jumatechs is a Design
            first Development company that provides professional IT services for
            entrepreneurs and companies around the world.
          </p>
          <AnimatedButton />
        </div>
      </div>
    </div>
  );
}
