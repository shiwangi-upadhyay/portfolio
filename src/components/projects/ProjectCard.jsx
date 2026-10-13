import React from "react";
import ShelfPulsePreview from "./ShelfPulsePreview";

function OperinPreview() {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col justify-between bg-[#101113] p-6 text-white">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.22em] text-zinc-400">
        <span>OperinLabs</span>
        <span className="rounded-full border border-white/15 px-2 py-1 text-[8px] text-zinc-300">
          Live
        </span>
      </div>

      <div className="space-y-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
            Healthcare AI
          </p>
          <h4 className="mt-3 max-w-[12rem] text-3xl font-black leading-[0.95] tracking-tight">
            Autonomous clinic workforce
          </h4>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] font-bold uppercase tracking-wider text-zinc-300">
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            Calls
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            Scribe
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            Claims
          </span>
          <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2">
            Care
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />
    </div>
  );
}

function DrilldownPreview() {
  return (
    <div className="absolute inset-0 flex h-full w-full flex-col justify-between bg-[#f7f7f4] p-6 text-zinc-950">
      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.22em] text-zinc-500">
        <span>Power BI Custom Visual</span>
        <span className="rounded-full border border-zinc-200 bg-white px-2 py-1 text-[8px] text-zinc-500">
          D3 SVG
        </span>
      </div>

      <div className="my-5 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">
        <div className="border-b border-zinc-100 px-4 py-3">
          <p className="text-[9px] font-black uppercase tracking-[0.18em] text-zinc-400">
            Top N + Others
          </p>
        </div>

        <div className="flex items-center gap-3 p-4">
          <div className="relative h-36 w-36 shrink-0">
            <div className="absolute inset-0 rounded-full border-[5px] border-dashed border-zinc-200" />
            <div className="absolute inset-5 rounded-full border-[5px] border-dashed border-zinc-100" />
            <div className="absolute inset-[17px] rounded-full bg-[conic-gradient(#18181b_0deg_154deg,#d6a21d_154deg_254deg,#71717a_254deg_360deg)]" />
            <div className="absolute inset-[42px] rounded-full bg-white" />

            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-full text-center">
              <span className="text-[8px] font-black uppercase tracking-[0.16em] text-zinc-400">
                Click center
              </span>
              <span className="mt-1 text-lg font-black tracking-tight">Back</span>
            </div>
          </div>

          <div className="min-w-0 flex-1 space-y-2 text-[9px] font-black uppercase tracking-[0.1em] text-zinc-600">
            {[
              ["Category A", "bg-zinc-950"],
              ["Category B", "bg-yellow-500"],
              ["Others", "bg-zinc-500"],
            ].map(([label, color]) => (
              <div
                key={label}
                className="flex items-center gap-2 rounded-md border border-zinc-100 bg-zinc-50 px-2.5 py-2"
              >
                <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 text-[8px] font-black uppercase tracking-[0.1em] text-zinc-600">
        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
          Drill
        </span>
        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
          Filter
        </span>
        <span className="rounded-md border border-zinc-200 bg-white px-3 py-2">
          Format
        </span>
      </div>
    </div>
  );
}

export default function ProjectCard({ project }) {
  return (
    <div
      className="project-card relative flex flex-col group outline-none"
      tabIndex={0}
    >
      {/* IMAGE CONTAINER */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-zinc-50 border border-zinc-100 transition-all duration-500 group-hover:shadow-xl">
        {project.variant === "shelfpulse" ? (
          <ShelfPulsePreview />
        ) : project.variant === "operin" ? (
          <OperinPreview />
        ) : project.variant === "drilldown" ? (
          <DrilldownPreview />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover brightness-105 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
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
        <div className="absolute inset-0 bg-zinc-950/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-20">
          <p className="text-white text-xs font-medium leading-relaxed mb-5 max-h-20 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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
              aria-label={`Open ${project.title}`}
              className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-zinc-900 hover:bg-zinc-100 hover:scale-105 transition-all duration-300"
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
