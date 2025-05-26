"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ContactPage = () => {
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

    // Animate subheading and CTA
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
    <div className="min-h-screen w-full bg-[rgb(232,232,227)] flex flex-col items-center pt-10">
      {/* HERO */}
      <div className="w-full max-w-[90%]  mx-auto rounded-2xl overflow-hidden bg-white shadow-xl mb-12">
        <div className="relative">
          <img
            ref={heroImageRef}
            src="https://wallpapers.com/images/hd/cute-yellow-desktop-wallpaper-316yimqt5uyiw5qb.jpg" // <-- Swap with your own image
            alt="Contact Hero"
            className="w-full h-[300px] md:h-[400px] object-cover"
            style={{ objectPosition: "center" }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/35 text-white text-center">
            <button className="mb-5 px-5 py-2 rounded-full bg-white/80 text-[#222] text-sm font-semibold shadow-lg hover:bg-white transition-all">
              Get Started Today
            </button>
            <h1
              ref={heroHeadingRef}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-2"
            >
              {"It All Starts With a Simple Call"
                .split(" ")
                .map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                    {word}
                  </span>
                ))}
            </h1>
            <p
              ref={heroSubRef}
              className="text-base md:text-lg font-medium mb-6 max-w-xl"
            >
              Speak to our team and find the best way to connect. We’re here to help you make your vision real.
            </p>
            <button
              ref={ctaBtnRef}
              className="bg-[#393632] text-[#e8e8e3] px-8 py-3 rounded-full font-semibold shadow-xl hover:bg-[#8c8c73] transition-all"
            >
              Connect with me
            </button>
          </div>
        </div>
      </div>

      {/* CONTACT INFO & FORM */}
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-between md:flex-row gap-12 mb-20">
        {/* Info */}
        <div className="flex-1 flex flex-col gap-6 justify-center px-2">
          <div className="flex items-center gap-3">
            <div className="bg-[#393632] text-[#e8e8e3] w-10 h-10 rounded-full flex items-center justify-center">
              {/* You can swap this for your own logo */}
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <h2 className="text-[#222] text-2xl font-bold">YourBrand</h2>
          </div>
          <p className="text-[#515151] max-w-[90%] text-lg">
            Let’s make something great together! If you have a project in mind or want to just say hi, fill out the form or reach out below.
          </p>
          <div className="flex flex-col gap-2 mt-2 text-[#555] text-base">
            <span>
              Email:{" "}
              <a href="mailto:hello@example.com" className="underline hover:text-[#222]">
                shiwangiupadhyay332@gmail.com
              </a>
            </span>
            <span>Location: Greater Noida, Uttar Pradesh</span>
            <span>Phone: <a href="tel:+1234567890" className="underline hover:text-[#222]">+1 234 567 890</a></span>
          </div>
        </div>
        {/* Form */}
        <form className="flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#222] text-lg font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-2 px-3 text-[#222] focus:outline-none rounded"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#222] text-lg font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-2 px-3 text-[#222] focus:outline-none rounded"
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#222] text-lg font-medium">
              Message
            </label>
            <textarea
              id="message"
              className="bg-[#f5f5f5] border-b border-[#e8e8e3] py-2 px-3 text-[#222] focus:outline-none min-h-[100px] rounded"
              placeholder="Tell us about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#393632] text-[#e8e8e3] font-semibold py-3 rounded-full hover:bg-[#8c8c73] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;