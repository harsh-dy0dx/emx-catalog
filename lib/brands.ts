import { CATALOG_PARTS, type BrandName } from "./data";

export interface Brand {
  /** URL-safe slug used in /brands/[brandSlug] */
  slug: string;
  /** Display name */
  name: BrandName;
  /** Logo path under /public/brands/ */
  logo: string;
  /** Short marketing description shown on the brand page header */
  tagline: string;
  /** Origin / type — used as a small caption on the brand card */
  origin: string;
}

export const BRANDS: Brand[] = [
  {
    slug: "subros",
    name: "Subros",
    logo: "/brands/subros.png",
    tagline:
      "India's largest manufacturer of automotive air-conditioning systems. OEM supplier to Maruti Suzuki, Tata Motors, Mahindra, Honda, and more.",
    origin: "Founded 1985 · OEM Supplier",
  },
  {
    slug: "mahle-behr",
    name: "Mahle Behr",
    logo: "/brands/mahle.png",
    tagline:
      "German engineering from the MAHLE Group. Premium compressors, condensers, radiators, and thermal management systems for passenger and commercial vehicles.",
    origin: "MAHLE Group · Germany",
  },
];

/** Map slug → brand */
export const BRAND_BY_SLUG: Record<string, Brand> = Object.fromEntries(
  BRANDS.map((b) => [b.slug, b]),
);

/** Map brand name → brand */
export const BRAND_BY_NAME: Record<BrandName, Brand> = Object.fromEntries(
  BRANDS.map((b) => [b.name, b]),
) as Record<BrandName, Brand>;

/** Helper: count parts per brand */
export function getBrandPartCount(brandName: BrandName): number {
  return CATALOG_PARTS.filter((p) => p.brand === brandName).length;
}

/** Helper: list categories that exist for a brand */
export function getBrandCategories(brandName: BrandName): string[] {
  const set = new Set<string>();
  for (const p of CATALOG_PARTS) {
    if (p.brand === brandName) set.add(p.category);
  }
  return Array.from(set).sort();
}
