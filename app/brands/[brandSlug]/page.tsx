import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import { BRANDS, BRAND_BY_SLUG } from "@/lib/brands";
import BrandPartsExplorer from "@/components/BrandPartsExplorer";

export const dynamicParams = false;

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brandSlug: b.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ brandSlug: string }> }) {
  return params.then((p) => {
    const brand = BRAND_BY_SLUG[p.brandSlug];
    if (!brand) return { title: "Brand not found · EMX Motors" };
    return {
      title: `${brand.name} AC Parts · EMX Motors`,
      description: `${brand.name} car AC parts catalog. Genuine & aftermarket parts with wholesale pricing and PAN India delivery.`,
    };
  });
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ brandSlug: string }>;
}) {
  const { brandSlug } = await params;
  const brand = BRAND_BY_SLUG[brandSlug];
  if (!brand) notFound();

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* ───────── Brand Header ───────── */}
      <section className="pt-[140px] md:pt-[180px] pb-10 md:pb-16 px-4 md:px-6 max-w-7xl mx-auto relative z-10">
        <Link
          href="/#brands"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0284C7] transition-colors mb-8 interactive"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all brands
        </Link>

        <div className="glass-panel p-6 md:p-12 rounded-[24px] border-t-4 border-t-[#0284C7]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 items-center">
            {/* Logo */}
            <div className="lg:col-span-1">
              <div className="w-full h-40 md:h-48 bg-white/50 rounded-[16px] flex items-center justify-center p-6 border border-[#0284C7]/10">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-full max-w-full object-contain mix-blend-multiply"
                />
              </div>
            </div>

            {/* Title + tagline */}
            <div className="lg:col-span-2">
              <span className="inline-block text-[#0284C7] font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 px-3 py-1 bg-[#0284C7]/10 rounded-md">
                {brand.origin}
              </span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 font-[family-name:var(--font-jakarta)] tracking-tight mb-4">
                {brand.name}
              </h1>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
                {brand.tagline}
              </p>

              {/* Stats row — only show non-count stat (PAN India Delivery) */}
              <div className="flex flex-wrap gap-6 md:gap-10 pt-4 border-t border-[#0284C7]/15">
                <div className="text-center sm:text-left">
                  <h3 className="text-2xl md:text-3xl text-[#0284C7] font-extrabold font-[family-name:var(--font-jakarta)] flex items-center gap-2">
                    <Package className="w-6 h-6 md:w-7 md:h-7" />
                    PAN
                  </h3>
                  <p className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-widest">
                    India Delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── Parts Explorer (client) ───────── */}
      <section className="px-4 md:px-6 max-w-7xl mx-auto pb-20 md:pb-32 relative z-10 w-full">
        <BrandPartsExplorer brandName={brand.name} />
      </section>
    </main>
  );
}
