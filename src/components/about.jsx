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
          className=" w-full text-[#111] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold uppercase inline-block"
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
      <div className="services w-full relative ">
        <div className="one border ek flex items-start bg-[#111] border-t border-[#393632] pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#d1d1c7] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
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
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#d1d1c7]">
              Web Development
            </h3>
            <p className="text-[#a29e9a] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              A website developed to captivate and convert can elevate your brand to new heights. My
              custom-coded sites are meticulously crafted to reflect your unique identity, delivering
              seamless experiences with a focus on animation—keeping your audience engaged and returning.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                CMS Integration
              </div>
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                Motion & Animations
              </div>
              <div className="listItem bt flex items-start w-full pb-4 gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                3D Development
              </div>
            </div>
          </div>
        </div>
        <div className="one border do flex items-start bg-[#111] border-t border-[#393632] pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#d1d1c7] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
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
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#d1d1c7]">
              Web Design
            </h3>
            <p className="text-[#a29e9a] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              Amplify your online presence with a website that truly connects with your audience's feelings
              and desires. I design stunning, high-converting sites that align with your business goals,
              helping you stand out and scale effectively.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                Responsive Design
              </div>
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                Wireframing
              </div>
              <div className="listItem bt flex items-start w-full pb-4 gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                UX Writing
              </div>
            </div>
          </div>
        </div>
        <div className="one border tin flex items-start bg-[#111] border-t border-[#393632] pt-12">
          <div className="oneL w-1/2">
            <h2 className="text-[#d1d1c7] font-montreal text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)]">
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
            <h3 className="text-[clamp(1.95rem,1.5rem+2.28vw,3.55rem)] font-montreal text-[#d1d1c7]">
              SEO
            </h3>
            <p className="text-[#a29e9a] pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] max-w-[80%]">
              Your website deserves to be seen. I optimize your online presence to elevate your visibility
              in search results, helping your business attract the right audience and stand out in the
              digital landscape.
            </p>
            <div className="list flex flex-col gap-12 items-start w-full pt-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] pb-[clamp(1.125rem,1.09rem+0.18vw,1.25rem)] text-[#a29e9a]">
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">01</span>
                Technical SEO
              </div>
              <div className="listItem flex items-start border-b border-[#393632] w-full pb-4 gap-8">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">02</span>
                On-Page Optimization
              </div>
              <div className="listItem bt flex items-start w-full pb-4 gap-8 border-none">
                <span className="text-[clamp(1rem,0.93rem+0.36vw,1.25rem)] pt-[5px]">03</span>
                SEO Audits & Analysis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;