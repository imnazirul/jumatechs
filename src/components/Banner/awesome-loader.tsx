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

// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";

// interface AwesomeLoaderProps {
//   size?: number;
//   className?: string;
// }

// export default function AwesomeLoader({
//   size = 200,
//   className = "",
// }: AwesomeLoaderProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const iconRef = useRef<HTMLDivElement>(null);
//   const particleSystemRef = useRef<HTMLDivElement>(null);
//   const morphingRingRef = useRef<HTMLDivElement>(null);
//   const energyFieldRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const liquidBgRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (
//       !containerRef.current ||
//       !iconRef.current ||
//       !particleSystemRef.current ||
//       !morphingRingRef.current ||
//       !energyFieldRef.current ||
//       !textRef.current ||
//       !liquidBgRef.current
//     )
//       return;

//     const iconTl = gsap.timeline({ repeat: -1 });
//     iconTl
//       .to(iconRef.current, {
//         rotationY: 360,
//         rotationX: 15,
//         scale: 1.2,
//         duration: 3,
//         ease: "power2.inOut",
//       })
//       .to(iconRef.current, {
//         rotationY: 720,
//         rotationX: -15,
//         scale: 0.9,
//         duration: 2,
//         ease: "elastic.out(1, 0.5)",
//       })
//       .to(iconRef.current, {
//         rotationY: 1080,
//         rotationX: 0,
//         scale: 1,
//         duration: 2,
//         ease: "back.out(1.7)",
//       });

//     const particles = particleSystemRef.current.children;
//     Array.from(particles).forEach((particle, i) => {
//       const angle = (i / particles.length) * Math.PI * 2;
//       const radius = size * 0.8;
//       const x = Math.cos(angle) * radius;
//       const y = Math.sin(angle) * radius;

//       gsap.set(particle, { x, y, scale: 0, opacity: 0 });

//       const particleTl = gsap.timeline({ repeat: -1, delay: i * 0.1 });
//       particleTl
//         .to(particle, {
//           scale: gsap.utils.random(0.5, 1.5),
//           opacity: 1,
//           duration: 0.5,
//           ease: "back.out(2)",
//         })
//         .to(particle, {
//           x: x * gsap.utils.random(1.5, 2.5),
//           y: y * gsap.utils.random(1.5, 2.5),
//           rotation: gsap.utils.random(-180, 180),
//           duration: 2,
//           ease: "power2.out",
//         })
//         .to(particle, {
//           scale: 0,
//           opacity: 0,
//           x: x * 3,
//           y: y * 3,
//           duration: 1,
//           ease: "power2.in",
//         });
//     });

//     const rings = morphingRingRef.current.children;
//     Array.from(rings).forEach((ring, i) => {
//       gsap.set(ring, { scale: 0, rotation: i * 45 });

//       const ringTl = gsap.timeline({ repeat: -1, delay: i * 0.3 });
//       ringTl
//         .to(ring, {
//           scale: 1,
//           opacity: 0.8,
//           duration: 1,
//           ease: "elastic.out(1, 0.3)",
//         })
//         .to(ring, {
//           scale: 2,
//           opacity: 0.3,
//           rotation: `+=${360 + i * 90}`,
//           duration: 2,
//           ease: "power1.inOut",
//         })
//         .to(ring, {
//           scale: 3,
//           opacity: 0,
//           rotation: `+=${180}`,
//           duration: 1,
//           ease: "power2.in",
//         });
//     });

//     const energyElements = energyFieldRef.current.children;
//     Array.from(energyElements).forEach((element, i) => {
//       const energyTl = gsap.timeline({ repeat: -1, delay: i * 0.2 });
//       energyTl
//         .to(element, {
//           x: gsap.utils.random(-size, size),
//           y: gsap.utils.random(-size, size),
//           scale: gsap.utils.random(0.5, 2),
//           opacity: gsap.utils.random(0.3, 0.8),
//           duration: gsap.utils.random(1, 3),
//           ease: "sine.inOut",
//         })
//         .to(element, {
//           x: 0,
//           y: 0,
//           scale: 0,
//           opacity: 0,
//           duration: 1,
//           ease: "power3.in",
//         });
//     });

//     gsap.to(liquidBgRef.current, {
//       background: `conic-gradient(from 0deg, 
//         #3B82F6, #8B5CF6, #EC4899, #F59E0B, #10B981, #3B82F6)`,
//       rotation: 360,
//       duration: 8,
//       ease: "none",
//       repeat: -1,
//     });

//     const textElement = textRef.current;
//     const text = "Jumatechs Software";
//     textElement.innerHTML = text
//       .split("")
//       .map(
//         (char, i) =>
//           `<span class="inline-block" style="transform-origin: center bottom; transform-style: preserve-3d;">${
//             char === " " ? "&nbsp;" : char
//           }</span>`
//       )
//       .join("");

//     const chars = textElement.querySelectorAll("span");

//     const textTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

