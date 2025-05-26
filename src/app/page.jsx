"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { useEffect } from "react";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = ["About", "Projects", "Contact"];

  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.classList.remove("hidden");

    let tl = gsap.timeline();

    tl.to(".preloader", {
      y: "-100%",
      borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
      duration: 1,
      ease: "power2.out",
    })
      .add(() => {
        if (preloader) preloader.style.display = "none";
      })
      .from(".navbar", {
        duration: 1,
        y: "-100%",
      })
      .add(() => {
        let paths = document.querySelectorAll(".heroHeading svg path");
        paths.forEach((path) => {
          path.style.transform = "translateY(100%)";
          path.style.opacity = "0";
        });
        gsap.to(paths, {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power2.out",
        });
      })
      .from(".left svg", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" })
      .from(".left h4", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".left p", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".left .leftBtn", { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" }, "-=0.4")
      .from(".middle", { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.4")
      .from(".right p", { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.4")
      .from(".right h2", { y: 30, opacity: 0, duration: 1, ease: "power2.out" }, "-=0.4");
  }, []);

  return (
    <>
      <div className="preloader fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center text-xl sm:text-2xl">
      </div>

      {/* Main Page */}
      <div className="main w-full bg-[#e8e8e3] text-black">
        {/* Header / Navbar */}
        <header className="navbar w-full h-[60px] flex items-center justify-between px-6 text-black bg-[rgb(232,232,227)]">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="bg-[#393632] text-[#e8e8e3] w-10 h-10 rounded-full flex items-center justify-center">
            <span className="text-white text-xl font-bold">S</span>
          </div>
          <p className="text-[#6b645c] text-sm hidden sm:block">
            (Web Designer & Developer)
          </p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 font-bold">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                href={`#${id}`}
                key={item}
                className="text-[#6b645c] hover:text-[#393632] transition-all duration-300"
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-[#393632]">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-[60px] left-0 w-full bg-[rgb(232,232,227)] flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-[998]">
            {menuItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <a
                  href={`#${id}`}
                  key={item}
                  className="text-[#393632] font-bold hover:text-black transition-all duration-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              );
            })}
          </div>
        )}
      </header>

        {/* Hero Section */}
        <section id="page" className="px-6 md:px-12 py-10">
          <div className="top">
            <h1 className="heroHeading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mt-8 text-[#131311]">
              Shiwangi Upadhyay
            </h1>
          </div>

          <div className="bottom grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-6 mt-28">
            {/* Left */}
            <div className="left md:col-span-4 flex flex-col gap-6">
              <h4>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.25"
                  viewBox="6 6 12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-6 md:h-6 text-[#8c8c73]"
                >
                  <line x1="7" y1="7" x2="17" y2="17" />
                  <polyline points="17 7 17 17 7 17" />
                </svg>
              </h4>
              <p className="text-[#393632] text-base sm:text-lg leading-snug max-w-[40ch]">
                I enjoy building web apps and bringing ideas to life with clean, responsive design using modern tools like React, Next.js, and Tailwind CSS.
              </p>
              <a href="https://github.com/shiwangi-upadhyay" target="_blank" rel="noopener noreferrer">
                <button className="leftBtn mt-2 bg-[#393632] text-[#e8e8e3] px-6 py-3 text-sm sm:text-base rounded-full transition-colors duration-200 hover:bg-[#8c8c73]">
                  Github ↗
                </button>
              </a>
            </div>

            {/* Middle */}
            <div className="middle md:col-span-4 flex justify-center">
              <div className="image w-[60vw] md:w-[20vw] h-[60vw] md:h-[55vh]">
                <img
                  src="/images/profile.jpg"
                  alt="Shiwangi Upadhyay"
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Right */}
            <div className="right md:col-span-4 flex flex-col items-end justify-end text-right gap-2">
              <p className="text-[#393632] text-sm sm:text-base uppercase">Let’s keep the momentum going</p>
              <h2 className="text-[#393632] text-4xl sm:text-5xl md:text-6xl uppercase">Onwards!</h2>
            </div>
          </div>
        </section>

        
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
