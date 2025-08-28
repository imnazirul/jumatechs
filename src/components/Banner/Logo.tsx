"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type React from "react";
import { useRef } from "react";

const Logo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
      className="relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
    >
      <motion.div
        className="relative z-10"
        animate={{
          y: [-1, 1, -1],
        }}
        // transition={{
        //   duration: 8,
        //   repeat: Number.POSITIVE_INFINITY,
        //   ease: "easeInOut",
        // }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          // scale: 1.02,
          z: 30,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <motion.div
          className="absolute inset-0 z-20 pointer-events-none rounded-lg overflow-hidden"
          style={{
            background:
              "linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0) 50%, transparent 75%)",
            backgroundSize: "200% 100%",
          }}
          animate={{
            backgroundPosition: ["-200% 0%", "200% 0%"],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            repeatDelay: 3,
          }}
        />

        <motion.svg
          viewBox="0 0 1231.31 1145.06"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className="w-full h-full relative z-10"
          style={{
            filter: "drop-shadow(0 20px 40px rgba(59, 130, 246, 0.1))",
          }}
        >
          <defs>
            <style>
              {`
              .cls-1{fill:url(#linear-gradient-15);}
              .cls-2{fill:url(#linear-gradient-8);stroke:url(#linear-gradient-9);}
              .cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7{stroke-miterlimit:10;}
              .cls-2,.cls-3,.cls-4,.cls-6,.cls-7{strokeWidth:2px;}
              .cls-8{fill:url(#linear-gradient-10);}
              .cls-9{fill:url(#linear-gradient-5);}
              .cls-3{fill:url(#linear-gradient-13);stroke:url(#linear-gradient-14);}
              .cls-4{fill:url(#linear-gradient-3);stroke:url(#linear-gradient-4);}
              .cls-5{fill:url(#linear-gradient-11);stroke:url(#linear-gradient-12);strokeWidth:3px;}
              .cls-6{fill:url(#linear-gradient);stroke:url(#linear-gradient-2);}
              .cls-7{fill:url(#linear-gradient-6);stroke:url(#linear-gradient-7);}
            `}
            </style>

            <motion.linearGradient
              id="linear-gradient"
              x1="119.73"
              y1="-15.32"
              x2="1865.4"
              y2="1118.34"
              gradientUnits="userSpaceOnUse"
            >
              <motion.stop
                offset="0"
                stopColor="#eee"
                animate={{ stopColor: ["#eee", "#f0f8ff", "#eee"] }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <stop offset="0" stopColor="#7594ff" />
              <stop offset=".23" stopColor="#a4bcff" />
              <stop offset=".37" stopColor="#7594ff" />
              <stop offset=".54" stopColor="#366fff" />
              <stop offset=".58" stopColor="#3b72ff" />
              <stop offset=".62" stopColor="#497cff" />
              <stop offset=".68" stopColor="#628eff" />
              <stop offset=".73" stopColor="#84a5ff" />
              <stop offset=".77" stopColor="#a4bcff" />
              <stop offset="1" stopColor="#a4bcff" />
            </motion.linearGradient>

            <motion.linearGradient
              id="shimmer-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <motion.stop
                offset="0%"
                stopColor="rgba(255, 255, 255, 0)"
                animate={{ offset: ["0%", "30%", "0%"] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.stop
                offset="50%"
                stopColor="rgba(255, 255, 255, 0.6)"
                animate={{ offset: ["50%", "80%", "50%"] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.stop
                offset="100%"
                stopColor="rgba(255, 255, 255, 0)"
                animate={{ offset: ["100%", "130%", "100%"] }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.linearGradient>

            <linearGradient
              id="linear-gradient-2"
              x1="207.41"
              y1="558.96"
              x2="1170.85"
              y2="558.96"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#eee" />
              <stop offset="0" stopColor="#7594ff" />
              <stop offset=".23" stopColor="#a4bcff" />
              <stop offset=".41" stopColor="#a4bcff" />
              <stop offset=".59" stopColor="#a4bcff" />
              <stop offset=".77" stopColor="#7594ff" />
              <stop offset="1" stopColor="#a4bcff" />
            </linearGradient>

            <linearGradient
              id="linear-gradient-3"
              x1="236.44"
              y1="514.42"
              x2="1230.31"
              y2="514.42"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#366fff" />
              <stop offset=".25" stopColor="#7594ff" />
              <stop offset=".42" stopColor="#d2e0ff" />
              <stop offset=".59" stopColor="#a4bcff" />
              <stop offset=".81" stopColor="#1a59ff" />
            </linearGradient>

            <linearGradient
              id="linear-gradient-4"
              x1="235.85"
              y1="514.27"
              x2="1231.31"
              y2="514.27"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#eee" />
              <stop offset="0" stopColor="#7594ff" />
              <stop offset=".23" stopColor="#a4bcff" />
              <stop offset=".41" stopColor="#fff" />
              <stop offset=".59" stopColor="#a4bcff" />
              <stop offset=".77" stopColor="#7594ff" />
              <stop offset="1" stopColor="#a4bcff" />
            </linearGradient>

            <linearGradient
              id="linear-gradient-5"
              x1="1002.62"
              y1="-15.11"
              x2="1249.28"
              y2="191.87"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".25" stopColor="#7594ff" stopOpacity="0" />
              <stop offset=".42" stopColor="#d2e0ff" />
              <stop offset=".5" stopColor="#1a59ff" />
              <stop offset=".56" stopColor="#366fff" />
              <stop offset=".63" stopColor="#d2e0ff" />
              <stop offset=".72" stopColor="#1a59ff" />
              <stop offset=".83" stopColor="#7594ff" stopOpacity="0" />
            </linearGradient>

            <linearGradient
              id="linear-gradient-6"
              x1="-151.44"
              y1="280.72"
              x2="1508.81"
              y2="1358.9"
              xlinkHref="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-7"
              x1="86.97"
              y1="748.56"
              x2="763.89"
              y2="748.56"
              xlinkHref="#linear-gradient-2"
            />
            <linearGradient
              id="linear-gradient-8"
              x1="23.67"
              y1="829.54"
              x2="375.23"
              y2="829.54"
              xlinkHref="#linear-gradient-3"
            />
            <linearGradient
              id="linear-gradient-9"
              x1="23.08"
              y1="829.39"
              x2="376.23"
              y2="829.39"
              xlinkHref="#linear-gradient-4"
            />
            <linearGradient
              id="linear-gradient-10"
              x1="211.81"
              y1="542.07"
              x2="363.21"
              y2="722.51"
              xlinkHref="#linear-gradient-5"
            />
            <linearGradient
              id="linear-gradient-11"
              x1="-359.52"
              y1="505"
              x2="1051.45"
              y2="1421.29"
              xlinkHref="#linear-gradient"
            />
            <linearGradient
              id="linear-gradient-12"
              x1="0"
              y1="863.74"
              x2="312.21"
              y2="863.74"
              xlinkHref="#linear-gradient-2"
            />
            <linearGradient
              id="linear-gradient-13"
              x1="122.09"
              y1="706.61"
              x2="822.72"
              y2="706.61"
              xlinkHref="#linear-gradient-3"
            />
            <linearGradient
              id="linear-gradient-14"
              x1="121.5"
              y1="706.45"
              x2="823.74"
              y2="706.45"
              xlinkHref="#linear-gradient-4"
            />
            <linearGradient
              id="linear-gradient-15"
              x1="624.61"
              y1="329.71"
              x2="817.02"
              y2="522.12"
              xlinkHref="#linear-gradient-5"
            />
          </defs>

          <g data-name="Layer 1">
            <g>
              <motion.path
                className="cls-6"
                d="M1169.85,993.81c-.28,13.47-4.57,25.12-11.67,34.03-1.95,2.46-4.12,4.72-6.48,6.75h-.01c-10.93,9.38-25.89,13.88-42.36,11.59l-286.61-40.45-21.75-541.65s0-.11,0-.16c-2.6-62.53-52.38-112.8-114.89-115.98l-461.32-23.48c-5.7-.3-11.34.95-16.34,3.57v-119.33c0-21.78,10.82-41.21,27.57-52.94l.46-.33c8.86-6.09,19.35-10.05,30.75-11.07l830.72-72.97c36.81-3.24,68.52,25.7,68.66,62.65l3.28,859.77Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  // scale: [1, 1.002, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 0.2,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 0.2 },
                  // scale: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                }}
                style={{
                  stroke: "url(#shimmer-gradient)",
                  strokeWidth: "1px",
                }}
              />
              <motion.path
                className="cls-4"
                d="M1230.31,942.22c.03,6.78-2.59,13.3-7.29,18.19l-11.75,12.21-41.34,43-11.75,12.22c7.1-8.91,11.39-20.56,11.67-34.03l-3.28-859.77c-.14-36.95-31.85-65.89-68.66-62.65l-830.72,72.97c-11.4,1.02-21.89,4.98-30.75,11.07l97.36-71.58c4.07-2.99,8.86-4.84,13.88-5.34L1116.7,1.51c58.98-5.91,110.21,40.28,110.44,99.55l3.17,841.16Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.001, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 0.4 },
                  scale: {
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              />
              <motion.path
                className="cls-9"
                d="M1227.59,217.73h-60.69l-.32-83.69c-.14-36.95-31.85-65.89-68.66-62.65l-120.99,10.63V15.51l139.78-14c58.98-5.91,110.21,40.28,110.44,99.55l.44,116.67Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.003, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 0.6,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 0.6 },
                  scale: {
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }}
              />
              <motion.path
                className="cls-7"
                d="M742.98,1088.8c-1.07,1.2-2.19,2.36-3.34,3.48-18.41,18.01-45.59,26.81-73.33,19.75l-200.36-50.96-90.72-23.07h0s-14.12-351.63-14.12-351.63c-3-71.57-58.34-129.93-129.6-136.77l-128.07-11.65c-4.16-.38-8.32.78-11.68,3.25l-.14.1-.18-4.45-3.42-85.08c-.81-20.01,7.29-38.17,20.64-50.86,4.03-3.82,8.54-7.14,13.43-9.87,10.3-5.76,22.28-8.84,35-8.33l494.63,19.9c.11,0,.22,0,.33.02,48.36,2.12,87.05,40.92,89,89.32l21.77,541.89c.86,21.4-6.89,40.64-19.84,54.96Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.001, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 0.8,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 0.8 },
                  scale: {
                    duration: 9,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 3,
                  },
                }}
              />
              <motion.path
                className="cls-2"
                d="M375.23,1037.99h0s-.01.01-.01.01l-36.51,38.04-26.87,28-16.48,17.17c9.94-11.84,15.87-27.76,15.31-46.24l-15.61-388.57c-1.85-46.22-37.68-83.91-83.75-88.1l-156.7-14.24c-.13-.01-.26-.02-.38-.03-11.45-.74-21.98,1.94-30.56,7.23l12.12-8.91,10.42-7.66,45.41-33.39.14-.1c3.36-2.47,7.52-3.63,11.68-3.25l128.07,11.65c71.26,6.84,126.6,65.2,129.6,136.77l1.47,36.67Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.002, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 1.0,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 1.0 },
                  scale: {
                    duration: 7,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 4,
                  },
                }}
              />
              <motion.path
                className="cls-8"
                d="M362.58,723.04h-66.05l-1.47-36.64c-1.85-46.22-37.68-83.91-83.75-88.1l-5.68-.52v-50.53l25.88,2.35c71.26,6.84,126.6,65.2,129.6,136.77l1.47,36.67Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.004, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 1.2,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 1.2 },
                  scale: {
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 5,
                  },
                }}
              />
              <motion.path
                className="cls-5"
                d="M295.36,1121.21c-1.8,2.16-3.74,4.18-5.8,6.05h-.01c-17.95,16.35-44.85,21.72-70.8,10.01l-159.08-71.01c-25.44-11.35-42.24-36.14-43.35-63.97L1.58,635.26c-.88-16.36,5.36-30.27,15.92-39.47,1.92-1.67,3.98-3.19,6.17-4.53,8.58-5.29,19.11-7.97,30.56-7.23.12.01.25.02.38.03l156.7,14.24c46.07,4.19,81.9,41.88,83.75,88.1l15.61,388.57c.56,18.48-5.37,34.4-15.31,46.24Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.001, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 1.4,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 1.4 },
                  scale: {
                    duration: 11,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 6,
                  },
                }}
              />
              <motion.path
                className="cls-3"
                d="M822.72,1005.73l-4.15,4.32-63.12,65.76-12.47,12.99c12.95-14.32,20.7-33.56,19.84-54.96l-21.77-541.89c-1.95-48.4-40.64-87.2-89-89.32-.11-.01-.22-.02-.33-.02l-494.63-19.9c-12.72-.51-24.7,2.57-35,8.33l12.56-9.24,53.27-39.17,16.45-12.09c5.89-4.31,13.09-6.46,20.38-6.08l461.32,23.48c62.51,3.18,112.29,53.45,114.89,115.98,0,.05,0,.11,0,.16l21.75,541.65Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.001, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 1.6,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 1.6 },
                  scale: {
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 7,
                  },
                }}
              />
              <motion.path
                className="cls-1"
                d="M803.84,535.31h-61.04l-1.74-43.36c-1.95-48.4-40.64-87.2-89-89.32-.11-.01-.22-.02-.33-.02l-41.49-1.67v-56.86l75.84,3.86c62.51,3.18,112.29,53.45,114.89,115.98l.44,116.67Z"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: 1,
                  opacity: 1,
                  scale: [1, 1.005, 1],
                }}
                transition={{
                  pathLength: {
                    duration: 2,
                    delay: 1.8,
                    ease: [0.23, 1, 0.32, 1],
                  },
                  opacity: { duration: 2, delay: 1.8 },
                  scale: {
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 8,
                  },
                }}
              />
            </g>
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
