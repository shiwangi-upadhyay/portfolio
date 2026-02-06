// "use client";
// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import gsap from "gsap";
// import { useEffect } from "react";
// import Projects from "@/components/projects";
// import About from "@/components/about";
// import Contact from "@/components/contact";

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuItems = ["About", "Projects", "Contact"];

//   useEffect(() => {
//     const preloader = document.querySelector(".preloader");
//     if (preloader) preloader.classList.remove("hidden");

//     let tl = gsap.timeline();

//     tl.to(".preloader", {
//       y: "-100%",
//       borderRadius: "10% 10% 36% 39% / 10% 10% 55% 56%",
//       duration: 1,
//       ease: "power2.out",
//     })
//       .add(() => {
//         if (preloader) preloader.style.display = "none";
//       })
//       .from(".navbar", {
//         duration: 1,
//         y: "-100%",
//       })
//       .add(() => {
//         let paths = document.querySelectorAll(".heroHeading svg path");
//         paths.forEach((path) => {
//           path.style.transform = "translateY(100%)";
//           path.style.opacity = "0";
//         });
//         gsap.to(paths, {
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 1,
//           ease: "power2.out",
//         });
//       })
//       .from(".left svg", {
//         y: 30,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       })
//       .from(
//         ".left h4",
//         { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
//         "-=0.4"
//       )
//       .from(
//         ".left p",
//         { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
//         "-=0.4"
//       )
//       .from(
//         ".left .leftBtn",
//         { y: 30, opacity: 0, duration: 0.6, ease: "power2.out" },
//         "-=0.4"
//       )
//       .from(
//         ".middle",
//         { y: 30, opacity: 0, duration: 1, ease: "power2.out" },
//         "-=0.4"
//       )
//       .from(
//         ".right p",
//         { y: 30, opacity: 0, duration: 1, ease: "power2.out" },
//         "-=0.4"
//       )
//       .from(
//         ".right h2",
//         { y: 30, opacity: 0, duration: 1, ease: "power2.out" },
//         "-=0.4"
//       );
//   }, []);

//   return (
//     <>
//       <div className="preloader fixed inset-0 z-[9999] bg-black text-white flex items-center justify-center text-xl sm:text-2xl"></div>

//       {/* Main Page */}
//       <div className="main w-full bg-[#e8e8e3] text-black">
//         {/* Header / Navbar */}
//         <header className="navbar w-full h-[60px] flex items-center justify-between px-6 text-black bg-[rgb(232,232,227)]">
//           {/* Logo */}
//           <div className="flex items-center gap-4">
//             <div className="bg-[#393632] text-[#e8e8e3] w-10 h-10 rounded-full flex items-center justify-center">
//               <span className="text-white text-xl font-bold">S</span>
//             </div>
//             <p className="text-[#6b645c] text-sm hidden sm:block">
//               (Web Designer & Developer)
//             </p>
//           </div>

//           {/* Desktop Menu */}
//           <div className="flex items-center">
//             <div className="hidden md:flex gap-6 font-bold">
//               {menuItems.map((item) => {
//                 const id = item.toLowerCase();
//                 return (
//                   <a
//                     href={`#${id}`}
//                     key={item}
//                     className="text-[#6b645c] hover:text-[#393632] transition-all duration-300"
//                   >
//                     {item}
//                   </a>
//                 );
//               })}
//             </div>
//             <button className="px-6 py-1 ml-6 bg-[#393632] text-[#e8e8e3] text-md rounded-md hidden md:inline-block hover:bg-[#8c8c73] transition-colors duration-200">
//               Sign Up
//             </button>
//           </div>

//           {/* Mobile Hamburger Icon */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setMenuOpen(!menuOpen)}
//               className="text-[#393632]"
//             >
//               {menuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>

//           {/* Mobile Dropdown */}
//           {menuOpen && (
//             <div className="absolute top-[60px] left-0 w-full bg-[rgb(232,232,227)] flex flex-col items-center gap-4 py-6 shadow-md md:hidden z-[998]">
//               {menuItems.map((item) => {
//                 const id = item.toLowerCase();
//                 return (
//                   <a
//                     href={`#${id}`}
//                     key={item}
//                     className="text-[#393632] font-bold hover:text-black transition-all duration-300"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 );
//               })}
//             </div>
//           )}
//         </header>

//         {/* Hero Section */}
//         <section id="page" className="px-6 md:px-12 py-10">
//           <div className="top">
//             <h1 className="heroHeading text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mt-8 text-[#131311]">
//               Shiwangi Upadhyay
//             </h1>
//           </div>

