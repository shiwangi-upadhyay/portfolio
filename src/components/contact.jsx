"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Contact = () => {
  const heroImageRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const heroSubRef = useRef(null);
  const ctaBtnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate hero image
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: heroImageRef.current, start: "top 80%" },
      }
    );

    // Animate hero heading (split by words)
    if (heroHeadingRef.current) {
      const words = heroHeadingRef.current.querySelectorAll("span");
      gsap.set(words, { y: "100%", opacity: 0 });
      gsap.to(words, {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: heroHeadingRef.current, start: "top 80%" },
      });
    }

    // Animate subheading
    gsap.fromTo(
      heroSubRef.current,
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: { trigger: heroSubRef.current, start: "top 80%" },
      }
    );
    gsap.fromTo(
      ctaBtnRef.current,
      { opacity: 0, scale: 0.9, y: 40 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        delay: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ctaBtnRef.current, start: "top 80%" },
      }
    );
  }, []);

  return (
    <div id ="contact" 
    className="min-h-screen w-full sm:max-w-[90%] mx-auto bg-[rgb(232,232,227)] flex flex-col items-center pt-6 md:pt-10 ">
      {/* HERO */}
      <div className="w-full max-w-[96%] sm:max-w-[90%] mx-auto rounded-2xl overflow-hidden bg-white shadow-xl mb-8 md:mb-12">
        <div className="relative">
          <img
            ref={heroImageRef}
            src="https://wallpapers.com/images/hd/cute-yellow-desktop-wallpaper-316yimqt5uyiw5qb.jpg"
            alt="Contact Hero"
            className="w-full h-[180px] xs:h-[260px] sm:h-[300px] md:h-[350px] lg:h-[400px] object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/35 text-white text-center px-2">
            <button className="mb-3 xs:mb-4 md:mb-5 px-4 xs:px-6 md:px-5 py-1.5 xs:py-2 rounded-full bg-white/80 text-[#222] text-xs xs:text-sm font-semibold shadow-lg hover:bg-white transition-all">
              Hello!
            </button>
            <h1
              ref={heroHeadingRef}
              className="text-xl xs:text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-1.5 xs:mb-2"
            >
              {"I'm Shiwangi Upadhyay"
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="inline-block mr-1 xs:mr-2">
                    {word}
                  </span>
                ))}
            </h1>
            <p
              ref={heroSubRef}
              className="text-xs xs:text-sm sm:text-base md:text-lg font-medium mb-4 xs:mb-5 md:mb-6 max-w-xs xs:max-w-md md:max-w-xl"
            >
              Let’s connect and share some cool ideas together. I’m always up for creative conversations and building something awesome!
            </p>
            <a
              href="https://www.linkedin.com/in/shiwangi-upadhyay-sh0910/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                ref={ctaBtnRef}
                className="bg-[#393632] text-[#e8e8e3] px-6 xs:px-8 py-2 xs:py-3 rounded-full font-semibold shadow-xl hover:bg-[#8c8c73] transition-all text-xs xs:text-sm md:text-base"
              >
                Connect with me
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Contact and form */}
      <div className="w-full max-w-[98%] sm:max-w-2xl md:max-w-4xl lg:max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 mb-10 md:mb-20">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-4 xs:gap-6 justify-center px-1 xs:px-2">
          <div className="flex items-center gap-2 xs:gap-3">
            <div className="bg-[#393632] text-[#e8e8e3] w-8 h-8 xs:w-10 xs:h-10 rounded-full flex items-center justify-center">
              <span className="text-white text-lg xs:text-xl font-bold">S</span>
            </div>
            <h2 className="text-[#222] text-lg xs:text-xl md:text-2xl font-bold">Shiwangi Upadhyay</h2>
          </div>
          <p className="text-[#515151] max-w-full xs:max-w-[90%] text-sm xs:text-base md:text-lg">
            Let’s make something great together! If you have a project in mind or want to just say hi, fill out the form or reach out below.
          </p>
          <div className="flex flex-col gap-1 xs:gap-2 mt-1 xs:mt-2 text-[#555] text-xs xs:text-base">
            <span>
              Email:{" "}
              <a href="mailto:shiwangiupadhyay332@gmail.com" className="underline hover:text-[#222] break-all">
                shiwangiupadhyay332@gmail.com
              </a>
            </span>
            <span>Location: Greater Noida, Uttar Pradesh</span>
            <span>
              Phone:{" "}
              <a href="tel:+919336422437" className="underline hover:text-[#222]">
                +91 9336422437
              </a>
            </span>
          </div>
        </div>
        {/* Form */}
        <form className="flex-1 bg-white rounded-2xl shadow-lg p-4 xs:p-6 md:p-8 flex flex-col gap-4 xs:gap-6">
          <div className="flex flex-col gap-1 xs:gap-2">
            <label htmlFor="name" className="text-[#222] text-base xs:text-lg font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-1.5 xs:py-2 px-2 xs:px-3 text-[#222] focus:outline-none rounded text-xs xs:text-base"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col gap-1 xs:gap-2">
            <label htmlFor="email" className="text-[#222] text-base xs:text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-1.5 xs:py-2 px-2 xs:px-3 text-[#222] focus:outline-none rounded text-xs xs:text-base"
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1 xs:gap-2">
            <label htmlFor="message" className="text-[#222] text-base xs:text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-1.5 xs:py-2 px-2 xs:px-3 text-[#222] focus:outline-none min-h-[60px] xs:min-h-[100px] rounded text-xs xs:text-base"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-2 xs:mt-4 bg-[#393632] text-[#e8e8e3] font-semibold py-2 xs:py-3 rounded-full hover:bg-[#8c8c73] transition-colors text-xs xs:text-sm md:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;