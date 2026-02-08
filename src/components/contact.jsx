"use client";
import { useEffect, useRef, useState } from "react"; // Added useState
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const containerRef = useRef(null);
  const heroHeadingRef = useRef(null);
  const formRef = useRef(null);

  // Status management for the form
  const [status, setStatus] = useState(""); // "", "sending", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Extract values from form fields
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset(); // Clear form on success
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Snappy Heading Reveal
      if (heroHeadingRef.current) {
        const words = heroHeadingRef.current.querySelectorAll("span");
        gsap.fromTo(
          words,
          { y: "100%", opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: "power4.out",
            scrollTrigger: {
              trigger: heroHeadingRef.current,
              start: "top 90%",
            },
          },
        );
      }

      // 2. Smooth Form & Info Fade-in
      gsap.from(".contact-reveal", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: ".contact-reveal", start: "top 85%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="contact"
      ref={containerRef}
      className="bg-white pt-24 pb-12 px-6 md:px-12 border-t border-zinc-100"
    >
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto mb-20 flex flex-row justify-center items-center gap-4">
        <div className="overflow-hidden text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4">
            <i>Get In Touch</i>
          </h4>
          <h2
            ref={heroHeadingRef}
            className="text-[clamp(2.5rem,5vw,5rem)] font-bold tracking-tighter leading-none overflow-hidden text-zinc-900"
          >
            <span className="inline-block mr-3">Let's</span>
            <span className="inline-block italic text-yellow-500 font-serif mr-3">
              Collaborate
            </span>
          </h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* LEFT: PROFESSIONAL INFO */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div className="contact-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-zinc-900 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl">
                S
              </div>
              <div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-zinc-900">
                  Shiwangi Upadhyay
                </h3>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  Full Stack Engineer
                </p>
              </div>
            </div>

            <p className="text-lg text-zinc-600 leading-relaxed mb-12">
              Currently open to new opportunities for 2026. Whether you have a
              project in mind or want to discuss system architecture, I'm always
              ready for technical conversations.
            </p>

            <div className="space-y-6 text-sm font-medium">
              <a
                href="mailto:shiwangiupadhyay332@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                  <Mail size={18} />
                </div>
                <span className="group-hover:text-zinc-900 transition-colors underline decoration-zinc-200 underline-offset-4 break-all">
                  shiwangiupadhyay332@gmail.com
                </span>
              </a>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-zinc-50 text-zinc-900">
                  <MapPin size={18} />
                </div>
                <span>Greater Noida, Uttar Pradesh</span>
              </div>
              <a
                href="tel:+919336422437"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 rounded-full bg-zinc-50 group-hover:bg-zinc-900 group-hover:text-white transition-all">
                  <Phone size={18} />
                </div>
                <span className="group-hover:text-zinc-900 transition-colors">
                  +91 9336422437
                </span>
              </a>
            </div>
          </div>

          {/* SOCIALS FOOTER */}
          <div className="contact-reveal mt-16 pt-8 border-t border-zinc-100 flex gap-6">
            <a
              href="https://github.com/shiwangi-upadhyay"
              target="_blank"
              className="text-zinc-900 hover:text-zinc-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shiwangi-upadhyay-sh0910/"
              target="_blank"
              className="text-zinc-900 hover:text-zinc-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT: PROFESSIONAL FORM */}
        <div className="lg:col-span-7 contact-reveal">
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-50 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-zinc-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Shiwangi Upadhyay"
                  className="bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-zinc-900 outline-none transition-colors text-zinc-900"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="shiwangiupadhyay332@gmail.com"
                  className="bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-zinc-900 outline-none transition-colors text-zinc-900"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-12">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                Project Details
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project or inquiry..."
                className="bg-transparent border-b border-zinc-200 py-3 text-sm focus:border-zinc-900 outline-none transition-colors resize-none text-zinc-900"
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full md:w-auto px-12 py-4 bg-zinc-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-zinc-700 transition-all hover:shadow-xl active:scale-95 disabled:bg-zinc-400"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>

            {/* Success/Error UI Feedback */}
            {status === "success" && (
              <div className="mt-6 p-4 bg-white border border-green-100 rounded-xl animate-in fade-in slide-in-from-top-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-green-600">
                  Verification Received
                </p>
                <p className="text-xs text-zinc-500 mt-1 italic">
                  I'll review your transmission and get back to you shortly.
                </p>
              </div>
            )}
            {status === "error" && (
              <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-4">
                Transmission Failed. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;