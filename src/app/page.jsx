"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";



export default function Home() {
  const menuItems = ["About", "Projects", "Contact"];
  useEffect(() => {
    // Show preloader on mount (if you used 'hidden' class initially)
    const preloader = document.querySelector(".preloader");
    if (preloader) preloader.classList.remove("hidden");

    let tl = gsap.timeline();

    // Preloader animation
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
      // SVG path animation
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
      // Animate .left icon, h4, p, button
      .from(".left svg", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      })
      .from(
        ".left h4",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".left p",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".left .leftBtn",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".middle",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".right p",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        ".right h2",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.4"
      );
  }, []);

  return (
    <>
     <div className="preloader fixed inset-0 z-[9999] overflow-hidden pointer-events-none bg-black text-black flex items-center justify-center"></div>
        <div className="main w-[100%] h-[100%] bg-opacity-100 bg-[rgb(232,232,227)] text-black">
          <header className="navbar w-full h-[50px] flex items-center justify-between text-black pl-[clamp(2.25rem, 2.1786rem + 0.3571vi, 2.5rem)] pr-[clamp(2.25rem, 2.1786rem + 0.3571vi, 2.5rem)]">
            <div className="logo-left w-[50%] flex items-center gap-16 ">
              <h2>Shiwangi</h2>
              <p className="text-[#6b645c] text-lg">(Web Designer & Developer)</p>
            </div>
            <div className="menu w-1/2 mr-10 flex flex-grow justify-end font-bold gap-6">
              {menuItems.map((item) => {
                const id = item.toLowerCase(); // turns 'About' into 'about'
                return (
                  <div
                    className="menu-line group w-min h-[1.6rem] min-h-[1.6rem] relative overflow-hidden"
                    key={item}
                  >
                    {/* First animated link */}
                    <a
                      href={`#${id}`}
                      className="nav-link block -mt-[1.25rem] transition-transform transition-opacity duration-300 ease group-hover:translate-y-5"
                      style={{ color: "#6b645c" }}
                    >
                      {item},
                    </a>
                    {/* Second animated link */}
                    <a
                      href={`#${id}`}
                      className="nav-link block transition-transform transition-opacity duration-300 ease group-hover:scale-110 group-hover:translate-y-5"
                      style={{
                        color: "#6b645c",
                        transitionProperty: "all",
                        transitionDuration: "0.6s",
                        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)"
                      }}
                    >
                      {item},
                    </a>
                  </div>
                );
              })}
            </div>
          </header> 
          
          {/*PAGE      -------------------------------------------          1 */}
          <div
          id="page"
          className="w-full h-screen px-[clamp(2.25rem,2.1786rem_+_0.3571vw,2.5rem)]">
          {/* Top Section */}
          <div className="top">
            <h1
              className="
                heroHeading
                text-[clamp(3.5rem,5vw,8rem)]
                font-black
                leading-[1]
                tracking-[-0.025em]
                mt-8
                text-[#131311]
                whitespace-balance
              "
            >
              Shiwangi Upadhyay
            </h1>
          </div>

          {/* Bottom Section */}
          <div
            className="
              bottom
              grid
              grid-cols-12
              mt-32
              relative
              h-[30vh]
              pb-16
            "
          >
            {/* Left */}
            <div
              className="
                left
                h-[45vh]
                col-span-12 md:col-span-4
                flex flex-col justify-between items-start
              "
            >
              <h4>
                {/* SVG Arrow */}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.25"
                  viewBox="6 6 12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="m-0 w-4 h-4 md:w-6 md:h-6"
                  color="#8C8C73"
                  style={{ color: "#8c8c73" }}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="7" y1="7" x2="17" y2="17"></line>
                  <polyline points="17 7 17 17 7 17"></polyline>
                </svg>
              </h4>
              <p className="text-[clamp(1rem,0.9286rem_+_0.3571vw,1.25rem)] text-[#6b645c] max-w-[30ch] leading-[1.2] whitespace-balance">
                I help growing brands and startups gain an unfair advantage through premium, results driven websites.
              </p>
              <button
                className="
                  leftBtn
                  bg-[#393632]
                  px-[clamp(2.25rem,2.1786rem_+_0.3571vw,2.5rem)]
                  py-[clamp(1.125rem,1.0893rem_+_0.1786vw,1.25rem)]
                  text-[#e8e8e3]
                  tracking-normal
                  uppercase
                  text-[clamp(1rem,0.9286rem_+_0.3571vw,1.25rem)]
                  border-none
                  rounded-full
                  transition-colors
                  duration-200
                  hover:bg-[#8c8c73]
                "
              >
                Book a Call ↗
              </button>
            </div>

            {/* Middle */}
            <div
              className="
                middle
                col-span-12 md:col-span-4
                h-[45vh]
                relative
                flex items-center justify-center
              "
            >
              <div className="image overflow-hidden w-[20vw] h-[55vh] relative">
                {/* Replace with your image path */}
                <img
                  src="/images/profile.jpg"
                  alt=""
                  className="
                    grayscale
                    w-full h-full object-cover rounded-xl
                    transition-all duration-300
                    hover:grayscale-0
                  "
                />
              </div>
            </div>

            {/* Right */}
            <div
              className="
                right
                h-[45vh]
                col-span-12 md:col-span-4
                flex flex-col items-end justify-end
              "
            >
              <p className="text-[#6b645c] text-[clamp(0.875rem,0.5393rem_+_0.5786vw,1rem)] uppercase">
                Available for freelance work
              </p>
              <h2 className="text-[clamp(3rem,2.25rem_+_3.75vw,5.625rem)] uppercase text-[#393632]">
                Oct ‘24
              </h2>
            </div>
          </div>
        </div>

        {/*PAGE -------------------------------------------------2 */}
        <About/>
        {/*PAGE -------------------------------------------------3 */}
        <Projects/>
        {/*PAGE -------------------------------------------------4 */}
        <Contact/>
        </div>
    </>
  );
}
