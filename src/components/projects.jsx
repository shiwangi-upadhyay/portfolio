"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./projects/data";
import ProjectCard from "./projects/ProjectCard";
import ShelfPulseCaseStudy from "./projects/ShelfPulseCaseStudy";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const worksHeadingRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Heading Reveal
      if (worksHeadingRef.current) {
        const spans = worksHeadingRef.current.querySelectorAll("span");
        gsap.fromTo(
          spans,
          { y: "100%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: worksHeadingRef.current,
              start: "top 90%",
            },
          },
        );
      }

      // 2. Staggered Card Entrance
      const cards = gsap.utils.toArray(".project-card");
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%",
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="projects"
      className="bg-white py-32 px-6 md:px-12 border-t border-zinc-100"
    >
      {/* SECTION HEADING */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-row justify-center items-center gap-6">
        <div className="overflow-hidden">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block">
            <i>Selected Projects</i>
          </h4>
          <h2
            ref={worksHeadingRef}
            className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-none"
          >
            <span className="inline-block mr-4 mx-auto">Featured</span>
            <span className="inline-block italic font-serif text-yellow-500">
              Works
            </span>
          </h2>
        </div>
      </div>

      <section className="max-w-7xl mx-auto">
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
        >
          {projects.map((p) => (
            <ProjectCard key={p.num} project={p} />
          ))}
        </div>

        <ShelfPulseCaseStudy />
      </section>
    </div>
  );
}
