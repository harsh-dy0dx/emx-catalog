"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BRANDS } from "@/lib/brands";

export default function ShopByBrand() {
  return (
    <section
      id="brands"
      className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-10 w-full scroll-mt-24"
    >
      <div className="mb-10 sm:mb-16 text-center">
        <span className="inline-block text-[#0284C7] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-[#0284C7]/10 rounded-md">
          Brand Catalog
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">
          Shop by brand
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
          Browse our full inventory part-by-part, brand-by-brand. Pick a logo
          below to dive into that brand&apos;s complete catalog.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {BRANDS.map((brand, i) => (
          <motion.div
            key={brand.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/brands/${brand.slug}`}
              className="block h-full interactive"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel rounded-[20px] p-6 sm:p-7 h-full flex flex-col items-center text-center group hover:border-[#0284C7] transition-colors duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Logo */}
                <div className="w-full h-28 sm:h-32 flex items-center justify-center mb-5 relative z-10">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = document.createElement("span");
                      fallback.className =
                        "text-2xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]";
                      fallback.innerText = brand.name;
                      target.parentElement?.appendChild(fallback);
                    }}
                  />
                </div>

                {/* Brand name */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-[family-name:var(--font-jakarta)] mb-1 relative z-10">
                  {brand.name}
                </h3>

                {/* Origin */}
                <p className="text-[10px] sm:text-xs font-bold text-[#0284C7] uppercase tracking-widest mb-3 relative z-10">
                  {brand.origin}
                </p>

                {/* Browse catalog CTA (replaces part counts) */}
                <div className="mt-auto pt-3 border-t border-slate-100 w-full relative z-10 flex items-center justify-center gap-1.5 text-[#0284C7] font-bold text-xs sm:text-sm group-hover:gap-2.5 transition-all">
                  <span>Browse catalog</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

