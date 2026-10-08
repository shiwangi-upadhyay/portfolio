export const projects = [
  {
    num: "01",
    title: "Drilldown Donut Chart",
    subtitle: "TypeScript • D3.js • Power BI SDK",
    image: "/images/Donut.png",
    link: "https://github.com/shiwangi-upadhyay/Powerbi-Donut-Chart",
    isPrivate: false,
    details:
      "A custom Power BI visual built from scratch featuring multi-level drilldown navigation, 360° animated transitions, Top-N grouping, and cross-filtering.",
  },
  {
    num: "02",
    title: "ShelfPulse",
    subtitle: "Combo Shots • Canvas Builder • GCP",
    image: null,
    link: "#",
    isPrivate: true,
    variant: "shelfpulse",
    details:
      "Worked across the AI menu pipeline and combo builder: menu photos become structured JSON, while brand assets, food shots, frames, and text are composed into campaign creatives.",
  },
  {
    num: "03",
    title: "Library App",
    subtitle: "MERN Stack & JWT",
    image: "/images/library.png",
    link: "https://cafe-library.vercel.app/",
    isPrivate: false,
    details:
      "Full-stack book rental platform featuring secure JWT-based role access and a clean user interface.",
  },
];

export const shelfPulseFlow = [
  "Asset picker",
  "Layered canvas",
  "Canvas editor",
  "Export shots",
];

export const sampleMenuJson = `{
  "section": "Beverages",
  "items": [
    { "name": "Cold Coffee", "price": 120 },
    { "name": "Mango Shake", "price": 150 }
  ]
}`;

export const shelfPulseAssets = {
  landscapeBg: "/images/shelfpulse/Backgrounds/LandScapeBg.jpeg",
  portraitBg: "/images/shelfpulse/Backgrounds/PortraitBg.jpeg",
  bottle: "/images/shelfpulse/BottleAssets/Pepsi.jpeg",
  bottleSmall: "/images/shelfpulse/BottleAssets/Pepsismall-cutout.png",
  burger: "/images/shelfpulse/FoodAssets/Burger-cutout.png",
  fries: "/images/shelfpulse/FoodAssets/Fries-cutout.png",
  promoLandscape: "/images/shelfpulse/PromoShot/PromoShotLandscape.jpeg",
  promoPortrait: "/images/shelfpulse/PromoShot/PromoShotPortrait.jpeg",
};

export const pipelineSteps = [
  "GCS folder received",
  "Orientation corrected",
  "YOLO sections detected",
  "Gemini extracts JSON",
  "Backend callback sent",
];

export const builderSteps = [
  "Pick format",
  "Select assets",
  "Place layers",
  "Edit text",
  "Export outputs",
];
