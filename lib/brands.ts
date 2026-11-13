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
  {
    slug: "hanon",
    name: "Hanon",
    logo: "/brands/hanon.png",
    tagline:
      "Korean thermal systems specialist (Hanon Systems). OEM-grade compressors, condensers, evaporators, and HVAC modules for Hyundai, Kia, and global passenger vehicles.",
    origin: "Hanon Systems · South Korea",
  },
  {
    slug: "doowon",
    name: "Doowon",
    logo: "/brands/doowon.png",
    tagline:
      "Korean thermal systems manufacturer (Doowon). OEM-grade compressors, condensers, evaporators, radiators, and HVAC components for Hyundai, Kia, and global passenger vehicles.",
        origin: "Doowon · South Korea",
  },
  {
    slug: "banco",
    name: "Banco",
    logo: "/brands/banco.png",
    tagline:
      "Aluminum condensers and heat exchangers for passenger cars and commercial vehicles.",
    origin: "Banco · India",
  },
  {
    slug: "delphi",
    name: "Delphi",
    logo: "/brands/delphi.png",
    tagline:
      "Delphi Automotive thermal components. OE-quality compressors and air-conditioning parts for global vehicle platforms.",
    origin: "Delphi Technologies · USA",
  },
  {
    slug: "estra",
    name: "Estra",
    logo: "/brands/estra.png",
    tagline:
      "Automotive AC compressors and thermal management components for passenger and commercial vehicles.",
    origin: "Estra · India",
  },
  {
    slug: "hyundai",
    name: "Hyundai",
    logo: "/brands/hyundai.png",
    tagline:
      "Genuine Hyundai OEM parts. Factory-specified compressors, evaporators, heater cores, and HVAC components for Hyundai passenger vehicles.",
    origin: "Hyundai Motor Company · South Korea",
  },
  {
    slug: "motherson",
    name: "Motherson",
    logo: "/brands/motherson.png",
    tagline:
      "Motherson Sumi thermal systems. OE-supplier compressors, evaporators, heaters, radiators, and blower motors for Indian and global vehicle platforms.",
    origin: "Motherson Sumi · India",
  },
  {
    slug: "sanden",
    name: "Sanden",
    logo: "/brands/sanden.png",
    tagline:
      "Japanese AC compressor specialist (Sanden Corporation). Precision-engineered compressors, condensers, evaporators, and thermal components for global passenger and commercial vehicles.",
    origin: "Sanden Corporation · Japan",
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
