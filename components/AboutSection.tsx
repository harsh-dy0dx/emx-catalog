"use client";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative z-10 w-full scroll-mt-24">
      <div className="glass-panel p-6 md:p-12 rounded-[24px] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center border-t-4 border-t-[#0284C7]">
        
        {/* Left Side: Image / Graphic (Updated to fit completely) */}
        <div className="w-full h-[300px] md:h-[450px] bg-white/50 rounded-[16px] relative overflow-hidden border border-[#0284C7]/10">
           <img 
             src="/car-diagram.png" 
             alt="Car AC System Diagram" 
             className="w-full h-full object-contain mix-blend-multiply" 
             onError={(e) => {
               e.currentTarget.style.display = 'none';
             }} 
           />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 font-[family-name:var(--font-jakarta)] uppercase tracking-tight">
            About EMX Motor Necessities LLP
          </h2>
          <div className="space-y-4 text-sm md:text-[15px] text-slate-600 leading-relaxed font-medium">
            <p>
              We introduce ourselves as one of the leading distribution house established in year 1986. We are one of the largest wholesalers and retailers of car parts in INDIA. We stock most genuine and aftermarket popular brands available in india.
            </p>
            <p>
              We deal in all parts for major Japanese, European and American car brands namely Maruti Suzuki, Hyundai, Nissan, Chevrolet, Skoda, Ford, Volkswagen, Toyota, Honda, Isuzu, Mercedes, Bmw, Audi, Land Rover, Jaguar, Jeep, Bentley, etc.
            </p>
            <p>
              For any query regarding new generation car spare parts, please mail to <a href="mailto:info@emx.co.in" className="text-[#0284C7] font-bold interactive hover:underline">info@emx.co.in</a>. We offer wholesale service to all PAN India retailers, wholesalers, multi brand workshops, car dealers, fleet owners, etc.
            </p>
            <p>
              We also offer courier service to car owners. Our export department is also well versified with 40+ years experience and is well known to all world cross references. Please email your bulk inquires at <a href="mailto:info@emx.co.in" className="text-[#0284C7] font-bold interactive hover:underline">info@emx.co.in</a>. We are Authorized distributors of many brands.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}