"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Layers,
  Monitor,
  Utensils,
  Image as ImageIcon,
  Download,
  Check,
  Code2,
  SlidersHorizontal,
  Move,
  RotateCw,
  Play,
  Pause,
  RefreshCw,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Laptop,
  CheckCircle2,
  Cpu,
  Cloud,
  FileJson,
  Send,
  UploadCloud,
  Zap,
  Copy,
  Server,
  Workflow,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import {
  builderSteps,
  pipelineSteps,
  sampleMenuJson,
  shelfPulseAssets,
} from "./data";

export default function ShelfPulseReview() {
  const [activeTab, setActiveTab] = useState("builder"); // 'builder' | 'editor' | 'pipeline' | 'architecture'
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [canvasFormat, setCanvasFormat] = useState("landscape"); // 'landscape' | 'portrait'
  const [copiedJson, setCopiedJson] = useState(false);

  // Editor mode interactive layer manipulation
  const [selectedLayer, setSelectedLayer] = useState("bottle"); // 'bottle' | 'burger' | 'fries' | 'text'
  const [layerTransforms, setLayerTransforms] = useState({
    bottle: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
    burger: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
    fries: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
    text: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
  });

  // Selected asset highlight in builder
  const [highlightedAsset, setHighlightedAsset] = useState(null);

  // Auto-play timer for steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPlaying, activeTab]);

  // Reset active step when changing tabs
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveStep(0);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(sampleMenuJson);
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  const updateTransform = (prop, val) => {
    setLayerTransforms((prev) => ({
      ...prev,
      [selectedLayer]: {
        ...prev[selectedLayer],
        [prop]: val,
      },
    }));
  };

  const resetTransforms = () => {
    setLayerTransforms({
      bottle: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
      burger: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
      fries: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
      text: { scale: 1.0, rotate: 0, opacity: 1.0, x: 0, y: 0 },
    });
  };

  const tabs = [
    { id: "builder", label: "Combo Builder", icon: Layers, badge: "Canvas Engine" },
    { id: "editor", label: "Canvas Editor", icon: SlidersHorizontal, badge: "Interactive Studio" },
    // { id: "pipeline", label: "AI Vision Pipeline", icon: Cpu, badge: "FastAPI + Gemini" },
    { id: "architecture", label: "System Architecture", icon: Workflow, badge: "GCP Cloud" },
  ];

  return (
    <section
      id="shelfpulse-review"
      className="mt-28 w-full border-t border-zinc-200 pt-16 pb-20"
      aria-label="ShelfPulse Project Review"
    >
      {/* SECTION HEADER & HERO OVERVIEW */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-50 px-3.5 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-yellow-800 shadow-sm">
            <Sparkles size={13} className="text-yellow-600 animate-pulse" />
            <span>Featured Case Study • ShelfEx Internal Tool</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
              Production Verified
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-3xl">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 leading-[0.95]">
              ShelfPulse{" "}
              <span className="font-serif italic font-normal text-yellow-600 lowercase">
                project review
              </span>
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-600 max-w-2xl font-normal">
              An enterprise automated marketing engine architected at ShelfEx.
              It ingests restaurant menu assets, extracts structured intelligence via
              Google Gemini & YOLO, and renders dynamic multi-ratio promotional combo creatives (16:9 & 9:16) in seconds.
            </p>
          </div>

          {/* KEY PROJECT METRICS BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 shrink-0">
            {[
              { label: "Turnaround", val: "3.5s", sub: "from days to instant" },
              { label: "Formats", val: "16:9 & 9:16", sub: "Dual auto-render" },
              { label: "Accuracy", val: "99.2%", sub: "Gemini OCR + Vision" },
              { label: "Pipeline", val: "FastAPI", sub: "GCP Cloud Run" },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-zinc-200/80 bg-zinc-50/70 p-3 sm:p-3.5 backdrop-blur-sm"
              >
                <p className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                  {m.label}
                </p>
                <p className="mt-1 text-base sm:text-lg font-black text-zinc-900 tracking-tight">
                  {m.val}
                </p>
                <p className="text-[9px] text-zinc-500 truncate font-medium">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTERACTIVE NAVIGATION RIBBON - FULLY RESPONSIVE */}
      <div className="mt-10 flex flex-col gap-4">
        {/* TAB BUTTONS (Horizontally scrollable on mobile) */}
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleTabChange(tab.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-2.5 text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-zinc-950 text-white shadow-md ring-2 ring-zinc-950/20"
                      : "bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200 hover:border-zinc-300"
                  }`}
                >
                  <Icon
                    size={15}
                    className={isActive ? "text-yellow-400" : "text-zinc-500"}
                  />
                  <span>{tab.label}</span>
                  <span
                    className={`hidden md:inline rounded-full px-2 py-0.5 text-[8px] font-bold tracking-widest ${
                      isActive
                        ? "bg-yellow-400 text-zinc-950"
                        : "bg-zinc-100 text-zinc-500"
                    }`}
                  >
                    {tab.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* PLAY / PAUSE & CONTROLS */}
          {(activeTab === "builder" || activeTab === "pipeline") && (
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-zinc-700 hover:bg-zinc-50"
                title={isPlaying ? "Pause auto-advance" : "Play auto-advance"}
              >
                {isPlaying ? (
                  <>
                    <Pause size={12} className="text-yellow-600" />
                    <span>Auto Loop</span>
                  </>
                ) : (
                  <>
                    <Play size={12} className="text-emerald-600" />
                    <span>Paused</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>

        {/* STEP PROGRESS CONTROLLER (For Builder & Pipeline) */}
        {(activeTab === "builder" || activeTab === "pipeline") && (
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 rounded-xl bg-zinc-100/70 p-2.5 sm:p-3 border border-zinc-200">
            {/* Step Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {(activeTab === "builder" ? builderSteps : pipelineSteps).map(
                (step, idx) => (
                  <button
                    key={step}
                    type="button"
                    onClick={() => {
                      setActiveStep(idx);
                      setIsPlaying(false);
                    }}
                    className={`flex shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider transition-all ${
                      activeStep === idx
                        ? "bg-yellow-400 text-zinc-950 shadow-sm"
                        : idx < activeStep
                        ? "bg-white text-zinc-700 border border-zinc-200"
                        : "bg-white/60 text-zinc-400 border border-transparent"
                    }`}
                  >
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                        activeStep === idx
                          ? "bg-zinc-950 text-white"
                          : "bg-zinc-200 text-zinc-700"
                      }`}
                    >
                      {idx + 1}
                    </span>
                    <span className="truncate max-w-[110px] sm:max-w-none">{step}</span>
                  </button>
                )
              )}
            </div>

            {/* Stepper Nav Arrows */}
            <div className="flex items-center justify-between sm:justify-end gap-2 shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-zinc-200">
              <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">
                Step {activeStep + 1} of 5
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep((p) => (p === 0 ? 4 : p - 1));
                    setIsPlaying(false);
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
                  aria-label="Previous step"
                >
                  <ChevronLeft size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveStep((p) => (p === 4 ? 0 : p + 1));
                    setIsPlaying(false);
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-100"
                  aria-label="Next step"
                >
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MAIN REVIEW CONTENT CONTAINER */}
      <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-3 sm:p-5 md:p-6 shadow-sm">
        {/* ========================================================= */}
        {/* TAB 1: COMBO BUILDER WORKSPACE                            */}
        {/* ========================================================= */}
        {activeTab === "builder" && (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)] gap-6 items-start">
            {/* LEFT COLUMN: Input Assets & Step Details */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-600">
                      Step {activeStep + 1} Focus
                    </p>
                    <h4 className="mt-1 text-base font-black uppercase text-zinc-900">
                      {builderSteps[activeStep]}
                    </h4>
                  </div>
                  <span className="rounded-full bg-zinc-950 px-2.5 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                    Live Demo
                  </span>
                </div>

                <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                  {activeStep === 0 &&
                    "Select between digital landscape (16:9 for in-store QSR displays) and vertical story format (9:16 for Swiggy/Zomato)."}
                  {activeStep === 1 &&
                    "Select transparent PNG product cutouts and brand backgrounds. The engine auto-cleans artifacts and resizes assets."}
                  {activeStep === 2 &&
                    "Dynamic canvas compositing engine places food, beverage, and background layers with custom perspective drop shadows."}
                  {activeStep === 3 &&
                    "Vector text engine renders promotional headlines ('Super Saver Combo'), badges, and price points with auto-contrast adjustment."}
                  {activeStep === 4 &&
                    "Single-click dual export renders high-res 5600x2800 assets, pushes them to Google Cloud Storage, and logs ready URLs."}
                </p>

                {/* Interactive Format Switcher */}
                <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-zinc-500">
                    Preview Format:
                  </span>
                  <div className="inline-flex rounded-lg border border-zinc-200 bg-zinc-100 p-0.5">
                    <button
                      type="button"
                      onClick={() => setCanvasFormat("landscape")}
                      className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-black uppercase tracking-wider transition-all ${
                        canvasFormat === "landscape"
                          ? "bg-white text-zinc-950 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      <Laptop size={12} />
                      <span>Landscape (16:9)</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCanvasFormat("portrait")}
                      className={`flex items-center gap-1.5 rounded-md px-3 py-1 text-[10px] font-black uppercase tracking-wider transition-all ${
                        canvasFormat === "portrait"
                          ? "bg-white text-zinc-950 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-900"
                      }`}
                    >
                      <Smartphone size={12} />
                      <span>Portrait (9:16)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* ASSET SELECTOR CARDS */}
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                    Combo Asset Ingredients
                  </p>
                  <span className="text-[9px] font-bold text-zinc-500 uppercase">
                    Tap to inspect
                  </span>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  {[
                    { label: "Gourmet Burger", src: shelfPulseAssets.burger, id: "burger" },
                    { label: "Crispy Fries", src: shelfPulseAssets.fries, id: "fries" },
                    { label: "Pepsi Bottle", src: shelfPulseAssets.bottleSmall, id: "bottle" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setHighlightedAsset(
                          highlightedAsset === item.id ? null : item.id
                        )
                      }
                      className={`group flex flex-col items-center rounded-lg border p-2 transition-all ${
                        highlightedAsset === item.id
                          ? "border-yellow-400 bg-yellow-50/70 ring-2 ring-yellow-400"
                          : activeStep >= 1
                          ? "border-zinc-300 bg-white hover:border-zinc-400"
                          : "border-zinc-100 bg-zinc-50 opacity-60"
                      }`}
                    >
                      <div
                        className="h-16 w-full rounded bg-zinc-950/90 flex items-center justify-center p-1 overflow-hidden"
                        style={{
                          backgroundImage: `url(${shelfPulseAssets.landscapeBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="max-h-full max-w-full object-contain drop-shadow transition-transform group-hover:scale-110"
                        />
                      </div>
                      <p className="mt-2 text-[9px] font-black uppercase tracking-wider text-zinc-800 truncate w-full text-center">
                        {item.label}
                      </p>
                    </button>
                  ))}
                </div>

                {/* Pipeline Checklist */}
                <div className="mt-4 space-y-2 border-t border-zinc-100 pt-3">
                  {[
                    { title: "Aspect Ratio", desc: canvasFormat === "landscape" ? "16:9 In-Store Digital" : "9:16 Social & Delivery", active: activeStep >= 0 },
                    { title: "Background Pattern", desc: "Pepsi Blue Wave & Dot Matrix", active: activeStep >= 1 },
                    { title: "Food & Beverage", desc: "Isolated transparent cutouts", active: activeStep >= 2 },
                    { title: "Dynamic Typography", desc: "Super Saver combo headline", active: activeStep >= 3 },
                    { title: "Render & Cloud Push", desc: "High-DPI GCS artifact", active: activeStep >= 4 },
                  ].map((row, i) => (
                    <div
                      key={row.title}
                      className={`flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs transition-colors ${
                        row.active
                          ? "bg-zinc-50 text-zinc-900 border border-zinc-200"
                          : "text-zinc-400 border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <CheckCircle2
                          size={13}
                          className={row.active ? "text-emerald-600 shrink-0" : "text-zinc-300 shrink-0"}
                        />
                        <span className="font-bold text-[10px] uppercase tracking-wider truncate">
                          {row.title}
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-500 truncate ml-2">
                        {row.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Canvas Showcase */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-950 p-3 sm:p-5 text-white shadow-xl min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-yellow-400" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300">
                    Live Canvas Assembler
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-800 px-2.5 py-1 font-mono text-[9px] text-zinc-400">
                    {canvasFormat === "landscape" ? "5600 × 2800 px" : "2800 × 5600 px"}
                  </span>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-400 border border-emerald-500/30">
                    GPU Accelerated
                  </span>
                </div>
              </div>

              {/* STAGE CONTAINER - RESPONSIVE FOR BOTH FORMATS */}
              <div className="mt-4 flex items-center justify-center min-h-[300px] sm:min-h-[360px] md:min-h-[420px] bg-zinc-900/60 rounded-xl p-2 sm:p-4 overflow-hidden border border-zinc-800/80">
                {canvasFormat === "landscape" ? (
                  /* LANDSCAPE 16:9 CANVAS */
                  <div className="relative aspect-[16/9] w-full max-w-[720px] overflow-hidden rounded-lg bg-black shadow-2xl border border-zinc-800">
                    {/* Background template */}
                    <img
                      src={shelfPulseAssets.landscapeBg}
                      alt="Landscape background"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        activeStep >= 1 ? "opacity-95" : "opacity-30"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />

                    {/* Step 1 green brand banner */}
                    <div
                      className={`absolute inset-y-0 left-0 w-[38%] bg-[#084937]/90 backdrop-blur-sm transition-transform duration-700 ${
                        activeStep >= 1 ? "translate-x-0" : "-translate-x-full"
                      }`}
                    />

                    {/* Food: Burger */}
                    <img
                      src={shelfPulseAssets.burger}
                      alt="Burger"
                      className={`absolute bottom-[12%] sm:bottom-[16%] left-[45%] sm:left-[38%] w-[25%] sm:w-[26%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                        highlightedAsset === "burger" ? "ring-2 ring-yellow-400 scale-105" : ""
                      } ${
                        activeStep >= 2
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-12 scale-75 opacity-0"
                      }`}
                    />

                    {/* Food: Fries */}
                    <img
                      src={shelfPulseAssets.fries}
                      alt="Fries"
                      className={`absolute bottom-[14%] sm:bottom-[18%] right-[8%] sm:right-[12%] w-[24%] sm:w-[27%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                        highlightedAsset === "fries" ? "ring-2 ring-yellow-400 scale-105" : ""
                      } ${
                        activeStep >= 2
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-12 scale-75 opacity-0"
                      }`}
                    />

                    {/* Product: Pepsi Bottle */}
                    <img
                      src={shelfPulseAssets.bottleSmall}
                      alt="Pepsi Bottle"
                      className={`absolute bottom-[10%] sm:bottom-[12%] right-[24%] sm:right-[29%] md:right-[31%] h-[52%] sm:h-[62%] md:h-[68%] max-w-[18%] sm:max-w-none object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)] transition-all duration-700 ${
                        highlightedAsset === "bottle" ? "ring-2 ring-yellow-400 scale-105" : ""
                      } ${
                        activeStep >= 2
                          ? "translate-y-0 scale-100 opacity-100"
                          : "translate-y-16 scale-75 opacity-0"
                      }`}
                    />

                    {/* Dynamic Text: Headline */}
                    <div
                      className={`absolute left-[5%] top-[12%] max-w-[32%] transition-all duration-700 ${
                        activeStep >= 3 ? "translate-x-0 opacity-100" : "-translate-x-6 opacity-0"
                      }`}
                    >
                      <span className="rounded bg-yellow-400 px-1.5 py-0.5 text-[7px] sm:text-[9px] font-black uppercase tracking-wider text-zinc-950">
                        Limited Time Offer
                      </span>
                      <h4 className="mt-1 text-xs sm:text-lg md:text-2xl font-black uppercase leading-[0.95] text-white tracking-tight drop-shadow-md">
                        Super Saver Combo
                      </h4>
                      <p className="mt-1 hidden sm:block text-[9px] font-medium text-emerald-200">
                        Burger + Crispy Fries + Pepsi
                      </p>
                    </div>

                    {/* Dynamic Text: Price Badge */}
                    <div
                      className={`absolute left-[5%] bottom-[12%] flex items-center gap-1.5 transition-all duration-700 ${
                        activeStep >= 3 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <div className="rounded-lg bg-yellow-400 px-2 sm:px-3 py-1 text-zinc-950 font-black text-[10px] sm:text-xs">
                        ₹199
                      </div>
                      <span className="rounded bg-black/60 px-2 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/20">
                        Save 30%
                      </span>
                    </div>

                    {/* Export Phase Overlay */}
                    {activeStep >= 4 && (
                      <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-emerald-500/90 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-zinc-950 shadow-lg backdrop-blur-sm animate-fade-in">
                        <Check size={12} strokeWidth={3} />
                        <span>Render Ready • GCS Deployed</span>
                      </div>
                    )}
                  </div>
                ) : (
                  /* PORTRAIT 9:16 CANVAS */
                  <div className="relative aspect-[9/16] h-[340px] sm:h-[400px] overflow-hidden rounded-lg bg-black shadow-2xl border border-zinc-800">
                    <img
                      src={shelfPulseAssets.portraitBg}
                      alt="Portrait background"
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                        activeStep >= 1 ? "opacity-95" : "opacity-30"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70 pointer-events-none" />

                    {/* Headline */}
                    <div
                      className={`absolute top-[8%] inset-x-4 text-center transition-all duration-700 ${
                        activeStep >= 3 ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
                      }`}
                    >
                      <span className="rounded-full bg-yellow-400 px-2 py-0.5 text-[8px] font-black uppercase tracking-wider text-zinc-950">
                        Special Promo
                      </span>
                      <h4 className="mt-1.5 text-sm sm:text-base font-black uppercase leading-tight text-white tracking-tight">
                        Super Saver Combo
                      </h4>
                    </div>

                    {/* Burger */}
                    <img
                      src={shelfPulseAssets.burger}
                      alt="Burger"
                      className={`absolute bottom-[24%] left-[8%] w-[55%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                        activeStep >= 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    />

                    {/* Bottle */}
                    <img
                      src={shelfPulseAssets.bottleSmall}
                      alt="Pepsi Bottle"
                      className={`absolute bottom-[18%] right-[8%] h-[58%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                        activeStep >= 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    />

                    {/* Fries */}
                    <img
                      src={shelfPulseAssets.fries}
                      alt="Fries"
                      className={`absolute bottom-[12%] left-[28%] w-[45%] object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)] transition-all duration-700 ${
                        activeStep >= 2 ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                    />

                    {/* Price Tag */}
                    <div
                      className={`absolute bottom-[4%] inset-x-4 flex items-center justify-center gap-2 transition-all duration-700 ${
                        activeStep >= 3 ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="rounded bg-yellow-400 px-2.5 py-1 text-zinc-950 font-black text-[10px]">
                        ₹199
                      </div>
                      <span className="rounded bg-black/70 px-2 py-1 text-[8px] font-bold text-white border border-white/20">
                        9:16 Social Story
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Final Deliverable Previews */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-zinc-800/80">
                <div className="flex items-center gap-3 rounded-lg bg-zinc-900 p-2.5 border border-zinc-800">
                  <div className="h-12 w-20 overflow-hidden rounded bg-black shrink-0">
                    <img
                      src={shelfPulseAssets.promoLandscape}
                      alt="Final Landscape Promo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-wider text-yellow-400">
                      Landscape Deliverable
                    </p>
                    <p className="text-[10px] text-zinc-400 truncate">
                      Digital Menu Boards & Kiosks
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg bg-zinc-900 p-2.5 border border-zinc-800">
                  <div className="h-12 w-12 overflow-hidden rounded bg-black shrink-0">
                    <img
                      src={shelfPulseAssets.promoPortrait}
                      alt="Final Portrait Promo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-black uppercase tracking-wider text-yellow-400">
                      Portrait Deliverable
                    </p>
                    <p className="text-[10px] text-zinc-400 truncate">
                      Mobile Apps & Story Ads
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CANVAS EDITOR INTERACTIVE PLAYGROUND               */}
        {/* ========================================================= */}
        {activeTab === "editor" && (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(280px,0.7fr)_minmax(0,1.3fr)] gap-6 items-start">
            {/* LEFT: Live Transformation Controls */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400">
                    Select Canvas Layer
                  </p>
                  <button
                    type="button"
                    onClick={resetTransforms}
                    className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-yellow-700 hover:text-yellow-800"
                  >
                    <RefreshCw size={10} />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Layer Selector Chips */}
                <div className="mt-3 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-2">
                  {[
                    { id: "bottle", label: "Pepsi Bottle", tag: "Product" },
                    { id: "burger", label: "Burger", tag: "Food" },
                    { id: "fries", label: "Fries", tag: "Side" },
                    { id: "text", label: "Headline Text", tag: "Vector" },
                  ].map((layer) => (
                    <button
                      key={layer.id}
                      type="button"
                      onClick={() => setSelectedLayer(layer.id)}
                      className={`flex flex-col text-left rounded-lg p-2.5 border transition-all ${
                        selectedLayer === layer.id
                          ? "border-yellow-400 bg-yellow-50/80 ring-2 ring-yellow-400/50"
                          : "border-zinc-200 bg-white hover:bg-zinc-50"
                      }`}
                    >
                      <span className="text-[9px] font-bold text-zinc-400 uppercase">
                        {layer.tag}
                      </span>
                      <span className="text-xs font-black text-zinc-900 truncate">
                        {layer.label}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Sliders for the selected layer */}
                <div className="mt-5 space-y-4 border-t border-zinc-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-zinc-800">
                      Transform Inspector
                    </span>
                    <span className="rounded bg-zinc-950 px-2 py-0.5 text-[9px] font-black uppercase text-yellow-400">
                      Layer: {selectedLayer}
                    </span>
                  </div>

                  {/* Scale Slider */}
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-zinc-600 mb-1">
                      <span>Scale / Zoom</span>
                      <span>{Math.round(layerTransforms[selectedLayer].scale * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.6"
                      max="1.4"
                      step="0.05"
                      value={layerTransforms[selectedLayer].scale}
                      onChange={(e) => updateTransform("scale", parseFloat(e.target.value))}
                      className="w-full accent-yellow-500 cursor-pointer"
                    />
                  </div>

                  {/* Rotation Slider */}
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-zinc-600 mb-1">
                      <span>Rotation</span>
                      <span>{layerTransforms[selectedLayer].rotate}°</span>
                    </div>
                    <input
                      type="range"
                      min="-25"
                      max="25"
                      step="1"
                      value={layerTransforms[selectedLayer].rotate}
                      onChange={(e) => updateTransform("rotate", parseInt(e.target.value))}
                      className="w-full accent-yellow-500 cursor-pointer"
                    />
                  </div>

                  {/* Opacity Slider */}
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-zinc-600 mb-1">
                      <span>Opacity</span>
                      <span>{Math.round(layerTransforms[selectedLayer].opacity * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="1.0"
                      step="0.05"
                      value={layerTransforms[selectedLayer].opacity}
                      onChange={(e) => updateTransform("opacity", parseFloat(e.target.value))}
                      className="w-full accent-yellow-500 cursor-pointer"
                    />
                  </div>

                  {/* X Offset Slider */}
                  <div>
                    <div className="flex justify-between text-[10px] font-bold text-zinc-600 mb-1">
                      <span>Horizontal Position (X)</span>
                      <span>{layerTransforms[selectedLayer].x} px</span>
                    </div>
                    <input
                      type="range"
                      min="-40"
                      max="40"
                      step="2"
                      value={layerTransforms[selectedLayer].x}
                      onChange={(e) => updateTransform("x", parseInt(e.target.value))}
                      className="w-full accent-yellow-500 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* Tool Capabilities Card */}
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-zinc-400 mb-2">
                  Canvas Architecture Features
                </p>
                <div className="grid grid-cols-2 gap-2 text-[10px]">
                  {[
                    "Fabric.js vector primitives",
                    "Sub-pixel cutout snapping",
                    "Color profile retention (sRGB)",
                    "Lossless export up to 600 DPI",
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-1.5 text-zinc-700">
                      <Check size={11} className="text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Live Visual Canvas Workspace with real-time transforms */}
            <div className="rounded-xl border border-zinc-200 bg-zinc-950 p-3 sm:p-5 text-white shadow-xl min-w-0">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal size={15} className="text-yellow-400" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300">
                    Live Transform Canvas
                  </span>
                </div>
                <span className="text-[9px] font-bold text-zinc-400 uppercase">
                  Drag sliders on left to transform layers
                </span>
              </div>

              <div className="mt-4 relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black border border-zinc-800 shadow-2xl">
                {/* Background */}
                <img
                  src={shelfPulseAssets.landscapeBg}
                  alt="Editor Background"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20 pointer-events-none" />

                {/* Text Layer */}
                <div
                  style={{
                    transform: `translate(${layerTransforms.text.x}px, ${layerTransforms.text.y}px) scale(${layerTransforms.text.scale}) rotate(${layerTransforms.text.rotate}deg)`,
                    opacity: layerTransforms.text.opacity,
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                  }}
                  onClick={() => setSelectedLayer("text")}
                  className={`absolute left-[6%] top-[14%] max-w-[34%] cursor-pointer p-1 rounded ${
                    selectedLayer === "text"
                      ? "ring-2 ring-yellow-400 bg-black/30 backdrop-blur-xs"
                      : ""
                  }`}
                >
                  <span className="rounded bg-yellow-400 px-1.5 py-0.5 text-[8px] font-black uppercase text-zinc-950">
                    Editable Text
                  </span>
                  <h4 className="mt-1 text-sm sm:text-xl md:text-2xl font-black uppercase text-white leading-tight">
                    Super Saver Combo
                  </h4>
                </div>

                {/* Burger Layer */}
                <div
                  style={{
                    transform: `translate(${layerTransforms.burger.x}px, ${layerTransforms.burger.y}px) scale(${layerTransforms.burger.scale}) rotate(${layerTransforms.burger.rotate}deg)`,
                    opacity: layerTransforms.burger.opacity,
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                  }}
                  onClick={() => setSelectedLayer("burger")}
                  className={`absolute bottom-[12%] sm:bottom-[16%] left-[45%] sm:left-[38%] w-[25%] sm:w-[26%] cursor-pointer rounded p-1 ${
                    selectedLayer === "burger" ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <img
                    src={shelfPulseAssets.burger}
                    alt="Burger"
                    className="w-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
                  />
                  {selectedLayer === "burger" && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-yellow-400 px-1.5 py-0.5 text-[7px] font-black text-zinc-950 uppercase">
                      Burger
                    </span>
                  )}
                </div>

                {/* Fries Layer */}
                <div
                  style={{
                    transform: `translate(${layerTransforms.fries.x}px, ${layerTransforms.fries.y}px) scale(${layerTransforms.fries.scale}) rotate(${layerTransforms.fries.rotate}deg)`,
                    opacity: layerTransforms.fries.opacity,
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                  }}
                  onClick={() => setSelectedLayer("fries")}
                  className={`absolute bottom-[14%] sm:bottom-[18%] right-[8%] sm:right-[12%] w-[24%] sm:w-[26%] cursor-pointer rounded p-1 ${
                    selectedLayer === "fries" ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <img
                    src={shelfPulseAssets.fries}
                    alt="Fries"
                    className="w-full object-contain drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
                  />
                  {selectedLayer === "fries" && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-yellow-400 px-1.5 py-0.5 text-[7px] font-black text-zinc-950 uppercase">
                      Fries
                    </span>
                  )}
                </div>

                {/* Pepsi Bottle Layer */}
                <div
                  style={{
                    transform: `translate(${layerTransforms.bottle.x}px, ${layerTransforms.bottle.y}px) scale(${layerTransforms.bottle.scale}) rotate(${layerTransforms.bottle.rotate}deg)`,
                    opacity: layerTransforms.bottle.opacity,
                    transition: "transform 0.15s ease-out, opacity 0.15s ease-out",
                  }}
                  onClick={() => setSelectedLayer("bottle")}
                  className={`absolute bottom-[10%] sm:bottom-[12%] right-[24%] sm:right-[29%] md:right-[31%] h-[52%] sm:h-[62%] md:h-[68%] max-w-[18%] sm:max-w-none cursor-pointer rounded p-1 ${
                    selectedLayer === "bottle" ? "ring-2 ring-yellow-400" : ""
                  }`}
                >
                  <img
                    src={shelfPulseAssets.bottleSmall}
                    alt="Pepsi Bottle"
                    className="h-full object-contain drop-shadow-[0_20px_25px_rgba(0,0,0,0.9)]"
                  />
                  {selectedLayer === "bottle" && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded bg-yellow-400 px-1.5 py-0.5 text-[7px] font-black text-zinc-950 uppercase">
                      Bottle
                    </span>
                  )}
                </div>
              </div>

              {/* Status bar */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400 pt-2 border-t border-zinc-800">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Real-time transform listener active</span>
                </div>
                <span>Click any element on canvas to select and inspect</span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: AI VISION & MENU EXTRACTION PIPELINE               */}
        {/* ========================================================= */}
        {activeTab === "pipeline" && (
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] gap-6 items-start">
            {/* LEFT: Pipeline Stage Tracker & Detection Overlay */}
            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-zinc-100">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.18em] text-yellow-600">
                      FastAPI Backend Service
                    </p>
                    <p className="font-mono text-xs font-bold text-zinc-900">
                      POST /api/v1/process_menu_folder
                    </p>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-emerald-700 border border-emerald-200">
                    {activeStep >= 4 ? "Pipeline Complete" : "Worker Processing"}
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Photo Ingest with Detection Boxes */}
                  <div className="rounded-xl bg-zinc-950 p-3 text-white">
                    <div className="flex items-center justify-between text-[10px] mb-2 px-1">
                      <span className="font-mono text-zinc-400">gs://shelfex-menu-raw/</span>
                      <span className="text-yellow-400 font-bold">YOLOv8 Regions</span>
                    </div>

                    <div className="relative aspect-[3/4] max-h-[300px] mx-auto overflow-hidden rounded-lg bg-black">
                      <img
                        src={shelfPulseAssets.promoLandscape}
                        alt="YOLO Detection Target"
                        className={`h-full w-full object-cover transition-transform duration-700 ${
                          activeStep >= 1 ? "scale-100" : "scale-105"
                        }`}
                      />

                      {/* Bounding Boxes */}
                      <div
                        className={`absolute left-[5%] top-[10%] h-[35%] w-[40%] rounded border-2 border-yellow-400 bg-yellow-400/20 transition-opacity duration-500 ${
                          activeStep >= 2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="absolute -top-3 left-1 bg-yellow-400 text-zinc-950 text-[7px] font-black px-1 rounded">
                          HEADLINE [0.99]
                        </span>
                      </div>

                      <div
                        className={`absolute left-[36%] bottom-[15%] h-[55%] w-[58%] rounded border-2 border-emerald-400 bg-emerald-400/20 transition-opacity duration-500 ${
                          activeStep >= 2 ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        <span className="absolute -top-3 left-1 bg-emerald-400 text-zinc-950 text-[7px] font-black px-1 rounded">
                          COMBO_ITEMS [0.98]
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Stage Details */}
                  <div className="flex flex-col justify-between gap-2">
                    <p className="text-[10px] font-black uppercase tracking-wider text-zinc-400">
                      Step {activeStep + 1} Execution Log:
                    </p>

                    <div className="space-y-2">
                      {[
                        { step: "GCS Upload", desc: "Batch images received in GCP Cloud Storage bucket.", icon: Cloud },
                        { step: "OSD Alignment", desc: "OpenCV auto-corrects orientation & tilt angles.", icon: Cpu },
                        { step: "YOLO Crop", desc: "Isolates food headers, price tags, and combos.", icon: Zap },
                        { step: "Gemini Vision", desc: "Multimodal LLM parses items into verified JSON schema.", icon: Sparkles },
                        { step: "Webhook Callback", desc: "Structured data pushed back to client dashboard.", icon: Send },
                      ].map((s, idx) => {
                        const Icon = s.icon;
                        const isDone = activeStep >= idx;
                        const isCurrent = activeStep === idx;
                        return (
                          <div
                            key={s.step}
                            className={`rounded-lg p-2 text-xs border transition-all ${
                              isCurrent
                                ? "border-yellow-400 bg-yellow-50 text-zinc-950"
                                : isDone
                                ? "border-zinc-200 bg-zinc-50 text-zinc-800"
                                : "border-transparent text-zinc-400"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Icon
                                size={13}
                                className={isDone ? "text-yellow-600" : "text-zinc-300"}
                              />
                              <span className="font-bold text-[10px] uppercase tracking-wider">
                                {s.step}
                              </span>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-0.5 leading-tight">
                              {s.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Structured JSON Output Preview */}
            <div className="rounded-xl border border-zinc-200 bg-[#0d0d0e] p-4 text-white shadow-xl min-w-0">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <FileJson size={16} className="text-yellow-400" />
                  <span className="text-[11px] font-black uppercase tracking-widest text-zinc-300">
                    Extracted JSON Payload
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="flex items-center gap-1 rounded bg-zinc-800 px-2 py-1 text-[9px] font-bold text-zinc-300 hover:bg-zinc-700 transition-colors"
                >
                  <Copy size={10} />
                  <span>{copiedJson ? "Copied!" : "Copy JSON"}</span>
                </button>
              </div>

              {/* JSON code block */}
              <div className="mt-3 overflow-x-auto max-h-[380px] rounded-lg bg-black/80 p-3 font-mono text-[11px] leading-relaxed text-emerald-400 border border-zinc-800/80">
                <pre>{sampleMenuJson}</pre>
              </div>

              {/* Verification Badges */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-[9px] text-zinc-400 pt-2 border-t border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-yellow-400" />
                  <span>Pydantic Schema Validated</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={12} className="text-yellow-400" />
                  <span>Zero-hallucination Pricing</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: SYSTEM ARCHITECTURE & ENGINEERING SPECS            */}
        {/* ========================================================= */}
        {activeTab === "architecture" && (
          <div className="flex flex-col gap-6">
            {/* System Flow Diagram */}
            <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-600">
                    End-to-End System Topology
                  </p>
                  <h4 className="mt-1 text-base font-black uppercase text-zinc-950">
                    ShelfPulse Technical Infrastructure
                  </h4>
                </div>
                <span className="rounded-full bg-zinc-950 px-3 py-1 text-[9px] font-black uppercase tracking-wider text-white">
                  GCP Cloud Run
                </span>
              </div>

              {/* Flowchart Diagram Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    tier: "Client Frontend",
                    tech: "Next.js 14 • React • Tailwind",
                    desc: "Interactive canvas editor with live layer transforms, format switching, and batch export triggers.",
                    icon: Laptop,
                    color: "border-sky-200 bg-sky-50/50",
                  },
                  {
                    tier: "API Gateway & Workers",
                    tech: "FastAPI • Python 3.11 • Celery",
                    desc: "Asynchronous task queue handles heavy image transformations and model dispatch with low latency.",
                    icon: Server,
                    color: "border-amber-200 bg-amber-50/50",
                  },
                  {
                    tier: "Vision & LLM Pipeline",
                    tech: "Google Gemini 1.5 • YOLOv8",
                    desc: "Multimodal AI extracts typed JSON from noisy photos, while YOLO isolates combo bounding boxes.",
                    icon: Cpu,
                    color: "border-emerald-200 bg-emerald-50/50",
                  },
                  {
                    tier: "Cloud Asset Delivery",
                    tech: "Google Cloud Storage • CDN",
                    desc: "Scalable bucket storage with signed URLs for high-res 5600x2800 campaign distribution.",
                    icon: Cloud,
                    color: "border-purple-200 bg-purple-50/50",
                  },
                ].map((tier, idx) => {
                  const Icon = tier.icon;
                  return (
                    <div
                      key={tier.tier}
                      className={`relative rounded-xl border p-4 transition-all hover:shadow-md ${tier.color}`}
                    >
                      <div className="flex items-center justify-between">
                        <Icon size={18} className="text-zinc-800" />
                        <span className="rounded bg-white/90 px-1.5 py-0.5 font-mono text-[9px] font-black text-zinc-700">
                          0{idx + 1}
                        </span>
                      </div>
                      <h5 className="mt-3 text-xs font-black uppercase tracking-wider text-zinc-900">
                        {tier.tier}
                      </h5>
                      <p className="mt-0.5 font-mono text-[10px] font-bold text-zinc-600">
                        {tier.tech}
                      </p>
                      <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                        {tier.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Engineering Highlights & Real-world Problem Solving */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Skewed Photo Correction",
                  highlight: "OpenCV Deskew Algorithm",
                  text: "Restaurant menus taken by handheld mobile cameras frequently suffer from skew and poor lighting. We implemented an adaptive contrast and contour-detection pipeline that squares pages before OCR.",
                },
                {
                  title: "Deterministic Parsing",
                  highlight: "Strict Pydantic Contracts",
                  text: "LLMs can occasionally hallucinate currency symbols or omit item modifiers. We solved this with few-shot schema validation in Gemini, reducing validation failure rates from 14% to 0.4%.",
                },
                {
                  title: "High-DPI Canvas Rendering",
                  highlight: "Zero Browser Memory Spikes",
                  text: "Rendering 5600x2800 marketing posters inside the browser crashed mobile tabs. We engineered off-screen canvas tiling and exported directly through Web Workers to keep interactions buttery smooth.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-[10px] font-black uppercase tracking-wider text-yellow-600">
                    {card.highlight}
                  </p>
                  <h5 className="mt-1 text-sm font-black uppercase text-zinc-900">
                    {card.title}
                  </h5>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-600">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
