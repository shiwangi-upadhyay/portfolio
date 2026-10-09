import React from "react";
import {
  Monitor,
  Layers,
  Utensils,
  Image,
  Download,
  Check,
  Code2,
} from "lucide-react";
import StepTimeline from "./StepTimeline";
import { builderSteps, shelfPulseAssets } from "./data";

export default function ComboBuilderMockup({ activeStep }) {
  const controls = [
    ["Format", "Landscape + Portrait", Monitor],
    ["Background", "Pepsi dotted template", Layers],
    ["Food", "Burger + fries", Utensils],
    ["Product", "Pepsi bottle", Image],
    ["Output", "Gallery + deploy", Download],
  ];

  return (
    <div className="min-w-0 space-y-4">
      <StepTimeline steps={builderSteps} activeStep={activeStep} />

      <div className="grid min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(250px,0.72fr)_minmax(0,1.28fr)]">
        <div className="min-w-0 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
              Combo Shot Inputs
            </p>
            <span className="rounded-full bg-zinc-950 px-3 py-1 text-[9px] font-black uppercase tracking-[0.14em] text-white">
              Layered Canvas
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              [shelfPulseAssets.burger, "Burger"],
              [shelfPulseAssets.fries, "Fries"],
              [shelfPulseAssets.bottleSmall, "Pepsi"],
            ].map(([src, label]) => (
              <div
                key={label}
                className={`min-w-0 overflow-hidden rounded-lg border transition-all duration-700 ${
                  activeStep >= 1
                    ? "border-yellow-400 ring-2 ring-yellow-300"
                    : "border-zinc-200"
                }`}
              >
                <div
                  className="aspect-square overflow-hidden bg-zinc-950"
                  style={{
                    backgroundImage: `url(${shelfPulseAssets.landscapeBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src={src}
                    alt={`${label} ShelfPulse asset`}
                    className="h-full w-full object-contain p-2"
                  />
                </div>
                <p className="truncate p-2 text-center text-[9px] font-black uppercase tracking-[0.1em] text-zinc-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {controls.map(([label, value, Icon], index) => (
              <div
                key={label}
                className={`min-w-0 rounded-lg border p-3 transition-all duration-500 ${
                  activeStep >= Math.min(index, 4)
                    ? "border-yellow-400 bg-yellow-50"
                    : "border-zinc-200 bg-white opacity-55"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <Icon size={15} className="shrink-0 text-zinc-700" />
                    <span className="truncate text-[10px] font-black uppercase tracking-[0.12em] text-zinc-500">
                      {label}
                    </span>
                  </div>
                  <Check
                    size={14}
                    className={
                      activeStep >= Math.min(index, 4)
                        ? "text-emerald-600"
                        : "text-zinc-300"
                    }
                  />
                </div>
                <p className="mt-2 truncate text-xs font-bold text-zinc-900">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 p-4">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              <Code2 size={15} className="text-yellow-400" />
              <p className="truncate text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                Canvas Editor Preview
              </p>
            </div>
            <p className="font-mono text-[10px] text-zinc-500">
              landscape 5600x2800 + portrait 2800x5600
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-4">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full min-h-[200px] sm:min-h-0 overflow-hidden rounded-lg bg-zinc-950">
              <img
                src={shelfPulseAssets.landscapeBg}
                alt="ShelfPulse landscape background template"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.42)_0_36%,rgba(0,0,0,.08)_36%)]" />
              <div
                className={`absolute inset-y-0 left-0 w-[38%] bg-[#0b5a46] transition-transform duration-700 ${
                  activeStep >= 1 ? "translate-x-0" : "-translate-x-full"
                }`}
              />
              <img
                src={shelfPulseAssets.burger}
                alt="Burger layer"
                className={`absolute bottom-[12%] sm:bottom-[20%] left-[45%] sm:left-[40%] w-[24%] sm:w-[24%] object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-16 scale-75 opacity-0"
                }`}
              />
              <img
                src={shelfPulseAssets.fries}
                alt="Fries layer"
                className={`absolute bottom-[14%] sm:bottom-[22%] right-[8%] sm:right-[13%] w-[23%] sm:w-[25%] object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 scale-100 opacity-100"
                    : "translate-y-16 scale-75 opacity-0"
                }`}
              />
              <img
                src={shelfPulseAssets.bottleSmall}
                alt="Pepsi bottle layer"
                className={`absolute bottom-[10%] sm:bottom-[12%] right-[24%] sm:right-[29%] md:right-[31%] h-[52%] sm:h-[62%] md:h-[68%] max-w-[18%] sm:max-w-none object-contain drop-shadow-2xl transition-all duration-700 ${
                  activeStep >= 2
                    ? "translate-y-0 rotate-0 opacity-100"
                    : "translate-y-16 rotate-3 opacity-0"
                }`}
              />
              <div
                className={`absolute left-[5%] sm:left-[7%] top-[8%] sm:top-[12%] max-w-[34%] sm:max-w-[32%] text-xs sm:text-2xl md:text-4xl lg:text-5xl font-black uppercase leading-[0.95] text-white tracking-tight transition-all duration-700 ${
                  activeStep >= 3 ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
                }`}
              >
                Super Saver Combo
              </div>
              <div
                className={`absolute left-[5%] sm:left-[7%] top-[54%] sm:top-[58%] flex max-w-[34%] sm:max-w-[32%] flex-wrap gap-1 sm:gap-2 transition-all duration-700 ${
                  activeStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
                }`}
              >
                <span className="rounded bg-yellow-400 px-1.5 py-0.5 sm:px-3 sm:py-2 text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] text-zinc-950">
                  Text Layer
                </span>
                <span className="rounded border border-white/25 px-1.5 py-0.5 sm:px-3 sm:py-2 text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur">
                  Editable
                </span>
              </div>

              <div
                className={`absolute bottom-[8%] sm:bottom-[18%] left-[42%] sm:left-[38%] h-[56%] sm:h-[47%] w-[52%] sm:w-[50%] rounded border border-yellow-300/80 transition-opacity duration-700 ${
                  activeStep >= 2 && activeStep < 4 ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`absolute bottom-2 left-2 sm:bottom-5 sm:left-5 flex max-w-[48%] sm:max-w-[56%] flex-wrap gap-1 sm:gap-2 transition-all duration-700 ${
                  activeStep >= 4 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {["Landscape", "Portrait", "Gallery"].map((format) => (
                  <span
                    key={format}
                    className="rounded-full bg-white px-2 py-0.5 sm:px-3 sm:py-2 text-[7px] sm:text-[9px] font-black uppercase tracking-[0.1em] text-zinc-950 shadow-sm"
                  >
                    {format}
                  </span>
                ))}
              </div>

              <div
                className={`absolute right-2 top-2 sm:right-4 sm:top-4 max-w-[38%] rounded-lg border border-white/20 bg-black/40 px-2 py-0.5 sm:px-3 sm:py-2 text-[7px] sm:text-[9px] font-bold uppercase tracking-[0.1em] text-white backdrop-blur transition-all duration-700 ${
                  activeStep >= 4 ? "opacity-100" : "opacity-45"
                }`}
              >
                save + deploy
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_minmax(150px,0.34fr)]">
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Landscape output
                </p>
                <div className="mt-3 overflow-hidden rounded-lg bg-black">
                  <img
                    src={shelfPulseAssets.promoLandscape}
                    alt="Final ShelfPulse landscape combo shot"
                    className={`w-full object-contain transition-all duration-700 ${
                      activeStep >= 4 ? "opacity-100" : "opacity-45"
                    }`}
                  />
                </div>
              </div>
              <div className="min-w-0 rounded-lg border border-white/10 bg-white/[0.06] p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.14em] text-zinc-400">
                  Portrait output
                </p>
                <div className="mt-3 max-h-[300px] overflow-hidden rounded-lg bg-black">
                  <img
                    src={shelfPulseAssets.promoPortrait}
                    alt="Final ShelfPulse portrait combo shot"
                    className={`mx-auto max-h-[300px] object-contain transition-all duration-700 ${
                      activeStep >= 4 ? "opacity-100" : "opacity-45"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