//           <div className="bottom grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-6 mt-28">
//             {/* Left */}
//             <div className="left md:col-span-4 flex flex-col gap-6">
//               <h4>
//                 <svg
//                   stroke="currentColor"
//                   fill="none"
//                   strokeWidth="1.25"
//                   viewBox="6 6 12 12"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="w-4 h-4 md:w-6 md:h-6 text-[#8c8c73]"
//                 >
//                   <line x1="7" y1="7" x2="17" y2="17" />
//                   <polyline points="17 7 17 17 7 17" />
//                 </svg>
//               </h4>
//               <p className="text-[#393632] text-base sm:text-lg leading-snug max-w-[40ch]">
//                 I enjoy building web apps and bringing ideas to life with clean,
//                 responsive design using modern tools like React, Next.js, and
//                 Tailwind CSS.
//               </p>
//               <a
//                 href="https://github.com/shiwangi-upadhyay"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <button className="leftBtn mt-2 bg-[#393632] text-[#e8e8e3] px-6 py-3 text-sm sm:text-base rounded-full transition-colors duration-200 hover:bg-[#8c8c73]">
//                   Github ↗
//                 </button>
//               </a>
//             </div>

//             {/* Middle */}
//             <div className="middle md:col-span-4 flex justify-center">
//               <div className="image w-[60vw] md:w-[20vw] h-[60vw] md:h-[55vh]">
//                 <img
//                   src="/images/profile.jpg"
//                   alt="Shiwangi Upadhyay"
//                   className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-300"
//                 />
//               </div>
//             </div>

//             {/* Right */}
//             <div className="right md:col-span-4 flex flex-col items-end justify-end text-right gap-2">
//               <p className="text-[#393632] text-sm sm:text-base uppercase">
//                 Let’s keep the momentum going
//               </p>
//               <h2 className="text-[#393632] text-4xl sm:text-5xl md:text-6xl uppercase">
//                 Onwards!
//               </h2>
//             </div>
//           </div>
//         </section>

//         <About />
//         <Projects />
//         <Contact />
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, ExternalLink } from "lucide-react";
import gsap from "gsap";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // 1. GSAP Animations for Hero Entrance
    const tl = gsap.timeline();
    tl.from(".nav-anim", { 
        y: -20, 
        opacity: 0, 
        stagger: 0.1, 
        duration: 0.8, 
        ease: "power3.out" 
      })
      .from(".hero-title-anim", { 
        y: 60, 
        opacity: 0, 
        duration: 1, 
        ease: "power4.out" 
      }, "-=0.4")
      .from(".hero-sub-anim", { 
        opacity: 0, 
        y: 20, 
        duration: 0.8 
      }, "-=0.6")
      .from(".hero-img-anim", { 
        scale: 1.05, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power2.out" 
      }, "-=0.8");

    // 2. Scroll Listener for Navbar Background Blur
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white">
      {/* Refined Navigation with Scroll-Based Blur */}
      <header 
        className={`fixed top-0 w-full z-[100] px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "bg-white/70 backdrop-blur-lg border-b border-zinc-100 py-4" : "bg-transparent"
        }`}
      >
        <div className="nav-anim font-medium tracking-tighter text-lg uppercase">Shiwangi Upadhyay</div>
        
        <nav className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.25em] text-[#666]">
          {["About", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-anim hover:text-black transition-colors">
              {item}
            </a>
          ))}
        </nav>

        <a href="#" className="nav-anim bg-[#1a1a1a] text-white px-5 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest hover:bg-[#333] transition-all">
          Resume
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
        <div className="max-w-4xl w-full">
          <div className="overflow-hidden">
            <h1 className="hero-title-anim text-[clamp(2.5rem,8vw,5.5rem)] font-light leading-tight tracking-tight text-center">
              Full Stack <span className="italic font-serif text-yellow-500">Engineer</span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12">
            {/* Left Column: Role Subtext */}
            <div className="hero-sub-anim md:w-1/3 order-2 md:order-1">
              <p className="text-sm text-[#555] leading-relaxed italic">
                Currently architecting <br /> 
                <strong className="text-zinc-900">ShelfIntel</strong> at <strong className="text-zinc-900">ShelfEx</strong>. <br />
                Focusing on REST APIs and <br />
                user-behavior analytics.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="https://github.com/shiwangi-upadhyay" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  <Github size={18}/>
                </a>
                <a href="https://linkedin.com/in/shiwangi-upadhyay-sh0910/" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">
                  <Linkedin size={18}/>
                </a>
              </div>
            </div>

            {/* Center Column: Interactive Profile Image */}
            <div className="hero-img-anim group w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
              <img 
                src="/images/profile.jpg" 
                alt="Shiwangi Upadhyay" 
                className="w-full h-full object-cover grayscale brightness-110 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>

            {/* Right Column: Short Intro */}
            <div className="hero-sub-anim md:w-1/3 text-right order-3">
              <p className="text-xs uppercase tracking-widest font-bold text-[#888] mb-2">Based in India</p>
              <p className="text-sm text-[#1a1a1a] font-medium leading-relaxed">
                Specializing in Next.js, PostgreSQL, and building scalable internal tools from scratch.
              </p>
              <a href="#projects" className="inline-flex items-center gap-2 mt-4 text-[10px] font-black uppercase tracking-widest border-b border-black pb-1 hover:pb-2 transition-all">
                View Projects <ExternalLink size={12}/>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 flex flex-col items-center opacity-30">
          <span className="text-[9px] uppercase tracking-[0.3em] mb-2">Scroll</span>
          <ArrowDown size={12} className="animate-bounce" />
        </div>
      </section>

      {/* Main Sections */}
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}