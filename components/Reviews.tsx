import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    { name: "Rahul Sharma", loc: "Kashmere Gate, Delhi", text: "EMX Motors has the best wholesale prices for AC compressors. Genuine parts and very fast delivery. Highly recommended for workshop owners!" },
    { name: "Amit Patel", loc: "New Delhi", text: "Got an original Sanden compressor for my Honda City at a very reasonable rate. Sandeep ji is very helpful and guides you to the right part." },
    { name: "Vikram Singh", loc: "Gurugram, NCR", text: "I run a fleet of cabs and always buy condensers and blower motors from here. Top quality aftermarket options available too. 5 stars." }
  ];

  return (
    <section id="reviews" className="py-12 md:py-20 px-4 md:px-6 max-w-7xl mx-auto relative z-10 w-full scroll-mt-24">
      <div className="mb-10 text-center">
        <span className="inline-block text-[#0284C7] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-2 px-3 py-1 bg-[#0284C7]/10 rounded-md">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((rev, i) => (
          <div key={i} className="glass-panel p-6 md:p-8 rounded-[20px] flex flex-col">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-sm md:text-base text-slate-600 mb-6 flex-grow italic">"{rev.text}"</p>
            <div>
              <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
              <p className="text-xs text-slate-500">{rev.loc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}