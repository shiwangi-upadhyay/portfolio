"use client";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


const slides = [
  {
    image: "/images/profile.jpg",
    title: "Summer Collection",
    subtitle: "Trendy & Fresh",
    desc: "Discover our latest summer arrivals with unique designs and vibrant colors.",
    cta: "Shop Now",
  },
  {
    image: "/images/profile.jpg",
    title: "Street Style",
    subtitle: "Urban Vibes",
    desc: "Step out in style with our exclusive streetwear collection.",
    cta: "Explore",
  },
  {
    image: "/images/profile.jpg",
    title: "Classic Elegance",
    subtitle: "Timeless Fashion",
    desc: "Redefine classic looks with our elegant and timeless pieces.",
    cta: "View Collection",
  },
];


const Projects = () => {
    const prevRef = useRef(null);
  const nextRef = useRef(null);
  const slideRefs = useRef([]);

  // GSAP animation for slide content
  const animateSlide = (el) => {
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll(".anim-subtitle"),
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 1.1, ease: "power4.out" }
    );
    gsap.fromTo(
      el.querySelectorAll(".anim-title"),
      { opacity: 0, x: 80 },
      { opacity: 1, x: 0, duration: 1.1, delay: 0.18, ease: "power4.out" }
    );
    gsap.fromTo(
      el.querySelectorAll(".anim-desc"),
      { opacity: 0, scale: 0.97 },
      { opacity: 1, scale: 1, duration: 1.1, delay: 0.35, ease: "power4.out" }
    );
    gsap.fromTo(
      el.querySelectorAll(".anim-btn"),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.1, delay: 0.52, ease: "power4.out" }
    );
    gsap.fromTo(
      el.querySelectorAll(".anim-img"),
      { opacity: 0, scale: 0.92 },
      { opacity: 1, scale: 1, duration: 1.1, ease: "power4.out" }
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const text3 = document.querySelectorAll("#projects h2 span");
    text3.forEach((text) => {
      gsap.set(text, { y: "100%", opacity: 0 });
    });
    gsap.to(text3, {
      y: 0,
      opacity: 1,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: "#projects",
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  useEffect(() => {
    if (slideRefs.current[0]) animateSlide(slideRefs.current[0]);
  }, []);

  // Animate on every slide change
  const handleSlideChange = (swiper) => {
    const idx = swiper.realIndex;
    const el = slideRefs.current[idx];
    if (el) animateSlide(el);
  };

  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-[#111] px-[clamp(1.6875rem,1.6339rem+0.2679vi,1.875rem)] py-[clamp(4.5rem,4.3571rem+0.7143vi,5rem)] mt-20 "
    >
      <div>
        <h2 className="text-[#d1d1c7] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold uppercase inline-block">
          <span className="inline-block">Selected</span>
          <span className="inline-block">Works</span>
          <span className="inline-block">/</span>
          <span className="inline-block">
            <sup>(5)</sup>
          </span>
        </h2>
      </div>
      <Swiper
        modules={[Navigation, EffectCreative]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={handleSlideChange}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        speed={1200}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            opacity: 0.6,
            translate: ["-120%", 0, -500],
            scale: 0.92,
          },
          next: {
            shadow: true,
            opacity: 0.6,
            translate: ["120%", 0, -500],
            scale: 0.92,
          },
        }}
        className="w-full max-w-7xl mt-10"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                ref={el => (slideRefs.current[idx] = el)}
                className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-0 px-6 md:px-32"
              >
                <div className="flex-1 flex flex-col items-start z-10">
                  <div className="mb-3 text-xs uppercase tracking-widest text-[#ffd5a3] font-bold anim-subtitle">
                    {slide.subtitle}
                  </div>
                  <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-[0_4px_16px_rgba(255,213,163,0.21)] anim-title">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-2xl text-[#f3e3d3] mb-10 max-w-lg leading-relaxed anim-desc">
                    {slide.desc}
                  </p>
                  <button className="px-10 py-3 rounded-full bg-gradient-to-r from-[#ffd5a3] to-[#ffb86c] hover:from-[#fff5e6] hover:to-[#ffd5a3] text-[#181818] font-bold text-xl shadow-lg transition-all anim-btn">
                    {slide.cta}
                  </button>
                </div>
                <div className="relative flex-1 min-w-[320px] flex items-center justify-center anim-img">
                  <div className="relative w-[340px] h-[480px] md:w-[410px] md:h-[560px] rounded-[3rem] bg-white/10 backdrop-blur-md border border-[#ffd5a3] shadow-2xl flex items-center justify-center overflow-hidden ring-4 ring-[#ffd5a3]/20">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded-[3rem] scale-105 transition-transform duration-700 ease-[cubic-bezier(.77,0,.18,1)] hover:scale-110"
                    />
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-tl from-[#ffd5a388] to-transparent" />
                    {/* Soft drop shadow */}
                    <div className="absolute inset-0 rounded-[3rem] pointer-events-none shadow-2xl shadow-[#ffd5a3]/20" />
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-20 md:left-5 top-1/2 -translate-y-1/2 z-20 p-4 bg-[#ffd5a3] hover:bg-[#ffe3c2] text-[#222] rounded-full shadow-lg transition-all border-2 border-white/10"
          aria-label="Previous Slide"
        >
          <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button
          ref={nextRef}
          className="absolute right-10 md:right-[20px] top-1/2 -translate-y-1/2 z-20 p-4 bg-[#ffd5a3] hover:bg-[#ffe3c2] text-[#222] rounded-full shadow-lg transition-all border-2 border-white/10"
          aria-label="Next Slide"
        >
          <svg width="24" height="24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </Swiper>
    </div>
  );
};

export default Projects;