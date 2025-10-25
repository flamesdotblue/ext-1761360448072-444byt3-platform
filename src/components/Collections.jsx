import React from "react";
import { Gem, Star } from "lucide-react";

const TABS = ["Gold", "Diamond", "Polki", "Antique", "Bridal"];

const ITEMS = {
  Gold: [
    { id: 1, name: "Sitahar - Filigree Heritage", purity: "916 Gold", weight: "68-74 g", tag: "Bridal" },
    { id: 2, name: "Temple Work Necklace", purity: "916 Gold", weight: "55-62 g", tag: "Antique" },
  ],
  Diamond: [
    { id: 3, name: "Tennis Bracelet", purity: "18K Gold • IGI", weight: "8-10 g", tag: "Contemporary" },
    { id: 4, name: "Halo Pendant Set", purity: "18K Gold • GIA", weight: "12-15 g", tag: "Occasion" },
  ],
  Polki: [
    { id: 5, name: "Polki Rani Haar", purity: "22K/18K Mix", weight: "90-110 g", tag: "Bridal" },
  ],
  Antique: [
    { id: 6, name: "Nakshi Choker", purity: "916 Gold", weight: "48-54 g", tag: "Heirloom" },
  ],
  Bridal: [
    { id: 7, name: "Shonar Shitalpati Set", purity: "916 Gold", weight: "72-80 g", tag: "Bridal" },
    { id: 8, name: "Diamond Sita Haar", purity: "18K Gold • IGI", weight: "40-46 g", tag: "Bridal" },
  ],
};

export default function Collections() {
  const [active, setActive] = React.useState("Gold");

  return (
    <section id="collections" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#0a2540] sm:text-3xl">Explore Collections</h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">Refined designs across Gold, Diamond, Polki, Antique, and Bridal. Photography-led product pages with craftsmanship-first details.</p>
          </div>
          <div className="hidden gap-2 sm:flex">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  active === t
                    ? "border-[#0a2540] bg-[#0a2540] text-white"
                    : "border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto sm:hidden">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-sm transition ${
                active === t
                  ? "border-[#0a2540] bg-[#0a2540] text-white"
                  : "border-neutral-300 bg-white text-neutral-700"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(ITEMS[active] || []).map((item) => (
            <article key={item.id} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full bg-[conic-gradient(at_60%_20%,#faf7f2,transparent_25%,#efe7db_60%,transparent_80%)]" />
              <div className="absolute left-3 top-3 rounded bg-black/60 px-2 py-1 text-[10px] uppercase tracking-widest text-white">Virtual Try‑On (Coming Soon)</div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-neutral-900">{item.name}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#fff8e6] px-2 py-1 text-[10px] font-medium text-[#7a5a2e] ring-1 ring-[#b08d57]/30">
                    <Gem className="h-3.5 w-3.5" /> {item.tag}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-neutral-600">
                  <span>{item.purity}</span>
                  <span className="h-1 w-1 rounded-full bg-neutral-300" />
                  <span>Approx. {item.weight}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <button onClick={() => document.getElementById("book")?.scrollIntoView({ behavior: "smooth" })} className="rounded-full bg-[#0a2540] px-4 py-2 text-sm font-medium text-white hover:bg-[#0c2e55]">
                    Request Pricing / Book Viewing
                  </button>
                  <div className="flex items-center gap-1 text-xs text-neutral-500">
                    <Star className="h-3.5 w-3.5 text-[#b08d57]" /> Trusted Craftsmanship
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
