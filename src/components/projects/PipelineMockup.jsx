import React from "react";
import {
  Cloud,
  Cpu,
  Wand2,
  FileJson,
  Send,
  UploadCloud,
  Check,
} from "lucide-react";
import StepTimeline from "./StepTimeline";
import { pipelineSteps, sampleMenuJson, shelfPulseAssets } from "./data";

export default function PipelineMockup({ activeStep }) {
  const serviceRows = [
    ["GCS", "Folder download", Cloud],
    ["OSD", "Orientation fix", Cpu],
    ["YOLO", "Section crops", Wand2],
    ["Gemini", "JSON refine", FileJson],
    ["API", "Status callback", Send],
  ];

  return (
    <div className="min-w-0 space-y-4">
      <StepTimeline steps={pipelineSteps} activeStep={activeStep} />

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
        <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                FastAPI background job
              </p>
              <p className="mt-1 break-all font-mono text-[11px] font-bold text-zinc-900">
                POST /process_menu_folder
              </p>
            </div>
            <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-emerald-700">
              {activeStep >= 4 ? "callback sent" : "processing"}
            </span>
          </div>

          <div className="mt-4 grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-[minmax(230px,0.72fr)_minmax(0,1fr)]">
            <div className="min-w-0 rounded-xl bg-zinc-950 p-3">
              <div className="mb-3 flex min-w-0 items-center justify-between gap-2 px-1">
                <div className="flex min-w-0 items-center gap-2">
                  <UploadCloud size={15} className="shrink-0 text-yellow-400" />
                  <p className="truncate text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                    Real generated output
                  </p>
                </div>
                <p className="truncate font-mono text-[10px] text-zinc-500">
                  gs://.../menu/
                </p>
              </div>

              <div className="relative mx-auto aspect-[739/1066] max-h-[480px] max-w-[340px] overflow-hidden rounded-lg bg-black">
                <img
                  src={shelfPulseAssets.promoLandscape}
                  alt="ShelfPulse generated landscape promo output"
                  className={`h-full w-full object-cover transition-all duration-700 ${
                    activeStep >= 1 ? "rotate-0 scale-100" : "-rotate-1 scale-[1.03]"
                  }`}
                />
                {[
                  "left-[5%] top-[8%] h-[40%] w-[36%] border-yellow-400 bg-yellow-300/10",
                  "left-[42%] top-[23%] h-[28%] w-[25%] border-sky-400 bg-sky-300/10",
                  "right-[10%] top-[20%] h-[35%] w-[23%] border-emerald-400 bg-emerald-300/10",
                  "bottom-[7%] left-[5%] h-[13%] w-[18%] border-rose-400 bg-rose-300/10",
                ].map((box) => (
                  <div
                    key={box}
                    className={`absolute rounded border-2 transition-all duration-700 ${box} ${
                      activeStep >= 2 ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div
                  className={`absolute bottom-3 left-3 right-3 rounded bg-black/80 px-3 py-2 text-[9px] font-black uppercase tracking-[0.12em] text-white transition-all duration-700 ${
                    activeStep >= 2 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  Detection overlays isolate text, food and product regions
                </div>
              </div>
            </div>

            <div className="min-w-0 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["crop_01", "Promo text", "object-left"],
                  ["crop_02", "Food + bottle", "object-right"],
                ].map(([name, label, objectPosition], index) => (
                  <div
                    key={name}
                    className={`min-w-0 overflow-hidden rounded-lg border bg-white transition-all duration-700 ${
                      activeStep >= 2 + index
                        ? "translate-y-0 border-zinc-900 opacity-100"
                        : "translate-y-4 border-zinc-200 opacity-40"
                    }`}
                  >
                    <div className="h-24 overflow-hidden bg-black">
                      <img
                        src={shelfPulseAssets.promoLandscape}
                        alt={`${label} crop`}
                        className={`h-full w-full object-cover ${objectPosition}`}
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-mono text-[10px] font-bold text-zinc-400">
                        {name}
                      </p>
                      <p className="mt-1 text-xs font-bold text-zinc-900">
                        {label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                  Pipeline modules
                </p>
                <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {serviceRows.map(([file, label, Icon], index) => (
                    <div
                      key={file}
                      className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                        activeStep >= index
                          ? "border-zinc-900 bg-zinc-950 text-white"
                          : "border-zinc-200 bg-white text-zinc-500"
                      }`}
                    >
                      <Icon
                        size={15}
                        className={activeStep >= index ? "text-yellow-400" : "text-zinc-400"}
                      />
                      <p className="mt-2 font-mono text-[10px] font-bold">{file}</p>
                      <p className="mt-1 text-[11px] leading-4 opacity-75">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-[#101010] p-4 text-white">
          <div className="flex items-center gap-2">
            <FileJson size={16} className="text-yellow-400" />
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
              Final JSON Uploaded to GCS
            </p>
          </div>
          <pre
            className={`mt-4 whitespace-pre-wrap break-words overflow-hidden rounded-lg bg-black p-4 text-[11px] leading-6 text-emerald-300 transition-all duration-700 ${
              activeStep >= 3 ? "max-h-72 opacity-100" : "max-h-20 opacity-45"
            }`}
          >
            {sampleMenuJson}
          </pre>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["GCS", "processed_results/"],
              ["Model", "Gemini refinement"],
              ["Status", "completed"],
            ].map(([label, value], index) => (
              <div
                key={label}
                className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                  activeStep >= index + 2
                    ? "border-yellow-400/50 bg-white/[0.1]"
                    : "border-white/10 bg-white/[0.04] opacity-45"
                }`}
              >
                <Check size={14} className="text-yellow-400" />
                <p className="mt-2 text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  {label}
                </p>
                <p className="mt-1 text-xs font-bold text-zinc-200">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
