"use client";

import { cn } from "@/helpers/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { technologies } from "./Stack";
import { useIntersectionObserver } from "@/helpers/use-intersection-observer";

const categories = Object.keys(technologies);

export default function TechShowcase() {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver();
  const [isHeadingTransitioning, setIsHeadingTransitioning] = useState(false);
  const [isAutoLooping, setIsAutoLooping] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoLooping) return;

    intervalRef.current = setInterval(() => {
      const currentIndex = categories.indexOf(activeCategory);
      const nextIndex = (currentIndex + 1) % categories.length;
      const nextCategory = categories[nextIndex];

      setIsHeadingTransitioning(true);
      setIsTransitioning(true);

      setTimeout(() => {
        setActiveCategory(nextCategory);
        setIsTransitioning(false);
        setTimeout(() => {
          setIsHeadingTransitioning(false);
        }, 50);
      }, 200);
    }, 4000); // Change category every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeCategory, isAutoLooping]);

  const handleCategoryChange = (category: string) => {
    if (category === activeCategory) return;
    setIsAutoLooping(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsHeadingTransitioning(true);
    setIsTransitioning(true);

    setTimeout(() => {
      setActiveCategory(category);
      setIsTransitioning(false);
      setTimeout(() => {
        setIsHeadingTransitioning(false);
        setTimeout(() => {
          setIsAutoLooping(true);
        }, 5000);
      }, 50);
    }, 200);
  };

  return (
    <div
      ref={ref}
      className={`py-7 ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12"
      }`}
    >
      <div className={`w-full flex gap-3 mx-auto  `}>
        {/* Header */}
        <div className="flex-1">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-[#18181B] mb-4 leading-20 text-left text-balance">
              <span className="text-[#1C59FF] italic font-playfair_display">
                Technologies
              </span>{" "}
              & <br className="hidden sm:inline" />
              Platforms We Work <br className="hidden sm:inline" />
              With{" "}
              <span
                className={cn(
                  "inline-block transition-all duration-300 ease-in-out",
                  isHeadingTransitioning
                    ? "opacity-0 translate-y-7 scale-95"
                    : "opacity-100 translate-y-0 scale-100"
                )}
              >
                {activeCategory}
              </span>
            </h1>
          </div>
          {/* Technology Grid */}

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-start gap-3">
            {categories.map((category) => (
              <button
                style={
                  activeCategory === category
                    ? {
                        background:
                          "var(--gradent, linear-gradient(292deg, #7C99EA 0.76%, #FFF 100.64%))",
                      }
                    : {}
                }
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={cn(
                  "px-7 py-2.5 rounded-full text-base font-normal transition-all duration-200 hover:scale-105",
                  activeCategory === category
                    ? ""
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-1 flex items-start justify-center">
          <div className="relative w-full">
            {/* Current Technologies */}
            <div
              className={cn(
                "flex items-start  flex-wrap gap-5 transition-all duration-300 ease-in-out",
                isTransitioning
                  ? "opacity-0 translate-y-4 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              )}
            >
              {technologies[activeCategory]?.map((tech, index) => (
                <div
                  key={`${activeCategory}-${index}`}
                  className={cn(
                    "flex items-center px-4  bg-white py-2 gap-2 rounded-xl transition-all duration-200 hover:scale-105",
                    isTransitioning
                      ? "animate-pulse opacity-50"
                      : "animate-in fade-in slide-in-from-bottom-2 duration-300"
                  )}
                  style={{
                    animationDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
                    boxShadow: "0px 4px 36px 0px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <div>{tech.icon}</div>
                  <p className="text-xl  font-bricolage_grotesque font-medium text-[#1C2335]">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
