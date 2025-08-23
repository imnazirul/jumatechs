"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function AnimatedButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const svg = svgRef.current;
    const path = pathRef.current;
    const text = textRef.current;
    const glow = glowRef.current;

    if (!button || !svg || !path || !text || !glow) return;

    const pathLength = path.getTotalLength();

    // Set up the path for animation
    gsap.set(path, {
      strokeDasharray: `${pathLength * 0.15} ${pathLength * 0.85}`,
      strokeDashoffset: 0,
    });

    // Create the main running line animation
    const runningTl = gsap.timeline({ repeat: -1 });
    runningTl.to(path, {
      strokeDashoffset: -pathLength,
      duration: 3,
      ease: "none",
    });

    gsap.to(glow, {
      opacity: 0.4,
    //   scale: 1.05,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    const handleMouseEnter = () => {
      gsap.to(button, {
        // scale: 1.05,
        duration: 0.3,
        ease: "back.out(1.2)",
      });

      gsap.to(text, {
        y: -2,
        duration: 0.3,
        ease: "back.out(1.2)",
      });

      runningTl.timeScale(2);
      gsap.to(path, {
        strokeWidth: 3,
        duration: 0.3,
        ease: "power2.out",
      });

        // gsap.to(glow, {
        //   opacity: 0.7,
        //   scale: 1.15,
        //   duration: 0.3,
        //   ease: "power2.out",
        // })
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        // scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(text, {
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      runningTl.timeScale(1);
      gsap.to(path, {
        strokeWidth: 2,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(glow, {
        opacity: 0.4,
        // scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleClick = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("div");
      ripple.className =
        "absolute bg-white/20 rounded-full pointer-events-none backdrop-blur-sm";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.transform = "translate(-50%, -50%)";
      ripple.style.width = "0px";
      ripple.style.height = "0px";
      button.appendChild(ripple);

      gsap.to(ripple, {
        width: "150px",
        height: "150px",
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        onComplete: () => ripple.remove(),
      });

      gsap.to(button, {
        scale: 0.98,
        duration: 0.1,
        ease: "power2.out",
        yoyo: true,
        repeat: 1,
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("click", handleClick);
      runningTl.kill();
    };
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300 overflow-hidden"
        onClick={() => console.log("Book A Meeting clicked!")}
      >
        <svg
          ref={svgRef}
          className="absolute inset-0 rounded-full overflow-hidden w-full h-full pointer-events-none"
          viewBox="0 0 200 60"
          fill="none"
        >
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            ref={pathRef}
            d="M 30 5 L 170 5 Q 195 5 195 30 Q 195 55 170 55 L 30 55 Q 5 55 5 30 Q 5 5 30 5 Z"
            stroke="rgba(255, 255, 255, 0.9)"
            strokeWidth="2"
            fill="none"
            filter="url(#glow)"
          />
        </svg>

        <div
          ref={glowRef}
          className="absolute inset-0 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
          }}
        />

        {/* Button text */}
        <span ref={textRef} className="relative z-10 font-medium">
          Book A Meeting
        </span>

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out rounded-full" />
      </button>
    </div>
  );
}
