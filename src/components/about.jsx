// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// const About = () => {
//   const worksHeadingRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Animate the "Selected Works" heading
//     if (worksHeadingRef.current) {
//       const spans = worksHeadingRef.current.querySelectorAll('span');
//       gsap.set(spans, { y: "100%", opacity: 0 });
//       gsap.to(spans, {
//         y: 0,
//         opacity: 1,
//         stagger: 0.18,
//         duration: 1,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: worksHeadingRef.current,
//           start: 'top 90%',
//           toggleActions: 'play none none none',
//         },
//       });
//     }

//     // Animate the text spans in services sections
//     const headings = document.querySelectorAll('.abt .oneL h2 span');
//     if (headings && headings.length > 0) {
//       gsap.set(headings, { y: '100%', opacity: 0 });
//       gsap.to(headings, {
//         y: 0,
//         opacity: 1,
//         stagger: 0.2,
//         duration: 1,
//         ease: 'power4.out',
//         scrollTrigger: {
//           trigger: '.services',
//           start: 'top 100%',
//           toggleActions: 'play none none none',
//         },
//       });
//     }

//     gsap.to('.ek', {
//       duration: 3,
//       scrollTrigger: {
//         trigger: '.ek',
//         start: 'top 10%',
//         end: 'bottom -27%',
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//       },
//     });

//     gsap.to('.do', {
//       duration: 3,
//       scrollTrigger: {
//         trigger: '.do',
//         start: 'top 27%',
//         end: 'bottom 40%',
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//       },
//     });

//     gsap.to('.tin', {
//       duration: 3,
//       scrollTrigger: {
//         trigger: '.tin',
//         start: 'top 45%',
//         end: 'bottom 100%',
//         scrub: true,
//         pin: true,
//         pinSpacing: false,
//       },
//     });
//   }, []);

//   return (
//     <div id='about'>
//       <div>
//         <h2
//           ref={worksHeadingRef}
//           className=" w-full text-[#393632] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold pl-6 uppercase inline-block"
//         >
//           <span className="inline-block">Something </span>
//           <span> </span>
//           <span className="inline-block">About </span>
//           <span> </span>
//           <span className="inline-block">Me</span>
//           <span className="inline-block">
            
