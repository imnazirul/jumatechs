"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "@/components/Banner/Banner";
import TrustedIndustries from "./TrustedIndustries";
// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;

    if (!container || !content) return;

    // Create smooth scroll effect
    const scrollTween = gsap.to(content, {
      y: () => -(content.scrollHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${content.scrollHeight - window.innerHeight}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate elements on scroll
    gsap.utils.toArray(".fade-in").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Parallax effect
    gsap.utils.toArray(".parallax").forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Scale animation
    gsap.utils.toArray(".scale-in").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Slide in from sides
    gsap.utils.toArray(".slide-left").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    gsap.utils.toArray(".slide-right").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Text reveal animation
    gsap.utils.toArray(".text-reveal").forEach((element: any) => {
      const chars = element.textContent.split("");
      element.innerHTML = chars
        .map(
          (char: string) =>
            `<span style="display: inline-block;">${
              char === " " ? "&nbsp;" : char
            }</span>`
        )
        .join("");

      gsap.fromTo(
        element.children,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.02,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Rotation animation
    gsap.utils.toArray(".rotate-in").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          rotation: -180,
          scale: 0,
          opacity: 0,
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Progress bar animation
    gsap.utils.toArray(".progress-bar").forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      scrollTween?.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div ref={contentRef} className="relative">
        {/* Hero Section */}
        <section className="">
          <Banner />
        </section>

        {/* Fade In Section */}
        <section className="pt-36">
          <TrustedIndustries />
        </section>

        {/* Parallax Section */}
        {/* <section classNs */}

        {/* Slide Animations */}
        {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-orange-200 p-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 fade-in text-gray-800">
              Slide Animations
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="slide-left">
                <h3 className="text-3xl font-semibold mb-6">From Left</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Content slides in smoothly from the left side
                </p>
                <div className="progress-bar h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full origin-left"></div>
              </div>
              <div className="slide-right">
                <h3 className="text-3xl font-semibold mb-6">From Right</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Content slides in smoothly from the right side
                </p>
                <div className="progress-bar h-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full origin-left"></div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Rotation Section */}
        {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 p-8">
          <div className="text-center text-white">
            <h2 className="text-5xl font-bold mb-8 text-reveal">
              Rotation Magic
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="rotate-in bg-white/20 backdrop-blur-sm p-8 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="rotate-in bg-white/20 backdrop-blur-sm p-8 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                <span className="text-2xl">⭐</span>
              </div>
              <div className="rotate-in bg-white/20 backdrop-blur-sm p-8 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </section> */}

        {/* Final Section */}
        {/* <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-8">
          <div className="text-center text-white">
            <h2 className="text-6xl font-bold mb-8 text-reveal">The End</h2>
            <p className="text-xl fade-in">
              Smooth scrolling with GSAP is amazing!
            </p>
          </div>
        </section> */}
      </div>
    </div>
  );
}
