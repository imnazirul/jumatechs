"use client";
import { motion } from "framer-motion";
import { AnimatedButton } from "../Navbar/animated-button";
import FloatingOrbsBackground from "./floating-orbs-background";
import { useIsMobile } from "@/helpers/use-mobile";

export default function HeroSectionFramer() {
  const isMobile = useIsMobile();
  const splitTextIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        className="word inline-block mr-2"
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.4 + index * 0.1,
          ease: [0.68, -0.55, 0.265, 1.55], // back.out(1.7) equivalent
        }}
        style={{ transformOrigin: "center bottom" }}
      >
        {word}
      </motion.span>
    ));
  };

  // Background gradient animation variants
  const backgroundVariants = {
    animate: {
      background: [
        "linear-gradient(135deg, #1C59FF 10%, #1C59FF 10%, #1C59FF 15%, #1C59FF 20%, #1C59FF00 25%)",
        "linear-gradient(135deg, #1C59FF 15%, #1C59FF 15%, #1C59FF 20%, #1C59FF 25%, #1C59FF00 30%)",
        "linear-gradient(135deg, #1C59FF 10%, #1C59FF 10%, #1C59FF 15%, #1C59FF 20%, #1C59FF00 25%)",
      ],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Floating orb animations
  const orb1Variants = {
    animate: {
      x: [0, 100, 0],
      y: [0, -50, 0],
      scale: [1, 1.2, 1],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const orb2Variants = {
    animate: {
      x: [0, -80, 0],
      y: [0, 60, 0],
      scale: [1, 0.8, 1],
      transition: {
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 1,
      },
    },
  };

  // Text glow animation
  const textGlowVariants = {
    animate: {
      textShadow: [
        "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
        "0 0 30px rgba(139, 92, 246, 0.7), 0 0 60px rgba(139, 92, 246, 0.5)",
        "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
      ],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  // Illustration floating animation
  const illustrationFloatVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
        delay: 2,
      },
    },
  };

  return (
    <div className="bg-[url('/images/Firefly-20250808011206.svg')] min-h-[100vh] bg-cover bg-left md:bg-center bg-no-repeat">
      <div className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        {!isMobile ? (
          <>
            <motion.div
              className="absolute max-md:hidden inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-purple-200"
              variants={backgroundVariants as any}
              animate="animate"
            />
            {/* Floating Glow Orbs */}
            <motion.div
              className="absolute max-md:hidden top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl opacity-30"
              initial={{ opacity: 0.6 }}
              variants={orb1Variants as any}
              animate="animate"
            />
            <motion.div
              className="absolute max-md:hidden bottom-20 right-20 w-48 h-48 bg-blue-700 rounded-full blur-3xl opacity-40"
              initial={{ opacity: 0.6 }}
              variants={orb2Variants as any}
              animate="animate"
            />{" "}
          </>
        ) : (
          <div className="md:hidden">
            <FloatingOrbsBackground />
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 py-10 mt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <motion.div
                className="inline-flex items-center gap-2 backdrop-blur-sm bg-[#ffffff0D] rounded-full text-white md:text-[#1C2E61] px-4 py-2  text-sm md:text-base font-medium border border-white/40"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block text-base md:text-lg font-medium border border-white/40 px-2 text-nowrap md:px-4 rounded-full">
                  We Are
                </span>
                <div className="w-2 h-2 rounded-full animate-pulse" />
                Design First Development Company
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-[40px] md:text-5xl lg:text-7xl font-bold text-[#060018] leading-tight"
                variants={textGlowVariants as any}
                animate="animate"
              >
                {splitTextIntoWords(
                  "We  solve  business problems  through technology."
                )}
              </motion.h1>

              {/* Subtext */}
              <motion.p
                className="text-lg text-[#535E7C] max-w-lg font-normal leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                UI/UX Design • Custom Development • AI & Automation
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1,
                  ease: [0.68, -0.55, 0.265, 1.55], // back.out(1.7) equivalent
                }}
              >
                <AnimatedButton />
              </motion.div>

              {/* Company Badges */}
              <div className="flex flex-col md:flex-row md:items-center gap-8 pt-12">
                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  <div className="size-[58px] bg-[#ffffff33] border border-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="20"
                      viewBox="0 0 28 20"
                      fill="none"
                    >
                      <path
                        d="M21.2937 2.09344C19.9032 2.1179 18.5635 2.62038 17.5 3.51639C16.4364 4.41241 15.7138 5.6473 15.4537 7.01344C14.1479 4.98403 13.1252 2.78599 12.4137 0.480103H9.40033V8.4801C9.40033 9.23685 9.09971 9.96261 8.5646 10.4977C8.0295 11.0328 7.30374 11.3334 6.54699 11.3334C5.79024 11.3334 5.06449 11.0328 4.52938 10.4977C3.99428 9.96261 3.69366 9.23685 3.69366 8.4801V0.480103L0.666992 0.546769V8.54677C0.675833 10.1027 1.3024 11.5914 2.40887 12.6854C3.51533 13.7793 5.01106 14.3889 6.56699 14.3801C8.12293 14.3713 9.61163 13.7447 10.7056 12.6382C11.7996 11.5318 12.4092 10.036 12.4003 8.4801V7.14677C13.04 8.40153 13.7756 9.6051 14.6003 10.7468L12.7603 19.5601H15.8537L17.187 13.1468C18.4227 13.9409 19.8649 14.3536 21.3337 14.3334C22.9497 14.3334 24.4996 13.6915 25.6423 12.5487C26.785 11.406 27.427 9.85616 27.427 8.2401C27.427 6.62405 26.785 5.07419 25.6423 3.93147C24.4996 2.78874 22.9497 2.14677 21.3337 2.14677L21.2937 2.09344ZM21.2937 11.2001C20.0408 11.1596 18.8401 10.6888 17.8937 9.86677L18.2003 8.65344V8.58677C18.4137 7.25344 19.0803 5.1201 21.3337 5.1201C21.7287 5.11659 22.1206 5.19115 22.4868 5.3395C22.853 5.48786 23.1863 5.70709 23.4675 5.9846C23.7487 6.26211 23.9724 6.59245 24.1256 6.95663C24.2788 7.32081 24.3586 7.71167 24.3603 8.10677C24.3318 8.90672 24.0056 9.66722 23.4458 10.2394C22.886 10.8115 22.1328 11.1541 21.3337 11.2001H21.2937Z"
                        fill="#060018"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base text-gray-900">
                      100% Job Success On
                    </div>
                    <div className="text-sm text-[#454648]">Upwork</div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                  <div className="size-[58px] bg-[#ffffff33] border border-white rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="32"
                      viewBox="0 0 29 32"
                      fill="none"
                    >
                      <path
                        d="M22.2041 22.5306C20.5714 23.8367 18.2857 24.8163 16 24.8163C10.7755 24.8163 7.18367 20.898 7.18367 15.6735C7.18367 10.449 10.7755 6.85714 16 6.85714C18.2857 6.85714 20.5714 7.5102 22.2041 9.14285L23.1837 10.1224L28.4082 5.22449L27.102 4.24489C24.1633 1.63265 20.2449 0 16 0C6.85715 0 0 6.85714 0 16C0 25.1429 6.85715 32 16 32C20.2449 32 24.1633 30.3674 27.102 27.7551L28.4082 26.7755L23.1837 21.551L22.2041 22.5306Z"
                        fill="#060018"
                      />
                      <path
                        d="M15.6727 21.2247C18.5581 21.2247 20.8972 18.8856 20.8972 16.0002C20.8972 13.1148 18.5581 10.7757 15.6727 10.7757C12.7873 10.7757 10.4482 13.1148 10.4482 16.0002C10.4482 18.8856 12.7873 21.2247 15.6727 21.2247Z"
                        fill="#FF3D2E"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-base text-gray-900">
                      Top 100 Global service
                    </div>
                    <div className="text-sm text-gray-600">
                      providers by Clutch
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Illustration */}
            {!isMobile && (
              <motion.div
                className="relative hidden lg:block"
                initial={{ opacity: 0, scale: 0.6, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                variants={illustrationFloatVariants as any}
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* 3D Blue Geometric Shape */}
                  <div className="relative">
                    <div className="w-80 h-80 mx-auto relative">
                      {/* Main 3D blocks */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-12 shadow-2xl" />
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-6 shadow-xl" />
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-lg" /> */}

                      {/* Accent elements */}
                      <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-400 rounded-full shadow-lg" />
                      <div className="absolute bottom-12 left-12 w-4 h-16 bg-white/20 rounded-full backdrop-blur-sm" />
                      <div className="absolute top-1/2 left-8 w-2 h-8 bg-white/30 rounded-full backdrop-blur-sm" />
                    </div>
                  </div>

                  {/* Floating particles */}
                  <div className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
                  <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  <div className="absolute top-1/3 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-ping" />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
