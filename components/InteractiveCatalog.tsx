"use client";
import { useState, useMemo } from "react";
import { Search, Car } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Compressor", "Condenser", "Evaporator", "Blower", "Clutch", "Valves", "Sensors"];

// Updated inventory with specific Make, Model, and Year data
const INVENTORY = [
  { sku: "EMX-CMP-9042", name: "Dual-Piston AC Compressor", brand: "SUBROS", cat: "Compressor", make: "Maruti Suzuki", model: "Swift", year: "2018-2022", img: "compressor.png" },
  { sku: "EMX-CND-3011", name: "Micro-Channel Condenser", brand: "MAHLE BEHR", cat: "Condenser", make: "Hyundai", model: "Creta", year: "2015-2020", img: "condenser.png" },
  { sku: "EMX-EVP-5520", name: "HVAC Evaporator Core", brand: "VALEO", cat: "Evaporator", make: "Tata", model: "Nexon", year: "2017-2023", img: "evaporator.png" },
  { sku: "EMX-BLW-8810", name: "Brushless Blower Motor", brand: "DENSO", cat: "Blower", make: "Toyota", model: "Innova Crysta", year: "2016-2023", img: "blower-motor.png" },
  { sku: "EMX-CLT-1102", name: "Magnetic AC Clutch", brand: "SANDEN", cat: "Clutch", make: "Honda", model: "City", year: "2014-2019", img: "clutch.png" },
  { sku: "EMX-VLV-4490", name: "Electronic Control Valve", brand: "HANON", cat: "Valves", make: "Kia", model: "Seltos", year: "2019-2023", img: "valve.png" },
  { sku: "EMX-SNS-7721", name: "High Pressure Switch", brand: "DELPHI", cat: "Sensors", make: "Hyundai", model: "i20", year: "2014-2020", img: "pressure-switch.png" },
];

export default function InteractiveCatalog() {
  const [activeCat, setActiveCat] = useState("All");
  const [search, setSearch] = useState("");
  
  // Fitment State
  const [make, setMake] = useState("All Makes");
  const [model, setModel] = useState("All Models");
  const [year, setYear] = useState("All Years");

  // Dynamically generate dropdown options based on current selections
  const availableMakes = ["All Makes", ...Array.from(new Set(INVENTORY.map(p => p.make)))].sort();
  const availableModels = ["All Models", ...Array.from(new Set(INVENTORY.filter(p => make === "All Makes" || p.make === make).map(p => p.model)))].sort();
  const availableYears = ["All Years", ...Array.from(new Set(INVENTORY.filter(p => (make === "All Makes" || p.make === make) && (model === "All Models" || p.model === model)).map(p => p.year)))].sort();

  // The Filtering Logic
  const filteredParts = useMemo(() => {
    return INVENTORY.filter(part => {
      const matchCat = activeCat === "All" || part.cat === activeCat;
      const matchMake = make === "All Makes" || part.make === make;
      const matchModel = model === "All Models" || part.model === model;
      const matchYear = year === "All Years" || part.year === year;
      const matchSearch = part.name.toLowerCase().includes(search.toLowerCase()) || part.sku.toLowerCase().includes(search.toLowerCase()) || part.brand.toLowerCase().includes(search.toLowerCase());
      
      return matchCat && matchMake && matchModel && matchYear && matchSearch;
    });
  }, [activeCat, search, make, model, year]);

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
            type="text" placeholder="Search by SKU, part name, or brand..." 
            value={search} onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white/60 border border-slate-200 rounded-xl md:rounded-full text-xs md:text-sm focus:outline-none focus:border-[#0284C7] transition-all"
          />
        </div>

        {/* Vehicle Fitment Tool */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 w-full bg-slate-50/50 p-3 rounded-xl md:rounded-full border border-slate-100 items-center">
          <div className="hidden md:flex items-center pl-2 text-slate-400 gap-2 font-bold text-xs uppercase tracking-wider col-span-full mb-1">
             <Car className="w-4 h-4 text-[#0284C7]" /> Select Vehicle Fitment
          </div>
          
          <select value={make} onChange={(e) => { setMake(e.target.value); setModel("All Models"); setYear("All Years"); }} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive">
            {availableMakes.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          
          <select value={model} onChange={(e) => { setModel(e.target.value); setYear("All Years"); }} disabled={make === "All Makes"} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive disabled:opacity-50">
            {availableModels.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          
          <select value={year} onChange={(e) => setYear(e.target.value)} disabled={model === "All Models"} className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs md:text-sm text-slate-700 focus:outline-none focus:border-[#0284C7] interactive disabled:opacity-50">
            {availableYears.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
      </div>

      {/* RESULTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredParts.length > 0 ? filteredParts.map((part, i) => (
          <motion.div 
            key={i} whileHover={{ y: -5, scale: 1.02 }}
            className="glass-panel p-4 md:p-5 rounded-[20px] flex flex-col group border hover:border-[#0284C7] transition-colors interactive cursor-pointer bg-white/40 shadow-sm relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-4 z-10">
              <span className="text-[10px] md:text-xs font-bold text-[#0284C7] bg-[#0284C7]/10 px-2 py-1 rounded-md">{part.sku}</span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">{part.make} <br/> {part.model}</span>
            </div>
            
            <div className="w-full h-32 md:h-40 flex items-center justify-center mb-4 relative z-10">
              <img 
                src={`/categories/${part.img}`} alt={part.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                onError={(e) => { e.currentTarget.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; }}
              />
            </div>
            
            <div className="mt-auto z-10 border-t border-slate-100 pt-3">
              <h4 className="text-sm md:text-base font-bold text-slate-900 leading-tight mb-1">{part.name}</h4>
              <p className="text-[10px] md:text-xs font-bold text-[#0284C7] uppercase tracking-wider">{part.brand}</p>
            </div>
          </motion.div>
        )) : (
          <div className="col-span-full py-12 text-center text-slate-500 font-medium">No parts found matching your exact fitment criteria. Please broaden your search.</div>
        )}
      </div>
      <style jsx>{`.hide-scrollbar::-webkit-scrollbar { display: none; } .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
    </section>
  );
}