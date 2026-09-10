"use client";

export default function Marquee() {
  const brands = [
    "srf", "pasio", "estra", "mpcl", "banco", "hanon", "delphi", "floron", "mafron", 
    "chemvikas", "nsk", "motherson", "nachi", "zilax", "denso", "mahle", "kcpl", 
    "doowon", "symbol", "tcci", "tata", "hongsen", "sanden", "subros", "mihama", "valeo"
  ];
  const marqueeItems = [...brands, ...brands, ...brands];

  return (
    <div className="bg-white/80 backdrop-blur-md py-6 sm:py-8 border-y border-[#0284C7]/15 overflow-hidden relative z-20 w-full flex">
      <div className="flex whitespace-nowrap animate-marquee items-center">
        {marqueeItems.map((brand, idx) => (
          <div 
            key={idx} 
            className="interactive inline-flex justify-center items-center p-3 sm:p-4 bg-white border border-[#0284C7]/15 rounded-xl sm:rounded-2xl mx-2 sm:mx-4 shadow-sm transition-all hover:scale-105 hover:border-[#0284C7] w-[120px] h-[60px] sm:w-[180px] sm:h-[90px] shrink-0"
          >
            <img 
              src={`/brands/${brand}.png`} 
              alt={brand} 
              className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity" 
              onError={(e) => { 
                e.currentTarget.style.display = 'none'; 
                e.currentTarget.parentElement!.innerText = brand.toUpperCase(); 
                e.currentTarget.parentElement!.classList.add('font-bold', 'text-slate-800', 'text-xs', 'sm:text-sm');
              }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}