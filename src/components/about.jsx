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
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 md:mb-8 italic">
            Professional Experience
          </h4>

          <h2 className="about-header text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 md:mb-8 overflow-hidden">
            <span className="inline-block">Full Stack</span> <br />
            <span className="inline-block italic font-serif text-yellow-500">
              Web Developer
            </span>
          </h2>

          <p className="text-zinc-600 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
            Started as a <b>Full Stack Web Developer Intern</b> and progressed into a <b>Full Stack Web Developer</b> role at ShelfEx, working across frontend, backend, databases, cloud infrastructure, production support, and workflow automation.
          </p>

          <ul className="text-sm space-y-4 text-zinc-500 font-medium">
             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">
               Built and maintained production-grade full-stack features and internal tools.
             </li>

             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">
               Developed secure REST APIs, authentication flows, and database integrations.
             </li>

             <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">
               Worked on scalable automation workflows and production systems across multiple markets.
             </li>
          </ul>
        </div>

        <div className="flex gap-6 mt-8 md:mt-12">
           <a
             href="https://github.com/shiwangi-upadhyay"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-yellow-500 transition-colors"
           >
             <Github size={20}/>
           </a>

           <a
             href="https://linkedin.com/in/shiwangi-upadhyay-sh0910/"
             target="_blank"
             rel="noopener noreferrer"
             className="hover:text-yellow-500 transition-colors"
           >
             <Linkedin size={20}/>
           </a>

           <a
             href="mailto:shiwangiupadhyay332@gmail.com"
             className="hover:text-yellow-500 transition-colors"
           >
             <Mail size={20}/>
           </a>
        </div>
      </div>

      {/* RIGHT/BOTTOM SLIDER SECTION */}
      <div ref={sliderRef} className="flex flex-col md:flex-row h-auto md:h-screen items-center">
        
        {/* CARD 01 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-white">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">
            01
          </span>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Frontend Architecture
          </h3>

          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Developed and maintained responsive frontend applications using <b>Next.js</b>, <b>React.js</b>, and <b>TypeScript</b>. Built reusable UI components, managed complex application flows, and focused on creating reliable and consistent user experiences across different devices.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Next.js Framework
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               React.js
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               TypeScript
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Responsive UI
             </div>
          </div>
        </div>

        {/* CARD 02 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-[#fdfdfc]">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">
            02
          </span>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Backend & Systems
          </h3>

          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Designed and maintained secure <b>RESTful APIs</b> using <b>Node.js</b> and <b>Express.js</b>. Implemented JWT-based authentication, integrated frontend and backend services, optimized <b>PostgreSQL</b> queries, and built internal tools to simplify production debugging and issue resolution.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               REST APIs
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Node.js / Express
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               JWT Authentication
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               PostgreSQL
             </div>
          </div>
        </div>

        {/* CARD 03 */}
        <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center bg-white">
          <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">
            03
          </span>

          <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
            Automation & Cloud
          </h3>

          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
            Built automated workflows for generating and managing digital assets, including configurable rendering, bilingual content, interactive canvas editing, and cloud-based asset management. Worked with <b>GCP</b>, Cloud Storage, and scalable configurations to support production workflows across multiple brands and markets.
          </p>

          <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Workflow Automation
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Canvas Editing
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               GCP / Cloud Storage
             </div>

             <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">
               Multi-Market Systems
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
// 'use client';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { Github, Linkedin, Mail } from "lucide-react";

// const About = () => {
//   const containerRef = useRef(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const ctx = gsap.context(() => {
//       // Responsive GSAP Logic
//       ScrollTrigger.matchMedia({
//         // Desktop: Horizontal Scroll Logic
//         "(min-width: 768px)": function() {
//           const sections = gsap.utils.toArray('.skill-card');
          
//           gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//               trigger: containerRef.current,
//               pin: true, 
//               scrub: 1,
//               start: "top top",
//               end: () => "+=" + (sliderRef.current?.scrollWidth || 2000), 
//               invalidateOnRefresh: true,
//             }
//           });
//         },
//         // Mobile: Vertical Scroll Reveals
//         "(max-width: 767px)": function() {
//           const sections = gsap.utils.toArray('.skill-card');
//           sections.forEach((section) => {
//             gsap.from(section, {
//               opacity: 0,
//               y: 30,
//               duration: 1,
//               scrollTrigger: {
//                 trigger: section,
//                 start: "top 85%",
//                 toggleActions: "play none none none"
//               }
//             });
//           });
//         }
//       });

