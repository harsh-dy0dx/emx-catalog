export default function PartnerCards() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 mb-20">
      <div className="mb-16 text-center md:text-left">
        <span className="inline-block text-[#0284C7] font-bold text-sm uppercase tracking-widest mb-4 px-3 py-1.5 bg-[#0284C7]/10 rounded-md">Work with us</span>
        <h2 className="text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)]">Two ways in</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-16 rounded-[24px] relative overflow-hidden text-white flex flex-col items-start justify-between transition-transform duration-400 hover:scale-[1.02] interactive bg-gradient-to-br from-[#0284C7] to-[#0369A1]">
          <div>
            <h3 className="text-4xl font-bold mb-5 font-[family-name:var(--font-jakarta)]">Become a dealer</h3>
            <p className="text-lg opacity-90 mb-10 max-w-[400px] leading-[1.6]">Get dealer pricing, priority stock and marketing support across 28+ brands, PAN-India.</p>
          </div>
          <button className="bg-white text-[#0284C7] px-8 py-3 rounded-full font-bold transition-all hover:bg-slate-50">Apply for dealership</button>
        </div>
        <div className="p-16 rounded-[24px] relative overflow-hidden text-white flex flex-col items-start justify-between transition-transform duration-400 hover:scale-[1.02] interactive bg-gradient-to-br from-[#EA580C] to-[#C2410C]">
          <div>
            <h3 className="text-4xl font-bold mb-5 font-[family-name:var(--font-jakarta)]">Bulk & fleet enquiry</h3>
            <p className="text-lg opacity-90 mb-10 max-w-[400px] leading-[1.6]">Running a fleet or workshop chain? Get volume pricing directly from our sales desk.</p>
          </div>
          <button className="bg-white text-[#EA580C] px-8 py-3 rounded-full font-bold transition-all hover:bg-slate-50">Request bulk quote</button>
        </div>
      </div>
    </section>
  );
}