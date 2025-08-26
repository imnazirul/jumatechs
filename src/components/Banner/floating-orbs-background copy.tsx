"use client";
import { motion } from "framer-motion";
export default function FloatingOrbsBackgroundLG() {
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

  return (
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
  );
}
