/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatedButton } from "./animated-button";
import "./Navbar.css";
const navLinks = [
  {
    title: "Service",
    path: "/",
  },
  {
    title: "About Us",
    path: "/feature",
  },
  {
    title: "Our Team",
    path: "/testimonials",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState("/");
  const path = usePathname();

  const navbarRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navLinksRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (path) setSelectedPath(path);
  }, [path]);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);

        // Smooth background transition
        navbarRef?.current &&
          gsap.to(navbarRef?.current?.querySelector(".navbar-container"), {
            backgroundColor: scrolled
              ? "rgba(255, 255, 255, 0.95)"
              : "rgba(255, 255, 255, 0.1)",
            backdropFilter: scrolled ? "blur(20px)" : "",
            duration: 0.3,
            ease: "power2.out",
          });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Navbar entrance animation
    tl.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
      .fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.4"
      )
      .fromTo(
        navContainerRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(
        signUpRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
        "-=0.2"
      );

    // Stagger nav links animation
    navLinksRefs.current.forEach((link, index) => {
      if (link) {
        gsap.fromTo(
          link,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.4,
            delay: 0.6 + index * 0.1,
            ease: "power2.out",
          }
        );
      }
    });

    // Add hover animations for nav links
    navLinksRefs.current.forEach((link) => {
      if (link) {
        const handleMouseEnter = () => {
          gsap.to(link, {
            y: -2,
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(link, {
            y: 0,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          });
        };

        link.addEventListener("mouseenter", handleMouseEnter);
        link.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          link.removeEventListener("mouseenter", handleMouseEnter);
          link.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    // Sign up button hover animation
    if (signUpRef.current) {
      const button = signUpRef.current;

      const handleMouseEnter = () => {
        gsap.to(button, {
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          scale: 1,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && mobileMenuRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        mobileMenuRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power3.out" }
      );

      // Animate mobile menu items
      const mobileLinks =
        mobileMenuRef.current.querySelectorAll(".mobile-nav-item");
      mobileLinks.forEach((link, index) => {
        gsap.fromTo(
          link,
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.1 + index * 0.1,
            ease: "power2.out",
          }
        );
      });
    }
  }, [isMenuOpen]);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => setIsMenuOpen(false),
      });
    }
  };

  return (
    <header
      ref={navbarRef}
      className={`fixed top-0 left-0 right-0 z-50 text-sm lg:py-5`}
    >
      <div
        className={`navbar-container max-w-screen-xl py-3 lg:rounded-xl transition-all  font-[inter] ] mx-auto overflow-hidden px-4 flex items-center justify-between text-[#060018]
        }`}
      >
        <div className="flex items-center">
          <div className=" mr-8 pr-8 flex items-center gap-6 border-[#51A387]">
            <div ref={logoRef}>
              <Image
                src="/images/jumtech-1 2.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-auto size-[70px] object-contain"
              />
            </div>
            <div
              ref={navContainerRef}
              className="bg-white h-[70px] px-12 flex items-center rounded-[1000px]"
            >
              <nav id="items" className="hidden md:flex items-center space-x-8">
                <div>
                  <Link
                    id="navLinks"
                    href={"/service"}
                    className={`font-medium  transition-all text-[#060018]}`}
                  >
                    Service
                  </Link>
                </div>

                <div className="size-9 animate-bounce bg-[#E1E7FD] flex items-center justify-center rounded-full cursor-pointer hover:bg-blue-300 transition-all duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                  >
                    <path
                      d="M18.707 11.7929L17.293 10.3789L13 14.6719V5.08593H11V14.6719L6.70697 10.3789L5.29297 11.7929L12 18.4999L18.707 11.7929Z"
                      fill="#0D0D12"
                    />
                  </svg>
                </div>
                <div>
                  <Link
                    id="navLinks"
                    href={"/about"}
                    className={`font-medium  transition-all text-[#060018]}`}
                  >
                    About Us
                  </Link>
                </div>
                <div>
                  <Link
                    id="navLinks"
                    href={"/team"}
                    className={`font-medium  transition-all text-[#060018]}`}
                  >
                    Our Team
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>

        <AnimatedButton />

        <button
          className="md:hidden mr-2 bg-transparent hover:bg-black"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu
            className={`h-6 w-6 ${
              isScrolled || isMenuOpen ? "text-black" : "text-white"
            }`}
          />
        </button>
      </div>

      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="fixed inset-0 backdrop-blur-xl z-50 p-4"
        >
          <div className="flex justify-between items-center mb-8">
            <div className="mr-8 pr-8 flex items-center gap-2 border-[#51A387] mobile-nav-item">
              <Image
                src="/icons/logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="w-auto h-7"
              />
              <p className="text-white">
                Medical <br />
                Student AI
              </p>
            </div>
            <button onClick={closeMobileMenu} className="mobile-nav-item">
              <X className="h-6 dark:text-white w-6" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((item, index) => (
              <div key={index} className="mobile-nav-item">
                <Link
                  href={`${item?.path}`}
                  className="text-lg text-white hover:underline font-medium"
                  onClick={closeMobileMenu}
                >
                  {item?.title}
                </Link>
              </div>
            ))}
            <div className="mobile-nav-item">
              <AnimatedButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
