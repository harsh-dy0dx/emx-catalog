import { PackageSearch } from "lucide-react";

export default function TrackOrder() {
  return (
    <section id="track" className="py-8 md:py-12 px-4 md:px-6 max-w-5xl mx-auto relative z-10 w-full scroll-mt-24">
      <div className="glass-panel p-6 md:p-10 rounded-[24px] flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-l-[#0284C7] bg-white/40 shadow-sm">
        <div>
          <h2 className="text-xl md:text-3xl font-extrabold text-slate-900 mb-2 font-[family-name:var(--font-jakarta)]">
            Track Your Order
          </h2>
          <p className="text-sm text-slate-500 max-w-md">
            Already placed an order with us? Click below to instantly check your dispatch and delivery status via WhatsApp.
          </p>
        </div>
        
        <a 
          href="https://wa.me/918510025888?text=Hello,%20I%20would%20like%20to%20track%20my%20recent%20order." 
          target="_blank" 
          rel="noreferrer"
          className="w-full md:w-auto bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-3 interactive shrink-0"
        >
          <PackageSearch className="w-5 h-5" />
          <span>Track via WhatsApp</span>
        </a>
      </div>
    </section>
  );
}