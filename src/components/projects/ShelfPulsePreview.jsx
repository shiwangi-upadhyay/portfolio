import React from "react";
import { ArrowUpRight } from "lucide-react";
import { shelfPulseAssets, shelfPulseFlow } from "./data";

export default function ShelfPulsePreview() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#f6f3ea] text-zinc-950">
      <div className="absolute inset-x-0 top-0 h-28 bg-zinc-950" />
      <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.38),transparent_42%)]" />

      <div className="relative z-10 flex h-full flex-col justify-between p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.28em] text-yellow-400">
              ShelfPulse
            </p>
            <h4 className="mt-2 max-w-[12ch] text-3xl font-black uppercase leading-[0.9] text-white">
              Combo Shots
            </h4>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-xl">
          <div className="relative aspect-[16/8] overflow-hidden bg-zinc-950">
            <img
              src={shelfPulseAssets.promoLandscape}
              alt="ShelfPulse combo shot preview"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-px bg-zinc-200">
            <div className="bg-white p-3">
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-400">
                Builder
              </p>
              <p className="mt-1 text-xs font-black uppercase leading-tight text-zinc-950">
                Assets to creative
              </p>
            </div>
            <div className="bg-yellow-400 p-3">
              <p className="text-[9px] font-black uppercase tracking-[0.14em] text-zinc-700">
                Editor
              </p>
              <p className="mt-1 text-xs font-black uppercase leading-tight text-zinc-950">
                Layers + export
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {shelfPulseFlow.map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/85 px-3 py-2"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-[9px] font-black text-yellow-400">
                {index + 1}
              </span>
              <span className="text-[9px] font-black uppercase tracking-[0.1em] text-zinc-700">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
