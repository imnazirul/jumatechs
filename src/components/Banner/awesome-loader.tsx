"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface AwesomeLoaderProps {
  size?: number;
  className?: string;
}

export default function AwesomeLoader({
  size = 120,
  className = "",
}: AwesomeLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const pulseRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !containerRef.current ||
      !iconRef.current ||
      !orbitRef.current ||
      !pulseRef.current ||
      !glowRef.current ||
      !textRef.current
    )
      return;

    const tl = gsap.timeline({ repeat: -1 });

    gsap.set(iconRef.current, { rotation: 0, scale: 1 });
    tl.to(iconRef.current, {
      rotation: 360,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      transformOrigin: "center center",
    });

    gsap.to(iconRef.current, {
      scale: 1.1,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    gsap.set(orbitRef.current.children, {
      rotation: (i) => i * 120,
      transformOrigin: `${size / 2}px ${size / 2}px`,
    });

    gsap.to(orbitRef.current.children, {
      rotation: "+=360",
      duration: 3,
      ease: "none",
      repeat: -1,
      stagger: 0.2,
    });

    gsap.set(pulseRef.current.children, { scale: 0, opacity: 1 });
    gsap.to(pulseRef.current.children, {
      scale: 2,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      repeat: -1,
      stagger: 0.4,
    });

    gsap.to(glowRef.current, {
      opacity: 0.3,
      duration: 1.5,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });

    const chartBars = iconRef.current.querySelectorAll("rect, path");
    if (chartBars.length > 0) {
      gsap.set(chartBars, { scaleY: 0, transformOrigin: "bottom center" });
      gsap.to(chartBars, {
        scaleY: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.1,
        repeat: -1,
        repeatDelay: 1,
      });
    }

    const textElement = textRef.current;
    const text = "Jumatechs Software";
    textElement.innerHTML = text
      .split("")
      .map(
        (char, i) =>
          `<span class="inline-block" style="transform-origin: center bottom;">${
            char === " " ? "&nbsp;" : char
          }</span>`
      )
      .join("");

    const chars = textElement.querySelectorAll("span");

    const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    textTimeline
      .to(chars, {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 0.1,
        stagger: 0.08,
        ease: "back.out(1.7)",
      })

      .to(
        chars,
        {
          y: -8,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        },
        "+=0.5"
      )

      .to(
        chars,
        {
          textShadow: "0 0 20px #3B82F6, 0 0 30px #3B82F6, 0 0 40px #3B82F6",
          duration: 0.8,
          stagger: 0.03,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 1,
        },
        "-=0.8"
      )

      .to(
        chars,
        {
          scaleY: 1.3,
          scaleX: 0.8,
          duration: 0.2,
          stagger: 0.02,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        },
        "+=0.3"
      )

      .to(
        chars,
        {
          opacity: 0,
          rotationY: 180,
          y: -30,
          duration: 0.3,
          stagger: 0.03,
          ease: "power2.in",
        },
        "+=0.5"
      );

    return () => {
      gsap.killTweensOf([
        iconRef.current,
        orbitRef.current,
        pulseRef.current,
        glowRef.current,
        chars,
      ]);
    };
  }, [size]);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size * 2, height: size * 2 }}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
        style={{
          width: size * 1.5,
          height: size * 1.5,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        ref={pulseRef}
        className="absolute inset-0  flex items-center justify-center"
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-blue-500 rounded-full"
            style={{ width: size, height: size }}
          />
        ))}
      </div>

      <div ref={orbitRef} className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-lg"
            style={{
              left: size * 1.5,
              top: "50%",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 8px rgba(59, 130, 246, 0.8)",
            }}
          />
        ))}
      </div>

      <div
        ref={iconRef}
        className="relative z-10 flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <Image
          src={"/images/jumtech-1 2.svg"}
          alt="logo"
          className="w-full h-full"
          width={500}
          height={500}
        />
      </div>

      <div className="absolute -bottom-8 text-center">
        <div
          ref={textRef}
          className="text-4xl font-normal text-blue-600 text-nowrap tracking-wider"
          style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
        >
          Jumatechs Software
        </div>
      </div>
    </div>
  );
}
