"use client";

import { motion } from "framer-motion";

export default function BentoGrid() {
  const categories = [
    { title: "AC Compressor", desc: "380+ SKUs", file: "compressor.png", span: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-2" },
    { title: "Condenser", desc: "210+ SKUs", file: "condenser.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Evaporator", desc: "150+ SKUs", file: "evaporator.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Blower Motor", desc: "170+ SKUs", file: "blower-motor.png", span: "col-span-1 sm:col-span-2 md:col-span-2 md:row-span-1" },
    { title: "Cabin Filter", desc: "260+ SKUs", file: "cabin-filter.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "AC Compressor Clutch", desc: "140+ SKUs", file: "clutch.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "AC Pressure Switch", desc: "Sensors & Switches", file: "pressure-switch.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "AC Control Unit", desc: "Climate Control", file: "control-unit.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "AC Compressor Valve", desc: "Control Valves", file: "valve.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Resistor", desc: "Blower Resistors", file: "resistor.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "HVAC Hose", desc: "Pipes & Hoses", file: "hvac-hose.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Receiver Drier", desc: "Moisture Filters", file: "receiver-drier.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "AC Compressor Oil", desc: "PAG & POE Oils", file: "compressor-oil.png", span: "col-span-1 md:col-span-1 md:row-span-1" },
    { title: "Refrigerant", desc: "Certified Gases", file: "refrigerant.png", span: "col-span-1 md:col-span-1 md:row-span-1" }
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