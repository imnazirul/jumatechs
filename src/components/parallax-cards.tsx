"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

export const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes - so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou's images don't insist on a narrative. Both crisp and ethereal, they're encoded with an ambiguity - a certain tension - that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes - so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for 'The tawny rocks').",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
]



export default function ParallaxCards() {
  return (
    <main className="">
      {projects.map((project, i) => (
        <Card key={`p_${i}`} {...project} i={i} />
      ))}
    </main>
  )
}



interface CardProps {
  title: string
  description: string
  src: string
  link: string
  color: string
  i: number
}

const Card = ({ title, description, src, link, color, i }: CardProps) => {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  })
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <div
        className="flex flex-col relative h-[500px] w-full rounded-[25px] p-12 origin-top"
        style={{
          backgroundColor: color,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center m-0 text-[28px] font-bold">{title}</h2>
        <div className="flex h-full mt-12 gap-12">
          <div className="w-2/5 relative top-[10%]">
            <p className="text-base leading-relaxed">
              <span className="text-[28px] font-serif float-left leading-none pr-1">{description.charAt(0)}</span>
              {description.slice(1)}
            </p>
            <div className="flex items-center gap-1 mt-4">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs underline cursor-pointer hover:opacity-70 transition-opacity"
              >
                See more
              </a>
              <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="relative w-3/5 h-full rounded-[25px] overflow-hidden">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <Image
                fill
                src={'/images/Firefly-20250808011206.svg'}
                alt={title}
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