//           </span>
//         </h2>
//       </div>
//       <div className="abt w-full relative bg-[rgb(232,232,227)] ">
//         <div className="one border ek flex flex-col md:flex-row items-start pl-8 ">
//             <div className="oneL w-full md:w-1/2 mb-6 md:mb-0">
//                 <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
//                 {'(01)'.split('').map((ch, i) => (
//                     <span
//                     key={i}
//                     className="inline-block translate-y-full opacity-0"
//                     >
//                     {ch}
//                     </span>
//                 ))}
//                 </h2>
//             </div>
//             <div className="oneR w-full md:w-1/2 flex flex-col relative">
//             <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
//               Frontend Development
//             </h3>
//             <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
//               I’m passionate about frontend development and enjoy creating responsive, user-friendly web apps that look great and perform smoothly. I like combining design and coding to build clean, efficient interfaces. My main tools are React, Next.js, and Tailwind CSS, which help me deliver modern and fast experiences.
//             </p>
//             <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
//                 Responsive
//               </div>
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
//                 Clean Code
//               </div>
//               <div className="listItem bt flex items-start w-full pb-4 text-[#393632] gap-8 border-none">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
//                 User Friendly
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="one border do flex flex-col md:flex-row items-start bg-[rgb(232,232,227)] border-t border-[#d1d1c7] pl-8">
//             <div className="oneL w-full md:w-1/2 mb-6 md:mb-0">
//             <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
//               {'(02 )'.split('').map((ch, i) => (
//                 <span
//                   key={i}
//                   className="inline-block translate-y-full opacity-0"
//                 >
//                   {ch}
//                 </span>
//               ))}
//             </h2>
//           </div>
//           <div className="oneR w-full md:w-1/2 flex flex-col relative">
//             <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
//               Backend Development
//             </h3>
//             <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
//               I’ve recently begun learning backend development with a focus on mastering the MERN stack. I’ve gained hands-on experience using Next.js, Express.js, and Node.js to build full-stack web applications. My goal is to develop efficient, scalable, and secure backend systems that power smooth user experiences.
//             </p>
//             <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
//                 Authentication
//               </div>
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
//                 Api
//               </div>
//               <div className="listItem bt flex items-start w-full pb-4 text-[#393632] gap-8 border-none">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
//                 Routing
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="one border tin flex flex-col md:flex-row items-start bg-[rgb(232,232,227)] border-t border-b-0 border-[#d1d1c7] pl-8 ">
//             <div className="oneL w-full md:w-1/2 mb-6 md:mb-0">
//             <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
//               {'(03)'.split('').map((ch, i) => (
//                 <span
//                   key={i}
//                   className="inline-block translate-y-full opacity-0"
//                 >
//                   {ch}
//                 </span>
//               ))}
//             </h2>
//           </div>
//           <div className="oneR w-full md:w-1/2 flex flex-col relative">
//             <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
//               Database
//             </h3>
//             <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
//               I used MongoDB as the database for my projects, performing full CRUD operations to create, read, update, and delete data efficiently. I also tested APIs thoroughly to ensure smooth interaction between the backend and database.
//             </p>
//             <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
//                 CRUD
//               </div>
//               <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
//                 API Integration
//               </div>
//               <div className="listItem bt flex items-start w-full pb-4 text-[#393632]
//               gap-8 border-none">
//                 <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
//                 Database Testing
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Responsive GSAP Logic
      ScrollTrigger.matchMedia({
        // Desktop: Horizontal Scroll Logic
        "(min-width: 768px)": function() {
          const sections = gsap.utils.toArray('.skill-card');
          
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              pin: true, 
              scrub: 1,
              start: "top top",
              end: () => "+=" + (sliderRef.current?.scrollWidth || 2000), 
              invalidateOnRefresh: true,
            }
          });
        },
        // Mobile: Vertical Scroll Reveals
        "(max-width: 767px)": function() {
          const sections = gsap.utils.toArray('.skill-card');
          sections.forEach((section) => {
            gsap.from(section, {
              opacity: 0,
              y: 30,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none"
              }
            });
          });
        }
      });

      // Unified Header Reveal
      gsap.from(".about-header span", {
        y: 80,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-white flex flex-col md:flex-row overflow-x-hidden border-t border-zinc-100">
      
      {/* LEFT/TOP SUMMARY SECTION */}
      <div className="w-full md:w-[40%] md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-100 bg-white z-20">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 md:mb-8 italic">Professional Summary</h4>
          <h2 className="about-header text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 md:mb-8 overflow-hidden">
            <span className="inline-block">ShelfEx</span> <br />
            <span className="inline-block italic font-serif text-yellow-500">Internship</span>
          </h2>
          <p className="text-zinc-600 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
            As a <b>Full Stack Web Developer Intern</b>, I engineered the <b>ShelfIntel</b> platform from scratch. My role involved more than just coding; I managed the entire system lifecycle and operational tools.
          </p>
          <ul className="text-sm space-y-4 text-zinc-500 font-medium">
             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Architected a Superadmin Portal to centralize and automate internal tasks.</li>
             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Improved reliability by optimizing PostgreSQL schemas and Next.js SSR.</li>
             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Orchestrated data sync between data team APIs and frontend dashboards.</li>
          </ul>
        </div>

        <div className="flex gap-6 mt-8 md:mt-12">
           <a href="https://github.com/shiwangi-upadhyay" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><Github size={20}/></a>
           <a href="https://linkedin.com/in/shiwangi-upadhyay-sh0910/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><Linkedin size={20}/></a>
           <a href="mailto:shiwangiupadhyay332@gmail.com" className="hover:text-yellow-500 transition-colors"><Mail size={20}/></a>
        </div>
      </div>

      {/* RIGHT/BOTTOM SLIDER SECTION */}
      <div ref={sliderRef} className="flex flex-col md:flex-row h-auto md:h-screen items-center">
        
        {/* CARD 01 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-white">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">01</span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Frontend Architecture</h3>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Developed reusable UI components and managed multiple user portals using <b>Next.js</b> and JavaScript. I implemented cross-browser history synchronization to ensure a seamless experience across all devices.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Next.js Framework</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">State Management</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Tailwind Styling</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Portal Management</div>
          </div>
        </div>

        {/* CARD 02 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-[#fdfdfc]">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">02</span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Backend & Systems</h3>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Designed secure <b>RESTful APIs</b> using <b>Node.js</b> and <b>Express.js</b>. I coordinated with the data team to ingest real-time location data and GCS resources directly into the ShelfIntel dashboard.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">API Orchestration</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Node.js / Express</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Postman Testing</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">System Security</div>
          </div>
        </div>

        {/* CARD 03 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center bg-white">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">03</span>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Data & Intelligence</h3>
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Optimized <b>PostgreSQL</b> schemas for production reliability. I built a custom behavioral tracking system to capture <b>rage clicks</b> and session activity, integrating <b>PostHog</b> for advanced product insights.
          </p>
          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">PostgreSQL Design</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Behavioral Tracking</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">PostHog Analytics</div>
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Data Persistence</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;