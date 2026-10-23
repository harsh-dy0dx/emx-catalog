"use client";
import { useState, useMemo } from "react";
import { Search, Car, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { CATALOG_PARTS, type BrandName } from "@/lib/data";
import { BRANDS } from "@/lib/brands";

const CATEGORIES = ["All", "Compressor", "Condenser", "Evaporator", "Blower", "Clutch", "Valves", "Sensors"];

export default function InteractiveCatalog() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState<BrandName | "All Brands">("All Brands");

  // Fitment State
  const [make, setMake] = useState("All Makes");
  const [model, setModel] = useState("All Models");
  const [year, setYear] = useState("All Years");

  // Build vehicle fitment dropdown options from the full catalog.
  const availableMakes = useMemo(() => {
    const set = new Set<string>();
    CATALOG_PARTS.forEach((p) => {
      // Try to extract the first word (often the car make, e.g. "Maruti Suzuki", "Hyundai", "Tata").
      // Suitable-for strings are messy ("Alto 800 (2010-12)", "Swift Dzire 3rd Gen (2020-Now)").
      // We treat the full Suitable-for string as the "make" for simplicity — this gives the user
      // a long list of car models to filter by.
      set.add(p.suitableFor);
    });
    return ["All Makes", ...Array.from(set).sort()];
  }, []);

  const availableModels = useMemo(() => {
    if (make === "All Makes") return ["All Models"];
    // We don't have a structured make/model split in the data, so the model dropdown is
    // disabled when a make is chosen (since the "make" is already the full car model string).
    return ["All Models"];
  }, [make]);

  const availableYears = useMemo(() => {
    return ["All Years"];
  }, []);

  // Filter logic across the unified catalog.
  const filteredParts = useMemo(() => {
    return CATALOG_PARTS.filter((part) => {
      const matchCat =
        activeCat === "All" ||
        part.category.toLowerCase().includes(activeCat.toLowerCase());
      const matchBrand = brand === "All Brands" || part.brand === brand;
      const matchMake =
        make === "All Makes" ||
        part.suitableFor.toLowerCase().includes(make.toLowerCase());
      const q = search.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        part.partNumber.toLowerCase().includes(q) ||
        part.suitableFor.toLowerCase().includes(q) ||
        part.category.toLowerCase().includes(q) ||
        part.brand.toLowerCase().includes(q);
      return matchCat && matchBrand && matchMake && matchSearch;
    }).slice(0, 24); // Cap to 24 so the home page doesn't render 1000 cards.
  }, [activeCat, search, brand, make]);

  return (
    <section id="catalog" className="px-4 md:px-6 max-w-7xl mx-auto relative z-10 mb-20 w-full scroll-mt-24">
      {/* FILTER UI */}
      <div className="glass-panel p-4 md:p-5 rounded-[24px] flex flex-col gap-4 mb-8 border-t-4 border-t-[#0284C7]">

        {/* Categories */}
        <div className="flex overflow-x-auto hide-scrollbar gap-2 md:flex-wrap md:gap-3 pb-1 md:pb-0 w-full snap-x">
          {CATEGORIES.map((cat) => (
            <button
              key={cat} onClick={() => setActiveCat(cat)}
              className={`whitespace-nowrap px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-all snap-start shrink-0 interactive ${
                activeCat === cat ? "bg-[#0284C7] text-white shadow-md" : "bg-white/50 text-slate-600 hover:bg-white hover:text-[#0284C7]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full border-t border-slate-100 pt-3">
          <Search className="absolute left-3 top-1/2 mt-1.5 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text" placeholder="Search by SKU, part name, brand, or car model..."
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/60 border border-slate-200 rounded-xl md:rounded-full text-xs md:text-sm focus:outline-none focus:border-[#0284C7] transition-all"
          />
        </div>

        {/* Brand + Vehicle Fitment row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 w-full bg-slate-50/50 p-3 rounded-xl md:rounded-full border border-slate-100 items-center">
          <div className="hidden md:flex items-center pl-2 text-slate-400 gap-2 font-bold text-xs uppercase tracking-wider col-span-full mb-1">
             <Car className="w-4 h-4 text-[#0284C7]" /> Filter by brand or vehicle
          </div>

          {/* Brand dropdown */}
          <div className="relative">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value as BrandName | "All Brands")}
              className="w-full appearance-none px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive cursor-pointer pr-9"
            >
              <option value="All Brands">All Brands</option>
              {BRANDS.map((b) => (
                <option key={b.slug} value={b.name}>
                  {b.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Make dropdown (now draws from full catalog suitableFor strings) */}
          <div className="relative">
            <select
              value={make}
              onChange={(e) => { setMake(e.target.value); setModel("All Models"); setYear("All Years"); }}
              className="w-full appearance-none px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive cursor-pointer pr-9"
            >
              {availableMakes.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Model dropdown (placeholder — disabled when make is selected) */}
          <div className="relative">
            <select
              value={model}
              onChange={(e) => { setModel(e.target.value); setYear("All Years"); }}
              disabled={make === "All Makes"}
              className="w-full appearance-none px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive cursor-pointer disabled:opacity-50 pr-9"
            >
              {availableModels.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Year dropdown (placeholder) */}
          <div className="relative">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              disabled={model === "All Models"}
              className="w-full appearance-none px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive cursor-pointer disabled:opacity-50 pr-9"
            >
              {availableYears.map((y) => <option key={y} value={y}>{y}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>

        {/* Tip about Shop by Brand */}
        <p className="text-[10px] sm:text-xs text-slate-400 text-right">
          Tip: visit <span className="font-bold text-slate-600">Shop by Brand</span> for the full per-brand catalog
        </p>
      </div>

      {/* RESULTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredParts.length > 0 ? filteredParts.map((part, i) => (
          <motion.div
            key={i} whileHover={{ y: -5, scale: 1.02 }}
            className="glass-panel p-4 md:p-5 rounded-[20px] flex flex-col group border hover:border-[#0284C7] transition-colors interactive cursor-pointer bg-white/40 shadow-sm relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4 z-10">
              <span className="text-[10px] md:text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2 py-1 rounded-md">{part.partNumber}</span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">{part.brand}<br/>{part.category}</span>
            </div>

            <div className="w-full flex-1 flex items-center justify-center mb-4 relative z-10 min-h-[80px]">
              <p className="text-sm md:text-base font-bold text-slate-900 leading-tight text-center">
                {part.suitableFor}
              </p>
            </div>

            <div className="mt-auto z-10 border-t border-slate-100 pt-3">
              <p className="text-[10px] md:text-xs font-bold text-[#0284C7] uppercase tracking-wider">
                Wholesale · Enquire
              </p>
            </div>
          </motion.div>
        )) : (
          <div className="col-span-full py-12 text-center text-slate-500 font-medium">
            No parts found matching your filters. Try widening your search or visit a brand page for the full list.
          </div>
        )}
      </div>
      <style jsx>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
}
