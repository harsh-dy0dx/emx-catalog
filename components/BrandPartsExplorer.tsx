"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { CATALOG_PARTS, type Part } from "@/lib/data";
import type { BrandName } from "@/lib/data";

interface Props {
  brandName: BrandName;
}

/** Pull "car" tokens out of the Suitable for string so we can filter by car. */
function extractCarTokens(suitable: string): string[] {
  // Examples of suitable values: "Alto 800 (2010-12)", "Swift Dzire 3rd Gen (2020-Now)", "Baleno Petrol"
  // We keep the whole string as one token, plus each bracketed year range as another token.
  const tokens: string[] = [];
  const main = suitable.replace(/\(.*?\)/g, "").trim();
  if (main) tokens.push(main);
  return tokens;
}

export default function BrandPartsExplorer({ brandName }: Props) {
  const [search, setSearch] = useState("");
  const [carFilter, setCarFilter] = useState("All Cars");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // All parts for this brand
  const brandParts = useMemo(
    () => CATALOG_PARTS.filter((p) => p.brand === brandName),
    [brandName],
  );

  // Categories present in this brand (sorted, used for sub-nav pills)
  const categories = useMemo(() => {
    const set = new Set<string>();
    brandParts.forEach((p) => set.add(p.category));
    return Array.from(set).sort();
  }, [brandParts]);

  // All "cars" extracted from the Suitable for field — these become the car filter dropdown
  const carOptions = useMemo(() => {
    const set = new Set<string>();
    brandParts.forEach((p) => {
      extractCarTokens(p.suitableFor).forEach((c) => set.add(c));
    });
    return ["All Cars", ...Array.from(set).sort()];
  }, [brandParts]);

  // Filtered + grouped parts
  const filtered = useMemo(() => {
    return brandParts.filter((p) => {
      const matchCat = activeCategory === "All" || p.category === activeCategory;
      const matchCar =
        carFilter === "All Cars" ||
        extractCarTokens(p.suitableFor).includes(carFilter) ||
        p.suitableFor.toLowerCase().includes(carFilter.toLowerCase());
      const q = search.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        p.partNumber.toLowerCase().includes(q) ||
        p.suitableFor.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchCar && matchSearch;
    });
  }, [brandParts, activeCategory, carFilter, search]);

  // Group filtered parts by category, preserving alphabetical order
  const grouped = useMemo(() => {
    const map = new Map<string, Part[]>();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <div className="space-y-8">
      {/* ───────── Filter bar ───────── */}
      <div className="glass-panel p-4 md:p-5 rounded-[24px] flex flex-col gap-4 border-t-4 border-t-[#0284C7] sticky top-24 z-30">
        {/* Search */}
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder={`Search ${brandName} parts by SKU, name, or car model...`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/60 border border-slate-200 rounded-xl md:rounded-full text-xs md:text-sm focus:outline-none focus:border-[#0284C7] transition-all"
          />
        </div>

        {/* Car filter dropdown */}
        <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-end">
          {/* Car dropdown */}
          <div className="relative shrink-0 md:w-64">
            <select
              value={carFilter}
              onChange={(e) => setCarFilter(e.target.value)}
              className="w-full appearance-none px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive cursor-pointer pr-10"
            >
              {carOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Category pills */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 md:flex-wrap md:gap-2 pb-1 md:pb-0 w-full snap-x">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all snap-start shrink-0 interactive ${
                activeCategory === cat
                  ? "bg-[#0284C7] text-white shadow-md"
                  : "bg-white/50 text-slate-600 hover:bg-white hover:text-[#0284C7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ───────── Sub-category sections ───────── */}
      {grouped.length > 0 ? (
        grouped.map(([category, parts]) => (
          <section key={category} className="scroll-mt-32">
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)] mb-4 md:mb-6">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {parts.map((part, i) => (
                <PartCard key={`${part.partNumber}-${i}`} part={part} />
              ))}
            </div>
          </section>
        ))
      ) : (
        <div className="glass-panel rounded-[20px] py-16 text-center">
          <p className="text-slate-500 font-medium mb-2">
            No parts match your filters.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setCarFilter("All Cars");
              setActiveCategory("All");
            }}
            className="text-[#0284C7] font-bold text-sm hover:underline interactive"
          >
            Clear all filters
          </button>
        </div>
      )}

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

/* ────────────────────────────────────────────────────────── */
/* Individual part card — reuses the same glass-panel style    */
/* as the existing InteractiveCatalog cards.                    */
/* ────────────────────────────────────────────────────────── */
function PartCard({ part }: { part: Part }) {
  const waText = `Hello EMX Motors, I would like to enquire about ${part.brand} ${part.category} - Part # ${part.partNumber} (Suitable for: ${part.suitableFor}).`;
  const waHref = `https://wa.me/919310025888?text=${encodeURIComponent(waText)}`;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-panel p-4 md:p-5 rounded-[20px] flex flex-col group border hover:border-[#0284C7] transition-colors interactive cursor-default bg-white/40 shadow-sm"
    >
      {/* SKU + category badges */}
      <div className="flex justify-between items-start mb-3 z-10">
        <span className="text-[10px] md:text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2 py-1 rounded-md">
          {part.partNumber}
        </span>
        <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">
          {part.category}
        </span>
      </div>

      {/* Suitable for (the main "name" of the part) */}
      <h4 className="text-sm md:text-base font-bold text-slate-900 leading-tight mb-2 z-10">
        {part.suitableFor}
      </h4>

      {/* Wholesale / Enquire caption (prices hidden — B2B site) */}
      <p className="text-xs md:text-sm text-slate-500 mb-3 z-10">
        <span className="font-bold text-[#0284C7] uppercase tracking-wide text-[10px] md:text-xs">
          Wholesale · Enquire
        </span>
      </p>

      {/* Enquire CTA */}
      <a
        href={waHref}
        target="_blank"
        rel="noreferrer"
        className="mt-auto z-10 inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2.5 rounded-xl font-bold text-xs md:text-sm transition-all shadow-md interactive"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Enquire on WhatsApp
      </a>
    </motion.div>
  );
}
