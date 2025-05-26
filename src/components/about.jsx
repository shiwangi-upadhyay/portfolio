'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About = () => {
  const worksHeadingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate the "Selected Works" heading
    if (worksHeadingRef.current) {
      const spans = worksHeadingRef.current.querySelectorAll('span');
      gsap.set(spans, { y: "100%", opacity: 0 });
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: worksHeadingRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Animate the text spans in services sections
    const headings = document.querySelectorAll('.services .oneL h2 span');
    if (headings && headings.length > 0) {
      gsap.set(headings, { y: '100%', opacity: 0 });
      gsap.to(headings, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.services',
          start: 'top 100%',
          toggleActions: 'play none none none',
        },
      });
    }

    gsap.to('.ek', {
      duration: 3,
      scrollTrigger: {
        trigger: '.ek',
        start: 'top 10%',
        end: 'bottom -27%',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to('.do', {
      duration: 3,
      scrollTrigger: {
        trigger: '.do',
        start: 'top 27%',
        end: 'bottom 40%',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });

    gsap.to('.tin', {
      duration: 3,
      scrollTrigger: {
        trigger: '.tin',
        start: 'top 45%',
        end: 'bottom 100%',
        scrub: true,
        pin: true,
        pinSpacing: false,
      },
    });
  }, []);

  return (
    <div id='about'>
      <div>
        <h2
          ref={worksHeadingRef}
          className=" w-full text-[#393632] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold uppercase inline-block"
        >
          <span className="inline-block">Something </span>
          <span> </span>
          <span className="inline-block">About </span>
          <span> </span>
          <span className="inline-block">Me</span>
          <span className="inline-block">
            
          </span>
        </h2>
      </div>
      {/* Services Section */}
      <div className="services w-full relative bg-[rgb(232,232,227)] ">
        <div className="one border ek flex items-start pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
              {'(01)'.split('').map((ch, i) => (
                <span
                  key={i}
                  className="inline-block translate-y-full opacity-0"
                >
                  {ch}
                </span>
              ))}
            </h2>
          </div>
          <div className="oneR w-1/2 flex flex-col relative">
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
              Frontend Development
            </h3>
            <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              I’m passionate about frontend development and enjoy creating responsive, user-friendly web apps that look great and perform smoothly. I like combining design and coding to build clean, efficient interfaces. My main tools are React, Next.js, and Tailwind CSS, which help me deliver modern and fast experiences.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                Responsive
              </div>
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                Clean Code
              </div>
              <div className="listItem bt flex items-start w-full pb-4 text-[#393632] gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                User Friendly
              </div>
            </div>
          </div>
        </div>
        <div className="one border do flex items-start bg-[rgb(232,232,227)] border-t border-[#d1d1c7] pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
              {'(02 )'.split('').map((ch, i) => (
                <span
                  key={i}
                  className="inline-block translate-y-full opacity-0"
                >
                  {ch}
                </span>
              ))}
            </h2>
          </div>
          <div className="oneR w-1/2 flex flex-col relative">
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
              Backend Development
            </h3>
            <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              I’ve recently begun learning backend development with a focus on mastering the MERN stack. I’ve gained hands-on experience using Next.js, Express.js, and Node.js to build full-stack web applications. My goal is to develop efficient, scalable, and secure backend systems that power smooth user experiences.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                Authentication
              </div>
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                Api
              </div>
              <div className="listItem bt flex items-start w-full pb-4 text-[#393632] gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                Routing
              </div>
            </div>
          </div>
        </div>
        <div className="one border tin flex items-start bg-[rgb(232,232,227)] border-t border-b-0 border-[#d1d1c7] pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#393632] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
              {'(03)'.split('').map((ch, i) => (
                <span
                  key={i}
                  className="inline-block translate-y-full opacity-0"
                >
                  {ch}
                </span>
              ))}
            </h2>
          </div>
          <div className="oneR w-1/2 flex flex-col relative">
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#393632]">
              Database
            </h3>
            <p className="text-[#393632] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              I used MongoDB as the database for my projects, performing full CRUD operations to create, read, update, and delete data efficiently. I also tested APIs thoroughly to ensure smooth interaction between the backend and database.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                CRUD
              </div>
              <div className="listItem flex items-start border-b border-[#393632] text-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                API Integration
              </div>
              <div className="listItem bt flex items-start w-full pb-4 text-[#393632]
              gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                Database Testing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;