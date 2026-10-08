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

// "use client";
// import React, { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     num: "01",
//     title: "ShelfIntel",
//     subtitle: "Full Stack Architecture @ ShelfEx",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bbbda546697c?q=80&w=2070&auto=format&fit=crop",
//     link: "#",
//     isPrivate: true,
//     details:
//       "Engineered a market intelligence platform from scratch using Next.js and PostgreSQL for real-time analytics.",
//   },
//   {
//     num: "02",
//     title: "Feedback Collector",
//     subtitle: "SaaS Utility Tool",
//     image:
//       "https://humanresourcesonline-assets.b-cdn.net/images/hr-sg/content-images/priya_mar_2022_opencommunication_trust_reliability_123rf.jpg",
//     link: "https://feedback-tool-collector.vercel.app/signup",
//     isPrivate: false,
//     details:
//       "A specialized tool designed to streamline the collection and management of user feedback.",
//   },
//   {
//     num: "03",
//     title: "Library App",
//     subtitle: "MERN Stack & JWT",
//     image:
//       "https://www.jdandj.com/uploads/8/0/0/8/80083458/what-makes-a-great-book-cover-for-an-author_orig.jpg",
//     link: "https://cafe-library.vercel.app/",
//     isPrivate: false,
//     details:
//       "Full-stack book rental platform featuring secure JWT-based role access and a clean user interface.",
//   },
// ];

// export default function Projects() {
//   const worksHeadingRef = useRef(null);
//   const gridRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // 1. Heading Reveal
//       if (worksHeadingRef.current) {
//         const spans = worksHeadingRef.current.querySelectorAll("span");
//         gsap.fromTo(
//           spans,
//           { y: "100%", opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             stagger: 0.1,
//             duration: 1,
//             ease: "power4.out",
//             scrollTrigger: {
//               trigger: worksHeadingRef.current,
//               start: "top 90%",
//             },
//           },
//         );
//       }

//       // 2. Staggered Card Entrance
//       const cards = gsap.utils.toArray(".project-card");
//       gsap.fromTo(
//         cards,
//         { y: 60, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.15,
//           duration: 1,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: gridRef.current,
//             start: "top 85%",
//           },
//         },
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       id="projects"
//       className="bg-white py-32 px-6 md:px-12 border-t border-zinc-100"
//     >
//       {/* SECTION HEADING */}
//       <div className="max-w-7xl mx-auto mb-20 flex flex-row justify-center items-center gap-6">
//         <div className="overflow-hidden">
//           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4 block">
//             <i>Selected Projects</i>
//           </h4>
//           <h2
//             ref={worksHeadingRef}
//             className="text-[clamp(2.5rem,6vw,5rem)] font-bold tracking-tighter leading-none"
//           >
//             <span className="inline-block mr-4 mx-auto">Featured</span>
//             <span className="inline-block italic font-serif text-yellow-500">
//               Works
//             </span>
//           </h2>
//         </div>

//       </div>

//       <section className="max-w-7xl mx-auto">
//         <div
//           ref={gridRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16"
//         >
//           {projects.map((p) => (
//             <div
//               key={p.num}
//               className="project-card relative flex flex-col group outline-none"
//               tabIndex={0}
//             >
//               {/* IMAGE CONTAINER */}
//               <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   className="absolute inset-0 w-full h-full object-cover grayscale brightness-105 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-105"
//                 />

//                 {p.isPrivate && (
//                   <div className="absolute top-6 left-6 z-30 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
//                     <span className="text-[8px] font-bold text-white uppercase tracking-widest">
//                       Internal Project
//                     </span>
//                   </div>
//                 )}

//                 {/* QUICK-REVEAL OVERLAY */}
//                 <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-20">
//                   <p className="text-white text-xs font-medium leading-relaxed italic mb-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
//                     {p.details}
//                   </p>
//                   {!p.isPrivate && (
//                     <a
//                       href={p.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
//                     >
//                       <svg
//                         width={20}
//                         height={20}
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                       >
//                         <path d="M5 15L15 5M15 5H8M15 5V12" />
//                       </svg>
//                     </a>
//                   )}
//                 </div>
//               </div>

