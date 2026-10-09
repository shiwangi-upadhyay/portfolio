import React from "react";
import ShelfPulsePreview from "./ShelfPulsePreview";

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card relative flex flex-col group outline-none"
      tabIndex={0}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl">
        {project.variant === "shelfpulse" ? (
          <ShelfPulsePreview />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover grayscale brightness-105 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:grayscale-0 group-hover:scale-105"
          />
        )}

        {project.isPrivate && (
          <div className="absolute top-6 left-6 z-30 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
            <span className="text-[8px] font-bold text-white uppercase tracking-widest">
              Internal Project
            </span>
          </div>
        )}

        {/* QUICK-REVEAL OVERLAY */}
        <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-20">
          <p className="text-white text-xs font-medium leading-relaxed italic mb-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            {project.details}
          </p>
          {project.variant === "shelfpulse" ? (
            <a
              href="#shelfpulse-review"
              className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-zinc-950 shadow-lg hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
            >
              <span>Explore Review</span>
              <svg
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </a>
          ) : !project.isPrivate && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-yellow-500 hover:scale-110 transition-all duration-300"
            >
              <svg
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M5 15L15 5M15 5H8M15 5V12" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* TEXT CONTENT */}
      <div className="mt-8 flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 uppercase">
            {project.title}
          </h3>
          <p className="text-[10px] font-black text-zinc-400 mt-1 uppercase tracking-widest">
            {project.subtitle}
          </p>
        </div>
        <span className="text-sm font-serif italic text-zinc-300">
          / {project.num}
        </span>
      </div>
    </div>
  );
}
