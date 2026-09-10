"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-[140px] md:pt-[200px] pb-[80px] md:pb-[120px] text-center relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        
        {/* Shrunk the top badge for mobile */}
        <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 md:px-5 py-1.5 md:py-2 bg-[#0284C7]/10 text-[#0284C7] rounded-full font-bold text-[10px] md:text-sm mb-5 md:mb-7 border border-[#0284C7]/20 shadow-[0_0_15px_rgba(2,132,199,0.1)]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-4 md:h-4"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          Authorised Dealer & Distributor for 23+ brands
        </div>
        
        {/* Scaled down the H1 for mobile, kept 7xl for desktop */}
        <h1 className="text-4xl md:text-7xl font-extrabold leading-[1.1] mb-4 md:mb-6 text-slate-900 font-[family-name:var(--font-jakarta)] tracking-tight">
          Car AC parts you can trust, <br />
          <span className="bg-gradient-to-br from-[#0284C7] to-[#38BDF8] bg-clip-text text-transparent">since 1986.</span>
        </h1>
        
        {/* Reduced paragraph font size on mobile */}
        <p className="text-sm md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2">
          EMX Motor Necessities LLP is one of the India's largest dealer & distributor of car AC parts that are genuine and for every major make on the road.
        </p>
        
        <a href="#catalog" className="inline-block bg-[#0284C7] hover:bg-[#0369A1] text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-lg rounded-full font-bold transition-all shadow-xl hover:shadow-sky-500/40 hover:-translate-y-1 relative overflow-hidden group interactive cursor-pointer">
          <span className="relative z-10">Browse the Catalog</span>
        </a>
      </motion.div>

      {/* Stats scaled down for mobile */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex flex-wrap justify-center gap-6 md:gap-16 mt-12 md:mt-20 pt-8 md:pt-12 border-t border-[#0284C7]/15">
        {[
          { number: "23+", label: "Brand Partnerships" },
          { number: "40+", label: "Years in Trade" },
          { number: "14+", label: "Part Categories" },
          { number: "17+", label: "Vehicle Makes" }
        ].map((stat, i) => (
          <div key={i} className="text-center w-[40%] md:w-auto">
            <h3 className="text-3xl md:text-5xl text-[#0284C7] font-extrabold mb-1 md:mb-2 font-[family-name:var(--font-jakarta)]">{stat.number}</h3>
            <p className="text-[9px] md:text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}