//               {/* TEXT CONTENT */}
//               <div className="mt-8 flex justify-between items-start">
//                 <div>
//                   <h3 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
//                     {p.title}
//                   </h3>
//                   <p className="text-[10px] font-black text-zinc-400 mt-1 uppercase tracking-widest">
//                     {p.subtitle}
//                   </p>
//                 </div>
//                 <span className="text-sm font-serif italic text-zinc-300">
//                   / {p.num}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUpRight,
  Check,
  Cloud,
  Code2,
  Cpu,
  Download,
  FileJson,
  Image,
  Layers,
  Monitor,
  Send,
  Type,
  UploadCloud,
  Utensils,
  Wand2,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    num: "01",
    title: "Drilldown Donut Chart",
    subtitle: "TypeScript • D3.js • Power BI SDK",
    image:
      "/images/Donut.png",
    link: "https://github.com/shiwangi-upadhyay/Powerbi-Donut-Chart",
    isPrivate: false,
    details:
      "A custom Power BI visual built from scratch featuring multi-level drilldown navigation, 360° animated transitions, Top-N grouping, and cross-filtering.",
  },
  {
    num: "02",
    title: "ShelfPulse",
    subtitle: "Combo Shots • Canvas Builder • GCP",
    image: null,
    link: "#",
    isPrivate: true,
    variant: "shelfpulse",
    details:
      "Worked across the AI menu pipeline and combo builder: menu photos become structured JSON, while brand assets, food shots, frames, and text are composed into campaign creatives.",
  },
  {
    num: "03",
    title: "Library App",
    subtitle: "MERN Stack & JWT",
    image:
      "/images/library.png",
    link: "https://cafe-library.vercel.app/",
    isPrivate: false,
    details:
      "Full-stack book rental platform featuring secure JWT-based role access and a clean user interface.",
  },
];

const shelfPulseFlow = [
  "Menu photos",
  "YOLO sections",
  "Gemini JSON",
  "Combo builder",
];

const sampleMenuJson = `{
  "section": "Beverages",
  "items": [
    { "name": "Cold Coffee", "price": 120 },
    { "name": "Mango Shake", "price": 150 }
  ]
}`;

const shelfPulseAssets = {
  landscapeBg: "/images/shelfpulse/Backgrounds/LandScapeBg.jpeg",
  portraitBg: "/images/shelfpulse/Backgrounds/PortraitBg.jpeg",
  bottle: "/images/shelfpulse/BottleAssets/Pepsi.jpeg",
  bottleSmall: "/images/shelfpulse/BottleAssets/Pepsismall-cutout.png",
  burger: "/images/shelfpulse/FoodAssets/Burger-cutout.png",
  fries: "/images/shelfpulse/FoodAssets/Fries-cutout.png",
  promoLandscape: "/images/shelfpulse/PromoShot/PromoShotLandscape.jpeg",
  promoPortrait: "/images/shelfpulse/PromoShot/PromoShotPortrait.jpeg",
};

const pipelineSteps = [
  "GCS folder received",
  "Orientation corrected",
  "YOLO sections detected",
  "Gemini extracts JSON",
  "Backend callback sent",
];

const builderSteps = [
  "Pick format",
  "Select assets",
  "Place layers",
  "Edit text",
  "Export outputs",
];

