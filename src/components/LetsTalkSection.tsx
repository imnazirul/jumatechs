"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AnimatedCTASection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-screen-2xl mx-auto"
    >
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
      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative  rounded-3xl border border-gray-700 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 min-h-[500px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex-1 lg:pr-12 text-center lg:text-left"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              className="text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight"
            >
              Have a project idea <br /> in mind?{" "}
              <span className="italic font-playfair_display text-[#A1B2FF] font-bold">
                {"Let's"} get started
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="text-white font-normal text-lg mb-8 leading-relaxed max-w-md mx-auto lg:mx-0"
            >
              {"We'll"} schedule a call to discuss your idea. After discovery
              sessions, {"we'll"} send a proposal, and upon approval, {"we'll"}{" "}
              get started.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                }}
                style={{
                  background: `conic-gradient(from var(--border-angle, 0deg), #FFFFFF1a 0%, #FFFFFF1a 10%, #FFFFFF1a 10%, #FFF 100%)`,
                }}
                animate={{
                  "--border-angle": "360deg",
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 group hover:bg-blue-700 text-white p-[1px] rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                <p className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 flex items-center gap-2">
                  {"Let's"} Talk
                </p>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                whileTap={{ scale: 0.9 }}
                className="bg-blue-600 group-hover:rotate-45 hover:bg-blue-700 text-white p-4 rounded-full transition-all duration-300"
              >
                <ArrowUpRight size={24} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Person with Background */}
          <div className="flex-1 relative flex items-center justify-center mt-8 lg:mt-0">
            {/* Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
              className="text-center flex items-start gap-7 absolute -left-56 bottom-24"
            >
              <div className="flex items-center justify-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="46"
                  viewBox="0 0 48 46"
                  fill="none"
                >
                  <path
                    d="M18.7149 8.65477C14.7162 9.41221 11.9056 12.3254 10.2829 17.3945C9.47156 19.8999 9.0659 22.3761 9.0659 24.8232C9.0659 25.1145 9.0659 25.3767 9.0659 25.6098C9.12385 25.7846 9.1818 26.2216 9.23975 26.9207H18.7149V45.9733H0.199219V28.4065C0.199219 19.7833 1.90881 13.1412 5.32798 8.47998C8.74716 3.8188 13.2095 1.13863 18.7149 0.439453V8.65477ZM48.0097 8.65477C44.8224 9.17915 42.3884 10.9854 40.7078 14.0734C39.0851 17.1614 38.2738 20.7156 38.2738 24.7358C38.2738 25.0854 38.2738 25.435 38.2738 25.7846C38.3317 26.1342 38.4187 26.5129 38.5346 26.9207H48.0097V45.9733H29.4071V28.4065C29.4071 21.473 30.8559 15.2969 33.7535 9.87833C36.6511 4.40145 41.4032 1.25516 48.0097 0.439453V8.65477Z"
                    fill="#1C59FF"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white text-5xl font-normal font-playfair_display italic mb-2">
                  Rahul Paul
                </h3>
                <p className="text-[#DEDEDE] text-lg">Team Manager</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute top-8 left-8 w-16 h-8 bg-gray-600 rounded-full transform -rotate-12 opacity-60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute top-16 right-12 w-20 h-10 bg-gray-600 rounded-full transform rotate-12 opacity-60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -90 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="absolute bottom-20 left-4 w-12 h-6 bg-gray-600 rounded-full transform -rotate-45 opacity-60"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 90 }}
              whileInView={{ opacity: 0.6, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="absolute bottom-12 right-8 w-14 h-7 bg-gray-600 rounded-full transform rotate-45 opacity-60"
            />
            {/* Quote and Name */}

            {/* Blue Background Shape */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-[480px] h-96 bg-[url('/images/Group166.svg')] rounded-3xl bg-center bg-no-repeat bg-contain shadow-2xl" />
            </motion.div>

            {/* Person Image */}
            <motion.div
              initial={{ opacity: 0, y: 150, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center"
            >
              <div className="w-[420px] h-[510px]  rounded-2xl overflow-hidden  mb-[70px]">
                <Image
                  src="/images/Mask group.svg"
                  alt="Rahul Paul"
                  width={700}
                  height={1200}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
