import { User, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section id="contact" className="pt-12 md:pt-24 relative z-10 w-full">
      <div className="px-4 md:px-6 max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="mb-10 md:mb-16 text-center">
          <span className="inline-block text-[#0284C7] font-bold text-xs md:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-[#0284C7]/10 rounded-md">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">
            Contact Us
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Authentic Contact Details Card */}
          <div className="glass-panel p-6 md:p-12 rounded-[24px] flex flex-col justify-center border-t-4 border-t-[#0284C7]">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900 font-[family-name:var(--font-jakarta)]">
              EMX Motor Necessities LLP
            </h3>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <User className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1">Owner</p>
                  <p className="text-base md:text-lg font-bold text-slate-900">Sandeep Arora</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1">Sales & Enquiry</p>
                  <p className="text-sm md:text-base font-semibold text-slate-800">+91 93-100-25888</p>
                  <p className="text-sm md:text-base font-semibold text-slate-800">+91 85-100-25888</p>
                  <p className="text-sm md:text-base font-semibold text-slate-800">+91 76-100-25888</p>
                </div>
              </div>

              {/* Restored Instagram Link */}
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <div>
                  <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5 md:mb-1">Instagram</p>
                  <a href="https://instagram.com/emxmotors" target="_blank" rel="noreferrer" className="text-sm md:text-base font-semibold text-slate-800 hover:text-[#0284C7] transition-colors interactive">
                    @emxmotors
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="glass-panel p-2 md:p-3 rounded-[24px] h-[350px] lg:h-auto relative overflow-hidden">
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000!2d77.1!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0, borderRadius: '16px' }} 
              allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
          </div>
        </div>
      </div>
      
      {/* Official Footer */}
      <footer className="border-t border-[#0284C7]/15 bg-white/50 backdrop-blur-md py-6 mt-10 w-full px-6 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs md:text-sm text-slate-500 font-medium">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#0284C7]" /> 
            <span>Automotive Air Conditioner's Mall Since 1986</span>
          </div>
          <div>&copy; {new Date().getFullYear()} EMX Motor Necessities LLP. All rights reserved.</div>
        </div>
      </footer>
    </section>
  )
}