function StepTimeline({ steps, activeStep }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`min-w-0 rounded-lg border px-3 py-2 transition-all duration-500 ${
            index <= activeStep
              ? "border-yellow-400 bg-yellow-50 text-zinc-950"
              : "border-zinc-200 bg-white text-zinc-400"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                index <= activeStep
                  ? "bg-yellow-400 text-zinc-950"
                  : "bg-zinc-100 text-zinc-400"
              }`}
            >
              {index + 1}
            </span>
            <p className="min-w-0 text-[9px] font-black uppercase tracking-[0.08em] leading-tight">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ShelfPulsePreview() {
  return (
    <div className="absolute inset-0 bg-[#121212] text-white p-6 flex flex-col justify-between">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-400">
            ShelfPulse
          </p>
          <h4 className="mt-2 text-2xl font-black leading-none uppercase">
            Menu AI + Combo Builder
          </h4>
        </div>
        <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="space-y-3">
        {shelfPulseFlow.map((step, index) => (
          <div
            key={step}
            className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.06] px-3 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-black text-zinc-950">
              {index + 1}
            </span>
            <span className="text-xs font-bold uppercase tracking-widest">
              {step}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-white text-zinc-950 p-3">
          <p className="text-[9px] font-black uppercase tracking-widest text-zinc-500">
            Pipeline
          </p>
          <p className="mt-2 font-mono text-[10px] leading-relaxed">
            {"{ sections, items, prices }"}
          </p>
        </div>
        <div className="rounded-lg bg-yellow-400 text-zinc-950 p-3">
          <p className="text-[9px] font-black uppercase tracking-widest">
            Builder
          </p>
          <p className="mt-2 font-mono text-[10px] leading-relaxed">
            PNG / WebP creatives
          </p>
        </div>
      </div>
    </div>
  );
}

function PipelineMockup({ activeStep }) {
  const serviceRows = [
    ["GCS", "Folder download", Cloud],
    ["OSD", "Orientation fix", Cpu],
    ["YOLO", "Section crops", Wand2],
    ["Gemini", "JSON refine", FileJson],
    ["API", "Status callback", Send],
  ];

  return (
    <div className="min-w-0 space-y-4">
      <StepTimeline steps={pipelineSteps} activeStep={activeStep} />

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                FastAPI background job
              </p>
              <p className="mt-1 break-all font-mono text-[11px] font-bold text-zinc-900">
                POST /process_menu_folder
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
              {activeStep >= 4 ? "callback sent" : "processing"}
            </span>
          </div>

          <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(230px,0.72fr)_minmax(0,1fr)]">
            <div className="min-w-0 rounded-xl bg-zinc-950 p-3">
              <div className="mb-3 flex min-w-0 items-center justify-between gap-2 px-1">
                <div className="flex min-w-0 items-center gap-2">
                  <UploadCloud size={15} className="shrink-0 text-yellow-400" />
                  <p className="truncate text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    Real generated output
                  </p>
                </div>
                <p className="truncate font-mono text-[10px] text-zinc-500">
                  gs://.../menu/
                </p>
              </div>

              <div className="relative mx-auto aspect-[739/1066] max-h-[480px] max-w-[340px] overflow-hidden rounded-lg bg-black">
                <img
                  src={shelfPulseAssets.promoLandscape}
                  alt="ShelfPulse generated landscape promo output"
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    activeStep >= 1 ? "rotate-0 scale-100" : "-rotate-1 scale-[1.03]"
                  }`}
                />
                {[
                  "left-[5%] top-[8%] h-[40%] w-[36%] border-yellow-400 bg-yellow-300/10",
                  "left-[42%] top-[23%] h-[28%] w-[25%] border-sky-400 bg-sky-300/10",
                  "right-[10%] top-[20%] h-[35%] w-[23%] border-emerald-400 bg-emerald-300/10",
                  "bottom-[7%] left-[5%] h-[13%] w-[18%] border-rose-400 bg-rose-300/10",
                ].map((box) => (
                  <div
                    key={box}
                    className={`absolute rounded border-2 transition-all duration-700 ${box} ${
                      activeStep >= 2 ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div
                  className={`absolute bottom-3 left-3 right-3 rounded bg-black/80 px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white transition-all duration-700 ${
                    activeStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  Detection overlays isolate text, food and product regions
                </div>
              </div>
            </div>

            <div className="min-w-0 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["crop_01", "Promo text", "object-left"],
                  ["crop_02", "Food + bottle", "object-right"],
                ].map(([name, label, objectPosition], index) => (
                  <div
                    key={name}
                    className={`min-w-0 overflow-hidden rounded-lg border bg-white transition-all duration-700 ${
                      activeStep >= 2 + index
                        ? "translate-y-0 border-zinc-900 opacity-100"
                        : "translate-y-4 border-zinc-200 opacity-40"
                    }`}
                  >
                    <div className="h-24 overflow-hidden bg-black">
                      <img
                        src={shelfPulseAssets.promoLandscape}
                        alt={`${label} crop`}
                        className={`h-full w-full object-cover ${objectPosition}`}
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-mono text-[10px] font-bold text-zinc-400">
                        {name}
                      </p>
                      <p className="mt-1 text-xs font-bold text-zinc-900">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                  Pipeline modules
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {serviceRows.map(([file, label, Icon], index) => (
                    <div
                      key={file}
                      className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                        activeStep >= index
                          ? "border-zinc-900 bg-zinc-950 text-white"
                          : "border-zinc-200 bg-white text-zinc-500"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={activeStep >= index ? "text-yellow-400" : "text-zinc-400"}
                      />
                      <p className="mt-2 font-mono text-[10px] font-bold">{file}</p>
                      <p className="mt-1 text-[11px] leading-4 opacity-75">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-[#101010] p-4 text-white">
          <div className="flex items-center gap-2">
            <FileJson size={16} className="text-yellow-400" />
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
              Final JSON Uploaded to GCS
            </p>
          </div>
          <pre
            className={`mt-4 whitespace-pre-wrap break-words overflow-hidden rounded-lg bg-black p-4 text-[11px] leading-6 text-emerald-300 transition-all duration-700 ${
              activeStep >= 3 ? "max-h-72 opacity-100" : "max-h-20 opacity-45"
            }`}
          >
            {sampleMenuJson}
          </pre>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["GCS", "processed_results/"],
              ["Model", "Gemini refinement"],
              ["Status", "completed"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                  activeStep >= index + 2
                    ? "border-yellow-400/50 bg-white/[0.1]"
                    : "border-white/10 bg-white/[0.04] opacity-45"
                }`}
              >
                <Check size={14} className="text-yellow-400" />
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  {label}
                </p>
                <p className="mt-1 text-xs font-bold text-zinc-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ComboBuilderMockup({ activeStep }) {
  const controls = [
    ["Format", "Landscape + Portrait", Monitor],
    ["Background", "Pepsi dotted template", Layers],
    ["Food", "Burger + fries", Utensils],
    ["Product", "Pepsi bottle", Image],
    ["Output", "Gallery + deploy", Download],
  ];

  return (
    <div className="min-w-0 space-y-4">
      <StepTimeline steps={builderSteps} activeStep={activeStep} />

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.28fr)]">
        <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
              Combo Shot Inputs
            </p>
            <span className="rounded-full bg-zinc-950 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white">
              Layered Canvas
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              [shelfPulseAssets.burger, "Burger"],
              [shelfPulseAssets.fries, "Fries"],
              [shelfPulseAssets.bottleSmall, "Pepsi"],
            ].map(([src, label], index) => (
              <div
                key={label}
                className={`min-w-0 overflow-hidden rounded-lg border transition-all duration-700 ${
                  activeStep >= 1
                    ? "border-yellow-400 ring-2 ring-yellow-300"
                    : "border-zinc-200"
                }`}
              >
                <div
                  className="aspect-square overflow-hidden bg-zinc-950"
                  style={{
                    backgroundImage: `url(${shelfPulseAssets.landscapeBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={src}
                    alt={`${label} ShelfPulse asset`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <p className="truncate p-2 text-center text-[9px] font-black uppercase tracking-[0.1em] text-zinc-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {controls.map(([label, value, Icon], index) => (
              <div
                key={label}
                className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                  activeStep >= Math.min(index, 4)
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-zinc-200 bg-white opacity-55"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <Icon size={15} className="shrink-0 text-zinc-700" />
                    <span className="truncate text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                      {label}
                    </span>
                  </div>
                  <Check
                    size={14}
                    className={activeStep >= Math.min(index, 4) ? "text-emerald-600" : "text-zinc-300"}
                  />
                </div>
                <p className="mt-2 truncate text-xs font-bold text-zinc-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <Code2 size={15} className="text-yellow-400" />
              <p className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                Canvas Editor Preview
              </p>
            </div>
            <p className="font-mono text-[10px] text-zinc-500">
              landscape 5600x2800 + portrait 2800x5600
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4">
            <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-zinc-950 sm:aspect-[16/9] sm:min-h-0">
              <img
                src={shelfPulseAssets.landscapeBg}
                alt="ShelfPulse landscape background template"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.42)_0_36%,rgba(0,0,0,.08)_36%)]" />
              <div
                className={`absolute inset-y-0 left-0 w-[38%] bg-[#0b5a46] transition-transform duration-700 ${
                  activeStep >= 1 ? "translate-x-0" : "-translate-x-full"
                }`}
              />
              <img
                src={shelfPulseAssets.burger}
                alt="Burger layer"
                className={`absolute bottom-[20%] left-[40%] w-[24%] object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-16 scale-75 opacity-0"
                }`}
              />
              <img
                src={shelfPulseAssets.fries}
                alt="Fries layer"
                className={`absolute bottom-[22%] right-[13%] w-[25%] object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-16 scale-75 opacity-0"
                }`}
              />
              <img
                src={shelfPulseAssets.bottleSmall}
                alt="Pepsi bottle layer"
                className={`absolute bottom-[12%] right-[31%] h-[68%] object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 rotate-0 opacity-100"
                    : "translate-y-16 rotate-3 opacity-0"
                }`}
              />
              <div
                className={`absolute left-[7%] top-[12%] max-w-[32%] text-3xl font-black uppercase leading-[0.92] text-white md:text-5xl transition-all duration-700 ${
                  activeStep >= 3 ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                }`}
              >
                Super Saver Combo
              </div>
              <div
                className={`absolute left-[7%] top-[58%] flex max-w-[32%] flex-wrap gap-2 transition-all duration-700 ${
                  activeStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <span className="rounded bg-yellow-400 px-3 py-2 text-[9px] font-black uppercase tracking-[0.1em] text-zinc-950">
                  Text Layer
                </span>
                <span className="rounded border border-white/25 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                  Editable
                </span>
              </div>

              <div
                className={`absolute bottom-[18%] left-[38%] h-[47%] w-[50%] rounded border border-yellow-300/80 transition-opacity duration-700 ${
                  activeStep >= 2 && activeStep < 4 ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`absolute bottom-5 left-5 flex max-w-[56%] flex-wrap gap-2 transition-all duration-700 ${
                  activeStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {["Landscape", "Portrait", "Gallery"].map((format) => (
                  <span
                    key={format}
                    className="rounded-full bg-white px-3 py-2 text-[9px] font-black uppercase tracking-[0.1em] text-zinc-950"
                  >
                    {format}
                  </span>
                ))}
              </div>

              <div
                className={`absolute right-4 top-4 max-w-[38%] rounded-lg border border-white/20 bg-black/40 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur transition-all duration-700 ${
                  activeStep >= 4 ? "opacity-100" : "opacity-45"
                }`}
              >
                save + deploy
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_minmax(150px,0.34fr)]">
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Landscape output
                </p>
                <div className="mt-3 overflow-hidden rounded-lg bg-black">
                  <img
                    src={shelfPulseAssets.promoLandscape}
                    alt="Final ShelfPulse landscape combo shot"
                    className={`w-full object-contain transition-all duration-700 ${
                      activeStep >= 4 ? "opacity-100" : "opacity-45"
                    }`}
                  />
                </div>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Portrait output
                </p>
                <div className="mt-3 max-h-[300px] overflow-hidden rounded-lg bg-black">
                  <img
                    src={shelfPulseAssets.promoPortrait}
                    alt="Final ShelfPulse portrait combo shot"
                    className={`mx-auto max-h-[300px] object-contain transition-all duration-700 ${
                      activeStep >= 4 ? "opacity-100" : "opacity-45"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShelfPulseCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setActiveStep(0);
    const timer = setInterval(() => {
      setActiveStep((step) => (step + 1) % 5);
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-24 min-w-0 overflow-hidden border-t border-zinc-200 pt-12">
      <div className="grid min-w-0 grid-cols-1 gap-10 items-start xl:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
            Combo Shots Preview
          </p>
          <h3 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-none">
            How the Combo Builder Works
          </h3>
          <p className="mt-6 max-w-[52ch] text-sm md:text-base leading-7 text-zinc-600">
            Watch the canvas assemble a combo shot from real ShelfPulse assets:
            format, background, food cutouts, Pepsi bottle, editable text, then
            landscape and portrait campaign outputs.
          </p>

          {/* AI pipeline preview intentionally disabled for portfolio focus.
              The section now highlights only Combo Shots / Combo Builder work. */}
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-xs font-black uppercase tracking-widest text-white">
              <Layers size={14} />
              Combo Builder
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Layers size={16} className="shrink-0 text-yellow-600" />
              <p className="truncate text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
                Assets to final creative
              </p>
            </div>
            <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">
              Step {activeStep + 1} / 5
            </span>
          </div>

          <ComboBuilderMockup activeStep={activeStep} />
        </div>
      </div>
    </div>
  );
}

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
            <div
              key={p.num}
              className="project-card relative flex flex-col group outline-none"
              tabIndex={0}
            >
              {/* IMAGE CONTAINER */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl">
                {p.variant === "shelfpulse" ? (
                  <ShelfPulsePreview />
                ) : (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-105 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-105"
                  />
                )}

                {p.isPrivate && (
                  <div className="absolute top-6 left-6 z-30 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <span className="text-[8px] font-bold text-white uppercase tracking-widest">
                      Internal Project
                    </span>
                  </div>
                )}

                {/* QUICK-REVEAL OVERLAY */}
                <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-20">
                  <p className="text-white text-xs font-medium leading-relaxed italic mb-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {p.details}
                  </p>
                  {!p.isPrivate && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
                    >
                      <svg
                        width={20}
                        height={20}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M5 15L15 5M15 5H8M15 5V12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* TEXT CONTENT */}
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
                    {p.title}
                  </h3>
                  <p className="text-[10px] font-black text-zinc-400 mt-1 uppercase tracking-widest">
                    {p.subtitle}
                  </p>
                </div>
                <span className="text-sm font-serif italic text-zinc-300">
                  / {p.num}
                </span>
              </div>
            </div>
          ))}
        </div>

        <ShelfPulseCaseStudy />
      </section>
    </div>
  );
}
