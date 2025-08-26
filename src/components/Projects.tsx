import React from "react";
import GSAPHoverButton from "./ui/gsap-hover-button";
import { useIntersectionObserver } from "@/helpers/use-intersection-observer";
import ParallaxCards from "./parallax-cards";

const projects = [
  "MEDICAL",
  "PORTFOLIO",
  "SAAS",
  "FINANCE",
  "STARTUPS",
  "NFT",
  "B2B",
  "B2C",
  "FOOD",
];

const Projects = () => {
  const { ref: projectTitle, isIntersecting: isProjectVisible } =
    useIntersectionObserver();
  return (
    <div className="bg-[#F5F5F5]  rounded-[64px]">
      <div className={`max-w-screen-2xl mx-auto py-20`}>
        <div
          ref={projectTitle}
          className={`flex gap-20 flex-col md:flex-row mb-20 transition-all duration-500 items-start ${
            isProjectVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          }`}
        >
          <h1 className="text-[74px] leading-20 md:text-nowrap flex-1 font-semibold">
            Amazing{" "}
            <span className="font-playfair_display italic text-[#1C59FF]">
              Live <br /> Projects
            </span>{" "}
            we designed <br />& built
          </h1>
          <div className="flex-1">
            <h1 className="text-[32px] font-semibold text-[#393939]">
              Industries we’ve worked on
            </h1>
            <div className="flex items-center  flex-wrap gap-4">
              {projects?.map((value, index) => {
                return (
                  <GSAPHoverButton
                    key={index}
                    className="bg-white border px-4 py-2 text-base font-normal text-[#323232]  border-black hover:text-black"
                    onClick={() => console.log("Custom button clicked")}
                  >
                    {value}
                  </GSAPHoverButton>
                );
              })}
            </div>
          </div>
        </div>
        <ParallaxCards />
        <div className=" flex items-center justify-center gap-2">
          <GSAPHoverButton className="bg-[#1C59FF] px-12 py-3 text-white text-lg">
            View all Works
          </GSAPHoverButton>
          <GSAPHoverButton className="bg-[#1C59FF] rounded-full px-3 py-3 text-white text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="28"
              viewBox="0 0 27 28"
              fill="none"
            >
              <path
                d="M7.93945 19.5606L19.0601 8.43994"
                stroke="white"
                strokeWidth="2.22414"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7.93945 8.43994H19.0601V19.5606"
                stroke="white"
                strokeWidth="2.22414"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </GSAPHoverButton>
        </div>
      </div>
    </div>
  );
};

export default Projects;
