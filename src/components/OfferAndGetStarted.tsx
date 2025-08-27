"use client";

import { motion } from "framer-motion";

export default function OfferAndGetStarted() {
  return (
    <div className=" flex items-center justify-center py-7 p-4">
      <style jsx>{`
        @keyframes rotateMove {
          0% {
            transform: rotate(0deg) translateX(0px);
          }
          25% {
            transform: rotate(90deg) translateX(10px);
          }
          50% {
            transform: rotate(180deg) translateX(0px);
          }
          75% {
            transform: rotate(270deg) translateX(-10px);
          }
          100% {
            transform: rotate(360deg) translateX(0px);
          }
        }
        .animate-rotate-move {
          animation: rotateMove 4s ease-in-out infinite;
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ border: "1.579px solid rgba(209, 187, 247, 0.34)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-screen-2xl py-12 rounded-3xl mx-auto"
      >
        {/* Background with stars */}
        <div
          style={{
            background:
              "radial-gradient(94.05% 62.7% at 50% 0%, rgba(161, 196, 253, 0.23) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
          className="absolute inset-0 rounded-3xl border border-slate-700/50"
        >
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
            className="text-white text-center text-3xl md:text-4xl lg:text-6xl font-medium leading-tight text-balance"
          >
            <span>Jumatechs offers </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-[#86FFBC] bg-gradient-to-t pr-2 from-[#86FFBC] via-30% via-[#86FFBC00] to-[#86FFBC00] font-playfair_display italic"
            >
              white-label development
            </motion.span>
            <span> with a </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-[#A3BCFF] font-playfair_display italic"
            >
              dedicated {"engineer's"}
            </motion.span>
            <span> team, delivering scalable, </span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="text-[#A3BCFF] font-playfair_display italic"
            >
              design-first solutions under your <br /> brand
            </motion.span>
            <span>
              —confidential, transparent, and <br /> growth-ready.
            </span>
          </motion.div>

          {/* Decorative purple squares */}
          <div
            className={`absolute bottom-8 right-8 flex gap-2 transition-all duration-1000 ease-out ${
              true ? "opacity-100 animate-rotate-move" : "opacity-0"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="75"
              viewBox="0 0 75 75"
              fill="none"
            >
              <g clipPath="url(#clip0_2284_20765)">
                <mask
                  id="mask0_2284_20765"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="75"
                  height="75"
                >
                  <path d="M75 0H0V75H75V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_2284_20765)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M37.5 0H0V37.5H37.5V75H75V37.5H37.5V0Z"
                    fill="#9A89C9"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_2284_20765">
                  <rect width="75" height="75" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
