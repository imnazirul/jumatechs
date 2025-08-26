// "use client";

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";

// interface GSAPHoverButtonProps {
//   children: React.ReactNode;
//   className?: string;
//   onClick?: () => void;
// }

// export default function GSAPHoverButton({
//   children,
//   className = "",
//   onClick,
// }: GSAPHoverButtonProps) {
//   const buttonRef = useRef<HTMLButtonElement>(null);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const tlHover = useRef<gsap.core.Tween | null>(null);
//   const tlOut = useRef<gsap.core.Tween | null>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const button = buttonRef.current!;
//       const overlay = overlayRef.current!;
//       if (!button || !overlay) return;

//       // Initial state (GPU hint + tiny scale to avoid layout jump)
//       gsap.set(overlay, {
//         scale: 0.001,
//         transformOrigin: "center bottom",
//         willChange: "transform, opacity",
//         force3D: true,
//       });

//       const playIn = () => {
//         tlOut.current?.kill();
//         tlHover.current = gsap.to(overlay, {
//           scale: 1.8, // 2.5 থেকে কমালাম — mobile জিটার কমবে
//           duration: 0.35,
//           ease: "power2.out",
//           overwrite: "auto",
//         });
//       };

//       const playOut = () => {
//         tlHover.current?.kill();
//         tlOut.current = gsap.to(overlay, {
//           scale: 0.001,
//           duration: 0.3,
//           ease: "power2.in",
//           overwrite: "auto",
//         });
//       };

//       const onPointerEnter = () => {
//         if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
//           return;
//         playIn();
//       };
//       const onPointerLeave = () => playOut();

//       const onPointerDown = () => {
//         if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
//           return;
//         playIn();
//       };
//       const onPointerUp = () => playOut();
//       const onPointerCancel = () => playOut();

//       button.addEventListener("pointerenter", onPointerEnter);
//       button.addEventListener("pointerleave", onPointerLeave);
//       button.addEventListener("pointerdown", onPointerDown, {
//         passive: true,
//       } as any);
//       button.addEventListener("pointerup", onPointerUp, {
//         passive: true,
//       } as any);
//       button.addEventListener("pointercancel", onPointerCancel, {
//         passive: true,
//       } as any);

//       return () => {
//         button.removeEventListener("pointerenter", onPointerEnter);
//         button.removeEventListener("pointerleave", onPointerLeave);
//         button.removeEventListener("pointerdown", onPointerDown as any);
//         button.removeEventListener("pointerup", onPointerUp as any);
//         button.removeEventListener("pointercancel", onPointerCancel as any);
//       };
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <button
//       ref={buttonRef}
//       onClick={onClick}
//       className={`
//         relative overflow-hidden rounded-full  text-black font-medium
//         transition-colors duration-300 hover:text-white active:text-white
//         touch-manipulation select-none ${className}
//       `}
//       onFocus={() => {
//         if (overlayRef.current) {
//           gsap.to(overlayRef.current, {
//             scale: 1.3,
//             duration: 0.25,
//             ease: "power2.out",
//           });
//         }
//       }}
//       onBlur={() => {
//         if (overlayRef.current) {
//           gsap.to(overlayRef.current, {
//             scale: 0.001,
//             duration: 0.25,
//             ease: "power2.in",
//           });
//         }
//       }}
//     >
//       {/* Overlay */}
//       <div
//         ref={overlayRef}
//         className="absolute size-40 inset-0 bg-[#060018] rounded-full"
//         style={{
//           pointerEvents: "none",
//         }}
//       />

//       <span className="relative z-10">{children}</span>
//     </button>
//   );
// }

"use client";

import type React from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface FramerHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function FramerHoverButton({
  children,
  className = "",
  onClick,
}: FramerHoverButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  // Determine the scale based on interaction state
  const getScale = () => {
    if (shouldReduceMotion) return 0.001;
    if (isFocused) return 1.3;
    if (isHovered || isPressed) return 1.8;
    return 0.001;
  };

  // Determine animation duration and easing
  const getTransition = () => {
    if (isHovered || isPressed || isFocused) {
      return {
        duration: isFocused ? 0.25 : 0.35,
        ease: [0.25, 0.46, 0.45, 0.94], // power2.out equivalent
      };
    }
    return {
      duration: isFocused ? 0.25 : 0.3,
      ease: [0.55, 0.06, 0.68, 0.19], // power2.in equivalent
    };
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-full text-black font-medium
        transition-colors duration-300 hover:text-white active:text-white
        touch-manipulation select-none ${className}
      `}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        setIsPressed(false);
      }}
      onPointerDown={() => setIsPressed(true)}
      onPointerUp={() => setIsPressed(false)}
      onPointerCancel={() => setIsPressed(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {/* Animated Overlay */}
      <motion.div
        className="absolute size-40 inset-0 bg-[#060018] rounded-full"
        style={{
          pointerEvents: "none",
        }}
        initial={{
          scale: 0.001,
          transformOrigin: "center bottom",
        }}
        animate={{
          scale: getScale(),
        }}
        transition={getTransition() as any}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
