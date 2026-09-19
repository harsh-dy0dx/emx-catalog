"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  const categories = [
    { title: "Compressors", img: "/categories/compressor.png", colSpan: "md:col-span-2" },
    { title: "Condensers", img: "/categories/condensor.png", colSpan: "md:col-span-1" },
    { title: "Evaporators", img: "/categories/evaporator.png", colSpan: "md:col-span-1" },
    { title: "Blower Motors", img: "/categories/blowermotor.png", colSpan: "md:col-span-1" },
    { title: "Compressor Clutches", img: "/categories/compressorclutch.png", colSpan: "md:col-span-1" },
    { title: "Control Valves", img: "/categories/control%20valve.png", colSpan: "md:col-span-2" },
    { title: "Expansion Valves", img: "/categories/expansionvalve.png", colSpan: "md:col-span-1" },
    { title: "Condenser Fans", img: "/categories/condenserfan.PNG", colSpan: "md:col-span-1" },
    { title: "Heating Coils", img: "/categories/heatingcoil.png", colSpan: "md:col-span-1" },
    { title: "HVAC Hoses", img: "/categories/hvachose.png", colSpan: "md:col-span-1" },
    { title: "Radiators", img: "/categories/radiator.png", colSpan: "md:col-span-1" },
    { title: "Refrigerant Gases", img: "/categories/refrigerant.png", colSpan: "md:col-span-1" },
    { title: "Compressor Oil", img: "/categories/compressoroil.png", colSpan: "md:col-span-1" },
    { title: "Resistors", img: "/categories/resistor.png", colSpan: "md:col-span-1" },
    { title: "Couplers", img: "/categories/coupler.png", colSpan: "md:col-span-2" },
  ];
  return (
    <section id="categories" className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full">
      <div className="mb-10 sm:mb-16 text-center">
        <span className="inline-block text-[#0284C7] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-[#0284C7]/10 rounded-md">
          Catalog
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">
          Shop by part category
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[160px] gap-4 sm:gap-5">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, y: -4 }}
            whileTap={{ scale: 0.98 }}
            className={`glass-panel rounded-[20px] p-5 sm:p-6 relative overflow-hidden flex flex-col justify-end group transition-colors duration-300 hover:border-[#0284C7] interactive cursor-pointer ${cat.span}`}
          >
            {/* Image container with quiet fallback */}
            <div className="absolute right-2 bottom-2 w-28 h-28 sm:w-36 sm:h-36 opacity-75 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex items-end justify-end">
              <img 
                src={`/categories/${cat.file}`} 
                alt=""
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="z-10 relative">
              <h3 className="text-lg sm:text-xl font-bold mb-1 font-[family-name:var(--font-jakarta)] text-slate-900 leading-tight">
                {cat.title}
              </h3>
              <p className="text-[#0284C7] font-bold text-xs tracking-wide uppercase">
                {cat.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}