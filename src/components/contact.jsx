'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Contact = () => {
  const contactHeadingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (contactHeadingRef.current) {
      const spans = contactHeadingRef.current.querySelectorAll('span');
      gsap.set(spans, { y: '100%', opacity: 0 });
      gsap.to(spans, {
        y: 0,
        opacity: 1,
        stagger: 0.18,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: contactHeadingRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <div
    id='contact'
    className='bg-[#111] px-6 pt-10'>
      <div>
        <h2
            ref={contactHeadingRef}
            className="w-full text-[#d1d1c7] text-[clamp(3rem,2.25rem+3.75vw,5.625rem)] font-semibold uppercase inline-block"
        >
            <span className="inline-block">Contact </span>
            <span> </span>
            <span className="inline-block">Me</span>
            <span className="inline-block"></span>
        </h2>
      </div>
      {/* Contact Info and Form */}
      <div className="contact-form-area flex flex-col md:flex-row gap-16 pb-20 w-full items-start bg-[#111]">
        {/* Info */}
        <div className="w-full md:w-1/2 flex flex-col gap-6 py-16">
          <h3 className="text-[#d1d1c7] text-3xl font-semibold pb-5">Let’s Work Together</h3>
          <p className="text-[#a29e9a] max-w-[90%] text-lg">
            Interested in working together or have a project in mind? Drop me a message and I’ll get back to you as soon as possible!
          </p>
          <div className="flex flex-col gap-2 mt-4 text-[#a29e9a]">
            <span>Email: <a href="mailto:hello@example.com" className="underline hover:text-[#d1d1c7]">hello@example.com</a></span>
            <span>Location: Your City, Country</span>
          </div>
        </div>
        {/* Form */}
        <form className="w-full md:w-1/2 flex flex-col gap-6 bg-[#191919] p-8 rounded-xl shadow-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[#d1d1c7] text-lg font-medium">Name</label>
            <input
              id="name"
              type="text"
              className="bg-transparent border-b border-[#393632] py-2 text-[#d1d1c7] focus:outline-none"
              placeholder="Your Name"
              autoComplete="name"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[#d1d1c7] text-lg font-medium">Email</label>
            <input
              id="email"
              type="email"
              className="bg-transparent border-b border-[#393632] py-2 text-[#d1d1c7] focus:outline-none"
              placeholder="you@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-[#d1d1c7] text-lg font-medium">Message</label>
            <textarea
              id="message"
              className="bg-transparent border-b border-[#393632] py-2 text-[#d1d1c7] focus:outline-none min-h-[100px]"
              placeholder="Tell me about your project..."
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#d1d1c7] text-[#111] font-semibold py-3 rounded hover:bg-[#fff] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;