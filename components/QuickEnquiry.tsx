"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function QuickEnquiry() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Enquiry from EMX Catalog*%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Message:* ${message}`;
    window.open(`https://wa.me/919310025888?text=${text}`, "_blank");
  };

  return (
    <section className="py-8 px-4 md:px-6 max-w-7xl mx-auto relative z-10 w-full mt-4">
      <div className="glass-panel p-6 md:p-8 rounded-[24px] flex flex-col lg:flex-row items-center gap-6 border-t-4 border-t-[#0284C7] bg-white/60 shadow-sm">
        
        <div className="w-full lg:w-1/3 text-center lg:text-left">
          <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 font-[family-name:var(--font-jakarta)]">
            Quick Enquiry
          </h3>
          <p className="text-xs md:text-sm text-slate-500">Need a specific part? Send a message and we'll reply instantly with a live wholesale quote.</p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full lg:w-2/3 flex flex-col md:flex-row gap-3">
          <div className="flex flex-col gap-3 w-full md:w-1/2">
              <input 
                required type="text" placeholder="Name / Garage" 
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0284C7] transition-all"
              />
              <input 
                required type="tel" placeholder="Phone Number" 
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0284C7] transition-all"
              />
          </div>
          <div className="flex flex-col gap-3 w-full md:w-1/2">
              <textarea 
                required placeholder="Which part or SKU?" rows={2}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0284C7] transition-all resize-none flex-grow"
              ></textarea>
              <button 
                type="submit" 
                className="w-full bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-3 rounded-xl font-bold transition-all shadow-md flex items-center justify-center gap-2 interactive"
              >
                <span>Send via WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
          </div>
        </form>
        
      </div>
    </section>
  );
}