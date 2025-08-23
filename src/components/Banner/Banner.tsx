"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AnimatedButton } from "../Navbar/animated-button";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background glow animation
      gsap.to(backgroundRef.current, {
        background:
          "linear-gradient(135deg, #1C59FF 10%, #1C59FF 10%, #1C59FF 15%, #1C59FF 20%, #1C59FF00 25%)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Floating orbs animation
      gsap.set(".glow-orb", { opacity: 0.6 });
      gsap.to(".glow-orb-1", {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
      gsap.to(".glow-orb-2", {
        x: -80,
        y: 60,
        scale: 0.8,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1,
      });

      // Initial entrance animations
      const tl = gsap.timeline();

      // Tagline typewriter effect
      tl.from(taglineRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
      });

      // Main heading word-by-word reveal
      const headingWords = headingRef.current?.querySelectorAll(".word");
      if (headingWords) {
        tl.from(
          headingWords,
          {
            opacity: 0,
            y: 50,
            rotationX: -90,
            transformOrigin: "center bottom",
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
      }

      // Subtext fade in with blur
      tl.from(
        subtextRef.current,
        {
          opacity: 0,
          y: 20,
          filter: "blur(10px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // Button entrance with bounce
      tl.from(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 30,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );

      // Badges slide up
      tl.from(
        badgesRef.current?.children || [],
        {
          opacity: 0,
          y: 40,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

      // 3D illustration entrance
      tl.from(
        illustrationRef.current,
        {
          opacity: 0,
          scale: 0.6,
          rotationY: 45,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      );

      // Continuous text glow animation
      gsap.to(headingRef.current, {
        textShadow:
          "0 0 20px rgba(139, 92, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      // Floating animation for illustration
      gsap.to(illustrationRef.current, {
        y: -20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 2,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitTextIntoWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="word inline-block mr-2">
        {word}
      </span>
    ));
  };

  return (
    <div className="bg-[url('/images/Firefly-20250808011206.svg')] h-[100vh] bg-cover bg-center bg-no-repeat">
      <div ref={containerRef} className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <div
          ref={backgroundRef}
          className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-purple-200"
        />

        {/* Floating Glow Orbs */}
        <div className="glow-orb glow-orb-1 absolute top-20 left-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl opacity-30" />
        <div className="glow-orb glow-orb-2 absolute bottom-20 right-20 w-48 h-48 bg-blue-400 rounded-full blur-3xl opacity-40" />

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Tagline */}
              <div
                ref={taglineRef}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-600 border border-white/20"
              >
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                We Are Design First Development Company
              </div>

              {/* Main Heading */}
              <h1
                ref={headingRef}
                className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                {splitTextIntoWords(
                  "We solve business problems through technology."
                )}
              </h1>

              {/* Subtext */}
              <p
                ref={subtextRef}
                className="text-lg text-gray-600 max-w-md leading-relaxed"
              >
                UI/UX Design • Custom Development • AI & Automation
              </p>

              {/* CTA Button */}
              <div ref={buttonRef}>
                <AnimatedButton />
              </div>

              {/* Company Badges */}
              <div ref={badgesRef} className="flex items-center gap-8 pt-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Up</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      100% Job Success On
                    </div>
                    <div className="text-sm text-gray-600">Upwork</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">C</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Top 100 Global service
                    </div>
                    <div className="text-sm text-gray-600">
                      providers by Clutch
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div ref={illustrationRef} className="relative">
              <div className="relative w-full max-w-lg mx-auto">
                {/* 3D Blue Geometric Shape */}
                <div className="relative">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Main 3D blocks */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl transform rotate-12 shadow-2xl" />
                    <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl transform -rotate-6 shadow-xl" />
                    <div className="absolute inset-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-lg" />

                    {/* Accent elements */}
                    <div className="absolute top-8 right-8 w-6 h-6 bg-yellow-400 rounded-full shadow-lg" />
                    <div className="absolute bottom-12 left-12 w-4 h-16 bg-white/20 rounded-full backdrop-blur-sm" />
                    <div className="absolute top-1/2 left-8 w-2 h-8 bg-white/30 rounded-full backdrop-blur-sm" />
                  </div>
                </div>

                {/* Floating particles */}
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-purple-400 rounded-full animate-bounce" />
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <div className="absolute top-1/3 -right-8 w-4 h-4 bg-pink-400 rounded-full animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
