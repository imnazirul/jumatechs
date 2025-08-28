import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/helpers/use-intersection-observer";
import Image from "next/image";
const Button = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-24"
      }
    >
      <button
        style={{
          borderRadius: "50px",
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.04) 100%)",
          backdropFilter: "blur(11.299321174621582px)",
        }}
        className="flex mx-auto items-center border-gray-800 gap-2 py-2 px-7 rounded-3xl border"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
        >
          <path
            d="M18.9873 12.3257L19.1803 10.4316C19.2833 9.42099 19.3513 8.75367 19.2979 8.33322L19.3166 8.33333C20.1886 8.33333 20.8955 7.58714 20.8955 6.66667C20.8955 5.74619 20.1886 5 19.3166 5C18.4445 5 17.7376 5.74619 17.7376 6.66667C17.7376 7.08296 17.8822 7.4636 18.1213 7.7557C17.7781 7.9793 17.3293 8.45111 16.6539 9.16128L16.6539 9.16128C16.1336 9.70838 15.8734 9.98193 15.5832 10.0243C15.4224 10.0478 15.2585 10.0236 15.11 9.95462C14.842 9.83005 14.6633 9.49187 14.306 8.81551L12.4223 5.25044C12.2018 4.83319 12.0173 4.48397 11.8509 4.20294C12.5334 3.83541 13.0008 3.08643 13.0008 2.22222C13.0008 0.994923 12.0582 0 10.8955 0C9.7328 0 8.79025 0.994923 8.79025 2.22222C8.79025 3.08643 9.25759 3.83541 9.94007 4.20294C9.77369 4.48399 9.5892 4.83316 9.36872 5.25045L7.48504 8.81551C7.12768 9.49187 6.94899 9.83005 6.68099 9.95462C6.53249 10.0236 6.36864 10.0478 6.20782 10.0243C5.91758 9.98193 5.65742 9.70838 5.13708 9.16128C4.46168 8.45112 4.01294 7.97929 3.66975 7.75569C3.90881 7.4636 4.0534 7.08296 4.0534 6.66667C4.0534 5.74619 3.34648 5 2.47446 5C1.60243 5 0.895508 5.74619 0.895508 6.66667C0.895508 7.58714 1.60243 8.33333 2.47446 8.33333L2.4931 8.33322C2.43974 8.75367 2.50774 9.42099 2.61071 10.4316L2.80372 12.3257C2.91085 13.377 2.99994 14.3774 3.10906 15.2778H18.682C18.7911 14.3774 18.8802 13.377 18.9873 12.3257Z"
            fill="#FF5D1A"
          />
          <path
            d="M9.75031 20H12.0407C15.0259 20 16.5185 20 17.5144 19.0591C17.9491 18.6484 18.2243 17.908 18.4229 16.9444H3.36809C3.56672 17.908 3.84196 18.6484 4.27664 19.0591C5.27253 20 6.76512 20 9.75031 20Z"
            fill="#FF5D1A"
          />
        </svg>
        <p className="text-center text-white text-lg font-semibold">
          Comparison
        </p>
      </button>
    </div>
  );
};

