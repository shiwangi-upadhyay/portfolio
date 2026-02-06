// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//     {
//         num: 1,
//         title: "Library",
//         subtitle: "Full Stack Project",
//         image: "https://www.jdandj.com/uploads/8/0/0/8/80083458/what-makes-a-great-book-cover-for-an-author_orig.jpg",
//         link: "https://cafe-library.vercel.app/",
//     },
//     {
//         num: 2,
//         title: "Shopping Cart App",
//         subtitle: "Frontend Project",
//         image: "https://img.freepik.com/free-photo/3d-render-sunglasses-shopping-cart-illustration-design_460848-6286.jpg?semt=ais_hybrid&w=740",
//         link: "https://shopping-addtocart.netlify.app/",
//     },
//     {
//         num: 3,
//         title: "Blog App",
//         subtitle: "Backend Project",
//         image: "https://img.pikbest.com/wp/202408/blank-yellow-duotone-style-modern-laptop-computer-on-a-background-with-screen-for-custom-design-3d-rendering_9825735.jpg!sw800",
//         link: "http://github.com/shiwangi-upadhyay/blog-app",
//     },
//     ];

//     export default function Projects() {
//     const [active, setActive] = useState(2);
//     const imgRefs = useRef([]);
//     const worksHeadingRef = useRef(null);

//     useEffect(() => {
//         if (worksHeadingRef.current) {
//         const spans = worksHeadingRef.current.querySelectorAll("span");
//         gsap.set(spans, { y: "100%", opacity: 0 });
//         gsap.to(spans, {
//             y: 0,
//             opacity: 1,
//             stagger: 0.18,
//             duration: 1,
//             ease: "power4.out",
//             scrollTrigger: {
//             trigger: worksHeadingRef.current,
//             start: "top 90%",
//             },
//         });
//         }
//     }, []);

//     useEffect(() => {
//         imgRefs.current.forEach((img, idx) => {
//         if (!img) return;
//         if (idx === active) {
//             gsap.to(img, {
//             opacity: 1,
//             scale: 1,
//             duration: 0.45,
//             pointerEvents: "auto",
//             ease: "power2.out",
//             });
//         } else {
//             gsap.to(img, {
//             opacity: 0,
//             scale: 0.98,
//             duration: 0.45,
//             pointerEvents: "none",
//             ease: "power2.out",
//             });
//         }
//         });
//     }, [active]);

//     return (
//         <div
//         id="projects"
//         className="w-full min-h-screen mt-[15rem] md:mt-40 lg:mt-20 bg-[rgb(232,232,227)] flex flex-col justify-center py-12 px-4"
//         >
//         <h2
//             ref={worksHeadingRef}
//             className="text-[#393632] text-[clamp(2.5rem,2.5vw+1rem,5rem)] font-semibold uppercase mb-16"
//         >
//             <span className="inline-block">My</span>{" "}
//             <span className="inline-block">Projects</span>
//         </h2>

//         <section className="bg-[rgb(232,232,227)] w-full flex flex-col justify-center items-center">
//             <div className="relative w-full grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-y-16 md:gap-6 max-w-[1200px] mx-auto ">
//                 {projects.map((p, idx) => (
//                 <div
//                     key={p.num}
//                     className="relative flex flex-col items-center justify-end cursor-pointer group w-full h-[420px] md:h-[480px] px-4"
//                     onMouseEnter={() => setActive(idx)}
//                     onFocus={() => setActive(idx)}
//                     tabIndex={0}
//                 >
                
//                 <div
//                     ref={(el) => (imgRefs.current[idx] = el)}
//                     className="absolute left-1/2 top-0 -translate-x-1/2 z-20 h-full pt-8 flex flex-col justify-end pointer-events-none"
//                     style={{
//                     width: 300,
//                     opacity: idx === active ? 1 : 0,
//                     scale: idx === active ? 1 : 0.98,
//                     pointerEvents: idx === active ? "auto" : "none",
//                     }}
//                 >
//                     <div className="relative w-[300px] h-full overflow-hidden bg-white rounded-sm shadow-xl">
//                     <img
//                         src={p.image}
//                         alt={p.title}
//                         className="w-full h-full object-cover brightness-[.82] select-none pointer-events-none"
//                         draggable={false}
//                     />
//                     <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[7.5rem] font-light pointer-events-none select-none mix-blend-luminosity">
//                         {p.num}
//                     </span>
//                     <div className="absolute bottom-7 left-6 text-white">
//                         <div className="font-medium text-lg">{p.title}</div>
//                         <div className="text-xs opacity-80">{p.subtitle}</div>
//                     </div>
//                     <a
//                         href={p.link}
//                         className="absolute bottom-7 right-6 text-white"
//                         tabIndex={-1}
//                         aria-label={`Go to ${p.title}`}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <svg width={28} height={28} fill="none" stroke="currentColor" strokeWidth={2}>
//                         <path d="M6 22l16-16M22 6v10M22 6H12" />
//                         </svg>
//                     </a>
//                     </div>
//                 </div>

                
//                 <span
//                     className="text-[6rem] sm:text-[7.5rem] font-light text-zinc-900 transition-opacity duration-300 select-none"
//                     style={{ opacity: idx === active ? 0 : 1 }}
//                 >
//                     {p.num}
//                 </span>

                
//                 <div className="mt-8 flex flex-col items-center text-center">
//                     <div className="font-medium text-base text-zinc-900">{p.title}</div>
//                     <div className="text-xs text-zinc-500 mt-0.5">{p.subtitle}</div>
//                     <a
//                     href={p.link}
//                     className="inline-block mt-2 text-zinc-900"
//                     tabIndex={-1}
//                     aria-label={`Go to ${p.title}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     >
//                     <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.5}>
//                         <path d="M5 16l10-10M15 6v5M15 6H10" />
//                     </svg>
//                     </a>
//                 </div>
//                 </div>
//             ))}
//             </div>
//         </section>
//         </div>
//     );
// }

