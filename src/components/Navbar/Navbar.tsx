"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatedButton } from "./animated-button";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  {
    title: "Service",
    path: "/",
  },
  {
    title: "About Us",
    path: "/feature",
  },
  {
    title: "Our Team",
    path: "/testimonials",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState("/");
  const path = usePathname();

  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (path) setSelectedPath(path);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      ref={navbarRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 text-sm lg:py-5`}
    >
      <motion.div
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.0)"
            : "rgba(255, 255, 255, 0.0)",
          backdropFilter: isScrolled ? "blur(20px)" : "blur(0px)",
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`navbar-container max-w-screen-2xl py-3 lg:rounded-xl transition-all font-[inter] mx-auto overflow-hidden px-4 flex flex-wrap items-center justify-between text-[#060018]`}
      >
        <div className="flex items-center">
          <div className="md:mr-8 md:pr-8 flex items-center gap-6 border-[#51A387]">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.68, -0.55, 0.265, 1.55],
                delay: 0.4,
              }}
            >
              <Image
                src="/images/jumtech-1 2.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-auto size-14 md:size-[70px] object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.5,
              }}
              className="bg-white hidden h-[70px] px-12 md:flex items-center rounded-[1000px]"
            >
              <nav id="items" className="hidden md:flex items-center space-x-8">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.6,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <Link
                    id="navLinks"
                    href={"/service"}
                    className={`font-medium transition-all text-[#060018]`}
                  >
                    Service
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.7,
                  }}
                  className="size-9 animate-bounce bg-[#E1E7FD] flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-300 transition-all duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M18.707 11.7929L17.293 10.3789L13 14.6719V5.08593H11V14.6719L6.70697 10.3789L5.29297 11.7929L12 18.4999L18.707 11.7929Z"
                      fill="#0D0D12"
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.8,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <Link
                    id="navLinks"
                    href={"/about"}
                    className={`font-medium transition-all text-[#060018]`}
                  >
                    About Us
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.9,
                  }}
                  whileHover={{
                    y: -2,
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                >
                  <Link
                    id="navLinks"
                    href={"/team"}
                    className={`font-medium transition-all text-[#060018]`}
                  >
                    Our Team
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            ease: [0.68, -0.55, 0.265, 1.55],
            delay: 0.6,
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
          }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex"
        >
          <AnimatedButton />
        </motion.div>

        <div
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`navbar-toggler hamburger ${
            isMenuOpen ? "open" : ""
          } space-y-[7px] -mt-2`}
        >
          <div className={`line ${isScrolled ? "bg-white" : "bg-white"}`}></div>
          <div className={`line ${isScrolled ? "bg-white" : "bg-white"}`}></div>
          <div className={`line ${isScrolled ? "bg-white" : "bg-white"}`}></div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 backdrop-blur-xl z-50 p-4"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="mr-8 pr-8 flex items-center gap-2 border-[#51A387]">
                <Image
                  src="/images/jumtech-1 2.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-auto size-12 object-contain"
                />
                <p className="text-white text-xl">Jumatechs</p>
              </div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 dark:text-white w-6" />
              </button>
            </div>
            <nav className="flex flex-col space-y-6">
              {navLinks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.1 + index * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="mobile-nav-item"
                >
                  <Link
                    href={`${item?.path}`}
                    className="text-lg text-white hover:underline font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item?.title}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="mobile-nav-item"
              >
                <AnimatedButton />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
