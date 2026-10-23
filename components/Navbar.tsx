"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#brands", label: "Shop by Brand" },
  { href: "/#about", label: "About Us" },
  { href: "/#categories", label: "Product Category" },
  { href: "/#track", label: "Track Order" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes / hash changes
  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-7xl z-[100]">
      <div className="glass-panel rounded-full transition-all">
        <div className="flex justify-between items-center px-4 sm:px-8 py-2.5 sm:py-3">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img src="/logo.png" alt="EMX Motors Logo" className="h-8 sm:h-11 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation Links (unchanged from original) */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-slate-500 text-sm">
            <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
            <Link href="#about" className="hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="#categories" className="hover:text-slate-900 transition-colors">Product Category</Link>
            <Link href="#track" className="hover:text-slate-900 transition-colors">Track Order</Link>
            <Link href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</Link>
            <Link href="#contact" className="hover:text-slate-900 transition-colors">Contact Us</Link>
          </nav>

          {/* Right side: CTA button + mobile hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 sm:px-7 py-2 sm:py-2.5 rounded-full font-bold transition-all shadow-md text-xs sm:text-sm"
            >
              Get a Quote
            </a>

            {/* Mobile menu toggle (only visible below lg breakpoint) */}
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden w-10 h-10 rounded-full bg-white/70 hover:bg-white border border-slate-200 flex items-center justify-center text-slate-700 interactive transition-all shadow-sm"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile slide-down menu (only visible below lg breakpoint) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 right-0 mt-2"
          >
            <div className="glass-panel rounded-[20px] p-3 flex flex-col gap-1 shadow-xl">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-[#0284C7]/10 hover:text-[#0284C7] transition-all interactive"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
