import React from "react";
import {
  Move,
  Layers,
  RotateCw,
  SlidersHorizontal,
  Save,
  Code2,
} from "lucide-react";
import StepTimeline from "./StepTimeline";
import { shelfPulseAssets } from "./data";

export default function CanvasEditorMockup({ activeStep }) {
  const editorSteps = [
    "Open generated combo",
    "Select layer",
    "Move and resize",
    "Rotate / flip / opacity",
    "Save updated creative",
  ];

  const toolCards = [
    [Move, "Move", "Drag asset position"],
    [Layers, "Layer order", "Bring forward/back"],
    [RotateCw, "Rotate", "Angle control"],
    [SlidersHorizontal, "Opacity", "Blend adjustment"],
    [Save, "Save", "Update creative"],
  ];

  return (
    <div className="min-w-0 space-y-4">
      <StepTimeline steps={editorSteps} activeStep={activeStep} />

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(240px,0.62fr)_minmax(0,1.38fr)]">
        <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
              Editor Controls
            </p>
            <span className="rounded-full bg-zinc-950 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white">
              Canvas mode
            </span>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1">
            {toolCards.map(([Icon, label, value], index) => (
              <div
                key={label}
                className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                  activeStep >= index
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-zinc-200 bg-white opacity-60"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={15} className="shrink-0 text-zinc-800" />
                  <p className="truncate text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                    {label}
                  </p>
                </div>
                <p className="mt-2 text-xs font-bold text-zinc-900">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
              Selected Layer
            </p>
            <div className="mt-3 space-y-3">
              {[
                ["Layer", "Pepsi bottle"],
                ["Position", "x 54% / y 22%"],
                ["Scale", "118%"],
                ["Opacity", "92%"],
              ].map(([label, value], index) => (
                <div key={label}>
                  <div className="mb-1 flex justify-between gap-3 text-[9px] font-black uppercase tracking-[0.1em] text-zinc-400">
                    <span>{label}</span>
                    <span className="text-zinc-700">{value}</span>
                  </div>
                  {index > 0 && (
                    <div className="h-1.5 rounded-full bg-zinc-200">
                      <div
                        className={`h-full rounded-full bg-zinc-950 ${
                          index === 1 ? "w-[54%]" : index === 2 ? "w-[78%]" : "w-[92%]"
                        }`}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <Code2 size={15} className="text-yellow-400" />
              <p className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                Canvas Editor Workspace
              </p>
            </div>
            <p className="font-mono text-[10px] text-zinc-500">
              edit mode / layer transform
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(190px,0.36fr)]">
            <div className="min-w-0 space-y-3">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-[200px] sm:min-h-0 overflow-hidden rounded-lg bg-zinc-950">
                <img
                  src={shelfPulseAssets.landscapeBg}
                  alt="ShelfPulse editor background"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.46)_0_36%,rgba(0,0,0,.08)_36%)]" />

                <div className="absolute left-[5%] sm:left-[7%] top-[8%] sm:top-[12%] max-w-[34%] sm:max-w-[32%] text-xs sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] text-white tracking-tight">
                  Super Saver Combo
                </div>
                <img
                  src={shelfPulseAssets.burger}
                  alt="Burger editor layer"
                  className={`absolute bottom-[12%] sm:bottom-[20%] left-[45%] sm:left-[40%] w-[24%] sm:w-[24%] object-contain drop-shadow-2xl transition-all duration-700 ${
                    activeStep >= 2
                      ? "translate-x-1 sm:translate-x-2 scale-105 sm:scale-110 opacity-100"
                      : "translate-x-0 scale-100 opacity-100"
                  }`}
                />
                <img
                  src={shelfPulseAssets.fries}
                  alt="Fries editor layer"
                  className={`absolute bottom-[14%] sm:bottom-[22%] right-[8%] sm:right-[13%] w-[23%] sm:w-[25%] object-contain drop-shadow-2xl transition-all duration-700 ${
                    activeStep >= 3 ? "scale-x-[-1] opacity-90" : "scale-x-100 opacity-100"
                  }`}
                />
                <img
                  src={shelfPulseAssets.bottleSmall}
                  alt="Pepsi bottle editor layer"
                  className={`absolute bottom-[10%] sm:bottom-[12%] right-[24%] sm:right-[29%] md:right-[31%] h-[52%] sm:h-[62%] md:h-[68%] max-w-[18%] sm:max-w-none object-contain drop-shadow-2xl transition-all duration-700 ${
                    activeStep >= 3 ? "-rotate-6 opacity-[0.92]" : "rotate-0 opacity-100"
                  }`}
                />

                <div
                  className={`absolute bottom-[8%] sm:bottom-[10%] right-[22%] sm:right-[27%] md:right-[29%] h-[56%] sm:h-[66%] md:h-[72%] w-[22%] sm:w-[18%] rounded border border-yellow-300 transition-opacity duration-700 ${
                    activeStep >= 1 && activeStep < 4 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <span className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full border border-zinc-950 bg-yellow-300" />
                  <span className="absolute -right-1.5 -top-1.5 h-3 w-3 rounded-full border border-zinc-950 bg-yellow-300" />
                  <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 rounded-full border border-zinc-950 bg-yellow-300" />
                  <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 rounded-full border border-zinc-950 bg-yellow-300" />
                  <span className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2 rounded bg-yellow-300 px-1.5 py-0.5 sm:px-2 sm:py-1 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.1em] text-zinc-950 whitespace-nowrap">
                    product layer
                  </span>
                </div>

                <div
                  className={`absolute right-2 bottom-2 sm:right-4 sm:bottom-4 rounded-full bg-emerald-400 px-2.5 py-1 sm:px-4 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.12em] text-zinc-950 transition-all duration-700 ${
                    activeStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  Saved
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 rounded-lg border border-white/10 bg-white/[0.06] p-2 sm:grid-cols-6">
                {["Move", "Resize", "Rotate", "Flip", "Opacity", "Save"].map((tool, index) => (
                  <div
                    key={tool}
                    className={`rounded px-2 py-2 text-center text-[8px] font-black uppercase tracking-[0.08em] transition-colors duration-500 ${
                      activeStep >= Math.min(index, 4)
                        ? "bg-yellow-300 text-zinc-950"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0 space-y-3">
              <div className="rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Layer Stack
                </p>
                <div className="mt-3 space-y-2">
                  {[
                    ["Text", "top"],
                    ["Bottle", "selected"],
                    ["Burger", "food"],
                    ["Fries", "food"],
                    ["Background", "locked"],
                  ].map(([name, state]) => (
                    <div
                      key={name}
                      className={`rounded-lg border px-3 py-2 transition-all duration-500 ${
                        state === "selected"
                          ? "border-yellow-300 bg-yellow-300 text-zinc-950"
                          : "border-white/10 bg-white/[0.06] text-white"
                      }`}
                    >
                      <p className="text-[10px] font-black uppercase tracking-[0.1em]">
                        {name}
                      </p>
                      <p className="mt-1 text-[10px] opacity-70">{state}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`rounded-lg border border-white/10 bg-white/[0.06] p-3 text-white transition-opacity duration-700 ${
                  activeStep >= 3 ? "opacity-100" : "opacity-55"
                }`}
              >
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Transform
                </p>
                <div className="mt-3 space-y-3">
                  {[
                    ["Rotate", "-6 deg", "w-[42%]"],
                    ["Opacity", "92%", "w-[92%]"],
                    ["Scale", "118%", "w-[78%]"],
                  ].map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-1 flex justify-between text-[9px] font-bold uppercase tracking-[0.1em] text-white/55">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/15">
                        <div className={`h-full ${width} rounded-full bg-yellow-300`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