function ComparisonCard() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <motion.div
        className=""
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="grid md:grid-cols-2 gap-8">
          {/* Other Agencies Column */}
          <motion.div
            className="w-full h-[540px] p-[5px] rounded-2xl md:rounded-4xl cursor-pointer transition-all duration-1000 "
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), #1E1242 0%, #1E1242 10%, #1E1242 20%, #FFF 100%)`,
            }}
            animate={{
              "--border-angle": "360deg",
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            // whileHover={{
            //   scale: 1.03,
            // }}
          >
            <div className="bg-[#060018] rounded-4xl w-full h-full">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(253, 253, 253, 0.05) 0%, rgba(19, 19, 19, 0.00) 100%)",
                }}
                className="overflow-hidden rounded-4xl  transition-all  flex items-center justify-center bg-[#131313]  h-full border-neutral-800 "
              >
                <motion.div
                  className="space-y-6 w-full px-16"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.h2
                    className="text-3xl text-center font-medium text-[#E5E5E7] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Other Agencies
                  </motion.h2>
                  <div className="space-y-4">
                    {[
                      "Provide part-time or shared resources",
                      "Lack structured collaboration, causing delays",
                      "No dedicated project/product manager",
                      "General skill set without specialized expertise",
                      "No clear satisfaction or refund policy",
                    ].map((item, index) => (
                      <motion.div
                        style={{
                          borderRadius: "11.089px",
                          //   border: "1.386px solid #A897FF",
                          background:
                            "linear-gradient(90deg, rgba(62, 55, 200, 0.12) 0%, rgba(57, 55, 200, 0.02) 100%)",
                          backdropFilter: "blur(3.5458099842071533px)",
                        }}
                        key={index}
                        className="flex items-start w-full gap-4 p-4 transition-all duration-300"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <motion.div
                          style={{ background: "rgba(49, 92, 221, 0.2)" }}
                          className="flex-shrink-0 w-6 h-6 rounded-full  flex items-center justify-center mt-0.5"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="15"
                            viewBox="0 0 14 15"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_2284_19985)">
                              <path
                                d="M2.33105 3.19727L11.5717 12.4379"
                                stroke="#EFEFEF"
                                strokeWidth="2.7722"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M2.33105 12.4379L11.5717 3.19727"
                                stroke="#EFEFEF"
                                strokeWidth="2.7722"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2284_19985">
                                <rect
                                  width="13.861"
                                  height="13.861"
                                  fill="white"
                                  transform="translate(0.0195312 0.886719)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </motion.div>
                        <p className="text-gray-300 leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-[540px] p-[5px] rounded-2xl md:rounded-4xl cursor-pointer transition-all duration-1000 "
            style={{
              background: `conic-gradient(from var(--border-angle, 0deg), #1E1242 0%, #1E1242 10%, #1E1242 20%, #FFF 100%)`,
            }}
            animate={{
              "--border-angle": "360deg",
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            // whileHover={{
            //   scale: 1.03,
            // }}
          >
            <div className="bg-[#060018] rounded-4xl w-full h-full">
              <div
                style={{
                  background:
                    "linear-gradient(180deg, rgba(253, 253, 253, 0.05) 0%, rgba(19, 19, 19, 0.00) 100%)",
                }}
                className="overflow-hidden rounded-4xl  transition-all  flex items-center justify-center bg-[#131313]  h-full border-neutral-800 "
              >
                <motion.div
                  className="space-y-6 w-full px-16"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.h2
                    className="text-3xl flex items-center gap-3 justify-center font-bold text-[#E5E5E7] mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Image
                      src="/images/jumtech-1 2.svg"
                      alt="logo"
                      width={200}
                      height={200}
                      className="w-auto size-14 md:size-[50px] object-contain"
                    />{" "}
                    Jumatechs
                  </motion.h2>
                  <div className="space-y-4">
                    {[
                      "Dedicated full-time developers and designers",
                      "Ensure 100% efficient collaboration",
                      "Assign a dedicated product manager for every project",
                      "Highly expert, specialized team in each domain",
                      "100% money-back guarantee for peace of mind",
                    ].map((item, index) => (
                      <motion.div
                        style={{
                          borderRadius: "11.089px",
                          //   border: "1.386px solid #A897FF",
                          background:
                            "linear-gradient(90deg, rgba(62, 55, 200, 0.12) 0%, rgba(57, 55, 200, 0.02) 100%)",
                          backdropFilter: "blur(3.5458099842071533px)",
                        }}
                        key={index}
                        className="flex items-start w-full gap-4 p-4 transition-all duration-300"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        viewport={{ once: true, margin: "-20px" }}
                        transition={{
                          duration: 0.5,
                          delay: 0.6 + index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      >
                        <motion.div
                          style={{
                            background:
                              "linear-gradient(180deg, #3E67FF 0%, #0062FE 100%)",
                          }}
                          className="flex-shrink-0 w-6 h-6 rounded-full  flex items-center justify-center mt-0.5"
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: 0.8 + index * 0.1,
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <g clipPath="url(#clip0_2284_20030)">
                              <path
                                d="M12.7683 3.97656L5.36642 11.343L2.00195 7.99461"
                                stroke="white"
                                strokeWidth="2.71991"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2284_20030">
                                <rect
                                  width="13.5996"
                                  height="13.5996"
                                  fill="white"
                                  transform="translate(0.588867 0.860352)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </motion.div>
                        <p className="text-white leading-relaxed">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

const PreferJumatechs = () => {
  return (
    <div className="py-7 max-w-screen-2xl mx-auto my-24">
      <div>
        <Button />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white text-center text-3xl md:text-4xl lg:text-6xl font-medium leading-tight text-balance"
        >
          {" "}
          <h1 className="text-7xl text-center font-semibold text-white">
            Preferring Jumatechs Over <br />
          </h1>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="italic font-playfair_display font-bold text-[#A1B2FF]"
          >
            Competitors
          </motion.span>
        </motion.div>
      </div>
      <div className="mx-auto flex justify-center my-12">
        <ComparisonCard />
      </div>
    </div>
  );
};

export default PreferJumatechs;
