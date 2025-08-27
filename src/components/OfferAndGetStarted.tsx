"use client";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/helpers/use-intersection-observer";
import Image from "next/image";

const GetStartedButton = () => {
  return (
    <div className="flex items-center gap-4 w-full">
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.23) 100%)",
        }}
      ></div>
      <div>
        <motion.div
          className=" max-w-52 min-w-52 h-15 p-[1px] rounded-2xl md:rounded-4xl cursor-pointer transition-all duration-1000 "
          style={{
            background: `conic-gradient(from var(--border-angle, 0deg), rgba(0, 45, 247, 0.00) 0%, #1E1242 10%, #FFFFFF1a 10%, #FFF 100%)`,
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
            className="overflow-hidden rounded-4xl hover:bg-blue-700 transition-all  flex items-center justify-center bg-[#1C59FF]  h-full border-neutral-800 "
          >
            <p className="text-center text-white text-lg font-semibold">
              Get Started
            </p>
          </div>
        </motion.div>
      </div>
      <div
        className="h-[1px] w-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0.00) 100%)",
        }}
      ></div>
    </div>
  );
};

export default function OfferAndGetStarted() {
  const { ref: mainDiv, isIntersecting: isMainVisible } =
    useIntersectionObserver();
  const { ref: innerDiv, isIntersecting: isInnerVisible } =
    useIntersectionObserver();

  return (
    <div className="flex items-center flex-col gap-12 justify-center p-4">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelay800 {
          0%,
          53% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes fadeInDelay1200 {
          0%,
          80% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

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

        .animate-fade-in-800 {
          animation: fadeInDelay800 1.5s ease-out forwards;
        }

        .animate-fade-in-1200 {
          animation: fadeInDelay1200 1.5s ease-out forwards;
        }

        .animate-rotate-move {
          animation: rotateMove 4s ease-in-out infinite;
        }
      `}</style>

      <div
        ref={mainDiv}
        className={`relative max-w-screen-2xl py-16 mx-auto transition-all duration-1000 ease-out ${
          isMainVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-24"
        }`}
      >
        {/* Background with stars */}
        <div
          style={{
            background:
              "radial-gradient(94.05% 62.7% at 50% 0%, rgba(161, 196, 253, 0.23) 0%, rgba(255, 255, 255, 0.00) 100%)",
          }}
          className="absolute inset-0 rounded-3xl border border-slate-700/50"
        >
          {/* Static stars for decoration */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 animate-bounce h-1 bg-white rounded-full opacity-60 "
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
          <Image
            src={"/images/Group 4.svg"}
            alt="image"
            className="absolute"
            width={500}
            height={500}
          />
        </div>

        {/* Main content */}
        <div
          ref={innerDiv}
          className={`relative z-10 p-12 md:p-16 transition-all duration-1000 ease-out ${
            isMainVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-24"
          }`}
        >
          <div className="text-white text-3xl text-center md:text-4xl lg:text-6xl font-medium leading-tight text-balance">
            <span>Jumatechs offers </span>
            <span
              className={`text-emerald-400 bg-gradient-to-t from-[#86FFBC] via-[#86FFBC00] to-[#86FFBC00] font-playfair_display italic transition-opacity duration-600 ease-out ${
                isMainVisible ? "opacity-100 animate-fade-in-800" : "opacity-0"
              }`}
            >
              white-label development
            </span>
            <span> with a </span>
            <span
              className={`text-blue-400 font-playfair_display italic transition-opacity duration-600 ease-out ${
                isMainVisible ? "opacity-100 animate-fade-in-1200" : "opacity-0"
              }`}
            >
              dedicated {"engineer's"}
            </span>
            <span> team, delivering scalable, </span>
            <span className="text-blue-400 font-playfair_display italic">
              design-first solutions under your
            </span>
            <br />
            <span className="text-blue-400 font-playfair_display italic">
              brand
            </span>
            <span>
              —confidential, transparent, and <br /> growth-ready.
            </span>
          </div>

          {/* Animated SVG */}
          <div
            className={`absolute bottom-8 right-8 flex gap-2 transition-all duration-1000 ease-out ${
              isMainVisible ? "opacity-100 animate-rotate-move" : "opacity-0"
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
      </div>
      <GetStartedButton />
    </div>
  );
}
