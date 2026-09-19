"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section id="categories" className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 w-full scroll-mt-24">
      <div className="mb-10 md:mb-16 text-center">
        <span className="inline-block text-[#0284C7] font-bold text-xs md:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-[#0284C7]/10 rounded-md">
          Our Inventory
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">
          Shop by Category
        </h2>
      </div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
      >
        {categories.map((cat, i) => (
          <motion.div 
            key={i} 
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
            }}
            whileHover={{ y: -5 }}
            className={`glass-panel p-4 md:p-6 rounded-[24px] relative overflow-hidden group border hover:border-[#0284C7] transition-all cursor-pointer interactive bg-white/40 shadow-sm flex flex-col justify-between min-h-[170px] md:min-h-[220px] ${cat.colSpan}`}
          >
            <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8 z-0">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="w-full h-full object-contain mix-blend-multiply opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                onError={(e) => { 
                  e.currentTarget.style.display = 'none'; 
                }}
              />
            </div>

            <div className="relative z-10 mt-auto flex items-end justify-between w-full">
              <h3 className="text-sm md:text-lg font-bold text-slate-900 bg-white/75 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/60 shadow-sm">
                {cat.title}
              </h3>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white flex items-center justify-center text-slate-400 group-hover:bg-[#0284C7] group-hover:text-white transition-colors shadow-sm shrink-0 ml-2">
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}