"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const cardData = [
  {
    id: 1,
    title: "Creative Design",
    description:
      "Innovative solutions that push the boundaries of digital design and user experience.",
    image: "/modern-creative-design-workspace.png",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Development",
    description:
      "Cutting-edge development practices using the latest technologies and frameworks.",
    image: "/coding-development-setup.png",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Strategy",
    description:
      "Data-driven strategies that deliver measurable results and business growth.",
    image: "/business-strategy-planning.png",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    title: "Innovation",
    description:
      "Forward-thinking approaches that transform ideas into reality.",
    image: "/innovation-technology-future.png",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    title: "Excellence",
    description:
      "Commitment to quality and excellence in every project we undertake.",
    image: "/excellence-quality-achievement.png",
    color: "from-indigo-500 to-purple-500",
  },
];

export function ParallaxCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="relative">
      <section className="relative py-20 pb-40">
        <div className="w-full mx-auto">
          <div className="space-y-24">
            {cardData.map((card, index) => (
              <ParallaxCard
                key={card.id}
                card={card}
                index={index}
                progress={smoothProgress}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ParallaxCard({
  card,
  index,
  progress,
}: {
  card: (typeof cardData)[0];
  index: number;
  progress: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });


  // Stagger the cards with different offsets
  const offset = index * 50;
  const yWithOffset = useTransform(progress, [1, 0], [offset, -offset]);



  return (
    <motion.div
      ref={cardRef}
      style={{
        y: yWithOffset,

      }}
      className="sticky top-52"
    >
      <div className="overflow-hidden rounded-lg bg-white  hover:shadow-3xl transition-shadow duration-500 border border-gray-200">
        <div className="relative h-[500px] group">
          {/* Background Image */}
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Image
              src={"/images/Firefly-20250808011206.svg"}
              alt={card.title}
              width={1440}
              height={1080}
              className="w-full h-full object-cover"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-r ${card.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}
            />
          </motion.div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold mb-4">{card.title}</h3>
              <p className="text-lg leading-relaxed opacity-90">
                {card.description}
              </p>
            </motion.div>
          </div>

          {/* Hover Effect Overlay */}
          <motion.div
            className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"
            initial={false}
          />
        </div>
      </div>
    </motion.div>
  );
}