//     textTimeline
//       .fromTo(
//         chars,
//         {
//           opacity: 0,
//           y: 50,
//           rotationX: -90,
//           rotationY: 180,
//           scale: 0,
//           z: -100,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           rotationY: 0,
//           scale: 1,
//           z: 0,
//           duration: 0.8,
//           stagger: 0.1,
//           ease: "back.out(2)",
//         }
//       )
//       .to(
//         chars,
//         {
//           y: -15,
//           rotationX: 15,
//           z: 20,
//           duration: 0.6,
//           stagger: 0.05,
//           ease: "power2.inOut",
//           yoyo: true,
//           repeat: 1,
//         },
//         "+=0.3"
//       )
//       .to(
//         chars,
//         {
//           color: "#8B5CF6",
//           textShadow: "0 0 20px #8B5CF6, 0 0 40px #8B5CF6, 0 0 60px #8B5CF6",
//           duration: 0.4,
//           stagger: 0.03,
//           ease: "power2.inOut",
//         },
//         "-=0.5"
//       )
//       .to(chars, {
//         color: "#EC4899",
//         textShadow: "0 0 20px #EC4899, 0 0 40px #EC4899, 0 0 60px #EC4899",
//         duration: 0.4,
//         stagger: 0.03,
//         ease: "power2.inOut",
//       })
//       .to(chars, {
//         color: "#3B82F6",
//         textShadow: "0 0 20px #3B82F6, 0 0 40px #3B82F6, 0 0 60px #3B82F6",
//         duration: 0.4,
//         stagger: 0.03,
//         ease: "power2.inOut",
//       })
//       .to(
//         chars,
//         {
//           scaleY: 2,
//           scaleX: 0.5,
//           rotationZ: gsap.utils.random(-15, 15),
//           duration: 0.3,
//           stagger: 0.02,
//           ease: "elastic.out(1, 0.5)",
//           yoyo: true,
//           repeat: 1,
//         },
//         "+=0.2"
//       )
//       .to(
//         chars,
//         {
//           opacity: 0,
//           y: -80,
//           rotationX: 90,
//           rotationY: 360,
//           scale: 0,
//           z: -200,
//           duration: 0.6,
//           stagger: 0.05,
//           ease: "power3.in",
//         },
//         "+=0.5"
//       );

//     return () => {
//       gsap.killTweensOf("*");
//     };
//   }, [size]);

//   return (
//     <div
//       ref={containerRef}
//       className={`relative flex items-center justify-center ${className}`}
//       style={{ width: size * 3, height: size * 3, perspective: "1000px" }}
//     >
//       <div
//         ref={liquidBgRef}
//         className="absolute inset-0 rounded-full opacity-20 blur-2xl"
//         style={{
//           width: size * 2,
//           height: size * 2,
//           left: "50%",
//           top: "50%",
//           transform: "translate(-50%, -50%)",
//           background:
//             "conic-gradient(from 0deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B, #10B981, #3B82F6)",
//         }}
//       />

//       <div
//         ref={particleSystemRef}
//         className="absolute inset-0 flex items-center justify-center"
//       >
//         {[...Array(12)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 rounded-full"
//             style={{
//               background: `hsl(${(i * 30) % 360}, 70%, 60%)`,
//               boxShadow: `0 0 10px hsl(${(i * 30) % 360}, 70%, 60%)`,
//             }}
//           />
//         ))}
//       </div>

//       <div
//         ref={morphingRingRef}
//         className="absolute inset-0 flex items-center justify-center"
//       >
//         {[...Array(4)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute border rounded-full"
//             style={{
//               width: size * 0.8,
//               height: size * 0.8,
//               borderWidth: 2,
//               borderColor: `hsl(${(i * 90) % 360}, 60%, 50%)`,
//               borderStyle: i % 2 === 0 ? "solid" : "dashed",
//             }}
//           />
//         ))}
//       </div>

//       <div
//         ref={energyFieldRef}
//         className="absolute inset-0 flex items-center justify-center"
//       >
//         {[...Array(8)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full opacity-60"
//             style={{
//               background: `radial-gradient(circle, hsl(${
//                 (i * 45) % 360
//               }, 80%, 60%), transparent)`,
//               filter: "blur(1px)",
//             }}
//           />
//         ))}
//       </div>

//       <div
//         ref={iconRef}
//         className="relative z-10 flex items-center justify-center"
//         style={{ width: size, height: size, transformStyle: "preserve-3d" }}
//       >
//         <Image
//           src={"/images/jumtech-1 2.svg"}
//           alt="logo"
//           className="w-full h-full"
//           width={500}
//           height={500}
//         />
//       </div>

//       <div className="absolute -bottom-12 text-center">
//         <div
//           ref={textRef}
//           className="text-5xl font-bold tracking-wider"
//           style={{
//             fontFamily: "system-ui, -apple-system, sans-serif",
//             transformStyle: "preserve-3d",
//             color: "#3B82F6",
//           }}
//         >
//           Jumatechs Software
//         </div>
//       </div>
//     </div>
//   );
// }
