import React from "react";

export default function StepTimeline({ steps, activeStep }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-5">
      {steps.map((step, index) => (
        <div
          key={step}
          className={`min-w-0 rounded-lg border px-3 py-2 transition-all duration-500 ${
            index <= activeStep
              ? "border-yellow-400 bg-yellow-50 text-zinc-950"
              : "border-zinc-200 bg-white text-zinc-400"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-black ${
                index <= activeStep
                  ? "bg-yellow-400 text-zinc-950"
                  : "bg-zinc-100 text-zinc-400"
              }`}
            >
              {index + 1}
            </span>
            <p className="min-w-0 text-[9px] font-black uppercase tracking-[0.08em] leading-tight">
              {step}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
