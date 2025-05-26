"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: 1,
    title: "Library",
    subtitle: "Full Stack Project",
    image: "https://www.jdandj.com/uploads/8/0/0/8/80083458/what-makes-a-great-book-cover-for-an-author_orig.jpg",
    link: "https://cafe-library.vercel.app/",
  },
  {
    num: 2,
    title: "Shopping Cart App",
    subtitle: "Frontend Project",
    image: "https://img.freepik.com/free-photo/3d-render-sunglasses-shopping-cart-illustration-design_460848-6286.jpg?semt=ais_hybrid&w=740",
    link: "http://github.com/shiwangi-upadhyay/blog-app",
  },
  {
    num: 3,
    title: "Blog App",
    subtitle: "Backend Project",
    image: "https://img.pikbest.com/wp/202408/blank-yellow-duotone-style-modern-laptop-computer-on-a-background-with-screen-for-custom-design-3d-rendering_9825735.jpg!sw800",
    link: "https://shopping-addtocart.netlify.app/",
  },
  
];

export default function ProjectsShowcase() {
  const [active, setActive] = useState(2);
  const imgRefs = useRef([]);
  const worksHeadingRef = useRef(null);

   useEffect(() => {
    if (worksHeadingRef.current) {
      const spans = worksHeadingRef.current.querySelectorAll("span");
      gsap.set(spans, { y: "100%", opacity: 0 });
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: worksHeadingRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  useEffect(() => {

    imgRefs.current.forEach((img, idx) => {
      if (!img) return;
      if (idx === active) {
        gsap.to(img, {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          pointerEvents: "auto",
          ease: "power2.out",
        });
      } else {
        gsap.to(img, {
          opacity: 0,
          scale: 0.98,
          duration: 0.45,
          pointerEvents: "none",
          ease: "power2.out",
        });
      }
    });
  }, [active]);

  return (
    <div 
    id="projects"
    className="w-full min-h-screen mt-28 bg-[rgb(232,232,227)] flex flex-col justify-center py-12 ">
        <h2
          ref={worksHeadingRef}
          className=" w-full text-[#393632] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold text-4xl uppercase pl-6 inline-block"
        >
          <span className="inline-block">My</span>
          <span> </span>
          <span className="inline-block">Projects</span>
          
          <span className="inline-block">
            
          </span>
        </h2>
        <section className=" bg-[rgb(232,232,227)] flex flex-col justify-center py-12">
      <div className="relative flex w-full max-w-[1200px] mx-auto h-[480px] md:h-[530px] gap-6">
        {projects.map((p, idx) => (
          <div
            key={p.num}
            className="flex-1 min-w-0 flex flex-col justify-end items-center relative cursor-pointer group"
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            tabIndex={0}
          >
            {/* Overlay image, always present, never affects layout */}
            <div
              ref={el => imgRefs.current[idx] = el}
              className="absolute left-1/2 top-0 -translate-x-1/2 z-20 h-full pt-8 flex flex-col justify-end pointer-events-none"
              style={{
                width: 300,
                opacity: idx === active ? 1 : 0,
                scale: idx === active ? 1 : 0.98,
                pointerEvents: idx === active ? "auto" : "none",
              }}
            >
              <div className="relative w-[300px] h-full overflow-hidden bg-white rounded-sm shadow-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover brightness-[.82] select-none pointer-events-none"
                  draggable={false}
                />
                {/* Centered number */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[7.5rem] font-light pointer-events-none select-none mix-blend-luminosity">
                  {p.num}
                </span>
                {/* Info */}
                <div className="absolute bottom-7 left-6 text-white">
                  <div className="font-medium text-lg">{p.title}</div>
                  <div className="text-xs opacity-80">{p.subtitle}</div>
                </div>
                {/* Arrow */}
                <a
                  href={p.link}
                  className="absolute bottom-7 right-6 text-white"
                  tabIndex={-1}
                  aria-label={`Go to ${p.title}`}
                >
                  <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M6 22l16-16M22 6v10M22 6H12" />
                  </svg>
                </a>
              </div>
            </div>
            {/* Big number (background) */}
            <span
              className="text-[7.5rem] sm:text-[6rem] font-light text-zinc-900 transition-opacity duration-300 select-none"
              style={{ opacity: idx === active ? 0 : 1 }}
            >
              {p.num}
            </span>
            {/* Info below */}
            <div className="mt-10 flex flex-col items-center">
              <div className="font-medium text-base text-zinc-900">{p.title}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{p.subtitle}</div>
              <a
                href={p.link}
                className="inline-block mt-2 text-zinc-900"
                tabIndex={-1}
                aria-label={`Go to ${p.title}`}
              >
                <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M5 16l10-10M15 6v5M15 6H10" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}