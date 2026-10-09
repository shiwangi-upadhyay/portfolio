"use client";
import React, { useState, useEffect } from "react";
import { Layers } from "lucide-react";
import ComboBuilderMockup from "./ComboBuilderMockup";
import CanvasEditorMockup from "./CanvasEditorMockup";
// import PipelineMockup from "./PipelineMockup";

export default function ShelfPulseCaseStudy() {
  const [activeStep, setActiveStep] = useState(0);
  const [activePreview, setActivePreview] = useState("builder");

  useEffect(() => {
    setActiveStep(0);
    const timer = setInterval(() => {
      setActiveStep((step) => (step + 1) % 5);
    }, 2200);

    return () => clearInterval(timer);
  }, [activePreview]);

  return (
    <div
      id="shelfpulse-review"
      className="mt-24 min-w-0 overflow-hidden border-t border-zinc-200 pt-12"
      aria-label="ShelfPulse Project Review"
    >
      <div className="grid min-w-0 grid-cols-1 gap-10 items-start xl:grid-cols-[minmax(260px,0.42fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-600">
            ShelfPulse Project Review
          </p>
          <h3 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-zinc-950 uppercase leading-none">
            How the Combo Builder Works
          </h3>
          <p className="mt-6 max-w-[52ch] text-sm md:text-base leading-7 text-zinc-600">
            Watch the canvas assemble a combo shot from real ShelfPulse assets:
            format, background, food cutouts, Pepsi bottle, editable text, then
            landscape and portrait campaign outputs.
          </p>

          {/* AI pipeline preview intentionally disabled / commented out for portfolio focus */}
          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            {[
              ["builder", "Combo Builder"],
              ["editor", "Canvas Editor"],
              // ["pipeline", "AI Pipeline"],
            ].map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => setActivePreview(id)}
                className={`rounded-full border px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors ${
                  activePreview === id
                    ? "border-zinc-950 bg-zinc-950 text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-400"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-3 shadow-sm md:p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white px-4 py-3">
            <div className="flex min-w-0 items-center gap-2">
              <Layers size={16} className="shrink-0 text-yellow-600" />
              <p className="truncate text-[10px] font-black uppercase tracking-[0.14em] text-zinc-500">
                Assets to final creative
              </p>
            </div>
            <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-700">
              Step {activeStep + 1} / 5
            </span>
          </div>

          {activePreview === "builder" ? (
            <ComboBuilderMockup activeStep={activeStep} />
          ) : (
            <CanvasEditorMockup activeStep={activeStep} />
          )}

          {/* AI pipeline preview commented out:
          activePreview === "pipeline" && <PipelineMockup activeStep={activeStep} />
          */}
        </div>
      </div>
    </div>
  );
}
