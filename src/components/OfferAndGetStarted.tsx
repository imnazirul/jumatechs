"use client";

import { motion } from "framer-motion";

export default function OfferAndGetStarted() {
  return (
    <div className=" flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-screen-2xl mx-auto"
      >
        {/* Background with stars */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-900 rounded-3xl border border-slate-700/50">
          {/* Animated stars */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 p-12 md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-3xl text-center md:text-4xl lg:text-5xl font-medium leading-tight text-balance"
          >
            <span>Jumatechs offers </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-emerald-400 bg-gradient-to-t from-[#86FFBC] via-[#86FFBC00] to-[#86FFBC00]  italic"
            >
              white-label development
            </motion.span>
            <span> with a </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-blue-400 italic"
            >
              dedicated {"engineer's"}
            </motion.span>
            <span> team, delivering scalable, </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-blue-400 italic"
            >
              design-first solutions under your brand
            </motion.span>
            <span>—confidential, transparent, and growth-ready.</span>
          </motion.div>

          {/* Decorative purple squares */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 2 }}
            className="absolute bottom-8 right-8 flex gap-2"
          >
            <motion.div
              className="w-6 h-6 bg-purple-500 rounded-sm"
              whileInView={{
                rotate: [0, 5, -5, 0],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="w-4 h-4 bg-purple-400 rounded-sm"
              whileInView={{
                rotate: [0, -5, 5, 0],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
