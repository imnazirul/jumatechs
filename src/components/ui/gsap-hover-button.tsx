"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface GSAPHoverButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function GSAPHoverButton({
  children,
  className = "",
  onClick,
}: GSAPHoverButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlHover = useRef<gsap.core.Tween | null>(null);
  const tlOut = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const button = buttonRef.current!;
      const overlay = overlayRef.current!;
      if (!button || !overlay) return;

      // Initial state (GPU hint + tiny scale to avoid layout jump)
      gsap.set(overlay, {
        scale: 0.001,
        transformOrigin: "center bottom",
        willChange: "transform, opacity",
        force3D: true,
      });

      const playIn = () => {
        tlOut.current?.kill();
        tlHover.current = gsap.to(overlay, {
          scale: 1.8, // 2.5 থেকে কমালাম — mobile জিটার কমবে
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      };

      const playOut = () => {
        tlHover.current?.kill();
        tlOut.current = gsap.to(overlay, {
          scale: 0.001,
          duration: 0.3,
          ease: "power2.in",
          overwrite: "auto",
        });
      };

      const onPointerEnter = () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        playIn();
      };
      const onPointerLeave = () => playOut();

      const onPointerDown = () => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return;
        playIn();
      };
      const onPointerUp = () => playOut();
      const onPointerCancel = () => playOut();

      button.addEventListener("pointerenter", onPointerEnter);
      button.addEventListener("pointerleave", onPointerLeave);
      button.addEventListener("pointerdown", onPointerDown, {
        passive: true,
      } as any);
      button.addEventListener("pointerup", onPointerUp, {
        passive: true,
      } as any);
      button.addEventListener("pointercancel", onPointerCancel, {
        passive: true,
      } as any);

      return () => {
        button.removeEventListener("pointerenter", onPointerEnter);
        button.removeEventListener("pointerleave", onPointerLeave);
        button.removeEventListener("pointerdown", onPointerDown as any);
        button.removeEventListener("pointerup", onPointerUp as any);
        button.removeEventListener("pointercancel", onPointerCancel as any);
      };
    });

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-full  text-black font-medium
        transition-colors duration-300 hover:text-white active:text-white
        touch-manipulation select-none ${className}
      `}
      onFocus={() => {
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            scale: 1.3,
            duration: 0.25,
            ease: "power2.out",
          });
        }
      }}
      onBlur={() => {
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            scale: 0.001,
            duration: 0.25,
            ease: "power2.in",
          });
        }
      }}
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute size-40 inset-0 bg-[#060018] rounded-full"
        style={{
          pointerEvents: "none",
        }}
      />

      <span className="relative z-10">{children}</span>
    </button>
  );
}