"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        num: "01",
        title: "ShelfIntel",
        subtitle: "Full Stack Architecture @ ShelfEx",
        image: "https://images.unsplash.com/photo-1551288049-bbbda546697c?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        isPrivate: true,
        details: "Built a market intelligence platform from scratch using Next.js and PostgreSQL."
    },
    {
        num: "02",
        title: "Feedback Collector",
        subtitle: "SaaS Utility Tool",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
        link: "https://feedback-tool-collector.vercel.app/signup",
        isPrivate: false,
        details: "Streamlined user feedback management with secure authentication and real-time dashboards."
    },
    {
        num: "03",
        title: "Library App",
        subtitle: "MERN Stack & JWT",
        image: "https://www.jdandj.com/uploads/8/0/0/8/80083458/what-makes-a-great-book-cover-for-an-author_orig.jpg",
        link: "https://cafe-library.vercel.app/",
        isPrivate: false,
        details: "A full-stack book rental platform with secure JWT-based role access control."
    },
];

export default function Projects() {
    const worksHeadingRef = useRef(null);

    useEffect(() => {
        if (worksHeadingRef.current) {
            const spans = worksHeadingRef.current.querySelectorAll("span");
            gsap.set(spans, { y: "100%", opacity: 0 });
            gsap.to(spans, {
                y: 0,
                opacity: 1,
                stagger: 0.08,
                duration: 0.8,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: worksHeadingRef.current,
                    start: "top 95%",
                },
            });
        }
    }, []);

    return (
        <div id="projects" className="bg-white py-24 px-6 md:px-20 lg:px-32 border-t border-zinc-100">
            {/* SECTION HEADING */}
            <div className="mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-4">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400"> <i>Selected Projects</i></h4>
                <h2 ref={worksHeadingRef} className="text-[clamp(2rem,4vw,4rem)] font-bold tracking-tighter leading-none overflow-hidden">
                    <span className="inline-block mr-3">Featured</span> 
                    <span className="inline-block italic font-serif text-yellow-500 mr-3">Works</span>
                </h2>
            </div>

            <section className="max-w-6xl mx-auto">
                {/* Increased Gap and constrained width for smaller, spaced cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-14">
                    {projects.map((p) => (
                        <div
                            key={p.num}
                            className="relative flex flex-col group outline-none"
                            tabIndex={0}
                        >
                            {/* IMAGE CONTAINER - Smaller Aspect Ratio */}
                            <div className="relative aspect-[5/6] w-full overflow-hidden rounded-xl bg-zinc-50 border border-zinc-50 transition-all duration-300">
                                <img
                                    src={p.image}
                                    alt={p.title}
                                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                                />
                                
                                {p.isPrivate && (
                                    <div className="absolute top-4 left-4 z-30 bg-black/90 px-2 py-1 rounded text-[7px] font-bold text-white uppercase tracking-widest">
                                        Internal
                                    </div>
                                )}

                                {/* QUICK-REVEAL OVERLAY */}
                                <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6 z-20">
                                    <p className="text-white text-xs font-medium leading-relaxed italic mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                                        {p.details}
                                    </p>
                                    {!p.isPrivate && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-yellow-500 transition-colors"
                                        >
                                            <svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth={2.5}>
                                                <path d="M5 15L15 5M15 5H8M15 5V12" />
                                            </svg>
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* TEXT CONTENT */}
                            <div className="mt-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold tracking-tight text-zinc-900 uppercase">{p.title}</h3>
                                    <p className="text-[9px] font-black text-zinc-400 mt-1 uppercase tracking-widest">{p.subtitle}</p>
                                </div>
                                <span className="text-xs font-serif italic text-zinc-200">/ {p.num}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}