//       // Unified Header Reveal
//       gsap.from(".about-header span", {
//         y: 80,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 1,
//         ease: "power4.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%",
//         }
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative bg-white flex flex-col md:flex-row overflow-x-hidden border-t border-zinc-100">
      
//       {/* LEFT/TOP SUMMARY SECTION */}
//       <div className="w-full md:w-[40%] md:h-screen p-8 md:p-16 flex flex-col justify-between border-b md:border-b-0 md:border-r border-zinc-100 bg-white z-20">
//         <div>
//           <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-6 md:mb-8 italic">Professional Summary</h4>
//           <h2 className="about-header text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6 md:mb-8 overflow-hidden">
//             <span className="inline-block">ShelfEx</span> <br />
//             <span className="inline-block italic font-serif text-yellow-500">Internship</span>
//           </h2>
//           <p className="text-zinc-600 leading-relaxed text-base md:text-lg mb-6 md:mb-8">
//             As a <b>Full Stack Web Developer Intern</b>, I engineered the <b>ShelfIntel</b> platform from scratch. My role involved more than just coding; I managed the entire system lifecycle and operational tools.
//           </p>
//           <ul className="text-sm space-y-4 text-zinc-500 font-medium">
//              <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Architected a Superadmin Portal to centralize and automate internal tasks.</li>
//              <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Improved reliability by optimizing PostgreSQL schemas and Next.js SSR.</li>
//              <li className="flex gap-4 italic border-l-2 border-yellow-500 pl-4">Orchestrated data sync between data team APIs and frontend dashboards.</li>
//           </ul>
//         </div>

//         <div className="flex gap-6 mt-8 md:mt-12">
//            <a href="https://github.com/shiwangi-upadhyay" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><Github size={20}/></a>
//            <a href="https://linkedin.com/in/shiwangi-upadhyay-sh0910/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 transition-colors"><Linkedin size={20}/></a>
//            <a href="mailto:shiwangiupadhyay332@gmail.com" className="hover:text-yellow-500 transition-colors"><Mail size={20}/></a>
//         </div>
//       </div>

//       {/* RIGHT/BOTTOM SLIDER SECTION */}
//       <div ref={sliderRef} className="flex flex-col md:flex-row h-auto md:h-screen items-center">
        
//         {/* CARD 01 */}
//         <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-white">
//           <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">01</span>
//           <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Frontend Architecture</h3>
//           <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
//             Developed reusable UI components and managed multiple user portals using <b>Next.js</b> and JavaScript. I implemented cross-browser history synchronization to ensure a seamless experience across all devices.
//           </p>
//           <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Next.js Framework</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">State Management</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Tailwind Styling</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Portal Management</div>
//           </div>
//         </div>

//         {/* CARD 02 */}
//         <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center border-b md:border-b-0 md:border-r border-zinc-100 bg-[#fdfdfc]">
//           <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">02</span>
//           <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Backend & Systems</h3>
//           <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
//             Designed secure <b>RESTful APIs</b> using <b>Node.js</b> and <b>Express.js</b>. I coordinated with the data team to ingest real-time location data and GCS resources directly into the ShelfIntel dashboard.
//           </p>
//           <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">API Orchestration</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Node.js / Express</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Postman Testing</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">System Security</div>
//           </div>
//         </div>

//         {/* CARD 03 */}
//         <div className="skill-card flex-shrink-0 w-full md:w-[60vw] h-auto md:h-full p-8 md:p-20 flex flex-col justify-center bg-white">
//           <span className="text-6xl md:text-8xl font-black text-zinc-100 mb-4 select-none">03</span>
//           <h3 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Data & Intelligence</h3>
//           <p className="text-lg md:text-xl text-zinc-600 leading-relaxed mb-6 md:mb-8">
//             Optimized <b>PostgreSQL</b> schemas for production reliability. I built a custom behavioral tracking system to capture <b>rage clicks</b> and session activity, integrating <b>PostHog</b> for advanced product insights.
//           </p>
//           <div className="grid grid-cols-2 gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-zinc-400">
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">PostgreSQL Design</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Behavioral Tracking</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">PostHog Analytics</div>
//              <div className="p-3 md:p-4 border border-zinc-100 rounded-lg">Data Persistence</div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;